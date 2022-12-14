/* import Articles from "../../../components/articles"
import { fetchAPI } from "../../../lib/api" */
import Layout from "../../../components/layout"
/* import Seo from "../../../components/seo" */
import { Sidebar } from "../../../components/global/sidebar"
import ReactMarkdown from "react-markdown"
import Document from "../../../components/global/document"

const Section = ({ section, sections, page}) => {

/*   const seo = {
    metaTitle: section.attributes.title,
    metaDescription: `All ${section.attributes.title} pages`,
  } */
  
  const content = page./* attributes. */content

  return (
    <Layout>
{/*         <Seo seo={seo} /> */}
        <div className="section-container">
          <Sidebar title={section./* attributes. */title} content={section./* attributes. *//* pages. */data} slug={section./* attributes. */slug} />
          <main>
            <h1>{page./* attributes. */title}</h1>
            {
              content.map((el) => {
                if(el.__component == 'shared.text-content') {
                  return <ReactMarkdown children={el.content}  />
                }
                else if(el.__component == 'shared.document') {
                  return <Document title={el.title} href={el.href} />
                }
              })
            }
          </main>
        </div>
    </Layout>
  )
}

export async function getStaticPaths() {
/*   const sectionsRes = await fetchAPI("/sections", { fields: ["slug"] })
  const pagesRes = await fetchAPI("/pages", {fields: ["pid"]})
  const sections = sectionsRes.data
  const pages = pagesRes.data */
/*   const paths = sections.map((section) => pages.map((page) => ({
    params: {
      slug: section.attributes.slug,
      pid: page.attributes.pid
    }
  }))).flat() */
  const paths = [{params: {slug: "slug", pid: "0"}}]
  return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
  const sidebarContent = {
    title: "Sidebar title",
    data: [{title: "Sidebar item", pid: "0"}],
    slug: "slug"
  }
  const pageContent = {
    title: "Sidebar item", 
    content: [
      {
        __component: "shared.text-content", 
        content: "# Header 1 \n ## Header 2 \n Actual *bold* __italic__ text"
      }, 
      {
        __component: "shared.document", 
        title: "Document title", 
        href: "eimb.ru/document_href.pdf"
      }
    ]
  }
  /* const matchingSections = await fetchAPI("/sections", {
    filters: { slug: params.slug },
    populate: {
      pages: {
        populate: "*",
      },
    },
  })
  const allSections = await fetchAPI("/sections")

  const matchingPages = await fetchAPI("/pages", {
    filters: { pid: params.pid },
    populate: "*"
  }) */

  return {
    props: {
      section: sidebarContent,
      /* sections: allSections, */
      page: pageContent
    },
    revalidate: 100,
  }
}

export default Section

/*{"data":[{"id":1,"attributes":{"title":"?????????????? ???????????????????? ?? ????????????-?????????????????????????????? ??????????????????????????","createdAt":"2022-06-20T11:56:59.142Z","updatedAt":"2022-06-20T13:23:59.100Z","slug":"apparat"}},{"id":2,"attributes":{"title":"??????????????????????","createdAt":"2022-06-20T13:11:43.929Z","updatedAt":"2022-06-20T13:24:14.751Z","slug":"aspirantura"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":2}}}*/