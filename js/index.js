'use strict';

{
  let products = [
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

  const tableBody = document.querySelector('.table__body');
  const openModalBtn = document.querySelector('.catalog__control-btn');
  const modal = document.querySelector('.modal');
  const modalWindow = document.querySelector('.modal__window');
  const title = modal.querySelector('.modal__title');
  const productID = modal.querySelector('.vendor-code__id');
  const productEditBtn = modal.querySelector('.modal__product-edit');
  const productForm = modal.querySelector('.modal__form');
  const productCheckbox = modal.querySelector('#check');
  const productDiscount = modal.querySelector('#discount');
  const productPrice = modal.querySelector('#price');
  const productSum = modal.querySelector('#sum');
  const productCost = modal.querySelector('.modal__value');
  const catalogCost = document.querySelector('.catalog__value');
  let totalPrice = 0;


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

  // открытие модального окна по нажанию кнопки "Добавить товар"
  openModalBtn.addEventListener('click', openModal);

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
  }

  productCheckbox.addEventListener('change', unblockingDiscount);

  // расчёт суммы в модальном окне
  const calculateModalPrice = () => {
    const { count, price } = productForm;

    const product = {
      count: count.value,
      price: price.value,
    }

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
    }

    products.push(product);
    closeModal();
    renderGoods(products);
  });

  // создание строки товара
  const createRow = (product) => {
    const tr = document.createElement('tr');
    tr.classList.add('product');
    tr.dataset.id = product.id;
    const { id, title, category, units, count, price, sum } = product;
    tr.innerHTML = `
    <td class="table__data table__data_id">${id}</td>
    <td class="table__data table__data_name">${title}</td>
    <td class="table__data table__data_category">${category}</td>
    <td class="table__data table__data_measure">${units}</td>
    <td class="table__data table__data_amount">${count}</td>
    <td class="table__data table__data_cost">$${price}</td>
    <td class="table__data table__data_sum">$${count * price}</td>
    <td class="table__data table__data_buttons">
      <button class="table__data-btn" type="button">
        <img src="./img/catalog/table__no-image.svg" alt="Без изображения">
      </button>
      <button class="table__data-btn" type="button">
        <img src="./img/catalog/table__edit.svg" alt="Редактировать запись">
      </button>
      <button class="table__data-btn table__data-btn_delete" type="button">
        <img src="./img/catalog/table__delete.svg" alt="Удалить запись">
      </button>
    </td>
  `;

    return tr;
  };

  // расчёт стоимости всех товаров
  const calculateTotalPrice = ({ count, price }) => {
    totalPrice += price * count;
    catalogCost.textContent = `$ ${totalPrice}.00`
  };

  // рендер всех товаров на страницу
  const renderGoods = (products) => {
    totalPrice = 0;
    tableBody.innerHTML = '';

    products.map((product) => {
      tableBody.append(createRow(product));
      calculateTotalPrice(product);
    });
  };

  renderGoods(products);

  // удаление товаров со страницы
  tableBody.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.table__data-btn_delete')) {
      const delItem = target.closest('.product');
      delItem.remove();

      products.forEach(product => {
        if (product.id == delItem.dataset.id) {
          products = products.filter(product => product.id != delItem.dataset.id);
        }
      });
    }
  });
}
