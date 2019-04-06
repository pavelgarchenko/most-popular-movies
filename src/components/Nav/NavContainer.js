import { connect } from "react-redux";

import Nav from "./Nav";
import { toggleMenu } from "../../actions/navActions";

const mapStateToProps = state => {
  return {
    menuIsHidden: state.menuIsHidden,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleMenu: () => {
      dispatch(toggleMenu());
    }
  }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(
  Nav
);

export default NavContainer;
