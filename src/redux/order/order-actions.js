const { createAction } = require('@reduxjs/toolkit');

const addDish = createAction('order/add');
const deleteDish = createAction('order/delete');
const deletePosition = createAction('order/deletePosition');

const actions = { addDish, deleteDish, deletePosition };

export default actions;
