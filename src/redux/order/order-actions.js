const { createAction } = require('@reduxjs/toolkit');

const addDish = createAction('order/add');
const deleteDish = createAction('order/delete');
const deletePosition = createAction('order/deletePosition');
const clearOrder = createAction('order/clearOrder');

const actions = {
    addDish,
    deleteDish,
    deletePosition,
    clearOrder,
};

export default actions;
