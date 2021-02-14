
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
        if (notChecked.length > 0){
            notChecked[0].click();
            console.log('clicked a checkbox')
            timeout();
        } 
    }, 700);
}

window.addEventListener('load', (event) => {
    document.querySelector('.container').classList.add('transition');

        timeout();
  
});


  

// document.addEventListener('DOMContentLoaded', (event) => {
//     log.textContent = log.textContent + `DOMContentLoaded\n`;
// });



document.addEventListener('click', (e)=>{
    if(e.target.className === 'btn-gallery'){
        console.log('click')
        galleryModal.style.display='block';
    }
});
        
        

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






function moveGallery(direction){
    const last = gallery.lastElementChild;
    const first = gallery.firstElementChild;
    let condition, position, ele;

    if (direction === 'next') {
        imgCountIncrease();
        condition = firstInitial !== last;
        position = 'afterbegin';
        ele = last;
    } else if (direction === 'prev') {
        imgCountDecrease();
        condition = lastInital !== last;
        position = 'beforeend';
        ele = first;
    }

    if (condition){
        gallery.insertAdjacentElement(position, ele);
    } 
    if (imgCount === arrImages.length) {
        nextArrow.style.visibility = 'hidden';
    } else if (imgCount === 1) {
        backArrow.style.visibility = 'hidden';
    } else if (nextArrow.style.visibility === 'hidden'){
            nextArrow.style.visibility = 'visible';
    } else if (backArrow.style.visibility === 'hidden'){
            backArrow.style.visibility = 'visible';
        }
    
}



// document.querySelector('.gallery-modal__nextprev-icons')
//         .addEventListener('click', (e)=>{
//             const backIcon = document.querySelector('.gallery-modal__back-icon');
//             const nextIcon = document.querySelector('.gallery-modal__next-icon');
//             //     const zIndexes = arrImages.map(img=>{
//             //         if (img.style.zIndex !== ''){
//             //             return parseInt(img.style.zIndex);
//             //         }
//             //         return 0;
//             //     });
//             //     const currentImg = zIndexes.reduce((acc, curr) => Math.max(acc, curr));
//                 if (e.target === nextIcon){

//                     // arrImages.splice(0, 0, lastImg);
//                 //     const nextImgIndex = zIndexes.indexOf(currentImg) + 1;
//                 //     if (arrImages.length - 1 >= nextImgIndex){
//                 //         arrImages[nextImgIndex].style.zIndex = currentImg + 1;
//                 //     }
//                 // } else if (e.target === backIcon){
//                 //     const prevImgIndex = zIndexes.indexOf(currentImg) - 1;
//                 //     if (prevImgIndex >= 0){
//                 //         arrImages[prevImgIndex].style.zIndex = currentImg + 1;
//                 //     }
//                 // }
//             }
//         });

        

