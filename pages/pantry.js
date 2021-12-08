import styles from '../styles/Home.module.css'

export default function Pantry() {
    return (
        <div>
            <h1 className={styles.title}> Pantry </h1>
            <div className="row row-cols-1 row-cols-md-5 g-4">
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/baking.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> BAKING INGREDIENTS </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/broth.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> BROTH {"&"} BOUILLON </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/can.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="/canned-dried-food"> CANNED {"&"} DRIED FOOD </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/cereal.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> CEREAL {"&"} BREAKFAST </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/condiments.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> CONDIMENTS </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/dressing.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> DRESSING, OIL {"&"} VINEGAR </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/jelly.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> JELLY {"&"} JAM </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/pantrymeal.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> PANTRY MEALS </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/pasta.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> PASTA {"&"} RICE </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/pb.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> PEANUT BUTTER </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/salsa.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> SALSA {"&"} DIP </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/sauce.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> SAUCES {"&"} MARINADES </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/snack.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> SNACKS {"&"} CANDY </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/chili.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> SOUPS {"&"} CHILI </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/spices.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> SPICES {"&"} SEASONINGS </a></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/pantry_pics/sugar.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className={styles.card}><a href="#"> SUGAR {"&"} SWEETNERS </a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
