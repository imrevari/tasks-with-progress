import { Box, Container } from "@mui/material";
import { FC } from "react";
import Tasks from "./Tasks";


const MainApp: FC = () => {

    return(
        <Container >
                <Box sx={{
                    backgroundColor: '#e9f1f2',
                    margin: 0,
                    display: 'flex',
                    flexWrap: 'wrap', 
                    alignItems: 'center',
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    marginTop: '5px',
                    width: '100%'}}>
                        <Tasks />      
                </Box>
                
        </Container>
    )

}

MainApp.displayName = 'MainApp';

export default MainApp;