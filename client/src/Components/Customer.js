import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.table_name}</TableCell>
            </TableRow>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
        <div>
            <p>{this.props.월소득}</p>
            <p>{this.props.고객명}</p>
            <p>{this.props.나이}</p>
            <p>{this.props.성별}</p>
            <p>{this.props.연락처}</p>
            <p>{this.props.직업}</p>
        </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}({this.props.table_name})</h2>
            </div>
        )
    }
}

export default Customer;