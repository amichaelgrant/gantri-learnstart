import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/header';
import Hero from '../components/hero';
import Section from '../components/section';

function Home(props) {
    return (
        <div className="Home">
            <Header />
            <Hero 
                title="Stay hungry. Stay foolish"
                subtitle="Learn from the hottest startups in the world."
                actionTitle="Read Now"
                onAction={()=>{
                    props.history.push(`/stories`)
                }}
            />
            <Section
                title="Start tools for founders"
                subtitle={`
                    LearnStart is the simplest way for startup founders to discover inspiring stories from startup
                    founders from all over the world, all in one place.
                `}
            />
            <Section
                title="Only the hottest startups."
                subtitle={`
                    We hand-select only the hottest startups and our experts copywriters interview 
                    and produce every story.
                `}
                image={"https://bulma.io/images/placeholders/480x480.png"}
                odd
            />
            <Section
                title="Simple to read."
                subtitle={`
                    Learn from your phone or from the computer, and continue where
                    you left off anytime.
                `}
                image={"https://bulma.io/images/placeholders/480x480.png"}
            />
            <Section
                title="Free. Forever."
                subtitle={`
                    We're a non-profit project supported by Silicon Valley's top VCs and 
                    startup incubators. You won't have to pay a cent.
                `}
                image={"https://bulma.io/images/placeholders/480x480.png"}
                odd
            />

            <Section
                title="Let's get started."
            >
                <button 
                    className="button is-large is-primary"
                    onClick={()=>{
                        props.history.push(`/stories`);
                    }}>
                    Read Now
                </button>
            </Section>
        </div>
    );
}

export default withRouter(Home);
