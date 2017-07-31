import React from 'react';
import './sdk-item-component.css';

const SdkItem = (props) => {
    const { item } = props;
    return (
        <div className="col-lg-4 sdkItem">
            <div>
                <h3>{item.name} </h3>
                <ul className="sdkItemTags">
                    {
                        item.tags.map((tag, index) => <li key={index}>{tag}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}
SdkItem.propTypes = {
    item: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        tags: React.PropTypes.array.isRequired,
    }).isRequired,
}
export default SdkItem;