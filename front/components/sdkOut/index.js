import React from 'react';
import './sdk-out-component.css';
import SdkItem from './sdkItem/sdk-item-component';
import PropTypes from 'prop-types';

const SdkOut = (props) => {
    const { filteredElements } = props;
    return (
        <div className="sdkOutputArea row">
            <h3>Elements:: </h3>
            {
                filteredElements.map((element, index) => <SdkItem key={index} item={element} />)
            }
        </div>
    );
}
SdkOut.propTypes = {
    filteredElements: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        tags: React.PropTypes.array.isRequired,
    })).isRequired,
}
export default SdkOut;