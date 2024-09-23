let inputEle = document.querySelector('input');
let imgEle = document.querySelector('img');
let buttonEle = document.querySelector('button');


let createQrImg = () => {
    let imgNewSrc = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputEle.value}`
    imgEle.src=imgNewSrc
}
buttonEle.addEventListener('click', () => {
    createQrImg()
    inputEle.value = "";
})

