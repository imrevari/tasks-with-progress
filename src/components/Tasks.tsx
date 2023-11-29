import { Box, List } from "@mui/material";

import { FC } from "react";
import { useStateContext } from '../stateContext/StateContext';
import TaskListElement from './TaskListElement';
import { styles } from "../styles/styles";



const Tasks: FC = () => {

    const {groupsOfTasks: tasks} = useStateContext()

    return(
    <Box sx={styles.taskBox}>
        <List
            sx={styles.taskList}
            component="div"
            aria-labelledby="nested-list-subheader"
        >
           {tasks.map( (taskGroup, index) => <TaskListElement 
                                                taskGroup={taskGroup}
                                                key={index}
                                                isLast={index === (tasks.length - 1)}
                                             />)}  
        </List>
    </Box>)
}

Tasks.displayName = 'Tasks';

export default Tasks;