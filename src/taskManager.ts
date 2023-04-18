import {Task, TaskStatus} from './tasks'

export class TaskManager{
    private tasks: Task[];

    constructor(){
        this.tasks = [];
    }

    addTask(task: Omit<Task, "id">): void {
        const newTask = {
            id: this.tasks.length + 1,
            ...task,
            status: TaskStatus.Pending,
        };
        this.tasks.push(newTask);
    }

    getTaskById(id: number): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    updateTaskStatus(id: number, status: TaskStatus): void {
        const task = this.getTaskById(id);
        if (task) {
            task.status = status;
        }
    }
}