import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../asets/images/user_avatar.png";
import ProfileStatus from './ProfileStatus'



const ProfileInfo = (props) =>{
    if(!props.profile){
       return <Preloader/>
    }

    return(
        <div>
            <div className={s.status}>
                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
            <div className={s.avatar}>
                <img className={s.userPhoto} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="User avatar"/>
            <div>Имя: {props.profile.fullName}
                <div>Обо мне: {props.profile.aboutMe} </div>
                <div>В поиске работы: {props.profile.lookingForAJob ? 'Да' : 'Нет'}</div>
                {props.profile.lookingForAJobDescription &&
                <div>Описание поиска: {props.profile.lookingForAJobDescription}</div>}
            </div>
            </div>
            </div>
    )
}

export default ProfileInfo;