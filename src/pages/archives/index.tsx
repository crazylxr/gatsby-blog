import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/layout"
import { dateFormat } from "../../utils/formmat"

export const color_meta = "#666"
export const color_border = "#666"

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

const WritingPostItem = styled(PostItem)`
  margin-left: 1rem;
  margin-top: 5px;
`

export default function Archives({ data }) {
  const posts = dateFormat(data.allMarkdownRemark.nodes)

  const yearPosts = posts.reduce((acc, post) => {
    const year = post.frontmatter.date.split("-")[0]
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {}) || {}

  return (
    <Layout>
      {Object.keys(yearPosts).sort(e => -1).map(year => (
        <>
          <H2>{year}</H2>
          {yearPosts[year]?.map(post => (
            <WritingPostItem>
              <div className="meta">
                <time>{post.frontmatter.date}</time>
              </div>
              <span>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </span>
            </WritingPostItem>
          ))}
        </>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          description
        }
      }
    }
  }
`
