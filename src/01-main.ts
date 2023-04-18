import { UserManager } from "./userManager";
import { User } from "./user-class";

const userManager = new UserManager();

const user1 = new User(1, "Norma", "diaz@.com")
const user2 = new User(2, "Luis", "luis@.com")

userManager.addUser(user1);
userManager.addUser(user2);

const foundUser = userManager.getUserById(1);

console.log(foundUser?.getName());

const allUsers = userManager.getUsers();
console.log(allUsers.forEach(user => console.log(user.getName())));
