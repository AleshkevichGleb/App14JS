export const Products = (product) => {
    const container = document.createElement('div');

    const image = document.createElement('img');
    image.setAttribute('src', product.image);

    const price = document.createElement('span');
    price.innerHTML = product.price;

    const description = document.createElement('span');
    description.innerHTML = product.description;

    const title = document.createElement('span');
    title.innerHTML = product.title;

    container.append(image, title, description, price);
    return container;
};
