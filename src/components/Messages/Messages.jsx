import React from 'react'
import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import MessagesList from "./MessagesList/MessagesList";
import {Redirect} from "react-router-dom";

const Messages = (props) => {

    let dialogsMapping = props.store.dialogsData.map(DialogEl => <Dialog name={DialogEl.name} key = {Dialog.id} id={DialogEl.id}/>);
    let messagesMapping = props.store.messagesData.map(MessageEL => <MessagesList text={MessageEL.text} key = {MessagesList.id} />);

    let newMessageEl = React.createRef();
    let addNewMessage = () => {
        props.addNewMessage()
    };
    let updateTextAreaDialogs = () => {
        let text = newMessageEl.current.value;
        props.updateTextAreaDialogs(text);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={s.dialog_area}>
            <div className={s.dialogs}>
                {dialogsMapping}
            </div>

            <div className={s.messages}>
                {messagesMapping}
                <textarea name="new message" ref={newMessageEl} value={props.store.typedText}
                          onChange={updateTextAreaDialogs} cols="50" rows="5"/>
                <div>
                    <button onClick={addNewMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;