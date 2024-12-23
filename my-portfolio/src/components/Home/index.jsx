import 'bootstrap/dist/css/bootstrap.min.css';
import styles  from './index.module.scss'
import logo from "../../assets/my-photo.png"
const Home = () => {
    return (
        
            <section className={styles.homePage}>
                <div className="container">
                    <div className="home-content">
                        <div className="row">
                            <div className={`col-12 col-md-4 ${styles.name}`}  >
                                <h1>FARID</h1>
                            </div>
                            <div className={`col-12 col-md-4 ${styles.logo}`} >
                                <img src={logo} alt="" />
                            </div>
                            <div className={`col-12 col-md-4 ${styles.surname}`} >
                                SHAHMUROV
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
    )
}

export default Home