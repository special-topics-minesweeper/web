import { useCallback, useContext, useEffect, useState } from "react";
import { getStats } from "../../utils/fetch/getStats";
import { Difficulty } from "../Game/types";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from "./styles";
import { Container, Typography } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NoResult from "../../componets/Icons/NoResult";
import classNames from "classnames";
import { UserContext } from "../../utils/contexts";


const LeaderBoard = () => {
  const classes = useStyles();
  const {user} = useContext(UserContext);
  const [difficulty, setDifficulty] = useState(Difficulty.MEDIUM);
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    getStats({ difficulty }).then(data => {
      setLeaders(data.data);
    })
  }, [difficulty])

  const [open, setOpen] = useState(false);

  const handleChange = useCallback((event: any) => {
    setDifficulty(event.target.value);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <Container>
      <Typography variant="h5" className={classes.title}>Leaderboard</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Difficulty</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={difficulty}
          onChange={handleChange}
        >
          <MenuItem value={Difficulty.EASY}>Easy</MenuItem>
          <MenuItem value={Difficulty.MEDIUM}>Medium</MenuItem>
          <MenuItem value={Difficulty.HARD}>Hard</MenuItem>
        </Select>
      </FormControl>
      {!leaders.length ? (
          <div className={classes.empty}>
            <NoResult/>
            <span>No results, try another difficulty</span>
          </div>
        )
        :
        (<TableContainer component={Paper}>
            <Table className={classes.table} aria-label="leaderboard">
              <TableHead>
                <TableRow>
                  <TableCell>FirstName</TableCell>
                  <TableCell>LastName</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell align="right">Best Result</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaders.map((row: any) => {
                  return (
                    <TableRow key={row.username} className={classNames({
                      [classes.highlight]: row.username === user?.username
                    })}>
                      <TableCell component="th" scope="row">
                        {row.firstname}
                      </TableCell>
                      <TableCell>{row.lastname}</TableCell>
                      <TableCell>{row.username}</TableCell>
                      <TableCell
                        align="right">{row.best_results[difficulty] < 0 ? '-' : row.best_results[difficulty]}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
    </Container>)
}

export default LeaderBoard;
