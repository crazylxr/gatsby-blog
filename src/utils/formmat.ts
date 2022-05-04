import moment from 'moment'

export function dateFormat(nodes) {
  return nodes.map(node => {
    node.frontmatter.date = moment(node.frontmatter.date).format("YYYY-MM-DD")
    return node
  })
}
