import { Box } from "@mui/material";
import { FC } from "react";
import ProgressBar from "../progressBar/ProgressBar";
import Tasks from "./Tasks";
import { styles } from "../../styles/styles";


const TasksWidget: FC = () => {

    return(
        <Box sx={styles.tasksWidgetBox}>
            <ProgressBar />
            <Tasks />      
        </Box> 
    )
}

TasksWidget.displayName = 'TasksWidget';

export default TasksWidget;