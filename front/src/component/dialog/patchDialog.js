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

const PatchDialog = props => {
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [price, setPrice] = useState();
    const [rating, setRating] = useState();
    const [warranty_years, setWarranty_years] = useState();
    const [checked, setChecked] = useState(true);

    const handlePatch = () => {
        axios.patch(`${server}/product/${props.id}`, { name, type, price, rating, warranty_years, available: checked }, { withCredentials: true })
            .then(res => {
                if (res.data.status === "Success") {
                    if (res.data.status === "Success") {
                        window.location.reload();
                    } else {
                        console.log("Add error here");
                    };                }
            })
    };

    const handleChangeAvailable = e => {
        setChecked(e.target.checked);
    };

    return (
        <Dialog
            open={props.openPatch}
            onClose={props.handleClosePatch}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                {"Patch your product"}
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
                        type="text"
                        id="rating"
                        label="Rating"
                        variant="standard"
                        onChange={e => setRating(e.target.value)} />
                    <TextField
                        type="text"
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
                <Button onClick={props.handleClosePatch}>Disagree</Button>
                <Button onClick={handlePatch} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PatchDialog;