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

# /docs
if ! [ -d "${ABOVE_ROOT}"'/libscript' ]; then
   git clone --depth=1 --single-branch https://github.com/SamuelMarks/libscript "${ABOVE_ROOT}"'/libscript'
fi
cd -- "${ABOVE_ROOT}"'/libscript'
export LIBSCRIPT_DOCS_PREFIX="${DIST}"
export LIBSCRIPT_DOCS_DIR="${DIST}"'/docs/latest'
export LIBSCRIPT_ASSETS_DIR="${DIST}"'/assets'
./generate_html_docs.sh

# /verman
if ! [ -d "${ABOVE_ROOT}"'/verman-www' ]; then
   git clone --depth=1 --single-branch https://github.com/verman-io/verman-www "${ABOVE_ROOT}"'/verman-www'
fi
cd -- "${ABOVE_ROOT}"'/verman-www'
ng build --configuration production --base-href '/verman' --deploy-url '/verman/' --verbose
cp -- "${ABOVE_ROOT}"'/verman-tui-www/README.md' "${DIST}"'/README.md'
ls -- "${ABOVE_ROOT}"'/verman-www/dist/verman-www/browser'
[ -d "${DIST}"'/verman' ] || mkdir -- "${DIST}"'/verman'
cp -r -- "${ABOVE_ROOT}"'/verman-www/dist/verman-www/browser/' "${DIST}"'/verman'
rsync -a -r -- "${ABOVE_ROOT}"'/verman-www/dist/verman-www/browser/assets/' "${DIST}"'/assets'
cp -- "${DIST}"'/verman/'*.css "${DIST}"

# /
cd -- "${ABOVE_ROOT}"'/verman-tui-www'
npm ci

cp -r -- "${ABOVE_ROOT}"'/verman-tui-www/src/'* "${DIST}"
for d in "${DIST}"'/assets' "${ABOVE_ROOT}"'/verman-tui-www/assets'; do
  rsync -a -r -- "${ABOVE_ROOT}"'/verman-tui-www/node_modules/tuicss/dist/'* "${d}"
  cp -- "${ABOVE_ROOT}"'/verman-tui-www/node_modules/@widgetjs/tree/dist/tree.min.js'* "${d}"
  cp -- "${ABOVE_ROOT}"'/verman-tui-www/src/'*.css "${d}"
  cp -- "${ABOVE_ROOT}"'/verman-tui-www/src/'*.js "${d}"
  cp -- "${ABOVE_ROOT}"'/verman-tui-www/src/'*.png "${d}"
done

# serve
python3 -m http.server "${PORT:-8005}" --directory "${DIST}"
cd -- "${ROOT}"
