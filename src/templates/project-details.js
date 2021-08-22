import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage
            image={getImage(
              data.markdownRemark.frontmatter.featuredImg.childImageSharp
            )}
            alt='A dinosaur'
          />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
