import { useState } from "react";
// DEPENDENCIES IMPORTATIONS
import axios from "axios";
import { useNavigate } from "react-router-dom";
// UTILS IMPORTATIONS
import preventDefault from "../../util/preventDefault";
import { server } from "../../tool";
// MUI IMPORTATIONS
import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container
} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from "@mui/system";
import StyledTypography from "../../component/typography";
import ContainedButton from "../../component/button/containedButton";

const theme = createTheme();

const StyledContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
});

const Item = styled("div")({
    margin: "0.5rem",
});

const FormContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "30rem",
});

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post(`${server}/register`, { email, password }, { withCredentials: true })
            .then(res => {
                console.log("response in handle submit", res);
                if (res.data.status === "Success") {
                    navigate("/login");
                };
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <StyledContainer>
                <StyledTypography component="h1" variant="h5">
                    Créer un compte
                </StyledTypography>
                <FormContainer component="form" onSubmit={(e) => preventDefault(e)} noValidate>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={e => setEmail(e.target.value)} />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Item>
                        <ContainedButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={handleSubmit}
                        >
                            Sign In
                        </ContainedButton>
                    </Item>
                    <Grid container>
                        <Grid item>
                            <Link href="/login" variant="body2">
                                {"Vous avez déjà un compte? Connectez-vous ici"}
                            </Link>
                        </Grid>
                    </Grid>
                </FormContainer>
            </StyledContainer>
        </ThemeProvider>
    );
};

export default Register;