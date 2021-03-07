const images = document.querySelectorAll('[data-src]');
const navBar = document.querySelector('.navigation');
const banner = document.querySelector('.banner');
const navLinks = document.querySelector('.navigation__links');



const io = new IntersectionObserver(function (entries, x){
    for (let entry of entries){
        if (entry.isIntersecting){
          entry.target.src = entry.target.dataset.src;
          entry.target.style.filter = 'none';
          x.unobserve(entry.target)
      }
    }
    
}, {
    rootMargin: '0px 0px -80% 0px'
});



images.forEach(image => io.observe(image));
// document
//     .querySelectorAll('[data-query]')
//     .forEach(ele => {
//         sectionObserver.observe(document.querySelector(ele.dataset.query))
//     });


// document
//     .querySelector('.navigation__bar-icon-menu')
//     .addEventListener('click', ()=>{
//         const isExpanded = navLinks.clientHeight > 0;
//         if (!isExpanded){
//             navLinks.style.height = `${navLinks.scrollHeight}px`;
//         } else {
//             navLinks.style.height = '0';
//         }
//     });




document.querySelectorAll('[data-src]').forEach(img => {
    img.addEventListener('load', ()=>{
        img.style.transform = 'translate(0)';
        img.style.opacity = '1';
});
});

document.querySelector('.banner').addEventListener('animationstart', function (){
    const arrow = document.querySelector('.banner__down-arrow');

   function transitionOne(){
        for (let x of ['1','2']){
            document.querySelector(`.banner__wrapper-heading-${x}`).style.transform = 'translateX(0)';
        }
   }

   function transitionTwo(){
        document.querySelector('.banner__see-our-work').style.transform = 'translate(0)';
   }

    setTimeout(transitionOne, 1000)
    setTimeout(transitionTwo, 1500)
   

});


   




// function galleryPan(){
//     let currentImg = 0;
//     let x = 0;
    
//     const mc = new Hammer.Manager(gallery);
//     const pan = new Hammer.Pan({threshold: 0});
//     const press = new Hammer.Press();
//     mc.add([press, pan]);

//     mc.on('panleft panright panend', function(e){
//         const addTranisiton = () => gallery.classList.add('left');
//         const removeTranisiton = () => gallery.classList.remove('left');
//         addTranisiton();
//         if (e.type === 'panleft' || e.type === 'panright'){
//             removeTranisiton();
//             gallery.style.left = `${x + e.deltaX}px`;
//         } else if (e.type === 'panend'){
//             addTranisiton();
//             let goingLeft = e.deltaX < 0;
//             let isFirst = currentImg === 0, isLast = currentImg === arrImages.length - 1;
//             if (isFirst && !goingLeft){
//                 gallery.style.left = '0px';
//             } else if (isLast && goingLeft){
//                 gallery.style.left = `-${(arrImages.length - 1) * 100}%`;
//             } else {
//                 currentImg = e.deltaX < 0 ? currentImg + 1 : currentImg - 1;
//                 x = - (gallery.clientWidth * currentImg);
//                 gallery.style.left = `${x}px`;
//             }
//         }
//     });
// }



        

