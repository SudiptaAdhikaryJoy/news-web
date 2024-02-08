import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

const getData = async (slug: string) => {
  const query = `
    *[_type == 'blog' && slug.current == "${slug}"]  {
        title,
          content,
          titleImage,
          'currentSlug': slug.current
      }[0]
    `;
  const data = await client.fetch(query);
  return data;
};

const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const data: fullBlog = await getData(params.slug);

  return (
    <div className=" mt-8 ">
      <h1 className=" sm:font-bold text-center text-primary block font-bold mt-2 sm:text-4xl leading-8  tracking-tight">
        {data.title}
      </h1>
      <Image
        src={urlFor(data.titleImage).url()}
        width={700}
        height={700}
        priority
        alt="title image"
        className=" mt-3 rounded-lg border border-gray-300 dark:bg-gray-800 shadow-md "
      />
      <div className=" mt-16 prose prose-xl prose-blue dark:prose-invert prose-li:marker:text-primary prose-a:text-primary ">
        <PortableText value={data.content} />
      </div>
    </div>
  );
};

export default BlogArticle;
