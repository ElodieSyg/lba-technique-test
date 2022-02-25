import { useState } from "react";
// DEPENDENCIES IMPORTATIONS
import axios from "axios";
import { useNavigate } from "react-router-dom";
// UTILS IMPORTATIONS
import preventDefault from "../../util/preventDefault";
import { server } from "../../tool";
// MUI IMPORTATIONS
import {
    CssBaseline,
    TextField,
    Link,
    Grid,
    Container,
} from "@mui/material";
import { styled } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
// COMPONENTS IMPORTATIONS
import ContainedButton from "../../component/button/containedButton";
import StyledTypography from "../../component/typography";
import ErrorAlert from "../../component/alert/error";

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

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post(`${server}/login`, { email, password }, { withCredentials: true })
            .then(res => {
                if (res.data.status === "Success") {
                    navigate("/dashboard");
                } else {
                    setError(true);
                }
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="xs">
                {
                    error && <ErrorAlert message="Incorrect credentials" />
                }
                <StyledContainer>
                    <Item>
                        <StyledTypography component="h1" variant="h5">
                            Se connecter
                        </StyledTypography>
                    </Item>
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
                            onChange={e => setEmail(e.target.value)}
                        />
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
                                width="10rem"
                                variant="contained"
                                onClick={handleSubmit}
                            >
                                Se connecter
                            </ContainedButton>
                        </Item>
                        <Grid container>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Vous n'avez pas de compte? Créez en un ici"}
                                </Link>
                            </Grid>
                        </Grid>
                    </FormContainer>
                </StyledContainer>
            </Container>
        </ThemeProvider >
    );
};

export default Login;