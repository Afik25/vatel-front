import React, { useState } from "react";
import Modal from "react-modal";
import { BiCheck, IoCloseOutline } from "../../../middlewares/icons";
import { useForm } from "react-hook-form";

const General = () => {
  const [open, setOpen] = useState(false);
  const [switched, setSwitched] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggle = () => setSwitched(!switched);
  return (
    <div className="full setting-general fade-in">
      <div className="fragment">
        <div className="width">
          <h2 className="title t-1">Notifications and Tags</h2>
          <div className="fragment-body">
            <div className="item display-flex justify-content-space-between">
              <div>
                <h3 className="title t-2">Notify on updates and activity</h3>
                <p className="title t-3">
                  You will be notified when anyone shares a report or invites
                  you to a project
                </p>
              </div>
              <div className="switch-wrapper">
                <span>{switched ? "On" : "Off"}</span>
                <div className="switch" onClick={toggle}>
                  <div
                    className={
                      switched
                        ? "switched switched-active"
                        : "switched switched-inactive"
                    }
                    onClick={toggle}
                  >
                    {switched ? (
                      <BiCheck className="icon" />
                    ) : (
                      <IoCloseOutline className="icon" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="item display-flex justify-content-space-between">
              <div>
                <h3 className="title t-2">Send weekly digest</h3>
                <p className="title t-3">
                  A weekly update on chnages in theme sentiment and more
                </p>
              </div>
              <div className="switch-wrapper">
                <span>{switched ? "On" : "Off"}</span>
                <div className="switch" onClick={toggle}>
                  <div
                    className={
                      switched
                        ? "switched switched-active"
                        : "switched switched-inactive"
                    }
                    onClick={toggle}
                  >
                    {switched ? (
                      <BiCheck className="icon" />
                    ) : (
                      <IoCloseOutline className="icon" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="item display-flex justify-content-space-between align-items-center">
              <div>
                <h3 className="title t-2">Tags</h3>
                <p className="title t-3">Who can tags you ?</p>
              </div>
              <select className="input-select">
                <option>Anybody</option>
                <option>Network Only</option>
              </select>
            </div>
          </div>
        </div>
        <div className="width">
          <h2 className="title t-1">Theme and Language</h2>
          <div className="fragment-body">
            <div className="item display-flex justify-content-space-between">
              <div>
                <h3 className="title t-2">Theme</h3>
                <p className="title t-3">
                  Configure your theme according to your preference.
                </p>
              </div>
              <div className="switch-wrapper">
                <span>{switched ? "On" : "Off"}</span>
                <div className="switch" onClick={toggle}>
                  <div
                    className={
                      switched
                        ? "switched switched-active"
                        : "switched switched-inactive"
                    }
                    onClick={toggle}
                  >
                    {switched ? (
                      <BiCheck className="icon" />
                    ) : (
                      <IoCloseOutline className="icon" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="item display-flex justify-content-space-between">
              <div>
                <h3 className="title t-2">Language</h3>
                <p className="title t-3">Choose you preference's language.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fragment">
        <h2 className="title t-1">Security</h2>
        <div className="fragment-body">
          <div className="item display-flex justify-content-space-between">
            <div>
              <h3 className="title t-2">Password</h3>
              <p className="title t-3">Last change 19 March, 2020</p>
            </div>
            <button
              type="button"
              className="button"
              onClick={() => setOpen(!open)}
            >
              Change
            </button>
          </div>
          <div className="item display-flex justify-content-space-between">
            <div>
              <h3 className="title t-2">Two-step verification</h3>
              <p className="title t-3">
                A second login step adds on extra layer of security to your
                account.
              </p>
            </div>
            <div className="switch-wrapper">
              <span>{switched ? "On" : "Off"}</span>
              <div className="switch" onClick={toggle}>
                <div
                  className={
                    switched
                      ? "switched switched-active"
                      : "switched switched-inactive"
                  }
                  onClick={toggle}
                >
                  {switched ? (
                    <BiCheck className="icon" />
                  ) : (
                    <IoCloseOutline className="icon" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fragment-body">
          <div className="item display-flex justify-content-space-between align-items-center">
            <div>
              <p className="title t-3">
                Who can access reports shared via external links ?
              </p>
            </div>
            <select className="input-select">
              <option>Teammates only</option>
            </select>
          </div>
          <div className="item display-flex justify-content-space-between align-items-center">
            <div>
              <p className="title t-3">
                Who can change themes attached to a comment ?
              </p>
            </div>
            <select className="input-select">
              <option>Admins only</option>
            </select>
          </div>
          <div className="item display-flex justify-content-space-between align-items-center">
            <div>
              <p className="title t-3">
                Who can change dashboards created by admins ?
              </p>
            </div>
            <select className="input-select">
              <option>Any teammates</option>
            </select>
          </div>
        </div>
      </div>
      <Modal
        contentLabel="Nouvel Utilisateur"
        isOpen={open}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setOpen(!open)}
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.75)", zIndex: 5 },
          content: {
            color: "inherit",
            width: "50%",
            height: "60%",
            margin: "auto",
            padding: 0,
          },
        }}
      >
        <div className="width height modal">
          <div className="width modal_head display-flex justify-content-space-between align-items-center">
            <h3 className="title t-1">Change Password</h3>
            <span className="modal_close" onClick={() => setOpen(!open)}>
              &times;
            </span>
          </div>
          <div className="width modal_body">
            <div className="message-box">some thing</div>
            <form>
              <div className="input-div">
                <input
                  type="password"
                  name="oldPassword"
                  className="input-form"
                  autoComplete="none"
                  placeholder=" "
                  {...register("oldPassword", {
                    required: "Tape the old password",
                  })}
                />
                <label htmlFor="oldPassword" className="label-form">
                  Old Password
                </label>
                {errors.oldPassword && (
                  <span className="fade-in">{errors.oldPassword.message}</span>
                )}
              </div>
              <div className="input-div">
                <input
                  type="password"
                  name="newPassword"
                  className="input-form"
                  autoComplete="none"
                  placeholder=" "
                  {...register("newPassword", {
                    required: "Tape the new password",
                  })}
                />
                <label htmlFor="newPassword" className="label-form">
                  New Password
                </label>
                {errors.newPassword && (
                  <span className="fade-in">{errors.newPassword.message}</span>
                )}
              </div>
              <div className="input-div">
                <input
                  type="password"
                  name="confirmNewPassword"
                  className="input-form"
                  autoComplete="none"
                  placeholder=" "
                  {...register("confirmNewPassword", {
                    required: "confirm the new password",
                  })}
                />
                <label htmlFor="confirmNewPassword" className="label-form">
                  Confirm new password
                </label>
                {errors.confirmNewPassword && (
                  <span className="fade-in">
                    {errors.confirmNewPassword.message}
                  </span>
                )}
              </div>
              <div className="col-l-6 col-s-11 m-auto">
                <button type="submit" className="width button normal">
                  Change
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default General;
