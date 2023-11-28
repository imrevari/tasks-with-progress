import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { FC } from "react";


const Tasks: FC<any> = () => {


    return(
    <Box sx={{ 
                display: 'flex',
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                marginTop: '75px', marginBottom: '80px', width: '90%'}}>
         <List
            sx={{ width: '80%', 
                bgcolor: 'background.paper', 
                padding: 0,
                borderRadius: '5px'}}
            component="div"
            aria-labelledby="nested-list-subheader"
            >
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentTurnedInOutlinedIcon fontSize="small" sx={{ color: 'green' }}/>
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
            </ListItemButton>

            <Divider />

            <ListItemButton>
                <ListItemIcon>
                    <AssignmentOutlinedIcon fontSize="small" sx={{ color: 'green' }}/>
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItemButton>

            <Divider />

            <ListItemButton onClick={ () => console.log('click')}>
                <ListItemIcon>
                    <AssignmentOutlinedIcon fontSize="small" sx={{ color: 'green' }}/>
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {'Show  '}<ExpandLess />
                <ExpandMore />
            </ListItemButton>
            {/* <Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                </ListItemButton>
                </List>
            </Collapse> */}
        </List>
    </Box>)

}

Tasks.displayName = 'Tasks';

export default Tasks;