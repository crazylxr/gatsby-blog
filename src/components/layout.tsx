import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

export const color_meta = "#666"
export const color_border = "#666"

export const Content = styled.div`
  max-width: 48rem;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow-wrap: break-word;
  padding: 4rem 2rem;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
`

export const Nav = styled.div`
  color: #2bbc8a;
  letter-spacing: 0.01em;
  font-weight: 200;
  font-style: normal;
  font-size: 0.8rem;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    line-height: 15px;
  }
  li {
    display: inline-block;
    margin-right: 15px;
    border-right: 1px dotted;
    border-color: #2bbc8a;
    vertical-align: middle;
    a {
      margin-right: 15px;
      color: #2bbc8a;
    }
  }
`
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 20px;
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  width: 100%;
  color: ${color_meta};
  vertical-align: top;
  text-align: center;
  font-size: 11px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 15px;
    border-right: 1px solid;
    border-color: ${color_border};
    vertical-align: middle;
    a {
      margin-right: 15px;
    }
  }
  li:last-child {
    margin-right: 0;
    border-right: 0;
    a {
      margin-right: 0;
    }
  }
  a {
    color: ${color_meta};
    text-decoration: underline;
    background-image: none;
  }
  a:hover {
    color: lighten(${color_meta}, 20%);
  }
  .footer-left {
    height: 20px;
    vertical-align: middle;
    line-height: 20px;
  }
  .footer-left {
    height: 20px;
    vertical-align: middle;
    line-height: 20px;
  }
  .footer-right {
    align-self: flex-end;
  }
`

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

const Title = styled(H1)`
  margin-top: 0;
  margin-bottom: 0;
  color: #383838;
  font-weight: 700;
  line-height: 2rem;
`

const Layout = ({ children, header = true }) => {
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
              src="../images/profile.png"
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
