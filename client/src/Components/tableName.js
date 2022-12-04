import React from 'react';
import Table from '@material-ui/core/Table';

class tableName extends React.Component{
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
    
    render(){
        const {classes} = this.props;
        return(
        <Table className={classes.table}>
            {this.state.tableName ? this.state.tableName.map(c=>{
                return(<h2>{c.table_name}</h2>);
            }) : ""}
        </Table>
        )
    }
}

export default tableName;