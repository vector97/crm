const deleteProduct = (e, products) => {
  const target = e.target;

  if (target.closest('.table__data-btn_delete')) {
    const delItem = target.closest('.product');
    delItem.remove();

    products.forEach(product => {
      if (product.id === delItem.dataset.id) {
        products = products.filter(product => product.id !== delItem.dataset.id);
      }
    });
  }
};

export default deleteProduct;
