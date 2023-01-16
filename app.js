// const imgContainer = document.querySelector('.images-container')
// const galleryModal = document.querySelector('.modal')
// // const options = document.querySelector('.options')

// const handleOutsideClick = (e) =>
//    !e.path.includes(galleryModal.querySelector('img')) && toggleGalleryModal()

// const handleESC = (e) => {
//    if (e.key === 'Escape') {
//       toggleGalleryModal()
//    }
// }

// galleryModal.addEventListener('click', handleOutsideClick)

// function toggleGalleryModal(imgElement) {
//    const isHidden = galleryModal.classList.contains('hidden')
//    if (isHidden) {
//       galleryModal.classList.remove('hidden')
//       galleryModal.appendChild(imgElement)
//       window.addEventListener('keydown', handleESC)
//    } else {
//       window.removeEventListener('keydown', handleESC)
//       galleryModal.classList.add('hidden')
//       galleryModal.querySelector('img')?.remove()
//    }
// }

// function createImgEl(src, className) {
//    let img = document.createElement('img')
//    img.setAttribute('src', src)
//    if (className) img.classList.add(className)
//    return img
// }

// function setImage(src) {
//    let button = document.createElement('button')
//    const imgSrc = `https://res.cloudinary.com/dxedcrvq3/image/upload/f_auto/q_auto/${src}`
//    let img = createImgEl(imgSrc, 'img')

//    const handleClick = (e) => {
//       toggleGalleryModal(createImgEl(imgSrc, 'img-zoom'))
//    }
//    button.addEventListener('click', handleClick)
//    button.appendChild(img)
//    return button
// }

// (async function fetchImages() {
//    const response = await fetch(
//       'https://res.cloudinary.com/dxedcrvq3/image/list/all.json'
//    )
//    const { resources } = await response.json()
//    const images = resources.map((resource) => setImage(resource.public_id))
//    imgContainer.append(...images)
// })()
