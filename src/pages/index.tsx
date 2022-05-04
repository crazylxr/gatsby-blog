import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { dateFormat } from "../utils/formmat"
import styled from "styled-components"

export const color_meta = "#666"
export const color_border = "#666"

export const H1 = styled.h1`
  display: block;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: #2bbc8a;
  letter-spacing: 0.01em;
  font-weight: 700;
  font-style: normal;
  font-size: 1.5em;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`
export const H2 = styled.h2`
  position: relative;
  display: block;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  color: #383838;
  text-transform: none;
  letter-spacing: normal;
  font-weight: bold;
  font-size: 1.2rem;
`
export const PostList = styled.ul`
  padding: 0;
`

export const PostItem = styled.li`
  margin-bottom: 1rem;
  margin-left: 0;
  list-style-type: none;

  .meta {
    display: block;
    margin-right: 16px;
    min-width: 100px;
    color: ${color_meta};
    font-size: 1rem;
  }

  @media (min-width: 480px) {
    display: flex;
    margin-bottom: 5px;

    .meta {
      text-align: left;
    }
  }
`


export default function Index({ data, location }) {
  const description = data.site.siteMetadata?.description || "de"
  const posts = dateFormat(data.allMarkdownRemark.nodes).slice(0, 6)

  if (posts.length === 0) {
    return (
      <Layout>
        {/* <Seo title="All posts" />
        <Bio /> */}
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <section id="about">
        {description}
        <p>
          Find me on &nbsp;
          <a
            className="icon"
            target="_blank"
            rel="noopener"
            href="https://github.com/crazylxr"
            aria-label="github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
      </section>
      <section id="archives">
        <H1>
          <Link to="/archives">Archives</Link>
        </H1>
        <H2>Most recent</H2>
        <PostList>
          {posts.map(post => (
            <PostItem>
              <div className="meta">
                <time>{post.frontmatter.date}</time>
              </div>
              <span>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </span>
            </PostItem>
          ))}
        </PostList>
      </section>
      <section id="projects">
        <H1>
          <Link to="/archives">Projects</Link>
        </H1>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
        }
      }
    }
  }
`
