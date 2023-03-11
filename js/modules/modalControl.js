import products from '../index.js';
import getElements from './elements.js';
import render from './render.js';

const modalControl = () => {
  const { renderGoods } = render();
  const {
    modal,
    modalWindow,
    productID,
    productForm,
    productCheckbox,
    productDiscount,
    productPrice,
    productSum,
    productCost,
  } = getElements();

  // ф-ция открытия модального окна
  const openModal = () => {
    const randomProductID = Math.floor(Math.random() * 1000000000);
    productID.innerHTML = randomProductID;

    modal.classList.add('modal_open');
    setTimeout(() => {
      modalWindow.classList.add('modal__window_open');
    }, 50);
  };

  // ф-ция модального закрытия окна
  const closeModal = () => {
    setTimeout(() => {
      modal.classList.remove('modal_open');
    }, 500);
    modalWindow.classList.remove('modal__window_open');
  };

  // закрытие модального окна по нажатию на крестик/оверлей
  modal.addEventListener('click', (e) => {
    if (
      !e.target.closest('.modal__window') ||
      e.target.closest('.modal__close')
    ) {
      closeModal();
    }
  });

  // закрытие модального окна по нажатию на Escape
  document.addEventListener('keydown', e => {
    if (modal.classList.contains('modal_open')) {
      if (e.code === 'Escape') {
        closeModal();
      }
    }
  });

  // переключатель дисконта
  const unblockingDiscount = () => {
    productDiscount.disabled = !productDiscount.disabled;
    productDiscount.value = '';
  };

  productCheckbox.addEventListener('change', unblockingDiscount);

  // расчёт суммы в модальном окне
  const calculateModalPrice = () => {
    const { count, price } = productForm;

    const product = {
      count: count.value,
      price: price.value,
    };

    productCost.innerHTML = `$ ${product.count * product.price}.00`;
  };

  productPrice.addEventListener('blur', calculateModalPrice);
  productSum.addEventListener('blur', calculateModalPrice);

  // добавление нового товара
  productForm.addEventListener('submit', e => {
    e.preventDefault();

    const { title, category, units, count, price } = productForm;

    const product = {
      title: title.value,
      category: category.value,
      units: units.value,
      count: count.value,
      price: price.value,
      id: productID.innerHTML,
    };

    products.push(product);
    closeModal();
    renderGoods(products);
  });

  return { openModal };
};

export default modalControl;
