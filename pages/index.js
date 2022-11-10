import React from "react"
/* import Articles from "../components/articles" */
import Layout from "../components/layout"
/* import Seo from "../components/seo" */
/* import { fetchAPI } from "../lib/api" */
import HeroNewsSlider from "../components/homepage/hero-news-slider"
import NewsBlock from "../components/homepage/news-block"
import AboutBlock from "../components/homepage/about-block"
import EventCalendarBlock from "../components/homepage/event-calendar-block"
import Person from "../components/global/person"
import PeopleBlock from "../components/homepage/people-block"


const Home = (/* { articles, categories, homepage } */) => {
  const menuItems = ["item"]

  const heroNews = [{title: "Мероприятие-спутник Конгресса молодых ученых", image: "/img/heroNews1.jpg", description: "прошло 4–6 октября 2022 г. в г. Салехард", date: "04.10.2022"}]
  const otherNews = [
    {title: "Новый сайт ИМБ РАН", 
    image: "/img/otherNews1.jpg", 
    description: "начал свою работу", 
    date: "10.11.2022"},
    {title: "Результаты выборов Президента РАН", 
    image: "/img/otherNews2.jpg", 
    description: "Победу одержал академик Геннадий Красников", 
    date: "20.09.2022"},
    {title: "6 новых конкурсов РНФ", 
    image: "/img/otherNews3.jpg", 
    description: "Объявлен приём заявок", 
    date: "12.08.2022"},
  ]
  const events = [
    {title: "Энгельгардтовские чтения", 
    image: "/img/events1.jpg", 
    description: "Заседание Ученого совета Института, посвященное 90-летию со дня рождения академика РАН Александра Антоновича КРАЕВСКОГО", 
    date: "7.11.2022"},
    {title: "Заседание Диссертационного совета ИМБ РАН", 
    description: "Защита диссертаций: 11-00 Ревкова В.А., 12-30 Резвых А.П.", 
    day: "10",
    month: "ноября",
    tag: "#ДисСовет"},
    {title: "Заседание Диссертационного совета ИМБ РАН", 
    description: "Защита диссертаций: 11-00 Ревкова В.А., 12-30 Резвых А.П.", 
    day: "10",
    month: "ноября",
    tag: "#ДисСовет"},
    {title: "Заседание Диссертационного совета ИМБ РАН", 
    description: "Защита диссертаций: 11-00 Ревкова В.А., 12-30 Резвых А.П.", 
    day: "10",
    month: "ноября",
    tag: "#ДисСовет"},
    {title: "Заседание Диссертационного совета ИМБ РАН", 
    description: "Защита диссертаций: 11-00 Ревкова В.А., 12-30 Резвых А.П.", 
    day: "10",
    month: "ноября",
    tag: "#ДисСовет"}
  ]

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
{/*       <Seo seo={homepage.attributes.seo} /> */}
      <div className="page-container">
        <HeroNewsSlider news={heroNews}/>
        <hr />
        <div style={{display: 'flex', flexDirection: 'row', width: 'calc(100vw - 100px)', margin: 'auto', justifyContent: 'space-between'}}>
          <NewsBlock news={otherNews[0]}/>
          <NewsBlock news={otherNews[1]}/>
          <NewsBlock news={otherNews[2]}/>
        </div>
        <hr />
        <AboutBlock />
        <EventCalendarBlock events={events}/>
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

/* export async function getStaticProps() {
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
} */

export default Home
