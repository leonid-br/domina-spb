const getAmmount = (id, order) =>
    order.reduce((acc, cur) => (cur.id === id ? (acc += 1) : acc), 0);

export default getAmmount;
