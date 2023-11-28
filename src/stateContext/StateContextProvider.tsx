import { FC, useEffect, useState } from "react";
import { GroupOfTasks } from "../constants/interfaces";
import { useFetchTasks } from "../services/customHooks";
import { StateContext } from "./StateContext";



type StateContextProps = {
    children: string | JSX.Element | JSX.Element[] 
  }

const StateContextProvider: FC<StateContextProps> = ({children}) => {

    const [groupsOfTasks, setGroupsOFTasks] = useState<GroupOfTasks[]>([])

    const {allFetchedTasks, totalPoints} = useFetchTasks()

    useEffect(() => {
      setGroupsOFTasks(allFetchedTasks)
    }, [allFetchedTasks])

    return(

        <StateContext.Provider
                value={{
                    groupsOfTasks,
                    totalPoints,
                    setGroupsOFTasks
                }}>
                {children}
        </StateContext.Provider>
    )


  }

StateContextProvider.displayName = 'StateContextProvider';

export default StateContextProvider;