import styles from "./Chantier.module.css";

export default function Chantier({
    nom,
    ville,
    annee,
    image,
}: {
    nom: string;
    ville: string;
    annee: string;
    image: string;
}) {
    return (
        <div className={styles.chantier}>
            <img
                className={styles.image}
                src={`/photosChantiers/${image}`}
                alt={`Photo du chantier ${nom}`}
            />
            <div className={styles.meta}>
                <div className={styles.nom}>{nom}</div>
                <div className={styles.sublabel}>
                    {ville} - {annee}
                </div>
            </div>
        </div>
    );
}
