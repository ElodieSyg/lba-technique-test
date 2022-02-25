import { useState, useEffect } from "react";
// UTILS IMPORTATIONS
import { server } from "../../tool";
// DEPENDENCIES IMPORTATIONS
import axios from "axios";
import { styled } from "@mui/material";
import { Tooltip } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
// COMPONENTS IMPORTATIONS
import Navbar from "../../component/navbar";
import DashboardDataGrid from "../../component/datagrid";
import StyledTypography from "../../component/typography";
import SuccessAlert from "../../component/alert/success";
import ErrorAlert from "../../component/alert/error";
import PostDialog from "../../component/dialog/postDialog";

const Container = styled("div")({
    margin: "3rem",
});

const StyledBox = styled("Box")({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
});

const StyledCursor = styled("div")({
    cursor: "pointer",
});

const Dashboard = () => {
    const [products, setProducts] = useState(null);
    const [productsNF, setProductsNF] = useState(null);
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    const [openPost, setOpenPost] = useState(false);

    useEffect(() => {
        axios.get(`${server}/product`, { withCredentials: true })
            .then(res => {
                setProducts(res.data.products);
                setProductsNF(res.data.newFormat);
            });
    }, []);

    const handleClosePost = () => {
        setOpenPost(false);
    };

    if (!productsNF) {
        return (
            <div>Loading...</div>
        );
    };

    return (
        <>
            <Navbar />
            <Container>
                {
                    successAlert &&
                    <SuccessAlert
                        setSuccessAlert={setSuccessAlert}
                        message="Action succefully done !" />
                }
                {
                    errorAlert &&
                    <ErrorAlert
                        setErrorAlert={setErrorAlert}
                        message="An error happenned, please try again in few minutes" />
                }
                <StyledBox>
                    <StyledTypography>Welcome on your dashboard !</StyledTypography>
                    <Tooltip title="Add a new product">
                        <StyledCursor>
                            <AddIcon fontSize="large" onClick={() => setOpenPost(true)} />
                        </StyledCursor>
                    </Tooltip>
                </StyledBox>
                <DashboardDataGrid
                    products={products}
                    productsNF={productsNF}
                    setProductsNF={setProductsNF}
                    setSuccessAlert={setSuccessAlert}
                    setErrorAlert={setErrorAlert} />
                {
                    openPost &&
                    <PostDialog
                        openPost={openPost}
                        setOpenPost={setOpenPost}
                        handleClosePost={handleClosePost}
                        setSuccessAlert={setSuccessAlert}
                        productsNF={productsNF}
                        setProductsNF={setProductsNF} />
                }
            </Container>
        </>
    );
};

export default Dashboard;