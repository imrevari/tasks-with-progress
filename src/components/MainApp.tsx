import { Box, Container } from "@mui/material";
import { FC } from "react";
import TasksWidget from "./TasksWidget";
import { styles } from "../styles/styles";


const MainApp: FC = () => {

    return(
        <Container >
            <Box sx={styles.mainAppBox}>
                <TasksWidget />
            </Box>
        </Container>
    )

}

MainApp.displayName = 'MainApp';

export default MainApp;