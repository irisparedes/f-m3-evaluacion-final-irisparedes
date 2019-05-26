import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
    render() {
        const {filterName} = this.props;
        return (
            <div className="filters">
                <label htmlFor="name">Busca por nombre de personaje</label>
                <input type="text" className="input" id="name" onChange={filterName}/>
            </div>

        );
    }
}
Filters.propTypes = {
    filterName: PropTypes.func
};


export default Filters;
