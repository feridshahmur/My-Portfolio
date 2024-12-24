import styles from "./index.module.scss"
import logo from "../../assets/logo-removebg-preview.png"
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.header

        }>
         
            <img className={styles.logo}  src={logo} alt="" />
          
          <ul>
            <li><a href="#homePage">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#abilities">Abilities</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
          <div>
          <a href="../../public/cv.pdf" download="cv.pdf" className="btn btn-light">
              My CV
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
