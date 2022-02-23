import { useState, useEffect } from "react";
// UTILS IMPORTATIONS
import { server } from "../../tool";
// DEPENDENCIES IMPORTATIONS
import axios from "axios";
import { styled } from "@mui/material"
// COMPONENTS IMPORTATIONS
import DashboardDataGrid from "../../component/datagrid";
import StyledTypography from "../../component/typography";

const Container = styled("div")({
    margin: "3rem",
});

const Dashboard = () => {
    const [name, setName] = useState("name");
    const [type, setType] = useState("type");
    const [price, setPrice] = useState(100);
    const [rating, setRating] = useState(4.29);
    const [warranty_years, setWarranty_years] = useState(2);
    const [available, setAvailable] = useState(true);
    const [products, setProducts] = useState(null);
    const [productsNF, setProductsNF] = useState(null);

    useEffect(() => {
        axios.get(`${server}/product`, { withCredentials: true })
            .then(res => {
                setProducts(res.data.products);
                setProductsNF(res.data.newFormat);
            });
    }, []);

    const handleCreateProduct = () => {
        axios.post(`${server}/product`, { name, type, price, rating, warranty_years, available }, { withCredentials: true })
            .then(res => {
                console.log("result in handle create product", res);
            });
    };

    if (!productsNF) {
        return (
            <div>Loading...</div>
        );
    };

    return (
        <Container>
            <StyledTypography>Welcome on your dashboard !</StyledTypography>
            <DashboardDataGrid products={products} productsNF={productsNF} />
        </Container>
    );
};

export default Dashboard;