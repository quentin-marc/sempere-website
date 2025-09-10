import styles from "./DomainesIntervention.module.css";
import { useTranslation } from "react-i18next";
import Domaine from "../../components/domaine/Domaine";

export default function DomainesIntervention({ type }: { type?: string }) {
    const { t } = useTranslation();

    // Récupération des textes à afficher
    // Dynamique, quantité infinie
    const interventions = t(
        `domainesIntervention.interventions${type ? type : ""}`,
        {
            returnObjects: true,
        }
    ) as { titre: string; texte: string }[];

    return (
        <section className={styles.containerDomaines}>
            <h2>{t("domainesIntervention.titre")}</h2>
            <div className={styles.domaines}>
                <div className={styles.colonne}>
                    {interventions
                        .slice(0, Math.ceil(interventions.length / 2))
                        .map((item, i) => (
                            <Domaine
                                key={i}
                                titre={item.titre}
                                texte={item.texte}
                                openDefault={i < 1}
                            />
                        ))}
                </div>
                <div className={styles.colonne}>
                    {interventions
                        .slice(Math.ceil(interventions.length / 2))
                        .map((item, i) => (
                            <Domaine
                                key={i}
                                titre={item.titre}
                                texte={item.texte}
                                openDefault={i < 1}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
}
