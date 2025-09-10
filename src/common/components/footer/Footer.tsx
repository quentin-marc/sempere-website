import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, AtSign } from "lucide-react";
import Logo from "../../../assets/logoBlanc.svg";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer}>
            <div className={styles.corpsFooter}>
                <div className={styles.colonneDroite}>
                    <Link to="/">
                        <img
                            src={Logo}
                            className={styles.logo}
                            alt="Logo Sempere & Fils"
                        />
                    </Link>
                    <div className={styles.slogan}>
                        {t("footer.expertises")}
                    </div>
                    <div className={styles.contacts}>
                        <div className={styles.contact}>
                            <MapPin /> Route de Perpignan, 66 380 Pia{" "}
                        </div>
                        <div className={styles.contact}>
                            <Phone />
                            06 06 06 06 06{" "}
                        </div>
                        <div className={styles.contact}>
                            <AtSign />
                            contact@sempere-tp.com
                        </div>
                    </div>
                </div>
                <nav className={styles.navbar}>
                    <Link to="/">{t("menu.Accueil")}</Link>

                    <Link to="/travaux-publics">
                        {t("menu.TravauxPublics")}
                    </Link>

                    <Link to="/desamiantage">{t("menu.Desamiantage")}</Link>

                    <Link to="/demolition">{t("menu.Demolition")}</Link>

                    <Link to="/contact">{t("menu.Contact")}</Link>
                </nav>
            </div>
            <div className={styles.copyright}>
                {t("footer.dev")}
                <br></br>
                {t("footer.copyright")}
            </div>
        </footer>
    );
}
