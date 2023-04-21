import Link from "next/link";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
export function generateMetadata({ params }) {
  const posts = getSortedPostsData();
  const { postid } = params;
  const post = posts.find((post) => post.id === postid);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: post.title,
  };
}

export default async function Post({ params }) {
  const posts = getSortedPostsData(); //deduped
  const { postid } = params;
  if (!posts.find((post) => post.id === postid)) {
    return notFound();
  }
  const { title, date, contentHTML } = await getPostData(postid);
  const pubDate = getFormattedDate(date);
  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-2xl mt-4 mb-0">
        <p className="mt-0">{pubDate}</p>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHTML }} />
          <p>
            <Link href='/'> Back to home</Link>
          </p>
        </article>
      </h1>
    </main>
  );
}
