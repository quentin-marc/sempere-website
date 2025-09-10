import styles from "./PresentationGenerale.module.css";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

export default function PresentationGenerale() {
    const { t } = useTranslation();
    return (
        <section className={styles.presentation}>
            <div className={styles.colonneTexte}>
                <h2>{t("presentationGenerale.prestations")}</h2>
                <p>{t("presentationGenerale.texte1")}</p>
                <p>
                    <Trans
                        i18nKey="presentationGenerale.texte2"
                        components={{ bold: <strong /> }}
                    />
                </p>
                <p>
                    <Trans
                        i18nKey="presentationGenerale.texte3"
                        components={{ bold: <strong /> }}
                    />
                </p>
            </div>
            <div className={styles.colonnePhotos}>
                <div className={styles.ligne}>
                    <div className={styles.photo}></div>
                    <div className={styles.photo}></div>
                </div>
                <div className={styles.ligne}>
                    <div className={styles.photo}></div>
                </div>
                <div className={styles.ligne}>
                    <div className={styles.photo}></div>
                    <div className={styles.photo}></div>
                </div>
            </div>
        </section>
    );
}
