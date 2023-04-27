export const deleteProduct = (e, products) => {
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

export const getProductPreview = (btn) => {
  const preview = btn.dataset.pic;

  const popup = window.open(preview, '', `width = 600, height = 600, top = ${screen.height * 0.5 - 300}, left = ${screen.width * 0.5 - 300}`);
  // popup.moveTo(screen.width * 0.5 - 300, screen.height * 0.5 - 300);
};
