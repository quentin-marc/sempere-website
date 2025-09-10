import styles from "./SpecialiteHero.module.css";
import { useTranslation } from "react-i18next";
import heroImage from "../../../assets/TP.jpeg";
import { useNavigate } from "react-router-dom";

export default function SpecialiteHero({ type }: { type?: string }) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section className={styles.hero}>
            <div className={styles.corpsHero}>
                <div className={styles.overlay}>
                    <h1>{t(`hero${type}.titre`)}</h1>
                    <p>{t(`hero${type}.texte`)}</p>
                    {type == "Contact" ? (
                        <div className={styles.warning}>
                            {t(`hero${type}.warning`)}
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                navigate("/contact");
                                window.scrollTo(0, 0);
                            }}
                        >
                            {t("common.CTA")}
                        </button>
                    )}
                </div>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${heroImage})` }}
                ></div>
            </div>
        </section>
    );
}
