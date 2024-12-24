import React from 'react'
import styles from './index.module.scss'

const Services = () => {
  return (
    <div className={styles.services} id='service'>
      <h1>My Services</h1>
      <p>Services to Deliver Exceptional User Experiences</p>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
          <div className={styles.card}>
          <img src="https://img.icons8.com/?size=48&id=Zh3EQfzwFUbT&format=gif" alt="Web Development" />
          <h2>Web Development</h2>
          <ul><li>Building optimized web interfaces for mobile and desktop devices.</li>
          <li>Adhering to modern design trends.</li>
          <li>Delivering pixel-perfect work using HTML, CSS, and JavaScript.
          </li>
          </ul>
        </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
          <div className={styles.card}>
          <img src="https://img.icons8.com/?size=50&id=8rPYYnlOSQJm&format=gif" alt="Web Development" />
          <h2>UI/UX Design Services</h2>
          <ul>
            <li>Creating user-friendly interfaces.

            </li>
            <li>Developing prototypes and wireframes.
            </li>
            <li>Designing intuitive concepts for digital products.
            </li>
          </ul>
        </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
          <div className={styles.card} >
          <img src="https://img.icons8.com/?size=50&id=32258&format=png" alt="Web Development" />
          <h2>Responsive Design</h2>
          <ul>
            <li>Developing interfaces that adapt to all screen sizes.

            </li>
            <li>Ensuring high-performance web pages with cross-platform support.
            </li>
            <li>Designing intuitive concepts for digital products.
            </li>
          </ul>
        </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
          <div className={styles.card} >
          <img src="https://img.icons8.com/?size=50&id=6rs819HkXgBz&format=png" alt="Web Development" />
          <h2>Single Page Application (SPA) Development </h2>
          <ul>
            <li>Creating interactive web applications using Vue.js, React.js, or Angular.js.


            </li>
            <li>Optimizing for dynamic and fast page load times.
            </li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
          <div className={styles.card} >
          <img src="https://img.icons8.com/?size=80&id=55499&format=png" />
          <h2>Client-Side Programming (Frontend Development) </h2>
          <ul>
            <li>Integrating APIs and visualizing data.



            </li>
            <li>Adding interactive elements based on user behavior.

            </li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
          <div className={styles.card} >
          <img src="https://img.icons8.com/?size=50&id=JtOasgwoFNyW&format=png" />
          <h2> Performance and SEO Optimization</h2>
          <ul>
            <li>Enhancing website performance for faster load times.




            </li>
            <li>Structuring SEO-friendly HTML for better search engine visibility.

            </li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Services
