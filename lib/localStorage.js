const fetchLocal = (prop) => {
    return JSON.parse(localStorage.getItem(prop));
};
//
const setLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const updateLocal = (prop, newItem) => {
    const oldItems = JSON.parse(localStorage.getItem(prop));
    oldItems.push(newItem);
    localStorage.setItem(prop, JSON.stringify(oldItems));
};
