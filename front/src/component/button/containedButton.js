import { styled } from "@mui/material";

const ContainedButton = props => {
    const Button = styled("div")({
        backgroundColor: "#5F9EA0",
        width: props.width,
        height: "2.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid",
        padding: "10px",
        borderRadius: "30px",
        color: "white",
        cursor: "pointer",
        margin: "1rem",
    });

    return (
        <Button>{props.children}</Button>
    );
};

export default ContainedButton;