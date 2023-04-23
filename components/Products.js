export const Products = (product) => {
    const container = document.createElement('div');
    container.className = 'item__container';

    const image = document.createElement('img');
    image.setAttribute('src', product.image);
    image.className = 'item__image';

    const price = document.createElement('span');
    price.innerHTML = '$'+product.price;
    price.className = 'item__price';

    const description = document.createElement('span');
    description.innerHTML = product.description;
    description.className = 'item__description';

    const title = document.createElement('span');
    title.innerHTML = product.title;
    title.className = 'item__title';

    const rating = document.createElement('span');
    rating.innerHTML = 'Rating '+product.rating.rate;
    rating.className = 'item__rating';

    container.append(image, title, description, price, rating);
    return container;   
};
