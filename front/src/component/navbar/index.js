import { Link } from "react-router-dom";
// MUI IMPORTATIONS
import {
    Box,
    Button,
} from "@mui/material";

const Navbar = () => {
    return (
        <Box>
            <Link to="/login">
                <Button variant="outlined">Se connecter</Button>
            </Link>
            <Link to="/register">
                <Button variant="outlined">Créer un compte</Button>
            </Link>
        </Box>
    );
};

export default Navbar;