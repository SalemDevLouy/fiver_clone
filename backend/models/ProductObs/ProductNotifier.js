import Observer from "./observer.js";

class ProductNotifier extends Observer {
    update(product) {
        console.log(`Notifier: New product added - ${product.title}`);
    }
}

export default ProductNotifier;
