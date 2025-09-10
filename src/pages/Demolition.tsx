import SpecialiteHero from "../common/sections/specialiteHero/SpecialiteHero";
import BandeauCTA from "../common/components/bandeauCTA/BandeauCTA";
import BandeauStats from "../common/components/bandeauStats/BandeauStats";
import DomainesIntervention from "../common/sections/domainesIntervention/DomainesIntervention";
import ExemplesChantiers from "../common/sections/exemplesChantiers/ExemplesChantiers";

export default function Demolition() {
    return (
        <div>
            <SpecialiteHero type={"Demolition"}></SpecialiteHero>
            <BandeauStats type={"Demolition"}></BandeauStats>
            <DomainesIntervention type={"Demolition"} />
            <BandeauCTA />
            <ExemplesChantiers type={"Demolition"}></ExemplesChantiers>
        </div>
    );
}
