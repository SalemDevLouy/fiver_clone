class Observer {
    update(product) {
        throw new Error("This method should be overridden");
    }
}

export default Observer;
