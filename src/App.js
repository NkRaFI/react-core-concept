import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const sakib = ["Sakib Al Hasan", "100000", "All Rounder"];
  const products = [
    {name:"Samsung", model:"N90A", price:"$900"},
    {name:"iPhone", model:"pro max", price:"$1200"},
    {name:"One Plus", model:"7t", price:"$700"},
    {name:"xiaomi", model:"Note9", price:"$500"},
    {name:"Pocco", model:"f3", price:"$300"}
  ];
  return (
    <div className="App">
      <Counter></Counter>
      <h1 style={{color:"green", backgroundColor:"gold", padding:"10px"}}>Creating React Component</h1>
      <div style={{display:'grid', gridTemplateColumns: "repeat(auto-fill, minmax(350px,auto))"}}>
      <Person name={sakib[0]} salary={sakib[1]} expertise={sakib[2]}></Person>
      <Person name="Tamim" salary="100000" expertise="Batsman"></Person>
      <Person name="Mosfiqure Rahim" salary="100000" expertise="Batsman"></Person>
      <Person name="Mahmudullah Riyad" salary="100000" expertise="Batsman"></Person>
      <Person name="Mostafizur Rahman" salary="50000" expertise="Bowler"></Person>
      </div>
      
      <h1 style={{color:"green", backgroundColor:"gold", padding:"10px"}}>Products</h1>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(350px,auto))"}}>
        {
          products.map(pd => <Products product={pd}></Products>)
        }
      </div>
      
      <h1>Users Using API</h1>
      <Users></Users>

    </div>
  );
}

function Counter(){
  let [count, setCount] = useState(10);
  let handleIncrease = () => setCount(count+1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border:"2px solid green",
    borderRadius:"10px",
    padding:"10px",
    margin:"10px",
    fontSize:"25px",
    wordWrap:"break-word"
  }
  return(
    <div style={personStyle}>
      <h2>Name:{props.name}</h2>
      <h3>Profession: Cricketer</h3>
      <h4>Salary:{props.salary}, Expertise:{props.expertise}</h4>
    </div>
  )
}

function Products(props){
  const {name, model, price} = props.product
  const productsStyle = {
    border:"2px solid green",
    borderRadius:"10px",
    padding:"10px",
    margin:"10px",
    fontSize:"25px",
    wordWrap:"break-word"
  }
  return(
    <div style={productsStyle}>
      <h1>{name}</h1>
      <h3>{model}</h3>
      <h2>{price}</h2>
    </div>
  )
}

function Users(){
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(350px,auto))", gridGap:"10px" }}>
      {
      users.map(user => {
        return (
          <div style={{backgroundColor:"whitesmoke", padding:"10px"}}>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h3>{user.phone}</h3>
          </div>
        )
      })
      }
    </div>
  )
}

export default App;
