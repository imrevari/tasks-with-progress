import { Box, Container } from "@mui/material";
import { FC, useEffect, useState } from "react";
import Tasks from "./Tasks";
import { GroupOfTasks } from "../constants/interfaces";
import axios from "axios";
import { API_URL } from "../constants/constants";


const MainApp: FC = () => {

    const [groupsOfTasks, setGroupsOFTasks] = useState<GroupOfTasks[]>([])
    
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

                <Tasks tasks={groupsOfTasks}/>
                        
            </Box>
        </Container>
    )

}

MainApp.displayName = 'MainApp';

export default MainApp;