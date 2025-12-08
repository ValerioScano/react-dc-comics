import style from "./Main.module.css"

function Main() {
    return (
        <>
            <main>
                <section className={style.contentPlaceholder}>
                    <div>
                        <h3>--&gt;Content goes here &lt;--</h3>
                    </div>
                </section>
                <section className={style.actionSection}>
                    <div>
                        <ul className="d-flex justify-content-around">
                            <li className="d-flex gap-2 align-items-center text-white">
                                <img src="img/buy-comics-digital-comics.png" alt="" />
                                <p>Testo placeholder</p>
                            </li>
                            <li className="d-flex gap-2 align-items-center text-white">
                                <img src="img/buy-comics-digital-comics.png" alt="" />
                                <p>Testo placeholder</p>
                            </li>
                            <li className="d-flex gap-2 align-items-center text-white">
                                <img src="img/buy-comics-digital-comics.png" alt="" />
                                <p>Testo placeholder</p>
                            </li>
                            <li className="d-flex gap-2 align-items-center text-white">
                                <img src="img/buy-comics-digital-comics.png" alt="" />
                                <p>Testo placeholder</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Main