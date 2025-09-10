import SpecialiteHero from "../common/sections/specialiteHero/SpecialiteHero";
import Coordonnees from "../common/sections/coordonnees/Coordonnees";
import BandeauCredibilite from "../common/components/bandeauCredibilite/BandeauCredibilite";

export default function Contact() {
    return (
        <div>
            <SpecialiteHero type={"Contact"}></SpecialiteHero>
            <BandeauCredibilite></BandeauCredibilite>
            <Coordonnees></Coordonnees>
        </div>
    );
}
