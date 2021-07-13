import {profileAPI, usersAPI} from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATED_TEXT = 'UPDATED-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        {
        post_text: 'First post',
        ava_img: "https://img1.liveinternet.ru/images/attach/b/3//41/519/41519815_b34328250cb1.jpg",
        like_count: 2},
        {
            post_text: 'Second post',
            ava_img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
            like_count: 1},
        {
            post_text: 'Third post',
            ava_img: "https://avatarfiles.alphacoders.com/495/49573.jpg",
            like_count: 1}],
    textArea: {typedText: ''},
    profile: null,
    status: '',
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:{
            let newPost = {
            post_text: state.textArea.typedText,
            ava_img: "https://img1.liveinternet.ru/images/attach/b/3//41/519/41519815_b34328250cb1.jpg",
            like_count: 0,};
            return {
                ...state,
                postData: [...state.postData, newPost],
                textArea: {typedText: ''},
            }
        }
        case UPDATED_TEXT:{
            return {
                ...state,
                textArea: {typedText: action.text}
            }
                // let stateCopy = {...state};
                // stateCopy.textArea = {...state.textArea}
                // stateCopy.textArea.typedText = action.text;
                // return stateCopy;
            }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS:{
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }

};

export const addNewPostActionCreator = () => ({type: ADD_NEW_POST})
export const updatedTextActionCreator = (text) => ({type: UPDATED_TEXT, text: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })}
export const getStatus = (userId) => {
    return (dispatch) => profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })}
export const updateStatus = (status) => {
    return (dispatch) => profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
        dispatch(setStatus(status))}
    })}

export default profileReducer;