import { Link } from "react-router-dom";
import headerImage from '../media/portrait.png';
import { HashLink } from "react-router-hash-link";

export default function HeaderHome() {
    return (
        <header>
            <div className="homeHeader">
                <h4>Karoline Aaby</h4>
                <h1>Kreativ designer, frontend developer og fotograf.</h1>
                <p className="headerDescription">Jeg er en detaljeorienteret og lærenem multimediedesigner, som elsker at skabe, designe og udvikle wow-projekter, der driver virksomheder fremad. </p>
                 <div className="btnHome">
                    <HashLink smooth to="/#projekter" className="buttonMain">Se projekter</HashLink>
                    <p>eller</p>
                    <Link to="/om" className="buttonMain">Læs om mig</Link>
                </div>
                <div className="btnHome-mobile">                 
                    <HashLink smooth to="/#footer" className="buttonMain">Kontakt mig</HashLink>
                </div>
            </div>
            <img src={headerImage} alt="#"/>
        </header>
    );
}