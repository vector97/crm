import getElements from './modules/elements.js';
import openModal from './modules/modalControl.js';
import deleteProduct from './modules/productControl.js';
import {
  calculateTotalPrice,
  renderGoods,
} from './modules/render.js';
const {
  tableBody,
  openModalBtn,
} = getElements();

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
