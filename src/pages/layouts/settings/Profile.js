import React, { useState } from "react";
import { MdOutlinePhotoCamera } from "../../../middlewares/icons";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="full setting-profile fade-in">
      <div className="container">
        <div className="head-profile">
          <form className="form-left">
            <div className="avatar">
              <div className="img display-flex justify-content-center align-items-center">
                <img src={process.env.PUBLIC_URL + "/user.png"} />
              </div>
              <div className="browser">
                <input type="file" id="input-file" className="input-file" />
                <label htmlFor="input-file" className="label">
                  <MdOutlinePhotoCamera className="icon" />
                </label>
              </div>
            </div>
            <div className="details">
              <h2 className="title t-1">Afik Foundation</h2>
              <h3 className="title t-2">Elève, 4 ième Scientique</h3>
              <p className="title t-3">
                @afik (username), created on January 15, 2023
              </p>
            </div>
          </form>
          <button
            type="button"
            className="button"
            onClick={() => setOpen(!open)}
          >
            Mise à jour
          </button>
        </div>
        <div className="header-body">
          <table>
            <tbody>
              <tr>
                <td>
                  <span className="title t-3">Prénom</span>
                </td>
                <td></td>
                <td>
                  <spa className="title t-2">Shukran</spa>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="title t-3">Noms</span>
                </td>
                <td></td>
                <td>
                  <spa className="title t-2">Furaha Emmanuella</spa>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="title t-3">Genre</span>
                </td>
                <td></td>
                <td>
                  <spa className="title t-2">Femme</spa>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="title t-3">Téléphone</span>
                </td>
                <td></td>
                <td>
                  <spa className="title t-2">+243 97 720 2072</spa>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="title t-3">Lieu et Date de Naissance</span>
                </td>
                <td></td>
                <td>
                  <spa className="title t-2">Kinshasa, Le 13 Janvier 2021</spa>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="title t-3">E-mail</span>
                </td>
                <td></td>
                <td>
                  <spa className="title t-2">furaha@afik.org</spa>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="title t-3">Rôle</span>
                </td>
                <td></td>
                <td>
                  <spa className="title t-2">Elève</spa>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="title t-3">Classe</span>
                </td>
                <td></td>
                <td>
                  <spa className="title t-2">4 ième Scientique</spa>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        contentLabel="Update"
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
            <h3 className="title t-1">Mise à jour des informations</h3>
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
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
