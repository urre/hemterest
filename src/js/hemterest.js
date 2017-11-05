const findImages = () => {
	const images = document.getElementsByTagName('img')
	let imageUrls = []
	for (let image of images) {
		image.src && image.src.includes('itemgallery')
			? imageUrls.push(image.src)
			: ''
	}

	return imageUrls
}

const addPrice = () => {
	const lastImage = document.querySelector('.hemterest-wrapper > figure')
		.parentElement.firstChild
	const lastImageClone = lastImage.cloneNode(true)
	document.querySelector('.hemterest-wrapper').appendChild(lastImageClone)

	const priceTag = document.createElement('div')
	priceTag.innerHTML = document.querySelector('.property__price').innerHTML
	priceTag.classList.add('hemterest-price')

	lastImageClone.appendChild(priceTag)
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
