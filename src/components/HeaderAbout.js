import { HashLink } from 'react-router-hash-link';
import headerImage from '../media/portraitchair.png';

export default function HeaderAbout() {
    return (
        <header className="headerAbout">
            <img src={headerImage} alt="#"/>
            <div className="homeHeader">
                <h4>Lær mig at kende</h4>
                <h1>Så, hvem er jeg?</h1>
                <p className="headerAboutDescription">Hej igen! <br></br> Jeg er Karoline Aaby. <br></br> En kreativ sjæl, med en stor passion for at optimere og løse problemer. Jeg elsker at kunne fordybe mig og er altid nysgerrig på ny læring. </p>
                 <div className="btnAbout">
                    <HashLink smooth to="#mig" className="buttonMain">Lær mig bedre at kende↓</HashLink>
                </div>
            </div>
        </header>
    );
}