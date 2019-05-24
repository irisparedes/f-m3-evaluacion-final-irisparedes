import React, {Component} from 'react';

class Filters extends Component {
    render() {
        const {filterName} = this.props;
        return (
            <div className="filters">
                <label htmlFor="name">Busca por nombre</label>
                <input type="text" className="input" id="name" onChange={filterName}/>
            </div>

        );
    }
}

export default Filters;
