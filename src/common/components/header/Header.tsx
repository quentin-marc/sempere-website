import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";
import Logo from "../../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                {/* Logo à gauche */}
                <div className={styles.logoContainer}>
                    <Link to="/">
                        <img
                            src={Logo}
                            className={styles.logo}
                            alt="Logo Sempere & Fils"
                        />
                    </Link>
                </div>

                {/* Liens au centre */}
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/">{t("menu.Accueil")}</Link>
                    </li>
                    <li>
                        <Link to="/travaux-publics">
                            {t("menu.TravauxPublics")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/desamiantage">{t("menu.Desamiantage")}</Link>
                    </li>
                    <li>
                        <Link to="/demolition">{t("menu.Demolition")}</Link>
                    </li>
                </ul>

                {/* Bouton à droite */}
                <button
                    className={styles.button}
                    onClick={() => {
                        navigate("/contact");
                        window.scrollTo(0, 0);
                    }}
                >
                    {t("menu.Contact")}
                </button>

                <div
                    className={styles.menuMobile}
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X /> : <Menu />}
                </div>
            </nav>
            {open ? (
                <div
                    className={styles.popIn}
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <nav className={styles.navbarMobile}>
                        <Link to="/">{t("menu.Accueil")}</Link>

                        <Link to="/travaux-publics">
                            {t("menu.TravauxPublics")}
                        </Link>

                        <Link to="/desamiantage">{t("menu.Desamiantage")}</Link>

                        <Link to="/demolition">{t("menu.Demolition")}</Link>

                        <Link to="/contact">{t("menu.Contact")}</Link>
                    </nav>
                </div>
            ) : null}
        </header>
    );
}
