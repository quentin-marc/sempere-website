import HomeHero from "../common/sections/homeHero/HomeHero";
import BandeauCredibilite from "../common/components/bandeauCredibilite/BandeauCredibilite";
import BandeauCTA from "../common/components/bandeauCTA/BandeauCTA";
import PresentationGenerale from "../common/sections/presentationGenerale/PresentationGenerale";
import SecteursIntervention from "../common/sections/secteursIntervention/SecteursIntervention";
import ExemplesChantiers from "../common/sections/exemplesChantiers/ExemplesChantiers";

export default function Accueil() {
    return (
        <div>
            <HomeHero />
            <BandeauCredibilite />
            <PresentationGenerale />
            <SecteursIntervention />
            <BandeauCTA />
            <ExemplesChantiers></ExemplesChantiers>
        </div>
    );
}
