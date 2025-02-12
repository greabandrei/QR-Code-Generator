function generateQR(){
    const qrcode = new QRCode("qrcode", {
        text: "https://emag.com",
        width: 250,
        height: 250,
        colorDark : "#000",
        colorLight : "#f2f2f2",
        correctLevel : QRCode.CorrectLevel.H
    });
}



// div#qrcode{
//     /* border-left-color: white;
//     border-left-style: solid;
//     box-sizing: border-box;
//     display: block;
//     font-size: 16px;
//     font-style: normal;
//     font-family: 'Times New Roman', Times, serif;
//     font-weight: 400;
//     height: 390px;
//     padding-bottom: 24px;
//     padding-left: 70px;
//     padding-right: 70px;
//     padding-top: 100px;
//     text-size-adjust: 100%;
//     position: relative;
//     background-color: #f3f8f4;
//     margin-top: 50px; */
// }



// div#details{
//     /* box-sizing: border-box;
//     color: black;
//     cursor: default;
//     font-size: 16px;
//     font-weight: 400;
//     height: 390px;
//     line-height: 24px;
//     position: relative;
//     width: 900px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     background-color: #f3f8f4;
//     margin-top: 200px; */
// }