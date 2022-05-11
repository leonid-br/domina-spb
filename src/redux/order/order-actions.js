const { createAction } = require('@reduxjs/toolkit');

const addDish = createAction('order/add');
const deleteDish = createAction('order/delete');

const actions = { addDish, deleteDish };

export default actions;
