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

const theme = createTheme();

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post(`${server}/login`, { email, password }, { withCredentials: true })
            .then(res => {
                console.log("response in handle submit", res);
                if (res.data.status === "Success") {
                   navigate ("/dashboard");
                };
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box>
                    <Typography component="h1" variant="h5">
                        Se connecter
                    </Typography>
                    <Box component="form" onSubmit={(e) => preventDefault(e)} noValidate>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Adresse mail"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Mot de passe"
                            type="password"
                            id="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={handleSubmit}
                        >
                            Se connecter
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Vous n'avez pas de compte? Créez en un ici"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Login;