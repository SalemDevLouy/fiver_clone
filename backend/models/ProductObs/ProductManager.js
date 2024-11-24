import Subject from "./subject.js";
class ProductManager extends Subject {
    addProduct(product) {
        console.log(`Adding product: ${product.title}`);
        this.notifyObservers(product);
    }
}

export default ProductManager;
