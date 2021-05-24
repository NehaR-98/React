import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class MainApp extends Component{
    state = {
      data : [
          {
            "id": "1",
            "name": "Agra",
            "full-name": "Taj Mahal",
            "url": "images/tajmahal.jpg"
          },
          {
            "id": "2",
            "name": "Delhi",
            "full-name": "Red Fort",
            "url": "images/redfort.jpg"
          },
          {
            "id": "3",
            "name": "Amritsar",
            "full-name": "Golden Temple",
            "url": "images/goldentemple.jpg"
          },
          {
            "id": "4",
            "name": "Karnataka",
            "full-name": "Coorg",
            "url": "images/coorg.jpg"
          }
        ]
      
      
    }
 render(){
   return this.state.data.map( hero => <div className="box" key={ hero.id }>
      <h1>{hero.name}</h1>
      <h2>{hero['full-name']}</h2>
      <img width="150" src={hero.url} alt={hero.name} />
      <h2>{hero.power}</h2>
      </div>)


 }
}

ReactDOM.render(<MainApp/>,document.getElementById('root'));

