import React from 'react';


function Section({title, subtitle, children}) {
  return (
    <section className="hero is-medium is-default">
        <div className="hero-body">
            <div className="container">
                <h1 className="title is-3">
                    {title}
                </h1>
                <h2 className="subtitle">
                {subtitle}
                </h2>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    </section>
  );
}

export default Section;