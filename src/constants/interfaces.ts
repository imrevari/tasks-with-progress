export interface Task {
    description: string;
    value: number;
    checked: boolean;
}

export interface GroupOfTasks {
    name: string;
    tasks: Task[];
}