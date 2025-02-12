
function generateQR(){
    const qrcode = new QRCode("qrcode", {
        text: "https://google.com",
        width: 300,
        height: 300,
        colorDark : "#000",
        colorLight : "#f2f2f2",
        correctLevel : QRCode.CorrectLevel.H
    });
}

console.log("Hi")

window.onload = generateQR();

