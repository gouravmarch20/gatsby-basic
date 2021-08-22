import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

const Home = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>

          <Link className={styles.btn} to='/projects'>
            My Portfolio Projects
          </Link>
        </div>
        <StaticImage src='../images/banner.png' alt='A banner image' />
      </section>
    </Layout>
  )
}

export default Home
