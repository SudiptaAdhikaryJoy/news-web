import { fullBlog } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";

const getData = async (slug: string) => {
    const query = `
    *[_type == 'blog'] && slug.current == "${slug}"  {
        title,
          content,
          titleImage,
          'currentSlug': slug.current
      }[0]
    `;
    const data = await client.fetch(query);
    return data;
};


const BlogArticle = async ({params}: {params: {slug: string}}) => {
    const data: fullBlog = await getData(params.slug);
    return (
        <div>
            <h1>{params.slug}</h1>
        </div>
    );
};

export default BlogArticle;