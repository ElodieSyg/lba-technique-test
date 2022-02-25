import { useState, useEffect } from "react";
// DEPENDENCIES IMPORTATIONS
import axios from "axios";
// UTILS IMPORTATIONS
import { server } from "../../tool";
// COMPONENTS IMPORTATIONS
import ProductCard from "../../component/card/productCard";
import Navbar from "../../component/navbar";
// MUI IMPORTATIONS
import { styled } from "@mui/system";

const StyledBox = styled("div")({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "2rem 5rem 2rem 5rem",
    "@media (max-width:775px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});

const Home = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get(`${server}/product`, { withCredentials: true })
            .then(res => {
                setProducts(res.data.products);
            })
    }, []);

    if (!products) {
        return (
            <div>Loading...</div>
        );
    };

    return (
        <>
            <Navbar />
            <StyledBox>
                {
                    products.map(item => (
                        <ProductCard
                            key={item._id}
                            product={item} />
                    ))
                }
            </StyledBox>
        </>
    );
};

export default Home;