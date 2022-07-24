import "./Header.css";
import { NavLink } from "react-router-dom";
import HeaderUI from "./HeaderUI";

export default function Header({isAdmin, page}) {
  return (
  <>
    {
      isAdmin ? 
      <div className="header">
        <div className="logo">
            <NavLink to='/'><div className="logotxt">Žućo BiH</div></NavLink> 
        </div>
        <div className="navigation">
            { page === 'adminreport' ? <NavLink to='/adminreport'><div className="navigationItem activeNavItem">Prijave</div></NavLink>:
            <NavLink to='/adminreport'><div className="navigationItem">Prijave</div></NavLink>}
            { page === 'adminpraise' ? <NavLink to='/adminpraise'><div className="navigationItem activeNavItem">Pohvale</div></NavLink>:
            <NavLink to='/adminpraise'><div className="navigationItem">Pohvale</div></NavLink>}
            { page === 'adminactivity' ? <NavLink to='/adminactivity'><div className="navigationItem activeNavItem">Aktivizam</div></NavLink>:
            <NavLink to='/adminactivity'><div className="navigationItem">Aktivizam</div></NavLink>}
        </div>
      </div> 
      : 
      <HeaderUI />
    }
  </>
  );
}

