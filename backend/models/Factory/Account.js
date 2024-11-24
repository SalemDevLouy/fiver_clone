// account.js
class Account {
    constructor(name,passw
    ) {
        this.name = name;
    }

    getAccountType() {
        throw new Error("Method 'getAccountType()' must be implemented.");
    }
}

// seller.js

class Seller extends Account {
    constructor(name) {
        super(name);
        this.products = []; // منتجات البائع
        
    }

    getAccountType() {
        return 'Seller';
    }

    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(product,id){
        this.products = this.products.filter(p => p.id!== id);
    }
    updateProduct(product,id){
        this.products = this.products.map(p => p.id === id? product : p);
    }
}

module.exports = Seller;

// buyer.js

class Buyer extends Account {
    constructor(name) {
        super(name);
        this.cart = []; // سلة المشتريات للمشتري
    }

    getAccountType() {
        return 'Buyer';
    }

    addToCart(item) {
        this.cart.push(item);
    }
}
// Admin

class Admin extends Account {
    constructor(name) {
        super(name);
        this.cart = []; // سلة المشتريات للمشتري
    }
    //Administration functions 
}

export {Account,Seller,Buyer}