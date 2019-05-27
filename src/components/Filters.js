import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
    render() {
        const {filterName} = this.props;
        return (
            <div className="filters">
                <label className="filters__label" htmlFor="name">Busca tu personaje</label>
                <input type="text" className="input" id="name" onChange={filterName}/>
            </div>

        );
    }
}
Filters.propTypes = {
    filterName: PropTypes.func
};


export default Filters;
