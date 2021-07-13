const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let initialState = {
    dialogsData: [{id: 1, name: 'User1'}, {id: 2, name: 'User2'}, {id: 3, name: 'User3'}],
    messagesData: [{id: 1, text: 'hi, hru ?'}, {id: 2, text: 'Test message'}, {id: 3, text: 'Go!'},],
    typedText: '',
};

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:{
            let newMessage = state.typedText
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, text: newMessage}],
                typedText: ''}
        }
        case UPDATE_TEXT_MESSAGE:{
            return {...state,
                typedText: action.text};
            }
        default:
            return state;
    }


};

export const addNewMessageActionCreator = () => ({type : ADD_NEW_MESSAGE})
export const updatedMessageTextActionCreator = (text) => ({type: UPDATE_TEXT_MESSAGE, text: text})

export default dialogsReducer;