import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as styles from '../../styles/projects.module.css'

const Projects = ({ data }) => {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
              <div>
               
                <GatsbyImage
                  image={getImage(
                    project.frontmatter.thumb.childrenImageSharp[0]
                      .gatsbyImageData
                  )}
                  alt='A dinosaur'
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Likewhat you see? email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
