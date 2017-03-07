const findImages = () => {
    const images = document.getElementsByTagName('img')
    let imageUrls = []
    for(let image of images) {
        image.src && image.src.includes('itemgallery') ? imageUrls.push(image.src) : ''
    }

    return imageUrls
}

const addPrice = () => {
    const priceFigure = document.createElement('figure')
    const priceImage = document.createElement('p')
    priceImage.innerHTML = document.querySelector('.property__price').innerHTML
    priceFigure.classList.add('hemterest-price')
    priceFigure.appendChild(priceImage)
    return priceFigure
}

const createGrid = (urls) => {

    const wrapper = document.createElement('div')
    wrapper.classList.add('hemterest-wrapper')
    let figureSize = {}

    for(let url of urls) {
        const itemFigure = document.createElement('figure')
        const itemImage = document.createElement('img')
        itemImage.src = url
        itemFigure.appendChild(itemImage)
        
        wrapper.appendChild(itemFigure)
    }

    wrapper.appendChild(addPrice())
    document.querySelector('#page-content').prepend(wrapper)
 
}

createGrid(findImages())