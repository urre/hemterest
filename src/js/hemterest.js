const findImages = () => {
	const carouselImages = document.querySelector('[data-images]')

	const images = JSON.parse(carouselImages.dataset.images)
	let imageUrls = []
	for (let image of images) {
		imageUrls.push(image.url)
	}

	return imageUrls
}

const addPrice = () => {
	const lastImage = document.querySelector('.hemterest-wrapper > figure')
		.parentElement.firstChild
	const firstImage = document.querySelector('.hemterest-wrapper > figure')
		.parentElement.firstChild
	const lastImageClone = lastImage.cloneNode(true)
	document.querySelector('.hemterest-wrapper').appendChild(lastImageClone)

	const priceTag = document.createElement('a')
	priceTag.innerHTML = document.querySelector('.property__price').innerHTML
	priceTag.classList.add('hemterest-button')
	priceTag.classList.add('hemterest-price')
	priceTag.href = '#item-info'

	document.querySelector('.hemterest-wrapper').parentElement.prepend(priceTag)
}

const cloneRibbon = () => {
	if (document.querySelector('.ribbon--ongoing-bidding')) {
		const ribbon = document.querySelector('.ribbon--ongoing-bidding')
		const ribbonClone = ribbon.cloneNode(true)
		document.querySelector('.hemterest-price').appendChild(ribbonClone)
	}
}

const createGrid = urls => {
	const wrapper = document.createElement('div')
	wrapper.classList.add('hemterest-wrapper')
	let figureSize = {}

	for (let url of urls) {
		const itemFigure = document.createElement('figure')
		const itemImage = document.createElement('img')
		itemImage.src = url
		itemFigure.appendChild(itemImage)

		wrapper.appendChild(itemFigure)
	}

	document.querySelector('.page-content').prepend(wrapper)
}

if (document.querySelector('.property__container')) {
	createGrid(findImages())
	cloneRibbon()
	addPrice()
}
