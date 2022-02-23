import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ErrorAlert = props => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert onClose={() => props.setErrorAlert(false)}>{props.message}!</Alert>
        </Stack>
    );
};

export default ErrorAlert;
