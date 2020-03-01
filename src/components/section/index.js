import React from 'react';
import PropTypes from 'prop-types';



function Section({title, subtitle, image, odd, children, backgroundColor}) {
    const textContent = (
        <div className={`column ${(image)? "" : "is-half has-text-centered"}`}>
            <h1 className="title">{title}</h1>
            {subtitle && (
                <h2 className="subtitle has-text-grey">
                    <br/>
                    {subtitle}
                </h2>
            )}
            <div className="content">
                <br/>
                {children}
            </div>
        </div>
    );
    const backgroundStyle = backgroundColor? {
        backgroundColor
    } : {backgroundColor: "#fff"};
    return (
        <section className="section" 
            style={backgroundStyle}>
            <div className="container">
                <div className="columns is-mobile- is-centered is-vcentered is-multiline is-variable is-8">
                    {!odd && (textContent)}
                    {image && (
                        <div className="column">
                            <figure className="image is-square">
                                <img src={image}/>
                            </figure>
                        </div>
                    )}
                    {odd && title && subtitle && image && (
                        textContent
                    )}
                </div>
            </div>
        </section>
    );
}



Section.propTypes = {
    title: PropTypes.any ,
    subtitle: PropTypes.any,
    image: PropTypes.string,
    odd: PropTypes.bool,
    children: PropTypes.any,
    backgroundColor: PropTypes.string
}


export default Section;