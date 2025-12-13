import style from "./Main.module.css"
import comics from "../dc-comics-2/comics.js"

function Main() {
    return (
        <>
            <main>
                <section className={style.contentPlaceholder}>
                    <div className="container d-flex flex-wrap gap-2 py-3">
                        {
                            comics.map(comicsBook => {
                                return <>
                                    <div className="card col-2">
                                        <img src={comicsBook.thumb} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">{comicsBook.title}</p>
                                        </div>
                                    </div>
                                </>

                            })
                        }
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