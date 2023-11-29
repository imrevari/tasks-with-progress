import { Checkbox, FormControlLabel } from "@mui/material";
import { FC } from "react";
import { styles } from "../../styles/styles";


interface CheckboxComponentProps {
    checked: boolean;
    label: string;
    onClick: (index: number) => void;
    index: number;
}


const CheckboxComponent: FC<CheckboxComponentProps> = ({checked, label, onClick, index}) => {
    

return(
    <FormControlLabel 
        sx={styles.checkboxLabel}
        control={
             <Checkbox
                onClick={() => onClick(index)} 
                checked={checked}
                size="small" 
                sx={styles.checkbox}
    />} label={label} />
)

}
CheckboxComponent.displayName = 'CheckboxComponent';

export default CheckboxComponent;