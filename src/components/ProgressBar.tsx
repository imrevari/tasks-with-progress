import { FC, useMemo } from "react";
import { useStateContext } from "../stateContext/StateContext";
import { Box, LinearProgress, Typography } from "@mui/material";


const ProgressBar: FC = () => {


    const {groupsOfTasks, totalPoints} = useStateContext()

    const fulfilledPercentage = useMemo(() => {
        let total = 0;
        groupsOfTasks.forEach( ({tasks}) => {
            tasks.forEach( ({value, checked}) => {if(checked){total = total + value}})
        });
        return  (total / totalPoints) * 100;
    }, [groupsOfTasks, totalPoints])


    const percentagePosition = (fulfilledPercentage: number) => {
            if((105 - fulfilledPercentage) > 95){
                return 95
            }
            if((105 - fulfilledPercentage) < 7){
                return 10
            }
            return (105 - fulfilledPercentage)
 
    }

    return(<Box sx={{ width: '90%', display: 'flex', marginTop: '35px', flexDirection: 'column'}}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Lodgify Grouped Tasks</Typography>

            <Box sx={{ width: '105%', display: 'flex', marginTop: '5px'}}>
                
                <LinearProgress 
                    sx={{height: '20px', borderRadius: '11px', width: '100%',
                        '&.MuiLinearProgress-root':{
                            backgroundColor: '#f8fcfc'
                        },

                        ' > span': {
                            '&.MuiLinearProgress-bar1Determinate' :{
                                borderRadius: '11px',
                                backgroundColor: '#08b494'
                            }
                        }
                        
                    }}
                    variant="determinate" 
                    value={fulfilledPercentage} />

                <Typography 
                sx={{left: `-${percentagePosition(fulfilledPercentage)}%`, 
                        position: 'relative',
                        transitionDuration: '0.4s',
                        transitionTimingFunction: 'linear'}}
                variant="body2" color={fulfilledPercentage > 5 ? "white" : 'inherit'}>{`${Math.round(
                fulfilledPercentage
                )}%`}</Typography>
            </Box>
    </Box>)

}

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;