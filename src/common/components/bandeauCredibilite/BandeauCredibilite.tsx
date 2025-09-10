import styles from "./BandeauCredibilite.module.css";
import { useTranslation } from "react-i18next";
import logo1 from "../../../assets/logosCredibilite/logo1.png";
import logo2 from "../../../assets/logosCredibilite/logo2.png";
import logo3 from "../../../assets/logosCredibilite/logo3.png";
import logo4 from "../../../assets/logosCredibilite/logo4.png";
import logo5 from "../../../assets/logosCredibilite/logo5.png";

export default function BandeauCredibilite() {
    const { t } = useTranslation();
    return (
        <div className={styles.bandeauContainer}>
            <div className={styles.bandeau}>
                <div className={styles.texte}>
                    {t("bandeauCredibilite.texte")}
                </div>
                <div className={styles.logos}>
                    <img
                        src={logo1}
                        alt="Logo Fédération Française du Batiment"
                    />
                    <img src={logo2} alt="Logo Ethibat" />
                    <img src={logo3} alt="Logo Les travaux publics" />
                    <img src={logo4} alt="Logo Qualibat" />
                    <img src={logo5} alt="Logo Amiante" />
                </div>
            </div>
        </div>
    );
}
