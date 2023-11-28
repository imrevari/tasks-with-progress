import { FC, useState } from "react";
import { StateContext } from "./StateContext";
import { GroupOfTasks } from "../constants/interfaces";



type StateContextProps = {
    children: string | JSX.Element | JSX.Element[] 
  }

const StateContextProvider: FC<StateContextProps> = ({children}) => {

    const [groupsOfTasks, setGroupsOFTasks] = useState<GroupOfTasks[]>([])

    return(

        <StateContext.Provider
                value={{
                    groupsOfTasks,
                    setGroupsOFTasks
                }}>
                {children}
        </StateContext.Provider>
    )


  }

StateContextProvider.displayName = 'StateContextProvider';

export default StateContextProvider;