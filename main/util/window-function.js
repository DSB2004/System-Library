const closeFunction = (window) => {
    if (window) {
        window.close();
    }
};

const MinFunction = (window) => {
    if (window) {
        window.minimize();
    }
};


module.exports = {
    min: MinFunction,
    close: closeFunction
}

