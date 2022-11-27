import logo from './logo.svg';
import './App.css';
import Customer from './Components/Customer';
import React, {Component} from 'react';

const customers = [
  {
  'id' : 1,
  'image': 'https://placeimg.com/64/64/0',
  'name': '박정섭',
  'age': '26',
  'gender': 'male',
  'phonenumber': '000-0000-0000'
  },
  {
    'id' : 2,
    'image': 'https://placeimg.com/64/64/1',
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
    return (
      <div>
        {
          customers.map(c=>{return(<Customer  id={c.id}  image={c.image}  name={c.name}  age={c.age}  gender={c.gender}  phonenumber={c.phonenumber}/>);})
        }
      </div>
    )
  }
}
export default App;