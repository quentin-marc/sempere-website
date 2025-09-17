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
            image: "demolLidl.jpg",
        },
        {
            nom: "Réfection canal d'Elne",
            ville: "Saint Cyprien",
            annee: "2025",
            type: "TP",
            image: "TPCanal.jpg",
        },
        {
            nom: "Maison des associations",
            ville: "Baho",
            annee: "???",
            type: "Desamiantage",
            image: "amianteAsso.jpg",
        },
        {
            nom: "Pose mobilier urbain",
            ville: "Ste Marie de la mer",
            annee: "2024",
            type: "TP",
            image: "TPSteMarie.jpg",
        },
        {
            nom: "Tuyauterie piscine",
            ville: "St Cyprien",
            annee: "2023",
            type: "TP",
            image: "TPpiscine.jpg",
        },
        {
            nom: "Démolition Abattoirs",
            ville: "Perpignan",
            annee: "2024",
            type: "Demolition",
            image: "demolAbattoirs.jpg",
        },
        {
            nom: "Désamiantage Auchan",
            ville: "Perpignan",
            annee: "???",
            type: "Desamiantage",
            image: "amianteAuchan.jpg",
        },
        {
            nom: "Dallage parc des expos",
            ville: "Perpignan",
            annee: "2022",
            type: "TP",
            image: "TPDallage.jpg",
        },
        {
            nom: "Démolition dem Mairie",
            ville: "Pollestres",
            annee: "2023",
            type: "Demolition",
            image: "demolMairie.jpg",
        },
        {
            nom: "Démolition immeuble",
            ville: "Montpellier",
            annee: "2022",
            type: "Demolition",
            image: "demolImmeuble.jpg",
        },
        {
            nom: "Démolition logement",
            ville: "Castelnau le Lez",
            annee: "2021",
            type: "Demolition",
            image: "demolLogement.jpg",
        },
        {
            nom: "Démolition résidence",
            ville: "Banyuls centre",
            annee: "2020",
            type: "Demolition",
            image: "demolResidence.jpg",
        },
        {
            nom: "Décaissement",
            ville: "Collioure",
            annee: "2021",
            type: "TP",
            image: "TPDecaissement.jpg",
        },
        {
            nom: "Désamiantage rond point",
            ville: "Perpignan",
            annee: "???",
            type: "Desamiantage",
            image: "amianteRondPoint.jpg",
        },
        {
            nom: "Désamiantage hangar",
            ville: "Pollestres",
            annee: "???",
            type: "Desamiantage",
            image: "amianteHangar.jpg",
        },
        {
            nom: "Désamiantage lycée",
            ville: "Toulouse",
            annee: "???",
            type: "Desamiantage",
            image: "amianteLycee.jpg",
        },
        {
            nom: "Fondations serres",
            ville: "Alenya",
            annee: "2020",
            type: "TP",
            image: "TPCoffrage.jpg",
        },
        {
            nom: "Désamiantage train jaune",
            ville: "Villefranche-de-Conflent",
            annee: "???",
            type: "Desamiantage",
            image: "amianteTrain.jpg",
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
                        image={chantier.image}
                    />
                ))}
            </div>
        </section>
    );
}
