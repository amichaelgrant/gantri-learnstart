import React from 'react';
import PropTypes from 'prop-types';



function ProductCard({id, title, content, owner, onClick}) {

    const params = {id, title, content, owner};
    return (
      <div className="card"
        style={{
          cursor: "pointer"
        }} 
        onClick={(evt)=>{
          onClick(params);
        }}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4" style={{minHeight: "10vh", overflowY: "hidden"}}>{title}</p>
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img className="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
              </figure>
            </div>
            <div className="media-content">
              <p>&nbsp;</p>
              <p className="subtitle is-7 has-text-grey">{owner}</p>
            </div>
          </div>
        </div>
      </div>
    );
};



ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}


export default ProductCard;