import styles from "./SpecialiteHero.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function SpecialiteHero({ type }: { type?: string }) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    console.log(type);

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
                            className={styles.button}
                        >
                            {t("common.CTA")}
                        </button>
                    )}
                </div>
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(/photosChantiers/${type}Principale.jpg)`,
                    }}
                ></div>
            </div>
        </section>
    );
}
