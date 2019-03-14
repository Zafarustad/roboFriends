import React, { Component } from 'react';
import Cardlist from '../Components/Cardlist';
import { Robots } from '../Components/Robots';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
 import './app.css';

class App extends Component{
   constructor(){
       super()
       this.state = {
          Robots: [],
           searchfield: ""
       }
   }

   componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=> response.json())
       .then(users=> this.setState({ Robots: users })); 
    }

   onSearchChange = (event) => {
       this.setState({ searchfield: event.target.value })
   }
   
    render(){
        const filteredRobots = this.state.Robots.filter(Robots =>{
            return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.Robots.length === 0){
            return <h1 className= "tc"> LOADING...</h1>
        }
        else{
    return(
        <div className="tc">
           <h1>RoboFriends</h1>
           <Searchbox searchChange={this.onSearchChange}/>
           <Scroll>
           <Cardlist Robots = {filteredRobots}/>
           </Scroll>
        </div>   
       );
    }
   } 

}

export default App;