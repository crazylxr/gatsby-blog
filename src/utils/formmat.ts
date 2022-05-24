import moment from "moment"
import { Node } from "../types/markdown"

export function dateFormat(nodes: Node[]) {
  return nodes.map(node => {
    node.frontmatter.date = moment(node.frontmatter.date).format("YYYY-MM-DD")
    return node
  })
}
