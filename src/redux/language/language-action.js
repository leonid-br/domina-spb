const { createAction } = require('@reduxjs/toolkit');

const changeLanguage = createAction('language/change');

const actions = { changeLanguage };

export default actions;
