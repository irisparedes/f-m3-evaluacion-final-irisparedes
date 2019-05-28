import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
    render() {
        const {filterName, filterDate} = this.props;
        return (
            <div className="container__filters">
                <div className="filters">
                    <label className="filters__label" htmlFor="name">Busca tu personaje</label>
                    <input type="text" className="input" id="name" onChange={filterName}/>
                </div>
                <div className="filters__date">
                    <label className="filters__date" htmlFor="date">Busca tu personaje</label>
                    <input type="number" className="input" id="date" onChange={filterDate}/>
                </div>
            </div>

        );
    }
}
Filters.propTypes = {
    filterName: PropTypes.func
};


export default Filters;
