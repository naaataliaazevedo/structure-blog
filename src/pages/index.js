import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem  from "../components/PostItem";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="red"
      category="Misc"
      date="30 de Julho de 2019"
      timeToRead="5"
      title="Diga não ao Medium"
      description="Algumas razões para ter sua própria plataforma"
    />
  </Layout>
)

export default IndexPage
