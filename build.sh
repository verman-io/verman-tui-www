#!/bin/sh

#!/bin/sh

# shellcheck disable=SC2236
if [ ! -z "${BASH_VERSION+x}" ]; then
  # shellcheck disable=SC3028 disable=SC3054
  this_file="${BASH_SOURCE[0]}"
  # shellcheck disable=SC3040
  set -o pipefail
elif [ ! -z "${ZSH_VERSION+x}" ]; then
  # shellcheck disable=SC2296
  this_file="${(%):-%x}"
  # shellcheck disable=SC3040
  set -o pipefail
else
  this_file="${0}"
fi
ROOT="$( cd "$( dirname -- "${this_file}" )" && pwd )"
ABOVE_ROOT="${ROOT%/*}"
export GITHUB_WORKSPACE="${ABOVE_ROOT}"
export ROOT
export ABOVE_ROOT
set -eu
set +f

export DIST="${ROOT}"'/dist'
rm -rf -- "${DIST}"
mkdir -p -- "${DIST}"
cd -- "${DIST}"

if ! [ -d "${ABOVE_ROOT}"'/libscript' ]; then
   git clone --depth=1 --single-branch https://github.com/SamuelMarks/libscript "${ABOVE_ROOT}"'/libscript'
fi
cd -- "${ABOVE_ROOT}"'/libscript'
export LIBSCRIPT_DOCS_DIR='./docs/latest'
export LIBSCRIPT_ASSETS_DIR='/assets'
./generate_html_docs.sh

if ! [ -d "${ABOVE_ROOT}"'/verman-www' ]; then
   git clone --depth=1 --single-branch https://github.com/verman-io/verman-www
fi
cd -- "${ABOVE_ROOT}"'/verman-www'
ng build --configuration production --base-href '/verman' --verbose
cp -- "${ABOVE_ROOT}"'/verman-tui-www/README.md' "${ROOT}"'/dist/README.md'
install -d -- "${ABOVE_ROOT}"'/verman-www/dist/verman-www/browser' "${ROOT}"'/dist/verman'

cd -- "${ABOVE_ROOT}"'/verman-tui-www'
npm ci
cp -r -- "${ABOVE_ROOT}"'/libscript/docs' "${DIST}"

cp -r -- "$GITHUB_WORKSPACE"'/verman-tui-www/src/'* "$DIST"
mkdir -- "$DIST"'/assets'
cp -r -- "$GITHUB_WORKSPACE"'/verman-tui-www/node_modules/tuicss/dist/'* "$DIST"'/assets'
cp -- "$GITHUB_WORKSPACE"'/verman-tui-www/src/'*.css "$DIST"'/assets'

python3 -m http.server "${PORT:-8005}" --directory "$DIST"
cd -- "${ROOT}"
