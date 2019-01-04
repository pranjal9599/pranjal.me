const path = require('path')

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	const blogPostTemplate = path.resolve(`src/components/templates/PortfolioPiece.js`)

	return graphql(`
		{
			allMarkdownRemark(
				sort: {order:DESC, fields:[frontmatter___date]}
				limit:1000
			) {
				edges {
					node {
						frontmatter {
							path
							title
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors)
		}

		const nodes = result.data.allMarkdownRemark.edges;

		nodes.forEach(({ node }, index) => {
			const prev = index === 0 ? {} : nodes[index-1].node;
			const next = index === nodes.length-1 ? {} : nodes[index+1].node;
			createPage({
				path: node.frontmatter.path,
				component: blogPostTemplate,
				context: {
					prev,
					next
				}, // additional data can be passed via context
			})
		})
	})
}
