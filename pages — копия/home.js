import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import HeroNewsSlider from "../components/homepage/hero-news-slider"
import NewsBlock from "../components/homepage/news-block"
import AboutBlock from "../components/homepage/about-block"
import EventCalendarBlock from "../components/homepage/event-calendar-block"
import Person from "../components/global/person"
import PeopleBlock from "../components/homepage/people-block"


const Home = ({ articles, categories, homepage }) => {
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
        <HeroNewsSlider />
        <hr />
        <div style={{display: 'flex', flexDirection: 'row', width: 'calc(100vw - 100px)', margin: 'auto', justifyContent: 'space-between'}}>
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
        </div>
        <hr />
        <AboutBlock />
        <EventCalendarBlock />
        <hr />
        <PeopleBlock>
          <Person />
          <Person />
          <Person />
          <Person />
        </PeopleBlock>
      </div>
    </Layout>
    // TODO: implement components 
    /*
        <NewsBlock />
        <NewsBlock />
        <NewsBlock />
        <AboutBlock />
        <EventCalendarBlock />
        <PeopleBlock />
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

export default Home
