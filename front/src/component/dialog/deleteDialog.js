import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from "@mui/material";
import axios from "axios";
import { server } from "../../tool";

const DeleteDialog = props => {
    const handleDelete = () => {
        axios.delete(`${server}/product/${props.id}`, { withCredentials: true })
            .then(res => {
                if (res.data.status === "Success") {
                    props.setSuccessAlert(true);
                } else {
                    props.setErrorAlert(true);
                };
            })
            .then(
                props.handleCloseDelete
            );
    };
    
    return (
        <Dialog
            open={props.openDelete}
            onClose={props.handleCloseDelete}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                {"Are you absolutely sure?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    This action cannot be undone. This will permanently delete the product.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleCloseDelete}>Disagree</Button>
                <Button onClick={handleDelete} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteDialog;