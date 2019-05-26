import React from 'react';
import './App.css';
import {fetchPotter} from './services/fetchPotter';
import Home from './components/Home';
import './components/CardList';
import DetailsCard from './components/DetailsCard';
import { Link, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cards: [],
      queryName: ''
    };
    this.handleFilterName = this.handleFilterName.bind(this);
    this.getCards = this.getCards.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
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


  render() {
    const {cards, queryName} = this.state;
    return (
      <div className="App">
        {/* <Link className="app__menu-link" to="/">Home</Link> */}
        <Switch>
          <Route exact path="/" render={() => <Home 
            cardsCharacters={cards}
            queryName={queryName}
            filterName={this.handleFilterName}
             />} />
          <Route path="/detailscard/:id"  render={routerProps => <DetailsCard 
            match={routerProps.match} 
            cardsCharacters={cards}
            resetFilters={this.resetFilters}
            />}/>
        </Switch>  
      </div>
    );
  }
}

export default App;
