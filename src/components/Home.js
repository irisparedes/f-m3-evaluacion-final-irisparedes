import React, {Component} from 'react';
import Filters from './Filters';
import CardList from './CardList';

class Home extends Component {
    render() {
        const {cardsCharacters, queryName, filterName} = this.props;
        return (
            <React.Fragment>
                <h1 className="title">Harry Potter Characters</h1>
                <Filters filterName={filterName} queryName={queryName}/>
                <CardList cardsCharacters={cardsCharacters} queryName={queryName} />
            </React.Fragment>
               
        );
    }
}

export default Home;

