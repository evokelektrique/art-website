import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import PostItem from "@/components/PostItem";
import Wrapper from "@/components/Wrapper";
import { getAllPosts } from "@/lib/api";

export default async function PostsPage() {
   const posts = (await getAllPosts()).sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      // Sort in descending order (newest first)
      return dateB - dateA;
   });

   return (
      <main className="px-4">

         {/* Container */}
         <Wrapper>
            <div>
               <Header title={'Archive'}></Header>

               {/* Latest posts */}
               <ul className="p-6 flex flex-col gap-4">
                  {posts.map(post => {
                     const { id, date, title } = post
                     
                     return (
                        <li key={id}>
                           <PostItem id={id} title={title} />
                        </li>
                     )
                  })}
               </ul>
            </div>

            <BackButton />
         </Wrapper>
      </main>
   );
}
