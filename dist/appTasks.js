"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskManager_1 = require("./taskManager");
const tasks_1 = require("./tasks");
const taskManager = new taskManager_1.TaskManager();
const newTask = {
    title: "New task",
    description: "New task description",
    status: tasks_1.TaskStatus.Pending,
};
taskManager.addTask(newTask);
const task = taskManager.getTaskById(1);
if (task) {
    taskManager.updateTaskStatus(task.id, tasks_1.TaskStatus.InProgress);
}
const tasks = taskManager.getTasks();
console.log("All tasks: ");
tasks.forEach((task) => console.log(task.title, task.status));
