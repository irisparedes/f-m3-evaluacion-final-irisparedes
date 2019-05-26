import React, {Component} from 'react';
import Filters from './Filters';
import CardList from './CardList';
import PropTypes from 'prop-types';

class Home extends Component {
    render() {
        const {cardsCharacters, queryName, filterName} = this.props;
        return (
            <React.Fragment>
                <h1 className="home__title">Harry Potter Characters</h1>
                <Filters filterName={filterName} queryName={queryName}/>
                <CardList cardsCharacters={cardsCharacters} queryName={queryName} />
            </React.Fragment>
               
        );
    }
}

Home.propTypes = {
    cardsCharacters: PropTypes.array,
    queryName: PropTypes.string,
    filterName: PropTypes.func
};



export default Home;


