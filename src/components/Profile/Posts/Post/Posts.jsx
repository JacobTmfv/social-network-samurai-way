import React from 'react';
import PostTemplate from "./PostsTemplate/PostTemplate";
import s from './Posts.module.css'

const Posts = (props) => {
    let postMapping = props.posts.map(PostEl => <PostTemplate post_text={PostEl.post_text} key = {PostTemplate.id} ava_img={PostEl.ava_img} like_count={PostEl.like_count}/>);
    let newMessageEl = React.createRef();
    let addNewPost = () => {
        props.addNewPost()};
    let updateNewText = () => {
        let text = newMessageEl.current.value;
        props.updatedText(text);}

    return (
        <div>
            <div>
                <h3 className={s.postHeader}>My posts</h3>
            </div>
            <textarea name = 'Text field' value={props.newPostText} onChange={updateNewText} ref={newMessageEl} cols="80" rows="4"/>
            <div>
                <button onClick={addNewPost}>Add comment</button>
            </div>
            {postMapping}
        </div>
    );
}

export default Posts;