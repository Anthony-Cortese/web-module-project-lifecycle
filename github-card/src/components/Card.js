import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className='card'>
               <div className="imgCard">
                <img className="Img" src={this.props.avatar_url} alt="user"/>
               </div> 
                <div className='card-info'>
                <h1>{this.props.login}</h1>
                <p className='username'> Username: {this.props.login} </p>
                <p>Location: {this.props.location}</p>
                
                <p>Followers: {this.props.followers}</p>
                <p>Following:{this.props.following}</p>
                <p>Bio:{this.props.bio}</p>
            
            </div>
            </div>
        )
    }
}

export default Card