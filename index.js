//........DOM ELments........
const createQrBtn = document.getElementById("btnCreate")
const clearQrBtn = document.getElementById("btnClear")


//.........Event listener......

createQrBtn.addEventListener("click", generateQR)


function generateQR(){
    const qrcode = new QRCode("qrcode", {
        text: "https://emag.com",
        width: 150,
        height: 150,
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