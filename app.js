
const galleryModal = document.querySelector('.gallery-modal');
const gallery = document.querySelector('#gallery');
const arrImages = document.querySelectorAll('.gallery-img');
// arrImages[0].style.zIndex = '1';
const firstInitial = arrImages[0]
const lastInital = gallery.lastElementChild;

const backArrow = document.querySelector('.gallery-modal__back-icon');
backArrow.style.visibility = 'hidden';
const nextArrow = document.querySelector('.gallery-modal__next-icon');

let imgCount = 1;


setImgCount();

function setImgCount(){
    document.querySelector('.count').textContent = `${imgCount}/${arrImages.length}`;
}

function imgCountIncrease(){
    if (imgCount < arrImages.length){
        imgCount++;
        setImgCount();
    }
}

function imgCountDecrease(){
    if (imgCount > 1){
        imgCount--;
        setImgCount();
    }
}

function imgCounter(direction){
    imgCount = direction === 'up' ? imgCount + 1 : imgCount - 1;
    document.querySelector('.count').textContent = `${imgCount}/${arrImages.length}`;
}

const timeout = function (){
    setTimeout(()=>{
        const checkboxes = Array.from(document.querySelectorAll('.check-box'));
        const hiddenCheckboxes = checkboxes.map(label=> label.parentElement.querySelector('input'));
    
        const notChecked = hiddenCheckboxes.filter((box) => !box.checked);
        console.log(notChecked)
        if (notChecked.length > 0){
            document.querySelectorAll('.container__heading-checkbox')[0].style.transform = 'scale(1)';
            notChecked[0].click();
            timeout();
        } else {
            document.querySelector('.btn-front').style.transform = 'scale(1)';
         
        }
    });
}

// window.addEventListener('load', (event) => {
//     document.querySelector('.container').classList.add('transition');
//         timeout();
  
// });


  

// document.addEventListener('DOMContentLoaded', (event) => {
//     log.textContent = log.textContent + `DOMContentLoaded\n`;
// });



document.addEventListener('click', galleryClickHandle);
   

        
        

document.querySelector('.gallery-modal__close-icon')
        .addEventListener('click', ()=>{
            galleryModal.style.display='none';
        });


document.querySelector('.gallery-modal__next-icon')
        .addEventListener('click', () => {
            moveGallery('next');
        });
           

document.querySelector('.gallery-modal__back-icon')
        .addEventListener('click', () => moveGallery('prev'));






// function moveGallery(direction){
//     const last = gallery.lastElementChild;
//     const first = gallery.firstElementChild;
//     let condition, position, ele;

//     if (direction === 'next') {
//         imgCountIncrease();
//         condition = firstInitial !== last;
//         position = 'afterbegin';
//         ele = last;
//     } else if (direction === 'prev') {
//         imgCountDecrease();
//         condition = lastInital !== last;
//         position = 'beforeend';
//         ele = first;
//     }

//     if (condition){
//         gallery.insertAdjacentElement(position, ele);
//     } 
//     if (imgCount === arrImages.length) {
//         nextArrow.style.visibility = 'hidden';
//     } else if (imgCount === 1) {
//         backArrow.style.visibility = 'hidden';
//     } else if (nextArrow.style.visibility === 'hidden'){
//             nextArrow.style.visibility = 'visible';
//     } else if (backArrow.style.visibility === 'hidden'){
//             backArrow.style.visibility = 'visible';
//         }
    
// }

function galleryClickHandle(event){
    if(event.target.className === 'btn-gallery'){
        galleryModal.style.display='block';
        galleryPan();
    }
}


function galleryPan(){
    let currentImg = 0;
    let x = 0;
    
    const mc = new Hammer.Manager(gallery);
    const pan = new Hammer.Pan({threshold: 0});
    const press = new Hammer.Press();
    mc.add([press, pan]);

    mc.on('panleft panright panend', function(e){
        const addTranisiton = () => gallery.classList.add('left');
        const removeTranisiton = () => gallery.classList.remove('left');
        addTranisiton();
        if (e.type === 'panleft' || e.type === 'panright'){
            removeTranisiton();
            gallery.style.left = `${x + e.deltaX}px`;
        } else if (e.type === 'panend'){
            addTranisiton();
            let goingLeft = e.deltaX < 0;
            let isFirst = currentImg === 0, isLast = currentImg === arrImages.length - 1;
            if (isFirst && !goingLeft){
                gallery.style.left = '0px';
            } else if (isLast && goingLeft){
                gallery.style.left = `-${(arrImages.length - 1) * 100}%`;
            } else {
                currentImg = e.deltaX < 0 ? currentImg + 1 : currentImg - 1;
                x = - (gallery.clientWidth * currentImg);
                gallery.style.left = `${x}px`;
            }
        }
    });
}




        

