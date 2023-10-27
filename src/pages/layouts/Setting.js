import React from "react";
import { NavLink } from "../../routes/NavLink";
import { BsSliders, BiUser, MdHelpOutline } from "../../middlewares/icons";
import { Outlet } from "react-router-dom";

const Setting = () => {
  // let element = useRoutes(routes);
  return (
    <div className="full settings">
      <div className="width head">
        <h2 className="title t-1">Setting</h2>
        <p className="title t-3">
          Configuration and setting preferences parameters for a convenient usage.
        </p>
      </div>
      <div className="body">
        <div className="left">
          <NavLink
            activeClassName="active-option"
            inactiveClassName="inactive-option"
            className="link-option"
            to="/user/settings"
            exact={true}
          >
            <BsSliders className="option-icon" />
            <span>General</span>
          </NavLink>
          <NavLink
            activeClassName="active-option"
            inactiveClassName="inactive-option"
            className="link-option"
            to="profil"
          >
            <BiUser className="option-icon" />
            <span>Profile</span>
          </NavLink>
          <NavLink
            activeClassName="active-option"
            inactiveClassName="inactive-option"
            className="link-option"
            to="about"
          >
            <MdHelpOutline className="option-icon" />
            <span>About</span>
          </NavLink>
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Setting;
