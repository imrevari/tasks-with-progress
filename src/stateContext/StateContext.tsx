import { SetStateAction, createContext, useContext } from "react";
import { GroupOfTasks, StateContextType } from "../constants/interfaces";


export const StateContext = createContext<StateContextType>({
    groupsOfTasks: [],
    setGroupsOFTasks: function (value: SetStateAction<GroupOfTasks[]>): void {
        throw new Error("Function not implemented.");
    }
})

StateContext.displayName = 'StateContext';

export const useStateContext = () => useContext(StateContext);