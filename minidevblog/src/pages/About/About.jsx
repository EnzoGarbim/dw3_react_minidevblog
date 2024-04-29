import React from "react"
import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
    return (
        <>
        <div className={styles.About}>
        <h2>Sobre o Blog <span>DEV</span></h2>
        <p>
            Esse é um projeto de um blog realziado com as tecnologias: 
            React para Front-End e Firebase para Back-End.
        </p>
        <Link to="/post/create" className={styles.btn}>
            Criar um Post
        </Link>
        </div>
        </>
    )
}

export default About