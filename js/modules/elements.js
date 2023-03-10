const getElements = () => {
  const tableBody = document.querySelector('.table__body');
  const openModalBtn = document.querySelector('.catalog__control-btn');
  const modal = document.querySelector('.modal');
  const modalWindow = document.querySelector('.modal__window');
  // const title = modal.querySelector('.modal__title');
  const productID = modal.querySelector('.vendor-code__id');
  // const productEditBtn = modal.querySelector('.modal__product-edit');
  const productForm = modal.querySelector('.modal__form');
  const productCheckbox = modal.querySelector('#check');
  const productDiscount = modal.querySelector('#discount');
  const productPrice = modal.querySelector('#price');
  const productSum = modal.querySelector('#sum');
  const productCost = modal.querySelector('.modal__value');
  const catalogCost = document.querySelector('.catalog__value');

  return {
    tableBody,
    openModalBtn,
    modal,
    modalWindow,
    productID,
    productForm,
    productCheckbox,
    productDiscount,
    productPrice,
    productSum,
    productCost,
    catalogCost,
  };
};

export default getElements;
