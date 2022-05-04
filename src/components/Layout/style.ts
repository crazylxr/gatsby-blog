import styled from "styled-components"
import { color_border, color_meta } from "../../style"

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
