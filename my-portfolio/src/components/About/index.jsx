import React, { useState } from 'react';

const About = () => {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore
        );
    };

    const styles = {
        aboutContainer: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease-in-out',
        },
        aboutContainerHover: {
            backgroundColor: '#e9e9e9',
        },
        developerImage: {
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            marginBottom: '20px',
            transition: 'transform 0.3s ease-in-out',
        },
        developerImageHover: {
            transform: 'scale(1.1)',
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
        },
        buttonHover: {
            backgroundColor: 'bisque',
            transform: 'scale(1.05)',
        },
        p:{
            width:'100px'
        }
    };

    return (
        <div id='about'
            className="about-container" 
            style={styles.aboutContainer}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.aboutContainerHover.backgroundColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.aboutContainer.backgroundColor}
        >
            <h1>About Me</h1>
            <img 
                src="https://randomuser.me/api/portraits/men/55.jpg" 
                alt="Random Developer" 
                className="developer-image"
                style={styles.developerImage}
                onMouseEnter={(e) => e.currentTarget.style.transform = styles.developerImageHover.transform}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
            />
            <p>
                Hi, I'm a passionate developer with a love for creating interactive web applications.
                {showMore && (
                    <span>
                        {' '}I have experience in various technologies including React, Node.js, and more. 
                        In my free time, I enjoy learning new programming languages and contributing to open-source projects.
                    </span>
                )}
            </p>
            <button  onClick={handleToggle}>
                {showMore ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
};

export default About;