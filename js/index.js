'use strict';

const products = [
  {
    'id': 246016548,
    'title': 'Навигационная система Soundmax',
    'category': 'Техника для дома',
    'units': 'шт',
    'count': 5,
    'price': 100,
    'sum': 500,
  },
  {
    'id': 937295527,
    'title': 'Настольная игра “На 4-х ногах”',
    'category': 'Настольные игры',
    'units': 'шт',
    'count': 12,
    'price': 14,
    'sum': 168,
  },
  {
    'id': 246016548,
    'title': 'Навигационная система Soundmax',
    'category': 'Техника для дома',
    'units': 'шт',
    'count': 5,
    'price': 100,
    'sum': 500,
  },
  {
    'id': 246016548,
    'title': 'Навигационная система Soundmax',
    'category': 'Техника для дома',
    'units': 'шт',
    'count': 5,
    'price': 100,
    'sum': 500,
  },
];

const openModalBtn = document.querySelector('.catalog__control-btn');
const modal = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal__window');
const closeModalBtn = modal.querySelector('.modal__close');
const title = modal.querySelector('.modal__title');
const productID = modal.querySelector('.modal__product-id');
const productEditBtn = modal.querySelector('.modal__product-edit');
const productForm = modal.querySelector('.modal__form');
const productCheckbox = modal.querySelector('#check');
const productDiscount = modal.querySelector('#discount');
const productCost = modal.querySelector('.modal__value');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('modal_open');
  setTimeout(() => {
    modalWindow.classList.add('modal__window_open');
  }, 0);
});

closeModalBtn.addEventListener('click', (e) => {
  setTimeout(() => {
    modal.classList.remove('modal_open');
  }, 500);
  modalWindow.classList.remove('modal__window_open');
});

modal.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__window')) {
    setTimeout(() => {
      modal.classList.remove('modal_open');
    }, 500);
    modalWindow.classList.remove('modal__window_open');
  }
});

const tableBody = document.querySelector('.table__body');

const createRow = (product) => {
  const tr = document.createElement('tr');
  const {id, title, category, units, count, price, sum} = product;
  tr.innerHTML = `
    <td class="table__data table__data_id">${id}</td>
    <td class="table__data table__data_name">${title}</td>
    <td class="table__data table__data_category">${category}</td>
    <td class="table__data table__data_measure">${units}</td>
    <td class="table__data table__data_amount">${count}</td>
    <td class="table__data table__data_cost">$${price}</td>
    <td class="table__data table__data_sum">$${sum}</td>
    <td class="table__data table__data_buttons">
      <button class="table__data-btn" type="button"><img src="./img/catalog/table__no-image.svg"
          alt="Без изображения"></button>
      <button class="table__data-btn" type="button"><img src="./img/catalog/table__edit.svg"
          alt="Редактировать запись"></button>
      <button class="table__data-btn" type="button"><img src="./img/catalog/table__delete.svg"
          alt="Удалить запись"></button>
    </td>
  `;

  return tr;
};

const renderGoods = (products) => {
  products.map((product) => {
    tableBody.append(createRow(product));
  });
};

renderGoods(products);
