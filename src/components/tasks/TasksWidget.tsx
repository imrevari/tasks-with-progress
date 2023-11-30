import { Box } from "@mui/material";
import { FC } from "react";
import ProgressBar from "../progressBar/ProgressBar";
import TasksList from "./TasksList";
import { styles } from "../../styles/styles";


const TasksWidget: FC = () => {

    return(
        <Box sx={styles.tasksWidgetBox}>
            <ProgressBar />
            <TasksList />      
        </Box> 
    )
}

TasksWidget.displayName = 'TasksWidget';

export default TasksWidget;