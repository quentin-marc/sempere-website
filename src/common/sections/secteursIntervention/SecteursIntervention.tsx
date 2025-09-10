import styles from "./SecteursIntervention.module.css";
import { useTranslation } from "react-i18next";
import carteFrance from "../../../assets/carteFrance.svg";

export default function PresentationGenerale() {
    const { t } = useTranslation();
    // récupère le tableau des départements depuis i18n
    const departements = t("secteursIntervention.departements", {
        returnObjects: true,
    }) as string[];
    return (
        <section className={styles.secteurs}>
            <div className={styles.colonneCarte}>
                <img
                    src={carteFrance}
                    alt="CarteFrance"
                    className={styles.carte}
                />
            </div>
            <div className={styles.colonneTextes}>
                <h2>{t("secteursIntervention.titre")}</h2>
                <p>{t("secteursIntervention.texte1")}</p>
                <ul>
                    {departements.map((dep, index) => (
                        <li key={index}>{dep}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
