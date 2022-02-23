import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const SuccessAlert = props => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert onClose={() => props.setSuccessAlert(false)}>{props.message}!</Alert>
        </Stack>
    );
};

export default SuccessAlert;
