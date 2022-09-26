
export default function Footer() {
    return (
        <footer id="footer">
            <div className="footerwrap">
                <h4>Er jeg jeres nye praktikant?</h4>
                <h1>Kontakt mig</h1>
                <a className="footerMail" href="mailto:kontakt@karolineaaby.dk">kontakt@karolineaaby.dk</a>
                 <div className="footerInfo">
                    <p>© 2022 Karoline Aaby <br></br>Designed and developed with ♥︎ </p>
                    <div className="footerSoMe">
                        <a href="https://www.linkedin.com/in/karoline-marie-aaby-s%C3%B8rensen/" target="_blank" rel="noreferrer" >Linkedin</a>
                        <a href="https://github.com/KarolineAaby" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://aabyfoto.dk/" target="_blank" rel="noreferrer">Aabyfoto.dk</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}