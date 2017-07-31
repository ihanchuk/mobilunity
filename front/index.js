import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Tags from './components/tags';
import SdkOut from './components/sdkOut';
import Search from './components/search';

import observableStore from './store/sdkStore';
import { observer } from "mobx-react";

import ScrollArea from 'react-scrollbar';

import PropTypes from 'prop-types';

import './css/bootstrap.min.css';
import './css/style.scss';

@observer
export class App extends Component {
    constructor() {
        super();
    }

    static propTypes = { 
        store: React.PropTypes.object.isRequired 
    };

    render() {
        let store = this.props.store;
        let filterByTag = store.setFilter.bind(observableStore);
        let filteringTag = store.filteringTag;
        let appTags = store.appTags;
        let filteredElements = store.filteredElements;
        return (
            <div className="container">
                <div className="row">
                    <ScrollArea
                        className="area row col-lg-3 col-md-4"
                        smoothScrolling={true}
                        vertical={true}
                        horizontal={false}
                        minScrollSize={40}
                    >
                        <Tags appTags={appTags} filteringTag={filteringTag} filterByTag={filterByTag} />
                        <Search filterByTag={filterByTag} />
                    </ScrollArea>

                    <ScrollArea
                        className="area row col-lg-9 col-md-8"
                        smoothScrolling={true}
                        vertical={true}
                        horizontal={false}
                        minScrollSize={40}
                    >
                        <SdkOut filteredElements={filteredElements} filterByTag={filterByTag} />
                    </ScrollArea>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App store={observableStore} />, document.getElementById('app'));


