// class updating observers
import { usersList } from "../../utils/userdata";
class Subject {
    constructor() {
        this.observers = usersList.filter(user => user.membership === true);
    }
    //whene a people joining to premium memberships
    addObserver(observer) {
        this.observers.push(observer);
    }
    //whene a people joining to premium memberships
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(product) {
        this.observers.forEach(observer => observer.update(product));
    }
}
export default Subject;
