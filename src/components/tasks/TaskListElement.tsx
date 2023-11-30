import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { Collapse, Divider, FormGroup, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { FC, useMemo, useState } from "react";
import { GroupOfTasks } from "../../constants/interfaces";
import { useStateContext } from "../../stateContext/StateContext";
import CheckboxComponent from "../checkbox/CheckboxComponent";
import { styles } from "../../styles/styles";


interface TaskListElementProps {
    taskGroup: GroupOfTasks;
    isLast: boolean;
}

const TaskListElement: FC<TaskListElementProps> = ({taskGroup, isLast}) => {

    const {name, tasks} = taskGroup;

    const {setGroupsOFTasks, groupsOfTasks} = useStateContext()

    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    const tasksFulfilled = useMemo(() => {
        return !(tasks.some(({checked}) => !checked))
    }, [tasks])

    const showHIde = () => {
        setIsExpanded(prevState => !prevState)
    }

    const clickOnCheckbox = (index: number) => {
        const updatedList = [...tasks].map((e, i) => {
            if(i === index){
                return {
                    ...e,
                    checked: !e.checked
                }
            }else{
                return e;
            }
        })
        const newState = [...groupsOfTasks].map( (group) => {
            if(group === taskGroup){
                return {...group, tasks: updatedList}
            }else{
                return group
            }
        })
        setGroupsOFTasks(newState)
    }


    return(
        <>
            <ListItemButton onClick={showHIde}>
                <ListItemIcon sx={styles.listItemIcon}>
                    {tasksFulfilled
                    ?
                    <AssignmentTurnedInOutlinedIcon fontSize="small" sx={styles.greenIcon}/>
                    :
                    <AssignmentOutlinedIcon fontSize="small"/>
                    }
                </ListItemIcon>
                <ListItemText primary={name} />
                {isExpanded ? 
                <> 
                    <Typography color={'#b4b4b4'}>Hide</Typography>
                    <ExpandLess sx={styles.expandCollapse}/>
                </>
                :
                <> 
                    <Typography color={'#b4b4b4'}>Show</Typography>
                    <ExpandMore sx={styles.expandCollapse}/>

                </>}
            </ListItemButton>
            
            {isExpanded && <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <FormGroup>
                    {tasks.map(({checked, description}, index) => 
                        <CheckboxComponent 
                            key={index}
                            onClick={clickOnCheckbox} 
                            checked={checked}
                            index={index} 
                            label={description}/>)}
                </FormGroup>
            </Collapse>}
            {!isLast && <Divider sx={styles.divider}/>}
        </>
    )

}

TaskListElement.displayName = 'TaskListElement';

export default TaskListElement;