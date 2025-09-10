import SpecialiteHero from "../common/sections/specialiteHero/SpecialiteHero";
import BandeauCTA from "../common/components/bandeauCTA/BandeauCTA";
import BandeauStats from "../common/components/bandeauStats/BandeauStats";
import DomainesIntervention from "../common/sections/domainesIntervention/DomainesIntervention";
import ExemplesChantiers from "../common/sections/exemplesChantiers/ExemplesChantiers";

export default function TravauxPublics() {
    return (
        <div>
            <SpecialiteHero type={"TP"}></SpecialiteHero>
            <BandeauStats type={"TP"}></BandeauStats>
            <DomainesIntervention type={"TP"} />
            <BandeauCTA />
            <ExemplesChantiers type={"TP"}></ExemplesChantiers>
        </div>
    );
}
