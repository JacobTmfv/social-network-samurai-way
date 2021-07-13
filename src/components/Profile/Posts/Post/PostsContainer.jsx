import Posts from "./Posts";
import {connect} from "react-redux";
import {addNewPostActionCreator, updatedTextActionCreator} from "../../../../redux/ProfileReducer";

let mapStateToProps = (state) => {
    return{
        posts: state.profile.postData,
        newPostText: state.profile.textArea.typedText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addNewPost: () => {
            dispatch(addNewPostActionCreator());
        },
        updatedText: (text) => {
            let action = updatedTextActionCreator(text);
            dispatch(action)}
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;