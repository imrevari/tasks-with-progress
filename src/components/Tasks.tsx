import { Box, List } from "@mui/material";

import { FC } from "react";
import { useStateContext } from '../stateContext/StateContext';
import TaskListElement from './TaskListElement';



const Tasks: FC = () => {

    const {groupsOfTasks: tasks} = useStateContext()


    return(
    <Box sx={{ 
                display: 'flex',
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                marginTop: '75px', marginBottom: '80px', width: '85%'}}>
         <List
            sx={{ width: '90%', 
                bgcolor: 'background.paper', 
                padding: 0,
                borderRadius: '5px'}}
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