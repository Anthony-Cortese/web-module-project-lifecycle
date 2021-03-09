import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import Card from './components/Card'

class App extends Component {
  state = {
    userData: {},
    followers: []
  }
//method inside of an object
//axios call
  componentDidMount() {
    axios
    .get('https://api.github.com/users/Anthony-Cortese')
    .then(res => {
      this.setState({userData: res.data})
      console.log(res.data)
      axios.get(res.data.followers_url)
      //followers_url: "https://api.github.com/users/Anthony-Cortese/followers"
      .then(res => {
        this.setState({followers: res.data})
      })
      .catch(err=> console.log(err.message))
    })
    .catch(err=> console.log(err.message))
    
  }
  
  
  
  
  render() {
    const { userData, followers } = this.state
    const { login } = userData
    console.log(userData, followers)
    console.log({login})

    return (
      <div>

        <div className="words">
        <h1>Class Components</h1>
        <h2>Learning The Basics</h2>
        <h3>With My Friends</h3>
        </div>
        <div className="header">

        </div>
        <div className="container">
        <Card 
        {...userData} 
        />
        
        {followers.map((data)=> (
            <Card {...data}/>
        ))}
        
        </div>
      </div>
    )
  }
}

export default App