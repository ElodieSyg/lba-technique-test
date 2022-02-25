import { useState } from "react";
import axios from "axios";
import { styled } from "@mui/system";
import { server } from "../../tool";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Switch,
    Typography,
} from "@mui/material";

const StyledDialogContent = styled("div")({
    display: "flex",
    flexDirection: "column",
});

const PostDialog = props => {
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [price, setPrice] = useState();
    const [rating, setRating] = useState();
    const [warranty_years, setWarranty_years] = useState();
    const [checked, setChecked] = useState(true);

    const handlePost = () => {
        axios.post(`${server}/product`, { name, type, price, rating, warranty_years, available: checked }, { withCredentials: true })
            .then(res => {
                if (res.data.status === "Success") {
                    props.setOpenPost(false);
                    props.setProductsNF(
                        prevState => [...prevState, res.data.newProduct]
                    );
                    props.setSuccessAlert(true);
                } else {
                    props.setErrorAlert(true);
                };
            });
    };

    const handleChangeAvailable = e => {
        setChecked(e.target.checked);
    };

    return (
        <Dialog
            open={props.openPost}
            onClose={props.handleClosePost}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                {"Add a new product"}
            </DialogTitle>
            <DialogContent>
                <StyledDialogContent id="alert-dialog-description">
                    <TextField
                        type="text"
                        id="name"
                        label="Name your product"
                        variant="standard"
                        onChange={e => setName(e.target.value)} />
                    <TextField
                        type="text"
                        id="type"
                        label="Type"
                        variant="standard"
                        onChange={e => setType(e.target.value)} />
                    <TextField
                        type="number"
                        id="price"
                        label="Price"
                        variant="standard"
                        onChange={e => setPrice(e.target.value)} />
                    <TextField
                        type="number"
                        id="rating"
                        label="Rating"
                        variant="standard"
                        onChange={e => setRating(e.target.value)} />
                    <TextField
                        type="number"
                        id="warranty_years"
                        label="Guarentee"
                        variant="standard"
                        onChange={e => setWarranty_years(e.target.value)} />
                    <Typography sx={{ mt: "1rem" }}>Please check if your product is available</Typography>
                    <Switch
                        checked={checked}
                        onChange={handleChangeAvailable}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </StyledDialogContent>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClosePost}>Close</Button>
                <Button onClick={handlePost} autoFocus>
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PostDialog;