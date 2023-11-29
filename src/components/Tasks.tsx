import { Box, List } from "@mui/material";

import { FC } from "react";
import { useStateContext } from '../stateContext/StateContext';
import TaskListElement from './TaskListElement';



const Tasks: FC = () => {

    const {groupsOfTasks: tasks} = useStateContext()


    return(
    <Box sx={{ 
                border: '2px solid #e9f1f2',
                borderRadius: '7px',
                display: 'flex',
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                marginTop: '25px', marginBottom: '25px', width: '95%'}}>
         <List
            sx={{ width: '100%', 
                bgcolor: 'background.paper',
                borderRadius: '7px', 
                padding: 0}}
            component="div"
            aria-labelledby="nested-list-subheader"
        >
           {tasks.map( (taskGroup, index) => <TaskListElement 
                                                taskGroup={taskGroup}
                                                key={index}
                                                isLast={index === (tasks.length - 1)}/>)}  
        </List>
    </Box>)

}

Tasks.displayName = 'Tasks';

export default Tasks;