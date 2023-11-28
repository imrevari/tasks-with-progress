import { FC, useMemo } from "react";
import { useStateContext } from "../stateContext/StateContext";


const ProgressBar: FC = () => {


    const {groupsOfTasks, totalPoints} = useStateContext()

    const fulfilledPoints = useMemo(() => {
        let total = 0;
        groupsOfTasks.forEach( ({tasks}) => {
            tasks.forEach( ({value, checked}) => {if(checked){total = total + value}})
        });
        return total;
    }, [groupsOfTasks])


    return(<>
    
    </>)

}

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;