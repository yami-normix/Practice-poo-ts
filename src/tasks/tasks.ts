export enum TaskStatus {
    Pending = 'Pending',
    InProgress = 'In-progress',
    Done = 'Done',
}

export interface Task {
    id: number;
    title: string;
    description?: string;
    status: TaskStatus;
}

