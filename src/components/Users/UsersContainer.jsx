import React from 'react'
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    unFollow,
    setToggleFollowInProgress, getUsers,
} from '../../redux/UsersReducer';
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   followInProgress={this.props.followInProgress}
                   onPageChanged={this.onPageChanged}/>
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            follow,
            unFollow,
            setCurrentPage,
            setToggleFollowInProgress,
            getUsers
        })
)(UsersContainer)