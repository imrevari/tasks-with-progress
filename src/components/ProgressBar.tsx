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
            return (105 - fulfilledPercentage)
 
    }

    return(<>
            <Box sx={{ width: '50%', display: 'flex', marginTop: '25px'}}>
                
                <LinearProgress 
                    sx={{height: '20px', borderRadius: '5px', width: '100%',
                        '&.MuiLinearProgress-root':{
                            backgroundColor: '#f8fcfc'
                        },

                        ' > span': {
                            '&.MuiLinearProgress-bar1Determinate' :{
                                borderRadius: '5px',
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
    </>)

}

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;