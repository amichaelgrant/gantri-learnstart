import React from 'react';


function Hero({title, subtitle, actionTitle, onAction}) {
  return (
    <section className="hero is-large is-dark">
        <div className="hero-body">
            <div className="container">
                <h1 className="title is-3">
                    {title}
                </h1>
                <h2 className="subtitle">
                {subtitle}
                </h2>
                <div>
                    <button 
                        className="button is-primary is-large"
                        onClick={onAction}>
                        {actionTitle}
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;