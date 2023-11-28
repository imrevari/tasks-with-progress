import { Box, Container } from "@mui/material";
import axios from "axios";
import { FC, useEffect } from "react";
import { API_URL } from "../constants/constants";
import { useStateContext } from "../stateContext/StateContext";
import Tasks from "./Tasks";


const MainApp: FC = () => {

    const {setGroupsOFTasks} = useStateContext()
    
    useEffect(() => {
        axios.get(
            API_URL
        )
        .then(res => {
            const responseBody = res.data;
            if(responseBody){
                setGroupsOFTasks(responseBody)
            }
        }
          ).catch( error => {
            console.log(error)
          })

    }, [])


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