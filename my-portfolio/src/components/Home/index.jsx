import 'bootstrap/dist/css/bootstrap.min.css';
import styles  from './index.module.scss'
import logo from "../../assets/my-photo.png"
const Home = () => {
    console.log(styles);
    return (
            <section id={styles.homePage}>
                <div className="container">
                    <div className={styles.homeContent}>
                        <div className="row" style={{alignItems: 'center', height : '450px'}} >
                            <div className={`col-12 col-md-6 ${styles.name}`}  >
                                <h1>Farid</h1>
                                <h2>Shahmurov</h2>
                                <p>Hey there! 👋 I'm Farid Shahmursoy, a Front-End Alchemist 🧙‍♂️ who crafts pixel-perfect magic with code. It's my portfolio – a reflection of my passion, creativity, and relentless drive to build user-centric experiences.</p>
                            </div>
                            <div className={`col-12 col-md-12 col-lg-6  `} >
                                
                                <img src={logo} alt="" />
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        
    )
}

export default Home