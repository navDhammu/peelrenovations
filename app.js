import { showGalleryModal } from './galleryModal.js'

const imagesContainer = document.getElementById('images-container')

async function fetchImages() {
   const response = await fetch(
      'https://res.cloudinary.com/dxedcrvq3/image/list/all.json'
   )
   const { resources } = await response.json()
   const images = resources.map((resource) => {
      let button = document.createElement('button')
      let img = document.createElement('img')
      img.setAttribute(
         'src',
         `https://res.cloudinary.com/dxedcrvq3/image/upload/f_auto/q_auto/${resource.public_id}`
      )
      img.setAttribute('class', 'img')
      button.appendChild(img)
      return button
   })

   imagesContainer.append(...images)
}

fetchImages()
