import { FC, useMemo, useState } from "react";
import { Collapse, Divider, FormGroup, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { GroupOfTasks, Task } from "../constants/interfaces";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import CheckboxComponent from "./checkbox/CheckboxComponent";


interface TaskListElementProps {
    taskGroup: GroupOfTasks;
    isLast: boolean;
}

const TaskListElement: FC<TaskListElementProps> = ({taskGroup, isLast}) => {

    const {name, tasks} = taskGroup;

    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    const tasksFulfilled = useMemo(() => {
        return !(tasks.some(({checked}) => !checked))
    }, [tasks])

    const showHIde = () => {
        setIsExpanded(prevState => !prevState)
    }


    return(
        <>
            <ListItemButton>
            <ListItemIcon sx={{ minWidth: '35px' }}>
                {tasksFulfilled
                ?
                <AssignmentTurnedInOutlinedIcon fontSize="small" sx={{ color: 'green' }}/>
                :
                <AssignmentOutlinedIcon fontSize="small"/>
                }
            </ListItemIcon>
            <ListItemText primary={name} />
            {isExpanded ? 
            <>{'Hide'}<ExpandLess onClick={showHIde} /></>
            :
            <> {'Show'}<ExpandMore onClick={showHIde} /></>}
            </ListItemButton>
            
            {isExpanded && <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <FormGroup>
                    {tasks.map(({checked, description}, index) => 
                        <CheckboxComponent key={index} checked={checked} label={description}/>)}
                </FormGroup>
            </Collapse>}
            {!isLast && <Divider />}
        </>
    )

}

TaskListElement.displayName = 'TaskListElement';

export default TaskListElement;