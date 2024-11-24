class Product {
    constructor() {}
    getDetails() {
        throw new Error("This method should be overridden");
    }
    getDataObject() {
        throw new Error("This method should be overridden");
    }
}


class FreelanceWork extends Product {
    constructor(title) {
        super();
        this.title = title;
    }

    getDetails() {
        return console.log(`Freelence course: ${this.title}`)
    }
    getDataObject() {
        return { title: this.title};
    }
}

class EducationalCourse extends Product {
    constructor(title, price, description, duration) {
        super();
        this.title = title;
    }

    getDetails() {
        return `Educational Course: ${this.title}, Price: ${this.price}, Description: ${this.description}, Duration: ${this.duration} hours`;
    }
    getDataObject() {
        return { title: this.title };
    }
}




class ProductFactory {
    static createProduct(productType, ...args) {
        switch (productType) {
            case 'freelanceWork':
                return new FreelanceWork(...args);
            case 'educationalCourse':
                return new EducationalCourse(...args);
            default:
                throw new Error("Unknown product type");
        }
    }
}

export {ProductFactory }
