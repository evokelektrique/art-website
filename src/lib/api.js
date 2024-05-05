import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { unified } from 'unified'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeVideo from 'rehype-video';

const postsDirectory = path.join(process.cwd(), '_posts')

function getPostFiles() {
  return fs.readdirSync(postsDirectory)
}

function getParser() {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeStringify)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeVideo, { details: false })
}

// small speedup from caching this parser
const parser = getParser()

export async function getPostById(id) {
  const realId = id.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realId}.md`)
  const { data, content } = matter(await fs.promises.readFile(fullPath, 'utf8'))

  const html = await parser.process(content)
  const date = data.date

  return {
    ...data,
    title: data.title,
    id: realId,
    date: `${date}`,
    html: html.value.toString(),
    video: data.video ?? null,
    video_poster: data.video_poster ?? null,
  }
}

export async function getPageMarkdown(string_) {
  const { data, content } = matter(
    fs.readFileSync(path.join('_pages', string_), 'utf8'),
  )
  const html = await parser.process(content)

  return {
    ...data,
    html: html.value.toString(),
  }
}

export async function getAllPosts() {
  const posts = await Promise.all(getPostFiles().map(id => getPostById(id)))
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}