import { FC, useMemo, useState } from "react";
import { Collapse, Divider, FormGroup, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { GroupOfTasks, Task } from "../constants/interfaces";
import { StarBorder } from "@mui/icons-material";
import CheckboxComponent from "./checkbox/CheckboxComponent";


interface TaskListElementProps {
    taskGroup: GroupOfTasks;
    isLast: boolean;
}

const TaskListElement: FC<TaskListElementProps> = ({taskGroup, isLast}) => {

    const {name, tasks} = taskGroup;

    const [isExpanded, setisExpanded] = useState<boolean>(false)

    const tasksFulfilled = useMemo(() => {
        return !(tasks.some(({checked}) => !checked))
    }, [tasks])


    return(
        <>
        <ListItemButton>
        <ListItemIcon>
            {tasksFulfilled
            ?
            <AssignmentTurnedInOutlinedIcon fontSize="small" sx={{ color: 'green' }}/>
            :
            <AssignmentOutlinedIcon fontSize="small"/>
            }
        </ListItemIcon>
        <ListItemText primary={name} />
        </ListItemButton>
        
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <FormGroup>
                {tasks.map(({checked, description}, index) => 
                    <CheckboxComponent key={index} checked={checked} label={description}/>)}
            </FormGroup>
        </Collapse>



        {!isLast && <Divider />}
        </>
    )

}

TaskListElement.displayName = 'TaskListElement';

export default TaskListElement;