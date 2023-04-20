import { User } from "./user-class";

export class UserManager {
    private users: User[];

    constructor() {
        this.users = [];
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    getUserById(id: number): User | undefined {
        return this.users.find(user => user.getId() === id);
    }

    getUsers(): User[] {
        return this.users;
    }
}