const images = document.querySelectorAll('[data-src]');

const io = new IntersectionObserver(function (entries, x){
    for (let entry of entries){
      if (entry.isIntersecting){
          entry.target.src = entry.target.dataset.src;


          x.unobserve(entry.target)
      }
    }
}, {
    threshold: [0.25]
}
);

images.forEach(image => io.observe(image));

document.querySelectorAll('[data-src]').forEach(img => {
    img.addEventListener('load', ()=>{
        img.style.transform = 'translate(0)';
        img.style.opacity = '1';
});
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



        

