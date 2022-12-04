import './App.css';
//import Customer from './Components/Customer';
//import tableName from './Components/tableName';
import React, {Component, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
// import TableHead from'@material-ui/core/TableHead';
// import TableBody from '@material-ui/core/TableBody';
// import TableRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import axios from 'axios';

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

class App extends Component {
  state = {
    tableName: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({tableName: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/table');
    const body = await response.json();
    return body;
  }

  send =()=>{
    const client = axios.create();   // axios 기능생성
    const name = '내이름은 코난';   
    client.post('/api/aa' , {name} );   //axios 기능을 통한 post 사용및 name 값 전달.
 }

  render(){
    const {classes} = this.props;
    return (
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={this.state.tableName ? this.state.tableName.map(c=>{
            return(<Link to={`/${c.table_name}`}><button onClick={this.send}>{c.table_name}</button></Link>);}) : ""}>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
export default withStyles(styles)(App);