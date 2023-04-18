"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const tasks_1 = require("./tasks");
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        const newTask = Object.assign(Object.assign({ id: this.tasks.length + 1 }, task), { status: tasks_1.TaskStatus.Pending });
        this.tasks.push(newTask);
    }
    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }
    getTasks() {
        return this.tasks;
    }
    updateTaskStatus(id, status) {
        const task = this.getTaskById(id);
        if (task) {
            task.status = status;
        }
    }
}
exports.TaskManager = TaskManager;
