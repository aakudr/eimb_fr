import Articles from "../../../components/articles"
import { fetchAPI } from "../../../lib/api"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { Sidebar } from "../../../components/global/sidebar"
import ReactMarkdown from "react-markdown"
import Document from "../../../components/global/document"

const Section = ({ section, sections, page}) => {

  const seo = {
    metaTitle: section.attributes.title,
    metaDescription: `All ${section.attributes.title} pages`,
  }
  
  const content = page.attributes.content

  return (
    <Layout>
        <Seo seo={seo} />
        <div className="section-container">
          <Sidebar title={section.attributes.title} content={section.attributes.pages.data} slug={section.attributes.slug} />
          <main>
            <h1>{page.attributes.title}</h1>
            {
              content.map((el) => {
                if(el.__component == 'shared.text-content') {
                  return <ReactMarkdown source={el.content} escapeHtml={false} />
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
  const sectionsRes = await fetchAPI("/sections", { fields: ["slug"] })
  const pagesRes = await fetchAPI("/pages", {fields: ["pid"]})
  const sections = sectionsRes.data
  const pages = pagesRes.data
  const paths = sections.map((section) => pages.map((page) => ({
    params: {
      slug: section.attributes.slug,
      pid: page.attributes.pid
    }
  }))).flat()
  return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
  const matchingSections = await fetchAPI("/sections", {
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
  })

  return {
    props: {
      section: matchingSections.data[0],
      sections: allSections,
      page: matchingPages.data[0]
    },
    revalidate: 1,
  }
}

export default Section

/*{"data":[{"id":1,"attributes":{"title":"Аппарат управления и научно-вспомогательные подразделения","createdAt":"2022-06-20T11:56:59.142Z","updatedAt":"2022-06-20T13:23:59.100Z","slug":"apparat"}},{"id":2,"attributes":{"title":"Аспирантура","createdAt":"2022-06-20T13:11:43.929Z","updatedAt":"2022-06-20T13:24:14.751Z","slug":"aspirantura"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":2}}}*/