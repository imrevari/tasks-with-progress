import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { Box, Checkbox, Collapse, Divider, FormControlLabel, FormGroup, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { FC } from "react";
import CheckboxComponent from './checkbox/CheckboxComponent';
import TaskListElement from './TaskListElement';
import { GroupOfTasks } from '../constants/interfaces';


interface TasksProps {
    tasks: GroupOfTasks[]
}

const Tasks: FC<TasksProps> = ({tasks}) => {


    return(
    <Box sx={{ 
                display: 'flex',
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                marginTop: '75px', marginBottom: '80px', width: '90%'}}>
         <List
            sx={{ width: '80%', 
                bgcolor: 'background.paper', 
                padding: 0,
                borderRadius: '5px'}}
            component="div"
            aria-labelledby="nested-list-subheader"
        >
           {tasks.map( (taskGroup, index) => <TaskListElement 
                                                taskGroup={taskGroup}
                                                isLast={index === (tasks.length - 1)}/>)}  
        </List>
    </Box>)

}

Tasks.displayName = 'Tasks';

export default Tasks;