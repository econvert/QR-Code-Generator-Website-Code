var qrCodeGenerated = false;

function generateQRCode() {
    if (!qrCodeGenerated) {
        var inputText = document.getElementById("inputText").value;
        if (inputText.trim() !== "") {
            var qrcode = new QRCode(document.getElementById("qrcode"), {
                text: inputText,
                width: 128,
                height: 128
            });
            qrCodeGenerated = true;
        } else {
            alert("Please enter text before generating the QR code.");
        }
    } else {
        alert("QR code has already been generated. Refresh the page to generate a new one.");
    }
}
