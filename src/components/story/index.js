import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from  './product-card';


function StoryList({title, items, onClick}) {
    return (
        <div 
            style={{
                display: "block",
                marginBottom: "10vh"
            }}>
            <h2 className="subtitle is-4">
                {title}
            </h2>
            <div className="columns is-multiline is-variable">
                {items && items.map((item, idx) => {
                    return (
                        <div key={idx} 
                            className="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                            <ProductCard {...item} onClick={onClick}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


StoryList.propTypes = {
    title: PropTypes.any,
    items: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func
}


export default StoryList;