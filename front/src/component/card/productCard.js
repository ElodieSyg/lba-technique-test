import {
    CardContent,
    Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import StarIcon from '@mui/icons-material/Star';

const StyledCard = styled("div")({
    margin: "1rem",
    width: "12rem",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
});

const WarrantyContainer = styled("div")({
    display: "flex",
    alignItems: "center",
});

const ProductCard = props => {
    return (
        <StyledCard>
            <CardContent>
                <Typography>
                    {props.product.type}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.product.name}
                </Typography>
                <Typography>
                    {props.product.price} $
                </Typography>
                <Typography variant="body2">
                    <WarrantyContainer>
                        {props.product.rating}
                        <StarIcon sx={{ color: "#FFD700" }} />
                    </WarrantyContainer>
                    <br />
                    Guaranteed {props.product.warranty_years} year
                    <br />
                    {
                        props.product.available === true
                            ? <p>Available</p>
                            : <p>Not available</p>
                    }
                </Typography>
            </CardContent>
        </StyledCard>
    );
};

export default ProductCard;