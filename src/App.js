import React from 'react';
import {fetchPotter} from './services/fetchPotter';
import Home from './components/Home';
import './components/CardList';
import DetailsCard from './components/DetailsCard';
import {Switch, Route} from 'react-router-dom';
import redHouse from './images/gryffindor.png';
import greenHouse from './images/slytherin.png';
import yellowHouse from './images/hufflepuff.png';
import blueHouse from './images/ravenclaw.png';
import './stylesheets/App.scss';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cards: [],
      queryName: '',
      queryDate: 0
    };
    this.handleFilterName = this.handleFilterName.bind(this);
    this.getCards = this.getCards.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.handleFilterDate = this.handleFilterDate.bind(this);
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

  handleFilterDate(event) {
    const cardDate = event.currentTarget.value;
    console.log(cardDate);

      this.setState({
        queryDate: cardDate
      })

  }



  resetFilters() {
    this.setState({queryName: ''});
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

  paintHouse(character) {
    const house = character.house.toLowerCase();
    if(house === 'gryffindor') {
      return redHouse
    }else if (house === 'slytherin') {
      return greenHouse
    }else if (house === 'hufflepuff') {
      return yellowHouse
    } else {
      return blueHouse
    }
  }

  render() {
    const {cards, queryName} = this.state;
    const {resetFilters, paintHouse} = this;
    return (
      <div className="App">
        <header className="header">
          <h1 className="App__title">Harry Potter Characters</h1>
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/" render={() => <Home 
              cardsCharacters={cards}
              queryName={queryName}
              filterName={this.handleFilterName}
              paintHouse={paintHouse}
              queryDate={this.state.queryDate}
              filterDate={this.handleFilterDate}
              />} />
            <Route path="/detailscard/:id"  render={routerProps => <DetailsCard 
              match={routerProps.match} 
              cardsCharacters={cards}
              resetFilters={resetFilters}
              paintHouse={paintHouse}
              />}/>
          </Switch> 
        </main> 
      </div>
    );
  }
}

export default App;
