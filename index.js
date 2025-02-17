
//---constants---//
const qrCodeHTML = document.getElementById("qrcode");  //create connection with the space where we generate qr code
const createQr = document.getElementById("create-qr"); //link implementation with 'create qr Code' button
const deleteQr = document.getElementById("delete-qr"); //link implementation with 'delete qr Code' button
const url = document.getElementById("url-input");  //link constant to url input node
const width = document.getElementById("width-input") //link constant to width input node
const height = document.getElementById("height-input") //link constant to height input node
const darkColor = document.getElementById("dark-input") // link constant to darker color input node
const lightColor = document.getElementById("light-input") //link constant to lighter color node


//---event listeners---//
createQr.addEventListener("click", generateQR) //triggers an action when 'create qr code' button is pressed
deleteQr.addEventListener("click", clearQr);   //triggers an action when 'delete qr code' button is pressed

//generate QR code. When the button is pressed , function is called
function generateQR(){     //(the order is key to this logic) //1.function called
    clearQr();                  //2.initial qr code is deleted
    new QRCode(qrCodeHTML, {    //3.new one is created
        text: url.value,        //retrieve data inserted in the url input
        width: width.value,     //retrieve data inserted in the width input 
        height: height.value,   //retrieve data inserted in the height input
        colorDark : darkColor.value, //retrieve the color code from darker color input
        colorLight : lightColor.value,  //retrieve the color code from lighter color input
        correctLevel : QRCode.CorrectLevel.H
    });
}

function clearQr(){         //when  the red button is triggered, function is called and empties the child node of "qrcode"
    qrCodeHTML.innerHTML = '';
    // qrCode.clear()
};
    








window.onload = generateQR(); //se asigura ca pagina a fost complet incarcata ca sa execute functia.
