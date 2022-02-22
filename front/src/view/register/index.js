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

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post(`${server}/register`, { email, password }, { withCredentials: true })
            .then(res => {
                console.log("response in handle submit", res);
                if (res.data.status === "Success") {
                   navigate ("/login");
                };
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box>
                    <Typography component="h1" variant="h5">
                        Créer un compte
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
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    {"Vous avez déjà un compte? Connectez-vous ici"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Register;