const imgs = document.querySelectorAll('.box');
const container = document.querySelector('#container');
const body = document.querySelector('body');

function resizeImgs() {
    imgs.forEach(imgs => {
        imgs.classList.remove('active')
    });    
}

imgs.forEach(imgs => {
    imgs.addEventListener('click', () =>{
        resizeImgs()
        imgs.classList.add('active')
    });
});

