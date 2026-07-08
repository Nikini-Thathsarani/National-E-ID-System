import "../../styles/Navbar.css";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const [showLanguages, setShowLanguages] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowLanguages(false);
  };

  const languages = {
    en: "English",
    si: "සිංහල",
    ta: "தமிழ்",
  };

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <div className="logo-icon">ID</div>

        <div className="logo-text">
          <h2>National e-ID</h2>
          <span>Sri Lanka Digital Identity</span>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">{t("navbar.home")}</a>
        </li>
        <li>
          <a href="#features">{t("navbar.features")}</a>
        </li>
        <li>
          <a href="#security">{t("navbar.security")}</a>
        </li>
        <li>
          <a href="#about">{t("navbar.about")}</a>
        </li>
        <li>
          <a href="#contact">{t("navbar.contact")}</a>
        </li>
      </ul>

      <div className="navbar-right">
        <div className="language-selector">
          <button
            className="language-btn"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            <FaGlobe />
            {languages[i18n.language] || "English"} ▼
          </button>

          {showLanguages && (
            <div className="language-dropdown">
              <button onClick={() => changeLanguage("en")}>
                English
              </button>

              <button onClick={() => changeLanguage("si")}>
                සිංහල
              </button>

              <button onClick={() => changeLanguage("ta")}>
                தமிழ்
              </button>
            </div>
          )}
        </div>

        {location.pathname !== "/login" && (
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            {t("navbar.login")}
          </button>
        )}

        {location.pathname !== "/register" && (
          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            {t("navbar.register")}
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;