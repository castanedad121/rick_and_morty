//! Import components
import SearchBar from "../SearchBar/SearchBar";
//! Import styles
import styles from "./Nav.module.css";
//! Import react-router-dom
import { NavLink, useLocation } from "react-router-dom";
//! Import PATHROUTES
import PATHROUTES from "../../helpers/PathRoutes.helper";
//! Import icons
import { IoMdLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { filterCards } from "../../redux/actions";

const Nav = (props) => {
  const dispatch = useDispatch();
  const handleFilter = ()=> {
    dispatch(filterCards('All'))
  }
  const path = useLocation();
  const { onSearch, logOut } = props;
  return (
    <div className={styles.DivNav}>
      <NavLink
        to={PATHROUTES.HOME}
        onClick={handleFilter}
        className={({ isActive }) =>
          isActive ? styles.buttonLinkNavActive : styles.buttonLinkNav
        }
      >
        <button>HOME</button>
      </NavLink>
      <NavLink
        to={PATHROUTES.ABOUT}
        onClick={handleFilter}
        className={({ isActive }) =>
          isActive ? styles.buttonLinkNavActive : styles.buttonLinkNav
        }
      >
        <button>ABOUT</button>
      </NavLink>
      <NavLink
        to={PATHROUTES.FAVORITES}
        className={({ isActive }) =>
          isActive ? styles.buttonLinkNavActive : styles.buttonLinkNav
        }
      >
        <button>FAVORITES</button>
      </NavLink>
      {path.pathname === PATHROUTES.HOME && (
        <>
          {" "}
          <SearchBar onSearch={onSearch} />
        </>
      )}
      <div style={{ display:"flex", justifyContent:'center', alignItems:'center'}}>
      <NavLink to={PATHROUTES.LOGIN}>
        <button className={styles.buttonLogout} onClick={() => logOut()}>
          <IoMdLogOut />
        </button>
      </NavLink>
      </div>
    </div>
  );
};

export default Nav;
