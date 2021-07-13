import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATED_TEXT = 'UPDATED-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';


let storeOld = {
    _state: {
        dialogs: {
            dialogsData: [{id: 1, name: 'User1'}, {id: 2, name: 'User2'}, {id: 3, name: 'User3'}],
            messagesData: [{id: 1, text: 'hi, hru ?'}, {id: 2, text: 'Test message'}, {id: 3, text: 'Go!'},],
            dialogsTextArea: '',
        },

        profile: {
            postData: [{
                post_text: 'First post',
                ava_img: "https://img1.liveinternet.ru/images/attach/b/3//41/519/41519815_b34328250cb1.jpg",
                like_count: 2
            },
                {
                    post_text: 'Second post',
                    ava_img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
                    like_count: 1
                },
                {
                    post_text: 'Third post',
                    ava_img: "https://avatarfiles.alphacoders.com/495/49573.jpg",
                    like_count: 1}],
            textArea: {typedText: ''}
        },
        sidebar: {
            sidebarData: [
                {imgUrl: 'https://i.pinimg.com/736x/d3/1e/d2/d31ed2a04bd894c078451ccb595678f0.jpg'},
                {imgUrl: 'https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg'},
                {imgUrl: 'https://happypik.ru/wp-content/uploads/2019/09/kotiki-na-avu18.jpg'},
            ]
        },

    },
    _callSubscriber(){
        //plug for render from index.js
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState(){
        return this._state
    },
    dispatch(action){
            this._state.profile = profileReducer(this._state.profile, action);
            this._state.dialogs = dialogsReducer(this._state.dialogs, action);
            this._callSubscriber(this._state);
        }
};
export const addNewPostActionCreator = () => {
    return {type: ADD_NEW_POST}
};
export const updatedTextActionCreator = (text) => {
    return {type: UPDATED_TEXT, text: text}
};

export const addNewMessageActionCreator = () => {
    return {type: ADD_NEW_MESSAGE}
};

export const updatedMessageTextActionCreator = (text) => {
        return {type: UPDATE_TEXT_MESSAGE, text: text}
};

export default storeOld;