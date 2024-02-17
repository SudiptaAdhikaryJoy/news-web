import { Card, CardContent } from "@/components/ui/card";
import { simpleCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `
  
  *[_type == 'blog'] | order(_createdAt desc){
    title,
      smallDescription,
      'currentSlug': slug.current,
      titleImage
  }
  `;
  const data = await client.fetch(query);
  return data;
}
export default async function Home() {
  const data: simpleCard[] = await getData();
  console.log(data);
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 ">
        {data.map((post, index) => (
          <Card key={index}>
            <Image
              src={urlFor(post.titleImage).url()}
              alt=""
              width={600}
              height={600}
              className=" rounded-t-lg h-[200px] object-cover "
            />
            <CardContent className=" mt-5 ">
              <h1 className=" line-clamp-3 text-lg font-bold ">{post.title}</h1>
              <p className=" line-clamp-2 text-sm mt-2 text-gray-600 dark:text-gray-300 ">
                {post.smallDescription}
              </p>
              <Button
                asChild
                className=" w-full mt-7 text-black dark:text-white"
              >
                <Link href={`/blog/${post.currentSlug}`}>Read Me!</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
