const findImages = () => {
  const carouselImages = document.querySelectorAll(
    ".gallery-carousel__image-touchable img"
  );

  let imageUrls = [];
  for (let image of carouselImages) {
    imageUrls.push(image.src);
  }

  return imageUrls;
};

setTimeout(() => {
  createGrid(findImages());
}, 1500);

const createGrid = (urls) => {

  const wrapper = document.createElement("div");
  wrapper.classList.add(`hemterest-wrapper`);
  wrapper.classList.add(`hemterest-wrapper-${urls.length}`);
  let figureSize = {};

  for (let url of urls) {
    const itemFigure = document.createElement("figure");
    const itemImage = document.createElement("img");
    itemImage.src = url;
    itemFigure.appendChild(itemImage);

    wrapper.appendChild(itemFigure);
  }

  document.querySelector(".listing-container").prepend(wrapper);
};
