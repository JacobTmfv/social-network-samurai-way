import React from 'react';
import s from './PostTemplate.module.css';

const PostTemplate = (props) => {
    return (
        <div className={s.item}>
            <img src={props.ava_img} alt=""/>
            {props.post_text}
            <div>
                <span>Like: {props.like_count}</span>
            </div>
        </div>
    );
}

export default PostTemplate;
