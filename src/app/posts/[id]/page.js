import BackButton from '@/components/BackButton'
import Header from '@/components/Header'
import Wrapper from '@/components/Wrapper'
import { getPostById, getAllPosts } from '@/lib/api'
import moment from 'moment'

export default async function Post({
   params: { id },
}) {
   const { html, title, date, video, video_poster } = await getPostById(id)

   return (
      <main className="px-4">

         {/* Container */}
         <Wrapper>
            <div>
               <Header title={title}></Header>

               {video && (
                  <video controls className='w-full' src={video} poster={video_poster}></video>
               )}

               <div dangerouslySetInnerHTML={{ __html: html }} className='text-white min-w-full p-4 prose prose-zinc prose-md prose-video:mx-auto prose-video:w-full prose-video:my-2 prose-code:text-white prose-video:min-w-full prose-code:bg-[#27272a] prose-headings:text-yellow-300 prose-a:text-yellow-500 prose-a:font-bold prose-a:break-words'></div>
            </div>

            <div className='flex justify-between'>
               <BackButton />
               
               <time className='text-white mx-4'>{moment(date).format('YYYY/MM/DD')}</time>
            </div>
         </Wrapper>

      </main>
   )
}

export async function generateStaticParams() {
   const posts = await getAllPosts()

   return posts.map(post => ({
      id: post.id,
   }))
}

export async function generateMetadata({
   params: { id },
}) {
   const { title } = await getPostById(id)
   return {
      title,
   }
}