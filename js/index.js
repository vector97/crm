import getElements from './modules/elements.js';
import modalControl from './modules/modalControl.js';
import deleteProduct from './modules/productControl.js';
import render from './modules/render.js';

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
    'id': 246016549,
    'title': 'Навигационная система Soundmax',
    'category': 'Техника для дома',
    'units': 'шт',
    'count': 5,
    'price': 100,
    'sum': 500,
  },
  {
    'id': 246016550,
    'title': 'Навигационная система Soundmax',
    'category': 'Техника для дома',
    'units': 'шт',
    'count': 5,
    'price': 100,
    'sum': 500,
  },
];

const init = () => {
  const {
    calculateTotalPrice,
    renderGoods,
  } = render();
  const {
    tableBody,
    openModalBtn,
  } = getElements();
  const { openModal } = modalControl();

  renderGoods(products);
  calculateTotalPrice(products);

  // открытие модального окна по нажанию кнопки "Добавить товар"
  openModalBtn.addEventListener('click', openModal);

  // удаление товаров со страницы
  tableBody.addEventListener('click', e => {
    deleteProduct(e, products);
  });
};

init();

export default products;
