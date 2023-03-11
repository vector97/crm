import getElements from './elements.js';

const render = () => {
  const {
    tableBody,
    catalogCost,
  } = getElements();

  // создание строки товара
  const createRow = (product) => {
    const tr = document.createElement('tr');
    tr.classList.add('product');
    tr.dataset.id = product.id;
    const { id, title, category, units, count, price } = product;
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
  const calculateTotalPrice = (products) => {
    let totalPrice = 0;

    products.map(({ price, count }) => {
      totalPrice += price * count;
    });

    catalogCost.textContent = `$ ${totalPrice}.00`;
  };

  // рендер всех товаров на страницу
  const renderGoods = (products) => {
    tableBody.innerHTML = '';

    products.map((product) => {
      tableBody.append(createRow(product));
    });
  };

  return {
    createRow,
    calculateTotalPrice,
    renderGoods,
  };
};

export default render;
