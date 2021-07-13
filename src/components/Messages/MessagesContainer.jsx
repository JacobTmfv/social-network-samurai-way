import Messages from "./Messages";
import {connect} from "react-redux";
import {addNewMessageActionCreator, updatedMessageTextActionCreator} from "../../redux/DialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        store: state.dialogs,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageActionCreator());
        },
        updateTextAreaDialogs: (text) => {
            dispatch(updatedMessageTextActionCreator(text))
        },
    }
}




export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)
