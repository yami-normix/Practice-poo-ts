"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
class UserManager {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    getUserById(id) {
        return this.users.find(user => user.getId() === id);
    }
    getUsers() {
        return this.users;
    }
}
exports.UserManager = UserManager;
