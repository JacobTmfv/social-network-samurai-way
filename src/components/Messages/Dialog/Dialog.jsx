import React from 'react'
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

let path = '/messages/'

const Dialog = (props) => {

    return (
        <div className={s.item + ' ' + s.activeLink}>
            <NavLink to={path + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Dialog;