import styles from "./Domaine.module.css";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function Domaine({
    titre,
    texte,
    openDefault,
}: {
    titre: string;
    texte: string;
    openDefault?: boolean;
}) {
    const [isOpen, setIsOpen] = useState(openDefault);

    return (
        <div
            className={`${styles.domaine} ${isOpen ? styles.open : ""}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className={styles.headerDomaine}>
                {isOpen ? (
                    <Minus className={styles.icon}></Minus>
                ) : (
                    <Plus className={styles.icon}></Plus>
                )}
                <span className={styles.titre}>{titre}</span>
            </div>
            <div className={styles.texte}>{texte}</div>
        </div>
    );
}
