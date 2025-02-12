
function generateQR(){
    const qrcode = new QRCode("qrcode", {
        text: "https://google.com",
        width: 250,
        height: 250,
        colorDark : "#000",
        colorLight : "#f2f2f2",
        correctLevel : QRCode.CorrectLevel.H
    });
}

console.log("Hi")

window.onload = generateQR(); //se asigura ca pagina a fost complet incarcata ca sa execute functia.

/*
    Cerinte:
     - creaza interfata asemanatoare cu https://www.the-qrcode-generator.com/
     - utilizatorul poate customiza URL, width, height, colors
     - utilizatorul poate genera si sterge QR-ul
*/