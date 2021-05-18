import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from "./styles";
import { IAuth } from "../types";
import { useCallback, useContext, useState } from "react";
import { set as setToken } from "../../../utils/token";
import { useHistory } from "react-router-dom";
import { createUser } from "../../../utils/fetch/createUser";
import { Alert } from "@material-ui/lab";
import { UserContext } from "../../../utils/contexts";

const SignUp = ({ changeView } : IAuth) => {
  const classes = useStyles();
  const history = useHistory();
  const { setUser: setUserData } = useContext(UserContext);

  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
  });
  const [error, setError] = useState('');
  const onChange = useCallback((e, field) => {
    setUser(prev => ({ ...prev, [field]: e.target.value }));
  }, []);

  const register = useCallback((e) => {
    e.preventDefault();
    setError('');
    createUser(user).then(data => {
      setToken(data?.data?.key);
      setUserData(data?.data?.user);
      history.push('/play');
    }).catch((error) => {
      setError(error.response.data.message);
    });
  }, [history, setUserData, user]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => onChange(e, 'firstname')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => onChange(e, 'lastname')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => onChange(e, 'email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={(e) => onChange(e, 'username')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => onChange(e, 'password')}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={register}
          >
            Sign Up
          </Button>
          {!!error && <Alert severity="error" variant="outlined" >{error}</Alert>}
          <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={changeView} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;
