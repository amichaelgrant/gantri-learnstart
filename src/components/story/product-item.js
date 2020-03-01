import React from 'react';
import PropTypes from 'prop-types';



function ProductItem({id, title, content, owner}) {

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    {content}
                    <br/>
                    <div className="tag">11:09 PM - 1 Jan 2016</div>
                </div>
            </div>
        </div>
    );
};


ProductItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired
}

export default ProductItem;