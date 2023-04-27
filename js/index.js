import getElements from './modules/elements.js';
import modalControl from './modules/modalControl.js';
import { deleteProduct, getProductPreview } from './modules/productControl.js';
import render from './modules/render.js';

import { products } from './data.js';

const init = () => {
  const {
    calculateTotalPrice,
    renderGoods,
  } = render();
  const {
    tableBody,
    openModalBtn,
  } = getElements();
  const {openModal} = modalControl();

  renderGoods(products);
  calculateTotalPrice(products);

  // открытие модального окна по нажанию кнопки "Добавить товар"
  openModalBtn.addEventListener('click', openModal);

  // удаление товаров со страницы
  tableBody.addEventListener('click', e => {
    deleteProduct(e, products);
  });

  // предпросмотр товара
  setTimeout(() => {
    const previewBtns = document.querySelectorAll('.table__data-btn_preview');

    previewBtns.forEach(previewBtn => {
      previewBtn.addEventListener('click', () => {
        previewBtns.forEach(btn => {
          if (previewBtn === btn) {
            getProductPreview(previewBtn);
          }
        });
      });
    });
  }, 0);
};

init();
