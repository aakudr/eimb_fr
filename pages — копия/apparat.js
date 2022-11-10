import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import { Sidebar } from "../components/global/sidebar"
import BackgroundShow from "../components/global/backgroundShow"

const Apparat = ({ articles, categories, homepage }) => {
  const menuItems = ["item"]

  return (
    /*<Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.attributes.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>*/
    <Layout menuItems={menuItems}>
      <Seo seo={homepage.attributes.seo} />
      <div className="page-container">
        <Sidebar />
      </div>
      <BackgroundShow />
    </Layout>
    // TODO: implement components 
    /*
      <Sidebar>
      <SidebarLink>
      <BackgroundShow>
        */
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Apparat
