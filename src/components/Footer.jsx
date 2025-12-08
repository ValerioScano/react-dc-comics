import style from "./Footer.module.css"
function Footer() {
    return (
        <footer className={style.footer}>
            <section className="d-flex justify-content-around">
                <div className="d-flex gap-5 p-5">
                    <div>
                        <h5 className="text-white">DC comics</h5>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>

                        <h5 className="text-white">Lorem</h5>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white">Ipsum</h5>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white">Dolor</h5>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <img src="img/favicon.ico" alt="logo-dc" className={style.bigLogo} />
                </div>
            </section>

            <section className={`${style.secondSection} d-flex justify-content-around`}>
                <div className={style.lastFooter}>
                    <button className="btn btn-primary">
                        SIGN-UP NOW!
                    </button>
                </div>

                <div className={style.lastFooter}>
                    FOLLOW US
                    <img src="img/footer-facebook.png" alt="fb logo" />
                    <img src="img/footer-periscope.png" alt="ps logo" />
                    <img src="img/footer-pinterest.png" alt="pinterest logo" />
                    <img src="img/footer-twitter.png" alt="twitter logo" />
                    <img src="img/footer-youtube.png" alt="yt logo" />
                </div>
            </section>
        </footer>
    )
}

export default Footer