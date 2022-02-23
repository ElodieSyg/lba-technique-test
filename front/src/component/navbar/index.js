import { useState } from "react";
// DEPENDENCIES IMPORTATIONS
import {
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Avatar,
    Tooltip,
    MenuItem,
} from "@mui/material";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
// COMPONENTS IMPORTATIONS
import StyledButton from "../button";

const StyledAppBar = styled("div")({
    backgroundColor: "#5F9EA0",
    display: "flex",
    justifyContent: "end",
});

const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();

    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleRedirect = path => {
        navigate(path);
    };

    const handleLogout = () => {
        // add logout request
    };

    const LoggedNavbar = () => {
        return (
            <Toolbar>
                <Box>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        sx={{ mt: '45px' }}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem>
                            <Typography onClick={() => handleRedirect("/dashboard")}>Dashboard</Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography onClick={handleLogout}>Logout</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        );
    };

    const NoLoggedNavbar = () => {
        return (
            <Toolbar>
                <StyledButton
                    variant="contained"
                    width="8rem"
                    onClick={() => handleRedirect("/login")}>
                    Login
                </StyledButton>
                <StyledButton
                    variant="outlined"
                    width="8rem"
                    onClick={() => handleRedirect("/register")}>
                    Logout
                </StyledButton>
            </Toolbar>
        );
    };

    return (
        <StyledAppBar position="static">
            { LoggedNavbar()}
        </StyledAppBar>
    );
};

export default Navbar;
