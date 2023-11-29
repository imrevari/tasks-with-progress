import { Checkbox, FormControlLabel } from "@mui/material";
import { FC } from "react";

interface CheckboxComponentProps {
    checked: boolean;
    label: string;
    onClick: (index: number) => void;
    index: number;
}


const CheckboxComponent: FC<CheckboxComponentProps> = ({checked, label, onClick, index}) => {
    

return(
    <FormControlLabel 
        sx={{marginLeft: '20px'}}
        control={
             <Checkbox
                onClick={() => onClick(index)} 
                checked={checked}
                size="small" 
                sx={{   marginRight: '5px',
                        '&.Mui-checked': {
                        color: '#08b494',
                } }}
    />} label={label} />
)

}
CheckboxComponent.displayName = 'CheckboxComponent';

export default CheckboxComponent;