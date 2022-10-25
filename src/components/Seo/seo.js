// import React from "react"
// import PropTypes from "prop-types"
// import Helmet from "react-helmet"
// import { useSeoQuery } from "../../hooks/useSeoQuery"

// function SEO({ description, lang, meta, keywords, title }) {
//   const { site } = useSeoQuery
//   console.log(site)
//   const metaDescription = site.siteMetadata.description
//     ? site.siteMetadata.description
//     : description

//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title}
//       titleTemplate={`%s | ${site.siteMetadata.title}`}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:title`,
//           content: title,
//         },
//         {
//           property: `og:description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary`,
//         },
//         {
//           name: `twitter:creator`,
//           content: site.siteMetadata.author,
//         },
//         {
//           name: `twitter:title`,
//           content: title,
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription,
//         },
//       ]
//         .concat(
//           keywords.length > 0
//             ? {
//                 name: `keywords`,
//                 content: keywords.join(`, `),
//               }
//             : []
//         )
//         .concat(meta)}
//     />
//   )
// }

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   keywords: [],
//   description: ``,
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   title: PropTypes.string.isRequired,
// }

// export default SEO

import * as React from "react"
import { Helmet } from "react-helmet"
import { useSeoQuery } from "../../hooks/useSeoQuery"

export default function Seo({ title, description, image }) {
  const { site } = useSeoQuery
  console.log("seo", site)
  return (
    <Helmet
      htmlAttributes={{
        lang: "en-us",
      }}
    >
      <meta charSet="utf-8" />
      <title>{title}</title>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.url} />}
    </Helmet>
  )
}
