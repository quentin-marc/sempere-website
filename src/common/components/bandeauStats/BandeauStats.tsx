import styles from "./BandeauStats.module.css";
import { useTranslation } from "react-i18next";

//m = métrique, l=label
export default function BandeauStats({ type }: { type?: string }) {
    const { t } = useTranslation();
    return (
        <div className={styles.bandeau}>
            <div className={styles.bodyBandeau}>
                <div className={styles.metrique}>
                    <div className={styles.indicateur}>
                        {t(`BandeauStats.${type}.m1`)}
                    </div>
                    <div className={styles.label}>
                        {t(`BandeauStats.${type}.l1`)}
                    </div>
                </div>

                <div className={styles.metrique}>
                    <div className={styles.indicateur}>
                        {t(`BandeauStats.${type}.m2`)}
                    </div>
                    <div className={styles.label}>
                        {t(`BandeauStats.${type}.l2`)}
                    </div>
                </div>

                <div className={styles.metrique}>
                    <div className={styles.indicateur}>
                        {t(`BandeauStats.${type}.m3`)}
                    </div>
                    <div className={styles.label}>
                        {t(`BandeauStats.${type}.l3`)}
                    </div>
                </div>
            </div>
        </div>
    );
}
