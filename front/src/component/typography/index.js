import { styled } from "@mui/system";

const SyledTypography = styled("p")({
    color: "#5F9EA0",
    fontSize: "1.5rem",
    margin: "0rem 0rem 1rem 0rem"
});

const StyledTypography = props => {
    return (
        <SyledTypography>
            {props.children}
        </SyledTypography>
    );
};

export default StyledTypography;