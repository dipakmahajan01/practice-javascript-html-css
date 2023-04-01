class User {
    static id = 1
    name
    age
    constructor(name, age) {
        this.name = name
        this.age = age
        this.id = User.id++
    }
    static compareByAge(user1, user2) {
        return user1.age - user2.age
    }
}
const user1 = new User("dipak", "100");
const user2 = new User("raju", "30");
const user3 = new User("shalimar", "50");
const user = [user1, user2, user3]
user.sort(User.compareByAge)
console.log(user)