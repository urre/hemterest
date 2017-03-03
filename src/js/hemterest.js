const findImages = () => {
    const imgs = document.getElementsByTagName('img')
    let imgSrcs = []
    for(let i in imgs) {
        imgs[i].src && imgs[i].src.includes('itemgallery') ? imgSrcs.push(imgs[i].src) : ''
    }

    return imgSrcs
}

const addPrice = () => {
    const priceFigure = document.createElement("figure")
    const priceImage = document.createElement("p")
    priceImage.innerHTML = document.querySelector('.property__price').innerHTML
    priceFigure.className = "hemterest-price"
    priceFigure.appendChild(priceImage)
    return priceFigure
}

const addMarkup = (urls) => {

    let wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")
    let figureSize = {}

    for(let i in urls) {
        const itemFigure = document.createElement("figure")
        const itemImage = document.createElement("img")
        itemImage.src = urls[i]
        itemFigure.appendChild(itemImage)
        
        wrapper.appendChild(itemFigure)
    }

    wrapper.appendChild(addPrice())
    document.querySelector('#page-content').prepend(wrapper)
 
}

addMarkup(findImages())