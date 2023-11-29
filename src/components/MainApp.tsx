import { Box, Container } from "@mui/material";
import { FC } from "react";
import TasksWidget from "./TasksWidget";


const MainApp: FC = () => {

    return(
        <Container >
            <Box sx={{backgroundColor: '#f0ecec', 
                        display: 'flex',
                        justifyContent: 'center',
                        height: 'max-content'}}>
                <TasksWidget />
            </Box>
        </Container>
    )

}

MainApp.displayName = 'MainApp';

export default MainApp;