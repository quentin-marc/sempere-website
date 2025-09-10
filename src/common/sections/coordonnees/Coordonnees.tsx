import styles from "./Coordonnees.module.css";
import { useTranslation } from "react-i18next";
import { Phone, AtSign, MapPinCheck } from "lucide-react";

export default function Coordonnees() {
    const { t } = useTranslation();
    return (
        <section className={styles.container}>
            <div className={styles.colonneTexte}>
                <h2>{t("coordonnees.titre")}</h2>
                <p>{t("coordonnees.texte1")}</p>
                <ul className={styles.puces}>
                    <li>{t("coordonnees.puces.matin")}</li>
                    <li>{t("coordonnees.puces.aprem")}</li>
                </ul>
                <div className={styles.catContact}>
                    <div className={styles.iconContainer}>
                        <Phone />
                    </div>
                    <div className={styles.textesContact}>
                        <div className={styles.titreContact}>
                            {t("coordonnees.telephone")}
                        </div>
                        <div className={styles.valContact}>06 06 06 06 06</div>
                    </div>
                </div>
                <div className={styles.catContact}>
                    <div className={styles.iconContainer}>
                        <AtSign />
                    </div>
                    <div className={styles.textesContact}>
                        <div className={styles.titreContact}>
                            {t("coordonnees.email")}
                        </div>
                        <div className={styles.valContact}>
                            contact@semperetp.fr
                        </div>
                    </div>
                </div>
                <div className={styles.catContact}>
                    <div className={styles.iconContainer}>
                        <MapPinCheck />
                    </div>
                    <div className={styles.textesContact}>
                        <div className={styles.titreContact}>
                            {t("coordonnees.adresse")}
                        </div>
                        <div className={styles.valContact}>
                            60 Route de Perpignan, 66380 Pia
                        </div>
                    </div>
                </div>
            </div>
            <iframe
                className={styles.carte}
                title="Google Maps Pia"
                src="https://www.google.com/maps?q=60%20Route%20de%20Perpignan,%2066380%20Pia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
}
