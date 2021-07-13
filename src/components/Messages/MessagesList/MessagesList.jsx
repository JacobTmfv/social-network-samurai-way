import React from 'react'
import s from './MessagesList.module.css'


const MessagesList = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}

export default MessagesList;