import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.module.scss'
const Abilities = () => {
  return (
    <section id="abilities" className={styles.abilities}>
      <div className="container">
        <div className={styles.cards}>
            <h1 style={{textAlign : "center", color:"brown", marginBottom : "5rem", fontSize:"4rem", fontWeight:"800"}}>My Abilities</h1>
            <div className="row">
                <div className="col-6 col-md-6 col-lg-4"> 
                    <div className={styles.card} >
                        <img src="https://cdn-icons-png.flaticon.com/128/3291/3291670.png"  className="card-img-top" alt="React" />
                        <div className="card-body">
                            <h5 className="card-title">HTML-5</h5>
                             
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-4"> 
                    <div className={styles.card} >
                        <img src="https://cdn-icons-png.flaticon.com/128/852/852486.png"   className="card-img-top" alt="React" />
                        <div className="card-body">
                            <h5 className="card-title">CSS-3</h5>
                             
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-4"> 
                    <div className={styles.card} >
                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"  className="card-img-top" alt="React" />
                        <div className="card-body">
                            <h5 className="card-title">Bootstrap</h5>
                             
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-4"> 
                    <div className={styles.card} >
                        <img src="https://img.icons8.com/color/96/000000/javascript.png"  className="card-img-top" alt="React" />
                        <div className="card-body">
                            <h5 className="card-title">JavaScript</h5>
                             
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-4"> 
                    <div className={styles.card} >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"  className="card-img-top" alt="React" />
                        <div className="card-body">
                            <h5 className="card-title">Taillwind</h5>
                             
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-4"> 
                    <div className={styles.card} >
                        <img src="https://img.icons8.com/color/96/000000/react-native.png"  className="card-img-top" alt="React" />
                        <div className="card-body">
                            <h5 className="card-title">React</h5>
                             
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-4"> 
                    <div className={styles.card} >
                        <img src="https://img.icons8.com/color/96/000000/vite.png"  className="card-img-top" alt="React" />
                        <div className="card-body">
                            <h5 className="card-title">Vite</h5>
                             
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-4"> 
                    <div className={styles.card} >
                        <img src="https://img.icons8.com/color/96/000000/python"  className="card-img-top" alt="React" />
                        <div className="card-body">
                            <h5 className="card-title">Python</h5>
                             
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-4"> 
                    <div className={styles.card} >
                        <img src="https://img.icons8.com/color/96/000000/nodejs.png"  className="card-img-top" alt="React" />
                        <div className="card-body">
                            <h5 className="card-title">Node JS</h5>
                             
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-4"> 
                    <div className={styles.card} >
                        <img src="https://img.icons8.com/color/96/000000/mongodb.png"  className="card-img-top" alt="React" />
                        <div className="card-body">
                            <h5 className="card-title">MongoDb</h5>
                             
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-4"> 
                    <div className={styles.card} >
                        <img src="https://img.icons8.com/color/96/000000/material-ui.png"  className="card-img-top" alt="React" />
                        <div className="card-body">
                            <h5 className="card-title">Material UI</h5>
                             
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-4"> 
                    <div className={styles.card} >
                        <img src="https://img.icons8.com/color/96/000000/figma.png"  className="card-img-top" alt="React" />
                        <div className="card-body">
                            <h5 className="card-title">Figma</h5>
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Abilities
