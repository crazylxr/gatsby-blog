import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { dateFormat } from "../utils/formmat"
import { H2, H1, PostItem } from "../styles"
import styled from "styled-components"
import type { Markdown } from "../types/markdown"
import type { Site } from "../types/site"

type Props = {
  data: {
    site: Site
    allMarkdownRemark: Markdown
  }
}

export const PostList = styled.ul`
  padding: 0;
`

export default function Index({ data }: Props) {
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
