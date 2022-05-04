import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Content, Header, Nav, Footer } from "./style"
import { H1 } from "../../style"

interface Props {
  header?: boolean
  children: React.ReactNode
}

const Title = styled(H1)`
  margin-top: 0;
  margin-bottom: 0;
  color: #383838;
  font-weight: 700;
  line-height: 2rem;
`

const Layout = ({ children, header = true }: Props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <Content>
      {header && (
        <Header>
          <Link to="/">
            <StaticImage
              style={{ marginRight: 30 }}
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../images/profile.png"
              width={50}
              height={50}
              quality={95}
              alt="Profile picture"
            />
          </Link>

          <div>
            <Title>{data.site.siteMetadata.title}</Title>
            <Nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/archives">Archives</Link>
                </li>
                {/* <li>
                  <Link to="/tags">Tags</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li> */}
              </ul>
            </Nav>
          </div>
        </Header>
      )}
      <main>{children}</main>
      <Footer>
        <div className="footer-left">
          Copyright © {new Date().getFullYear()} taoweng, Built with{" "}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
        <div className="footer-right">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/archives">Archives</Link>
              </li>
              {/* <li>
                <Link href="/hugo-theme-cactus/tags">Tags</Link>
              </li> */}
              {/* <li>
                <a href="/hugo-theme-cactus/about">About</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </Footer>
    </Content>
  )
}

export default Layout
