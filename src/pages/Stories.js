import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/header';
import Section from '../components/section';
import StoryList from '../components/story';
import stories from '../components/story/sample.data.js';

function Stories(props) {

    const onReadStory = (item) => {
        props.history.push(`/stories/${item.id}`);
    };

    return (
        <div className="Stories">
            <Header />
            <Section
                title="Stories"
            />

            <div className="container">
                <StoryList
                    title="Latest"
                    items={stories}
                    onClick={onReadStory}
                />

                <StoryList
                    title="Editor's Picks"
                    items={stories}
                    onClick={onReadStory}
                />
            </div>
            
        </div>
    );
}

export default withRouter(Stories);
