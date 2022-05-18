const getUniqOrder = (array, key) =>
    array.reduce(
        (acc, cur) =>
            acc.find(el => el[key] === cur[key])
                ? acc
                : acc.push(cur) && acc,
        [],
    );

export default getUniqOrder;
