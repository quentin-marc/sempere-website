import styles from "./Chantier.module.css";

export default function Chantier({
    nom,
    ville,
    annee,
}: {
    nom: string;
    ville: string;
    annee: string;
}) {
    return (
        <div className={styles.chantier}>
            <div className={styles.image}></div>
            <div className={styles.meta}>
                <div className={styles.nom}>{nom}</div>
                <div className={styles.sublabel}>
                    {ville} - {annee}
                </div>
            </div>
        </div>
    );
}
