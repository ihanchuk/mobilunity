import React from 'react';
import './tags-component.scss';

const Tags = (props) => {
    const { appTags, filteringTag, filterByTag } = props;
    const onTagChanged = (e) => {
        filterByTag(e.target.value);
    }

    return (
        <div className="sdkFilteringTags">
            <h3>Tags:: </h3>
            <ul className="tags">
                {
                    appTags.map((el, index) => {
                        return (
                            <li key={index}>
                                <input type="radio"
                                    className="radio"
                                    value={el}
                                    id={el}
                                    checked={el == filteringTag}
                                    onChange={onTagChanged}
                                />
                                <label htmlFor={el}>{el}</label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

Tags.propTypes = {
    appTags: React.PropTypes.object.isRequired,
    filteringTag: React.PropTypes.string.isRequired,
    filterByTag: React.PropTypes.func.isRequired
}

export default Tags;