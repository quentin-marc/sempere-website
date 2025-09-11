import styles from "./DomainesIntervention.module.css";
import { useTranslation } from "react-i18next";
import Domaine from "../../components/domaine/Domaine";
import { useEffect, useState } from "react";

export default function DomainesIntervention({ type }: { type?: string }) {
    const { t } = useTranslation();

    const [width, setWidth] = useState(window.innerWidth);

    //en fonction de la taille de l'écran, on n'affiche pas le texte de la deuxième tuile
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Ajout du listener
        window.addEventListener("resize", handleResize);

        // Nettoyage du listener quand le composant est démonté
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                                openDefault={width >= 750 && i < 1}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
}
