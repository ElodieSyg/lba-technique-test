import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";
import {
    Tooltip,
} from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import PatchDialog from "../dialog/patchDialog";
import DeleteDialog from "../dialog/deleteDialog";

const StyledBox = styled("div")({
    display: "flex",
    justifyContent: "space-evenly",
    width: 190,
});

const DashboardDataGrid = props => {
    const [openPatch, setOpenPatch] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [id, setId] = useState(null);

    const columns = [
        { id: 1, field: "name", headerName: "Name", width: 190 },
        { id: 2, field: "type", headerName: "Type", width: 190 },
        { id: 3, field: "price", headerName: "Price ($)", width: 190 },
        { id: 4, field: "rating", headerName: "Rating", width: 190 },
        { id: 5, field: "warranty_years", headerName: "Guarentee", width: 190 },
        { id: 6, field: "available", headerName: "Available", width: 190 },
        {
            id: 7, field: "action", headerName: "Patch or delete", width: 190,
            renderCell: params => {
                return (
                    <StyledBox>
                        <Tooltip title="Patch your product">
                            <BuildCircleIcon onClick={() => handlOpenPatch(params.row._id)} />
                        </Tooltip>
                        <Tooltip title="Delete your product">
                            <RemoveCircleIcon onClick={() => handleOpenDelete(params.row._id)} />
                        </Tooltip>
                    </StyledBox >
                );
            },
        },
    ];

    const handlOpenPatch = id => {
        setOpenPatch(true);
        setId(id);
    };

    const handleClosePatch = () => {
        setOpenPatch(false);
    };

    const handleOpenDelete = id => {
        setOpenDelete(true);
        setId(id);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                getRowId={(row) => row._id}
                columns={columns}
                rows={props.productsNF}
            />
            {
                openPatch &&
                <PatchDialog
                    openPatch={openPatch}
                    handleClosePatch={handleClosePatch}
                    id={id}
                    setSuccessAlert={props.setSuccessAlert}
                    setErrorAlert={props.setErrorAlert}
                    productsNF={props.productsNF}
                    setProductsNF={props.setProductsNF} />
            }
            {
                openDelete &&
                <DeleteDialog
                    openDelete={openDelete}
                    handleCloseDelete={handleCloseDelete}
                    id={id}
                    productsNF={props.productsNF}
                    setProductsNF={props.setProductsNF}
                    setSuccessAlert={props.setSuccessAlert}
                    setErrorAlert={props.setErrorAlert} />
            }
        </div>
    );
};

export default DashboardDataGrid;