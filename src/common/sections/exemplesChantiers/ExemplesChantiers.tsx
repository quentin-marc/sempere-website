import styles from "./ExemplesChantiers.module.css";
import { useTranslation } from "react-i18next";
import Chantier from "../../components/chantier/Chantier";

export default function ExemplesChantiers({ type }: { type?: string }) {
    const { t } = useTranslation();

    const chantiers = [
        {
            nom: "Démolition Lidl",
            ville: "Rivesaltes",
            annee: "2025",
            type: "Demolition",
        },
        {
            nom: "Voirie Supermarché",
            ville: "Perpignan",
            annee: "2024",
            type: "TP",
        },
        {
            nom: "Désamiantage Entrepôt",
            ville: "Narbonne",
            annee: "2023",
            type: "Desamiantage",
        },
        {
            nom: "Rénovation Ecole",
            ville: "Carcassonne",
            annee: "2025",
            type: "TP",
        },
        {
            nom: "Démolition Usine",
            ville: "Perpignan",
            annee: "2022",
            type: "Demolition",
        },
        {
            nom: "Voirie Zone Industrielle",
            ville: "Béziers",
            annee: "2024",
            type: "TP",
        },
        {
            nom: "Désamiantage Immeuble",
            ville: "Narbonne",
            annee: "2025",
            type: "Desamiantage",
        },
        {
            nom: "Terrassement Parking",
            ville: "Perpignan",
            annee: "2023",
            type: "TP",
        },
        {
            nom: "Démolition Hangar",
            ville: "Rivesaltes",
            annee: "2025",
            type: "Demolition",
        },
        {
            nom: "Rénovation Route",
            ville: "Béziers",
            annee: "2024",
            type: "TP",
        },
        {
            nom: "Désamiantage Locaux",
            ville: "Carcassonne",
            annee: "2023",
            type: "Desamiantage",
        },
        {
            nom: "Démolition Entrepôt",
            ville: "Perpignan",
            annee: "2025",
            type: "TP",
        },
    ];

    const chantiersFiltres = type
        ? chantiers.filter((c) => c.type === type)
        : chantiers;

    return (
        <section className={styles.exemplesChantiers}>
            <h2>{t("exemplesChnatiers.titre")}</h2>
            <div className={styles.containerChantiers}>
                {chantiersFiltres.map((chantier, index) => (
                    <Chantier
                        key={index}
                        nom={chantier.nom}
                        ville={chantier.ville}
                        annee={chantier.annee}
                    />
                ))}
            </div>
        </section>
    );
}
