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
                    <img
                        className={styles.photo}
                        src={`/photosChantiers/colioure.jpg`}
                        alt={`Photo d'ouvriers en train de couler du béton à Colioure.`}
                    />
                    <img
                        className={styles.photo}
                        src={`/photosChantiers/DemolitionPrincipale.jpg`}
                        alt={`Photo d'un engin en train de démolire une résidence.`}
                    />
                </div>
                <div className={styles.ligne}>
                    <img
                        className={styles.photo}
                        src={`/photosChantiers/TPCanal.jpg`}
                        alt={`Photo d'ouvriers en réfection d'un canal.`}
                    />
                </div>
                <div className={styles.ligne}>
                    <img
                        className={styles.photo}
                        src={`/photosChantiers/demolLogement.jpg`}
                        alt={`Photo d'ouvriers en train de démolir une maison.`}
                    />
                    <img
                        className={styles.photo}
                        src={`/photosChantiers/amianteAsso.jpg`}
                        alt={`Photo d'ouvriers en train de désamianter une association.`}
                    />
                </div>
            </div>
        </section>
    );
}
