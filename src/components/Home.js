import React, {Component} from 'react';
import Filters from './Filters';
import CardList from './CardList';
import PropTypes from 'prop-types';
import '../stylesheets/_home.scss';

class Home extends Component {
    render() {
        const {cardsCharacters, queryName, filterName, paintHouse, queryDate, filterDate} = this.props;
        return (
            <div className="home__container">
                <Filters filterName={filterName} queryName={queryName} filterDate={filterDate}/>
                <CardList cardsCharacters={cardsCharacters} queryName={queryName} paintHouse={paintHouse}  queryDate={queryDate}/>
            </div>
               
        );
    }
}

Home.propTypes = {
    cardsCharacters: PropTypes.array,
    queryName: PropTypes.string,
    filterName: PropTypes.func,
    paintHouse: PropTypes.func
};



export default Home;


