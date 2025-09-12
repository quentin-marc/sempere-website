import styles from "./SecteursIntervention.module.css";
import { useTranslation } from "react-i18next";
import carteFrance from "../../../assets/carteFrance.svg";

export default function PresentationGenerale() {
    const { t } = useTranslation();

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
                <div className={styles.containerTags}>
                    <div className={styles.tag}>
                        <span className={styles.tagColor}></span>
                        <span className={styles.tagTexte}>
                            {t("menu.TravauxPublics")}
                        </span>
                    </div>
                    <div className={styles.tag}>
                        <span className={styles.tagColor}></span>
                        <span className={styles.tagTexte}>
                            {t("menu.Desamiantage")}
                        </span>
                    </div>
                    <div className={styles.tag}>
                        <span className={styles.tagColor}></span>
                        <span className={styles.tagTexte}>
                            {t("menu.Demolition")}
                        </span>
                    </div>
                </div>

                <ul>
                    <li>
                        <span className={styles.departement}>
                            Pyrénées Orientales (66)
                        </span>
                        <span className={styles.colorTP}></span>
                        <span className={styles.colorAmiante}></span>
                        <span className={styles.colorDemol}></span>
                    </li>
                    <li>
                        <span className={styles.departement}>Aude (11)</span>
                        <span className={styles.colorAmiante}></span>
                        <span className={styles.colorDemol}></span>
                    </li>
                    <li>
                        <span className={styles.departement}>Ariège (09)</span>
                        <span className={styles.colorAmiante}></span>
                        <span className={styles.colorDemol}></span>
                    </li>
                    <li>
                        <span className={styles.departement}>Hérault (34)</span>
                        <span className={styles.colorAmiante}></span>
                    </li>
                    <li>
                        <span className={styles.departement}>Gard (30)</span>
                        <span className={styles.colorAmiante}></span>
                    </li>
                    <li>
                        <span className={styles.departement}>Tarn (81)</span>
                        <span className={styles.colorAmiante}></span>
                    </li>

                    <li>
                        <span className={styles.departement}>
                            Haute Garonne (31)
                        </span>
                        <span className={styles.colorAmiante}></span>
                    </li>
                    <li>
                        <span className={styles.departement}>
                            +7 {t("secteursIntervention.autres")}
                        </span>
                        <span className={styles.colorAmiante}></span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
