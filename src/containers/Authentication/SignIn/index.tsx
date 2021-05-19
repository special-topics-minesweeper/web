import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from "./styles";
import { IAuth } from "../types";
import loginUser from '../../../utils/fetch/loginUser';
import { set as setToken } from '../../../utils/token';
import { Alert } from "@material-ui/lab";

const SignIn = ({ changeView }: IAuth) => {
  const classes = useStyles();
  const history = useHistory();
  const [error, setError] = useState('');

  const [user, setUser] = useState({
    login: '',
    password: '',
  });
  const onChange = useCallback((e, field) => {
    setUser(prev => ({ ...prev, [field]: e.target.value }));
  }, []);

  const login = useCallback((e) => {
    e.preventDefault();
    loginUser(user).then(data => {
      setToken(data.data.key);
      history.push('/play');
    }).catch((error) => {
      setError(error.response.data.message);
    });
  }, [history, user]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username or Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => onChange(e, 'login')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => onChange(e, 'password')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            Sign In
          </Button>
          {!!error && <Alert severity="error" variant="outlined" >{error}</Alert>}
          <Grid container justify="flex-end">
            <Grid item className={classes.viewSwitcher} >
              <Link onClick={changeView} variant="body2" >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}


export default SignIn;
