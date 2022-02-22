// DEPENDENCIES IMPORTATIONS
import { useNavigate } from "react-router-dom";
// MUI IMPORTATIONS
import {
    Box,
    Button,
} from "@mui/material";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <Button variant="contained" onClick={() => navigate("/login")}>Se connecter</Button>
            <Button variant="contained" onClick={() => navigate("/register")}>Créer un compte</Button>
        </Box>
    );
};

export default Navbar;