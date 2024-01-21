//! Import react-router-dom
import { NavLink } from "react-router-dom";

//! Import PhatRoutes
import PATHROUTES from '../../components/helpers/pathroutes'

//! Impoet styles
import styles from "./Nav.module.css";
import { useDispatch } from "react-redux";
import { getLogout } from "../../redux/actions/actions";

//! Import Icons
import { SiYourtraveldottv } from "react-icons/si";

const { HOME, ABOUT, FORM, LANDING } = PATHROUTES;

const Nav = () => {
    const dispatch = useDispatch();
    return (
        <div className={styles.Container}>
            <div>
                <SiYourtraveldottv className={styles.Logo} />
            </div>
            <div className={styles.ContainerViews}>
                <NavLink
                    to={HOME}
                    className={({ isActive }) =>
                        isActive ? styles.ButtonLinkNavActive : styles.ButtonLinkNav
                    }
                >
                    <button>Home</button>
                </NavLink>
                <NavLink
                    to={ABOUT}
                    className={({ isActive }) =>
                        isActive ? styles.ButtonLinkNavActive : styles.ButtonLinkNav
                    }
                >
                    <button>About</button>
                </NavLink>
                <NavLink
                    to={FORM}
                    className={({ isActive }) =>
                        isActive ? styles.ButtonLinkNavActive : styles.ButtonLinkNav
                    }
                >
                    <button>Create</button>
                </NavLink>
                <NavLink
                    to={LANDING}
                    className={({ isActive }) =>
                        isActive ? styles.ButtonLinkNavActive : styles.ButtonLinkNav
                    }
                >
                    <button className={styles.Logout} onClick={() => { dispatch(getLogout()) }}>Log out</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;
