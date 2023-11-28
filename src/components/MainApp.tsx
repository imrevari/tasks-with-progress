import { Box, Container } from "@mui/material";
import { FC } from "react";
import Tasks from "./Tasks";


const MainApp: FC = () => {


    return(
        <Container >
        <Box sx={{backgroundColor: '#e9f1f2',
                        display: 'flex',
                        flexWrap: 'wrap', 
                        alignItems: 'center',
                        flexDirection: 'column', 
                        justifyContent: 'center'}}> 
                        
            <Tasks />
                    
        </Box>
    </Container>
    )

}

MainApp.displayName = 'MainApp';

export default MainApp;