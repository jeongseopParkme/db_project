import logo from './logo.svg';
import './App.css';
import Customer from './Components/Customer';
import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from'@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX:"auto"
  },
  table:{
    minwidth: 1080
  }
})

const customers = [
  {
  'id' : 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '박정섭',
  'age': '26',
  'gender': 'male',
  'phonenumber': '000-0000-0000'
  },
  {
    'id' : 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길동',
    'age': '23',
    'gender': 'female',
    'phonenumber': '111-1111-1111'
  },
  {
    'id' : 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '김철수',
    'age': '20',
    'gender': 'male',
    'phonenumber': '222-2222-2222'
  }
]

class App extends Component {
  render(){
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>no.</TableCell>
              <TableCell>image</TableCell>
              <TableCell>name</TableCell>
              <TableCell>age</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>phone number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c=>{return(<Customer  id={c.id}  image={c.image}  name={c.name}  age={c.age}  gender={c.gender}  phonenumber={c.phonenumber}/>);})}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}
export default withStyles(styles)(App);