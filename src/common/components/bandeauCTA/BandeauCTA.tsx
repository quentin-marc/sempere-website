import styles from "./BandeauCTA.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function BandeauCTA() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <div className={styles.bandeau}>
            <span className={styles.texte}>{t("common.sousTexteCTA")}</span>
            <button
                onClick={() => {
                    navigate("/contact");
                    window.scrollTo(0, 0);
                }}
            >
                {t("common.CTA")}
            </button>
        </div>
    );
}
