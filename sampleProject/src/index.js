import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class MainApp extends Component{
    state = {
      data : [
          {
            "id": "1",
            "name": "Batman",
            "power": "47",
            "full-name": "Bruce Wayne",
            "url": "images/batman.jpg"
          },
          {
            "id": "2",
            "name": "Ant-Man",
            "power": "53",
            "full-name": "Scott Lang",
            "url": "images/antman.jpg"
          },
          {
            "id": "3",
            "name": "Scarlet Witch",
            "power": "100",
            "full-name": "Wanda Maximoff",
            "url": "images/scarletwitch.jpg"
          },
          {
            "id": "4",
            "name": "Deadpool",
            "power": "100",
            "full-name": "Wade Wilson",
            "url": "images/deadpool.jpg"
          },
          {
            "id": "5",
            "name": "Captain Marvel",
            "power": "100",
            "full-name": "Carol Danvers",
            "url": "images/captainmarvel.jpg"
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

