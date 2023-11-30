import { Box, LinearProgress, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { useStateContext } from "../../stateContext/StateContext";
import { styles } from "../../styles/styles";


const ProgressBar: FC = () => {


    const {groupsOfTasks, totalPoints} = useStateContext()

    const fulfilledPercentage = useMemo(() => {
        let total = 0;
        groupsOfTasks.forEach( ({tasks}) => {
            tasks.forEach( ({value, checked}) => {if(checked){total = total + value}})
        });
        return  Math.round((total / totalPoints) * 100);
    }, [groupsOfTasks, totalPoints])

    const percentagePosition = (fulfilledPercentage: number) => {
            if((100 - fulfilledPercentage) > 90){
                return 95
            }
            if((100 - fulfilledPercentage) < 2){
                return 7
            }
            if(fulfilledPercentage < 25){
                return 102 - fulfilledPercentage
            }
            if(fulfilledPercentage < 50){
                return 103 - fulfilledPercentage
            }
            if(fulfilledPercentage < 75){
                return 104 - fulfilledPercentage
            }
            return (105 - fulfilledPercentage)
 
    }

    return(<Box sx={styles.progressBarMainBox}>
            <Typography variant="h6" sx={styles.progressBarTypography}>
                Lodgify Grouped Tasks
            </Typography>

            {!isNaN(fulfilledPercentage) && <Box sx={styles.progressBarInnerBox}>
                <LinearProgress 
                    sx={styles.progressBarLinearProgress}
                    variant="determinate" 
                    value={fulfilledPercentage} />

                <Typography 
                    sx={{left: `-${percentagePosition(fulfilledPercentage)}%`, 
                            position: 'relative',
                            transitionDuration: '0.4s',
                            transitionTimingFunction: 'linear'}}
                    variant="body2" 
                    color={fulfilledPercentage > 5 ? "white" : 'inherit'}
                >
                    {`${Math.round(fulfilledPercentage)}%`}
                </Typography>
            </Box>}
    </Box>)

}

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;