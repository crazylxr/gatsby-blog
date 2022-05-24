export type Markdown = {
  nodes: Node[]
}

export type Node = {
  fields: {
    slug: string
  }

  frontmatter: {
    author: string
    categories: string[]
    description: string
    title: string
    tags: string[]
    date: string
  }
}
