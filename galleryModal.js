export function showModal(selectedImageNumber, images) {
   let currentImageIndex = selectedImageNumber - 1

   images.forEach(
      (image, index) =>
         (image.style.opacity = index === currentImageIndex ? 1 : 0)
   )

   document.body.insertAdjacentHTML(
      'beforeend',
      `<div class="gallery-modal">
            <div class="gallery-modal__header">
				<span class="gallery-modal__header-counter"></span>
				<button class="gallery-modal__header-x">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M18 6l-12 12"></path>
						<path d="M6 6l12 12"></path>
					</svg>
				</button>
			</div>
                <div class="gallery-modal__carousel">
					<button class="gallery-modal__carousel-next">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M5 12l14 0"></path>
							<path d="M15 16l4 -4"></path>
							<path d="M15 8l4 4"></path>
						</svg>
					</button>
					<button class="gallery-modal__carousel-prev">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M5 12l14 0"></path>
							<path d="M5 12l4 4"></path>
							<path d="M5 12l4 -4"></path>
						</svg>
					</button>
                </div>
        </div>
        `
   )

   //DOM elements
   const modal = document.querySelector('.gallery-modal')
   const carousel = modal.querySelector('.gallery-modal__carousel')
   const closeBtn = modal.querySelector('.gallery-modal__header-x')
   const counter = modal.querySelector('.gallery-modal__header-counter')
   const nextBtn = carousel.querySelector('.gallery-modal__carousel-next')
   const prevBtn = carousel.querySelector('.gallery-modal__carousel-prev')

   const setCounter = () =>
      (counter.textContent = `${currentImageIndex + 1} / ${images.length}`)

   const changeImage = (newImageIndex) => {
      if (newImageIndex >= 0 && newImageIndex <= images.length - 1) {
         images[currentImageIndex].style.opacity = 0
         images[newImageIndex].style.opacity = 1
         currentImageIndex = newImageIndex
         setCounter()
      }
   }

   //event listeners
   closeBtn.addEventListener('click', function () {
      this.closest('.gallery-modal').remove()
      console.log('sfjsnkjnsdkfjgn')
   })

   nextBtn.addEventListener('click', () => changeImage(currentImageIndex + 1))
   prevBtn.addEventListener('click', () => changeImage(currentImageIndex - 1))

   //render in DOM
   carousel.append(...images)
   setCounter()
}
