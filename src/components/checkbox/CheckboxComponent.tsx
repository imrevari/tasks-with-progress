import { Checkbox, FormControlLabel } from "@mui/material";
import { FC } from "react";

interface CheckboxComponentProps {
    checked: boolean;
    label: string;
}


const CheckboxComponent: FC<CheckboxComponentProps> = ({checked, label}) => {

return(
    <FormControlLabel 
        sx={{marginLeft: '20px'}}
        control={
             <Checkbox 
                checked={checked}
                size="small" 
                sx={{   marginRight: '5px',
                        '&.Mui-checked': {
                        color: 'green',
                } }}
    />} label={label} />
)

}
CheckboxComponent.displayName = 'CheckboxComponent';

export default CheckboxComponent;