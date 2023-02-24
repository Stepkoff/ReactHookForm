import s from './index.module.sass';
import Logo from "../../ui/Logo";
import {NavLink} from "react-router-dom";

const isActiveLink = ({isActive}:{isActive: boolean}) => isActive ? s.activeNavLink : ''

const Header = () => {
  return (
    <header className={s.header}>
      <div className={`${s.headerContent} container`}>
        <Logo/>
        <nav className={s.navigation}>
          <ul>
            <li><NavLink to={'/'} className={isActiveLink}>Home</NavLink></li>
            <li><NavLink to={'/signUp'} className={isActiveLink}>Sign up</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;