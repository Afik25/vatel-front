import React, { useState } from "react";
import {
  BsCapsule,
  LuPlane,
  BsPinAngle,
  RiAttachment2,
  FaPlus,
  MdOutlineMoreVert
} from "../../middlewares/icons";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const Personnel = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="personnel">
      <div className="head">
        <div className="left">
          <h2 className="title t-1">Peoples (10)</h2>
          <p className="title t-3">Personnel management.</p>
        </div>
        <div className="center">
          <div>
            <h3 className="title t-2">Sick</h3>
            <p className="title">
              <BsCapsule className="icon"/>
              <span className="t-3">4</span>
            </p>
          </div>
          <div>
            <h3 className="title t-2">Vacation</h3>
            <p className="title">
              <LuPlane className="icon"/>
              <span className="t-3">4</span>
            </p>
          </div>
          <div>
            <h3 className="title t-2">Day off</h3>
            <p className="title">
              <BsPinAngle className="icon"/>
              <span className="t-3">4</span>
            </p>
          </div>
          <div>
            <h3 className="title t-2">At office</h3>
            <p className="title">
              <RiAttachment2 className="icon"/>
              <span className="t-3">4</span>
            </p>
          </div>
        </div>
        <div className="right">
          <button
            type="button"
            className="button"
            onClick={() => setOpen(!open)}
          >
            <FaPlus />
            &nbsp; New Personnel
          </button>
        </div>
      </div>
      <div className="body">
        <form className="filter">
          <div className="input-div">
            <input
              type="text"
              className="input-form"
              autoComplete="none"
              placeholder=" "
              {...register("prename")}
            />
            <label htmlFor="prename" className="label-form">
              Research peoples by names...
            </label>
            {errors.prename && (
              <span className="fade-in">{errors.prename.message}</span>
            )}
          </div>
          <div className="input-div">
            <select className="input-select" {...register("position")}>
              <option value="">Research peoples by position...</option>
              <option value="signer">IT Manager</option>
              <option value="in-copy">Software developer</option>
              <option value="in-copy">HR Manager</option>
            </select>
          </div>
        </form>
        <div className="container">
          <div className="item">
            <div className="up">
              <BsCapsule className="icon"/>
              <MdOutlineMoreVert className="icon"/>
            </div>
            <div className="content">
              <img src={process.env.PUBLIC_URL + "/user.png"}  className="image"/>
              <h2 className="title t-1">Stephen Nyaranga</h2>
              <p className="title t-2">IT Manager</p>
              <p className="title t-3">(250) 123 456 789</p>
              <p className="title t-4">steph.nyaranga@gmail.com</p>
            </div>
          </div>
          <div className="item">
            <div className="up">
              <LuPlane className="icon"/>
              <MdOutlineMoreVert className="icon"/>
            </div>
            <div className="content">
              <img src={process.env.PUBLIC_URL + "/user.png"}  className="image"/>
              <h2 className="title t-1">Stephen Nyaranga</h2>
              <p className="title t-2">IT Manager</p>
              <p className="title t-3">(250) 123 456 789</p>
              <p className="title t-4">steph.nyaranga@gmail.com</p>
            </div>
          </div>
          <div className="item">
            <div className="up">
              <BsPinAngle className="icon"/>
              <MdOutlineMoreVert className="icon"/>
            </div>
            <div className="content">
              <img src={process.env.PUBLIC_URL + "/user.png"}  className="image"/>
              <h2 className="title t-1">Stephen Nyaranga</h2>
              <p className="title t-2">IT Manager</p>
              <p className="title t-3">(250) 123 456 789</p>
              <p className="title t-4">steph.nyaranga@gmail.com</p>
            </div>
          </div>
          <div className="item">
            <div className="up">
              <RiAttachment2 className="icon"/>
              <MdOutlineMoreVert className="icon"/>
            </div>
            <div className="content">
              <img src={process.env.PUBLIC_URL + "/user.png"}  className="image"/>
              <h2 className="title t-1">Stephen Nyaranga</h2>
              <p className="title t-2">IT Manager</p>
              <p className="title t-3">(250) 123 456 789</p>
              <p className="title t-4">steph.nyaranga@gmail.com</p>
            </div>
          </div>
          <div className="item">
            <div className="up">
              <BsCapsule className="icon"/>
              <MdOutlineMoreVert className="icon"/>
            </div>
            <div className="content">
              <img src={process.env.PUBLIC_URL + "/user.png"}  className="image"/>
              <h2 className="title t-1">Stephen Nyaranga</h2>
              <p className="title t-2">IT Manager</p>
              <p className="title t-3">(250) 123 456 789</p>
              <p className="title t-4">steph.nyaranga@gmail.com</p>
            </div>
          </div>
          <div className="item">
            <div className="up">
              <BsCapsule className="icon"/>
              <MdOutlineMoreVert className="icon"/>
            </div>
            <div className="content">
              <img src={process.env.PUBLIC_URL + "/user.png"}  className="image"/>
              <h2 className="title t-1">Stephen Nyaranga</h2>
              <p className="title t-2">IT Manager</p>
              <p className="title t-3">(250) 123 456 789</p>
              <p className="title t-4">steph.nyaranga@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        contentLabel="Personnel"
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
          <div className="width modal-head display-flex justify-content-space-between align-items-center">
            <h3 className="title t-1">New Personnel</h3>
            <span className="modal_close" onClick={() => setOpen(!open)}>
              &times;
            </span>
          </div>
          <div className="width modal-body">
            {/* <form>
              <p className="title t-2">Type de Subscription</p>
              <div className="input-div">
                <div className="width display-flex justify-content-space-around align-items-center">
                  <div className="forfait display-flex">
                    <input
                      type="radio"
                      name="forfait"
                      {...register("forfait")}
                    />
                    <div style={{ fontSize: "0.9rem" }}>
                      <h3 className="title t-2">Mensuel</h3>
                      <p className="title t-1">
                        $3.00/<span className="title t-2">mois</span>
                      </p>
                    </div>
                  </div>
                  <div className="forfait forfait-active display-flex">
                    <input
                      type="radio"
                      name="forfait"
                      {...register("forfait")}
                    />
                    <div style={{ fontSize: "0.9rem" }}>
                      <h3 className="title t-2">Trimestriel</h3>
                      <p className="title t-1">
                        $9.00/<span className="title t-2">mois</span>
                      </p>
                    </div>
                  </div>
                  <div className="forfait display-flex">
                    <input
                      type="radio"
                      name="forfait"
                      {...register("forfait")}
                    />
                    <div style={{ fontSize: "0.9rem" }}>
                      <h3 className="title t-2">Semestriel</h3>
                      <p className="title t-1">
                        $18.00/<span className="title t-2">mois</span>
                      </p>
                    </div>
                  </div>
                </div>
                {errors.forfait && (
                  <span className="fade-in">{errors.forfait.message}</span>
                )}
              </div>
              <div className="input-div">
                <input
                  type="text"
                  name="confirmNewPassword"
                  className="input-form"
                  autoComplete="none"
                  placeholder=" "
                  {...register("confirmNewPassword", {
                    required: "confirm the new password",
                  })}
                />
                <label htmlFor="confirmNewPassword" className="label-form">
                  Code de Référence du transaction
                </label>
                {errors.confirmNewPassword && (
                  <span className="fade-in">
                    {errors.confirmNewPassword.message}
                  </span>
                )}
              </div>
              <div className="col-l-6 col-s-11 m-auto">
                <button type="submit" className="width button normal">
                  Procéder
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Personnel;
