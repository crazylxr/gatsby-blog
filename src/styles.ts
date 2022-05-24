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