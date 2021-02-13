const galleryModal = document.querySelector('.gallery-modal');
const gallery = document.querySelector('#gallery');
const arrImages = document.querySelectorAll('.gallery-img');
// arrImages[0].style.zIndex = '1';
const firstInitial = gallery.firstElementChild;
const lastInital = gallery.lastElementChild;



document.querySelector('#btn-gallery')
        .addEventListener('click', ()=>{
            galleryModal.style.display='block';
        })

document.querySelector('.gallery-modal__close-icon')
        .addEventListener('click', ()=>{
            galleryModal.style.display='none';
        });


document.querySelector('.gallery-modal__next-icon')
        .addEventListener('click', () => moveGallery('next'));

document.querySelector('.gallery-modal__back-icon')
        .addEventListener('click', () => moveGallery('prev'));


                    

function moveGallery(direction){
    const last = gallery.lastElementChild;
    const first = gallery.firstElementChild;
    let condition, position, ele;

    if (direction === 'next') {
        condition = firstInitial !== last;
        position = 'afterbegin';
        ele = last;
    } else if (direction === 'prev') {
        console.log('left')
        condition = lastInital !== last;
        position = 'beforeend';
        ele = first;
    }

    if (condition){
        gallery.insertAdjacentElement(position, ele);
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

        

