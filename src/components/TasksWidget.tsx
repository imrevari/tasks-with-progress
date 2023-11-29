import { Box } from "@mui/material";
import { FC } from "react";
import ProgressBar from "./ProgressBar";
import Tasks from "./Tasks";


const TasksWidget: FC = () => {

    return(
        <Box sx={{
            border: '2px solid #e0dcdc',
            backgroundColor: 'white',
            borderRadius: '7px',
            margin: '70px 0 20px 0',

            display: 'flex',
            flexWrap: 'wrap', 
            alignItems: 'center',
            flexDirection: 'column', 
            justifyContent: 'center',
            width: '70%'}}>
                <ProgressBar />
                <Tasks />      
        </Box> 
    )
}

TasksWidget.displayName = 'TasksWidget';

export default TasksWidget;