import {connect} from "react-redux";
import NavSN from "./NavSN";

let mapStateToProps = (state) =>{
    return{
        store: state.sidebar
    }
}

const NavSNContainer = connect(mapStateToProps)(NavSN);

export default NavSNContainer;