import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/header';
import Section from '../components/section';
import ProductItem from '../components/story/product-item.js';
import stories from '../components/story/sample.data.js';


function Story(props) {

    const storyMap = {};
    stories.forEach((st)=>{
        storyMap[st.id] = st;
    });

    const storyId = props.match.params.id;
    const {id, title, content, owner} = storyMap[storyId] || {};
    
    return (
        <div className="Stories">
            <Header />
            <Section
                title={title}
                subtitle={`Written by ${owner}`}
            />

            <div className="container">
                <ProductItem 
                    id={id}
                    title={title}
                    content={content}
                    owner={owner}
                />
            </div>
            
        </div>
    );
}

export default withRouter(Story);
