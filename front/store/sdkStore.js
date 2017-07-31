import { sdk } from '../data/sdk';
import {uniqueTags} from '../services/tag-service';
import { observable, computed, action } from 'mobx';

class ObservableStore {
    @observable appTags = [];
    @observable filteringTag = 'All Tags';

    constructor() {
        this.origin = sdk;
        this.setUniqueTags(sdk);
    }

    @action setFilter(val) {
        this.filteringTag = val;
    }

    @action setUniqueTags(data) {
        let unique = uniqueTags(data);
        this.appTags =unique.sort() ;
    }

    @computed get filteredElements() {
        if (!this.filteringTag || this.filteringTag === 'All Tags') return this.origin;

        return this.origin.filter((el) => {
            return (el.tags.indexOf(this.filteringTag) > -1);
        });
    }

}
const observableStore = window.store = new ObservableStore();
export default observableStore;
