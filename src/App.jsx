//! import styles
import "./App.css";
//! import components
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
//! import axios
import axios from "axios";
//! import hooks
import { useState, useEffect } from "react";
//! import react router dom
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
//! import pathroutes
import PATHROUTES from "./helpers/PathRoutes.helper";
//! import react-redux
import { connect } from "react-redux";
import { logout, removeFav } from "./redux/actions";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = (props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const EMAIL = "daniel@correo.com";
  const PASSWORD = "123456";
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } 
  }
   

  const onSearch = (id) => {
    setIsLoading(true);
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          const ids = characters.map((e) => e.id);
          if (!ids.includes(parseInt(id))) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡Este personaje ya existe!");
          }
        } else {
          window.alert(`Existe un problema: ${data.error}`);
        }
      })
      .catch(function (error) {
        if (error.response) {
          window.alert(`Error: ${error.response.status}`);
        } else {
          window.alert(`Error: ${error.message}`);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
    
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
    // here remove the favorites
    props.removeFav(id);
  };

  const logOut = () => {
    setAccess(false);
    navigate("/login");
    setCharacters([]);
    props.logout();
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      <Routes>
        <Route path={PATHROUTES.LOGIN} element={<Form login={login} />} />
        <Route element={<ProtectedRoute Access= {access}/>}>
        <Route
          path={PATHROUTES.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={PATHROUTES.ABOUT} element={<About />}  />
        <Route path={PATHROUTES.DETAIL} element={<Detail />} />
        <Route path={PATHROUTES.FAVORITES} element={<Favorites />} />
        </Route>
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(null, mapDispatchToProps)(App);
