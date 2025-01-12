import { products as list } from "../data/products.js";

const addProduct = (parent, {
  id,
  image,
  title,
  number,
  description,
  weight,
  price,
  currency,
}) => {
  parent.insertAdjacentHTML('beforeend', `
  <div class="product col-md-6">
    <div class="card mb-4" data-id="${id}">
      <img class="product-img" src="${image}" alt="${description}" title="${number} штук ${description}" alt="${number} штук ${description}">
			<div class="card-body text-center">
				<h4 class="item-title">${title}</h4>
				<p><small data-items-in-box class="text-muted" title="${number} штук - количество ролл в одном сете">${number}&nbsp;шт.</small></p>

				<div class="details-wrapper">
					<div class="items counter-wrapper">
						<div class="items__control" data-action="minus" title="Уменьшить количество в заказе">-</div>
						<div class="items__current" data-counter  title="Текущее количество сетов в заказе ${1}">${'1'}</div>
						<div class="items__control" data-action="plus" title="Уменьшить количество в заказе">+</div>
					</div>

					<div class="price">
						<p class="price__weight mb-0" title="Вес одного сета ${weight} грамм">${weight}г.</p>
						<p class="price__currency mb-0" title="Цена одного сета ${price} рублей">${price}&nbsp;<span class="rouble-symbol rouble-black">₽</span></p>
					</div>
				</div>

				<button data-cart type="button" class="btn btn-block btn-outline-warning" title="Добавить в корзину">+ в корзину</button>

			</div>
		</div>
	</div>
    `);
}

const app = () => {
  console.log('Hello Rolls');
  
  
  const productsList = document.querySelector('.products-list');
  console.log('productsList: ', productsList);
  console.log('products: ', list);

  list.forEach(product => addProduct(productsList, product))
}

app(); 
