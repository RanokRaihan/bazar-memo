// create selector
const $ = (query) => {
    if (query === undefined) {
        return false;
    } else {
        const selected = document.querySelector(query);
        return selected;
    }
};
