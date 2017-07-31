import React, { Component } from 'react';
import { observer } from "mobx-react";
import './search-compnent.css';

const Search = (props) => {
    let { filterByTag } = props;
    let filterChange = (event) => {
        filterByTag(event.target.value);
    };

    return (
        <div className="search">
            <input type="text" onChange={filterChange} />
        </div>
    );
}

Search.propTypes = {
        filterByTag: React.PropTypes.func.isRequired
    }

export default observer(Search);
