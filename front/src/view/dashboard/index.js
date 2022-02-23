import { useState, useEffect } from "react";
// UTILS IMPORTATIONS
import { server } from "../../tool";
// DEPENDENCIES IMPORTATIONS
import axios from "axios";
import { styled } from "@mui/material"
// COMPONENTS IMPORTATIONS
import DashboardDataGrid from "../../component/datagrid";
import StyledTypography from "../../component/typography";
import SuccessAlert from "../../component/alert/success";
import ErrorAlert from "../../component/alert/error";

const Container = styled("div")({
    margin: "3rem",
});

const Dashboard = () => {
    const [products, setProducts] = useState(null);
    const [productsNF, setProductsNF] = useState(null);
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    useEffect(() => {
        axios.get(`${server}/product`, { withCredentials: true })
            .then(res => {
                setProducts(res.data.products);
                setProductsNF(res.data.newFormat);
            });
    }, []);

    if (!productsNF) {
        return (
            <div>Loading...</div>
        );
    };

    return (
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
            <StyledTypography>Welcome on your dashboard !</StyledTypography>
            <DashboardDataGrid
                products={products}
                productsNF={productsNF}
                setSuccessAlert={setSuccessAlert}
                setErrorAlert={setErrorAlert} />
        </Container>
    );
};

export default Dashboard;