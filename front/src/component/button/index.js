import { styled } from "@mui/material";

const StyledButton = props => {
    const Button = styled("div")({
        backgroundColor: "white",
        width: props.width,
        height: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "999px",
        color: "#5F9EA0",
        cursor: "pointer",
        margin: "1rem",
    });

    return (
        <Button>{props.children}</Button>
    );
};

export default StyledButton;