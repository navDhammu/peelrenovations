import { showModal } from './galleryModal.js'

const imagesContainer = document.getElementById('images-container')

async function fetchImages() {
   const response = await fetch(
      'https://res.cloudinary.com/dxedcrvq3/image/list/all.json'
   )
   const { resources } = await response.json()
   const images = resources.map((resource, index) =>
      createDOMElement('img', {
         src: `https://res.cloudinary.com/dxedcrvq3/image/upload/f_auto/q_auto/${resource.public_id}`,
         class: 'img',
         'data-n': index + 1,
      })
   )

   imagesContainer.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') showModal(e.target.dataset.n, images)
   })

   imagesContainer.append(
      ...images.map((img) => {
         let button = document.createElement('button')
         button.appendChild(img.cloneNode())
         return button
      })
   )
}

function createDOMElement(tag, atributes) {
   const el = document.createElement(tag)
   if (typeof atributes === 'object') {
      for (let [attribute, value] of Object.entries(atributes)) {
         el.setAttribute(attribute, value)
      }
   }
   return el
}

// fetchImages()
