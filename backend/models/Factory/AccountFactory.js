// accountFactory.js
import { Account,Seller,Buyer } from "./Account";
class AccountFactory {
    static createAccount(type, name) {
        switch(type.toLowerCase()) {
            case 'seller':
                return new Seller(name);
            case 'buyer':
                return new Buyer(name);
            default:
                throw new Error('Unknown account type');
        }
    }
}

module.exports = AccountFactory;
