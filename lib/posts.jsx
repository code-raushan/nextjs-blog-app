import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { BloomFilter } from 'next/dist/shared/lib/bloom-filter'

const postsDirectory = path.join(process.cwd(), 'blogPosts')

export function getSortedPostsData(){
    //getting the file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        //removing ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        //reading markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        //using gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const blogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date
        }
        return blogPost
    })
    return allPostsData.sort((a, b)=> a.date<b.date?1:-1);
}
export async function getPostData(id){
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    //use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    const processedContent = await remark()
                                .use(html)
                                .process(matterResult.content)
    const contentHTML = processedContent.toString()

    const blogPostWithHTML = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHTML
    }

    return blogPostWithHTML

}