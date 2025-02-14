
function generateQR(){
    const qrcode = new QRCode("qrcode", {
        text: "https://emag.com",
        width: 100,
        height: 100,
        colorDark : "#000",
        colorLight : "#f2f2f2",
        correctLevel : QRCode.CorrectLevel.H
    });
}



console.log("Hi")

window.onload = generateQR(); //se asigura ca pagina a fost complet incarcata ca sa execute functia.
