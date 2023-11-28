import { Dispatch, SetStateAction } from "react";

export interface Task {
    description: string;
    value: number;
    checked: boolean;
}

export interface GroupOfTasks {
    name: string;
    tasks: Task[];
}

export interface StateContextType {
    groupsOfTasks: GroupOfTasks[];
    totalPoints: number;
    setGroupsOFTasks: Dispatch<SetStateAction<GroupOfTasks[]>>;
}