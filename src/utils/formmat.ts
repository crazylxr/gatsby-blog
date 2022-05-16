import moment from "moment"

type Node = {
  frontmatter: {
    date: string
  }
}

export function dateFormat(nodes: Node[]) {
  return nodes.map(node => {
    node.frontmatter.date = moment(node.frontmatter.date).format("YYYY-MM-DD")
    return node
  })
}
