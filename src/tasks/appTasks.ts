import { TaskManager } from "./taskManager";
import { TaskStatus, Task } from "./tasks";

const taskManager = new TaskManager();

const newTask: Omit<Task, "id"> = {
    title: "New task",
    description: "New task description",
    status: TaskStatus.Pending,
};

taskManager.addTask(newTask);
const task = taskManager.getTaskById(1);

if(task){
    taskManager.updateTaskStatus(task.id, TaskStatus.InProgress);
}

const tasks = taskManager.getTasks();

console.log("All tasks: ");
tasks.forEach((task) => console.log(task.title, task.status));