import styles from "./HomeHero.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function HomeHero() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}>
                <h1>{t("common.slogan")}</h1>
                <p>{t("homehero.subtitle")}</p>
                <button
                    className={styles.button}
                    onClick={() => {
                        navigate("/contact");
                        window.scrollTo(0, 0);
                    }}
                >
                    {t("common.CTA")}
                </button>
            </div>
        </section>
    );
}
