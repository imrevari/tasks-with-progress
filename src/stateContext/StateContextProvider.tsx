import { FC, useEffect, useMemo, useState } from "react";
import { StateContext } from "./StateContext";
import { GroupOfTasks } from "../constants/interfaces";
import { useFetchTasks } from "../services/customHooks";



type StateContextProps = {
    children: string | JSX.Element | JSX.Element[] 
  }

const StateContextProvider: FC<StateContextProps> = ({children}) => {

    const [groupsOfTasks, setGroupsOFTasks] = useState<GroupOfTasks[]>([])

    const {allFetchedTasks, totalPoints} = useFetchTasks()

    useEffect(() => {
      setGroupsOFTasks(allFetchedTasks)
    }, [allFetchedTasks])

    const fulfilledPoints = useMemo(() => {
      let total = 0;
      groupsOfTasks.forEach( ({tasks}) => {
          tasks.forEach( ({value, checked}) => {if(checked){total = total + value}})
      });
      return total;
    }, [groupsOfTasks])

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