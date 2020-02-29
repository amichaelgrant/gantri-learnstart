import React from 'react';


function Section({title, subtitle, image, odd, children}) {
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
    return (
        <section className="section">
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

export default Section;