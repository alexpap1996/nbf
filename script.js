console.log('elle sks')
const images = document.querySelectorAll('.grid-image')
const modal = document.querySelector('#modal')
const captionText = document.querySelector('#caption')
const modalImg = document.querySelector('#img01')
images.forEach(img => {
  img.addEventListener('click', (i) => {
    modal.style.display = 'block'
    modalImg.src = i.target.src 
    captionText.innerHTML = i.target.dataset.caption
  }) 
})

modal.addEventListener('click', () => {
  modal.style.display = 'none'
})