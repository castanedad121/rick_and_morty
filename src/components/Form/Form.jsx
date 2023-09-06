//! Imports hooks
import { useState } from "react";
//! Import Validation
import validator from "./validation";
//! Imports styles
import styles from "./Form.module.css";
//! Imports icons
import { SiMinutemailer } from "react-icons/si";
import { RiLockPasswordFill } from "react-icons/ri";
const Form = (props) => {
  const { login } = props;
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setErrors(
      validator({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };
  return (
    <div className={styles.Container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.DivLogin}>
          <div>
            <label htmlFor="" className={styles.LabelLogin}>
              <SiMinutemailer />
            </label>
            <input
              name="email"
              type="text"
              placeholder="Email..."
              value={userData.email}
              onChange={handleChange}
              className={styles.InputLogin}
            />
            {errors.e1 ? (
              <p className={styles.pErrors}>{errors.e1}</p>
            ) : errors.e2 ? (
              <p className={styles.pErrors}>{errors.e2}</p>
            ) : (
              <p className={styles.pErrors}>{errors.e3}</p>
            )}
          </div>
          <div>
            <label htmlFor="" className={styles.LabelLogin}>
              <RiLockPasswordFill />
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password..."
              value={userData.password}
              onChange={handleChange}
              className={styles.InputLogin}
            />
            {errors.p1 ? <p className={styles.pErrors}>{errors.p1}</p> : <p className={styles.pErrors}>{errors.p2}</p>}
          </div>
        </div>
        
        <img
          className={styles.ImgLogin}
          src="https://steamuserimages-a.akamaihd.net/ugc/782978849731816179/3C57274A35C1718A482502A104E3D6ABC4568EEA/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
        />
        <div className={styles.ContainerButton}>
        <button className={styles.ButtonSend}>LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
