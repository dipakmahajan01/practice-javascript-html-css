class BackAccount {
    customerName
    accountNumber
    #balance = 0
    constructor(customerName, balance = 0) {
        this.customerName = customerName
        this.accountNumber = Date.now()
        this.#balance = balance
    }
    deposit(amount) {
        this.#balance += amount
    }
    withdraw(amount) {
        this.#balance -= amount
    }
    set Balance(amount) {
        if (isNaN(amount)) {
            throw new Error("amount must be a number input")
        }
        this.#balance = amount
    }
    get Balance() {
        return this.#balance
    }

}
class currentAccount extends BackAccount {
    transactionLimit = 5000
    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }
    takeBusinessLoan(amount) {
        console.log("takeBusinessLoan" + amount);
    }
}

class savingAccount extends BackAccount {
    transactionLimit = 1000
    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }
    takePrivateLoan(amount) {
        console.log('takePrivateLoan' + " " + amount)
    }
}
const person1 = new savingAccount("Dipak", 1000)
// person1.deposit(500)
// person1.withdraw(500)
person1.Balance = 1000
console.log(person1)