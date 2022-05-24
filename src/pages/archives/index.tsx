import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/layout"
import { H2, PostItem } from "../../styles"
import { dateFormat } from "../../utils/formmat"
import { Markdown, Node } from "../../types/markdown"

type Props = {
  data: {
    allMarkdownRemark: Markdown
  }
}

const WritingPostItem = styled(PostItem)`
  margin-left: 1rem;
  margin-top: 5px;
`

export default function Archives({ data }: Props) {
  const posts = dateFormat(data.allMarkdownRemark.nodes)

  const yearPosts =
    posts.reduce((acc: Record<string, Node[]>, post) => {
      const year = post.frontmatter.date.split("-")[0]
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(post)
      return acc
    }, {}) || {}

  return (
    <Layout>
      {Object.keys(yearPosts)
        .sort(e => -1)
        .map(year => (
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
