const copyURI= (evt) => {
    evt.preventDefault();
    navigator.clipboard.writeText("https://github.com/SamuelMarks/libscript").then(() =>
            Toastify({
                text: "Copied GitHub link to clipboard",
                className: "info",
                offset: {
                    y: 12
                },
                style: {
                    background: "#0000a8",
                }
            }).showToast(),
        () => console.error('clipboard write failed')
    );
}
