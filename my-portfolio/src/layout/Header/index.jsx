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
            <li><a href="#">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Abilities</a></li>
            <li><a href="#">Portfolio</a></li>
          </ul>
          <div>
            <button className="btn btn-light">My Cv</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
