import React from 'react';


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

export default ProductItem;
