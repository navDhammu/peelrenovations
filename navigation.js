const colMain = 'rgb(38,34,98)';
const dull = '#607D8B';
const indicator = document.querySelector('.indicator');

document
    .querySelectorAll('.tab')
    .forEach(tab => {
        tab.addEventListener('click', ()=>{
            let element = document.querySelector(tab.dataset.section);
            let rect = element.getBoundingClientRect();
            scrollBy(0, rect.y);
    });
});

const sectionObserver = new IntersectionObserver(entries => {
    for (let entry of entries){
        let tab = document.querySelector(`[data-section="#${entry.target.id}"]`);
        let tabRect = tab.getBoundingClientRect();
        let adjustment = (tabRect.width - indicator.clientWidth) / 2;
        if (entry.isIntersecting){
            tab.style.color = colMain;
            indicator.style.transform = `translateX(${tabRect.x + adjustment}px`;
        } else if (!entry.isIntersecting){
            tab.style.color = dull;
        }
    }
}, {
    rootMargin: '-50% 0px -50% 0px'
});

document
    .querySelectorAll('.tab')
    .forEach(tab => {
        sectionObserver.observe(document.querySelector(tab.dataset.section));
    });
// var waveBtn = (function () {
//     'use strict';
//     var btn = document.querySelectorAll('.wave'),
//         tab = document.querySelector('.tab-bar'),
//         indicator = document.querySelector('.indicator'),
//         indi = 0;
//     indicator.style.marginLeft = indi + 'px';
  
//     for(var i = 0; i < btn.length; i++) {
//       btn[i].onmousedown = function (e) {
//         var newRound = document.createElement('div'),x,y;
  
//         newRound.className = 'cercle';
//         this.appendChild(newRound);
  
//         x = e.pageX - this.offsetLeft;
//         y = e.pageY - this.offsetTop;
  
//         newRound.style.left = x + "px";
//         newRound.style.top = y + "px";
//         newRound.className += " anim";
  
//         indicator.style.marginLeft = indi + (this.dataset.num-1) * 150 + 'px';
  
//         setTimeout(function() {
//           newRound.remove();
//         }, 1200);
//       };
//     }
//   }());