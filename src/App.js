import React from 'react';
import './App.css';
import {fetchPotter} from './services/fetchPotter';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Card from './components/Card';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cards: [],
      queryName: ''
    };
    this.handleFilterName = this.handleFilterName.bind(this);
  }

  componentDidMount() {
    this.getCards();
  }

  handleFilterName(event) {
    const cardQuery = event.currentTarget.value;

      this.setState({
        queryName: cardQuery
      })

  }

  getCards() {
    fetchPotter()
      .then(data => {

        const newCards = data.map((item, index) => {
          return {...item, id: index}
        });

       this.setState({
         cards: newCards
       });
      });
  }


  render() {
    const {cards, queryName} = this.state;
    return (
      <div className="App">
        <h1 className="title">Harry Potter Characters</h1>
        <div className="filters">
          <label htmlFor="name">Busca por nombre</label>
          <input type="text" className="input" id="name" onChange={this.handleFilterName}/>
        </div>
        <Switch>
          <Route exact path="/" render={() => <Home 
            cardsCharacters={cards}
            queryName={queryName}
             />} />
          <Route path="/card"  component={Card}/>
        </Switch>  
      </div>
    );
  }
}

export default App;
