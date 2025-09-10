import SpecialiteHero from "../common/sections/specialiteHero/SpecialiteHero";
import BandeauCTA from "../common/components/bandeauCTA/BandeauCTA";
import BandeauStats from "../common/components/bandeauStats/BandeauStats";
import DomainesIntervention from "../common/sections/domainesIntervention/DomainesIntervention";
import ExemplesChantiers from "../common/sections/exemplesChantiers/ExemplesChantiers";

export default function Desamiantage() {
    return (
        <div>
            <SpecialiteHero type={"Desamiantage"}></SpecialiteHero>
            <BandeauStats type={"Desamiantage"}></BandeauStats>
            <DomainesIntervention type={"Desamiantage"} />
            <BandeauCTA />
            <ExemplesChantiers type={"Desamiantage"}></ExemplesChantiers>
        </div>
    );
}
