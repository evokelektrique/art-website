import Header from "@/components/Header";
import PostItem from "@/components/PostItem";
import Wrapper from "@/components/Wrapper";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
   const posts = (await getAllPosts()).slice(0, 10).sort((a, b) => {
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
               <Header title={'Visual ~ Harmonies'}>
                  <h2 className="text-xl lg:text-2xl text-transparent font-light text-white">
                     This is a website where <b className="font-bold text-yellow-100">art</b> and <b className="font-bold text-yellow-100">audio</b>  merge
                  </h2>
               </Header>

               {/* Latest posts */}
               <ul className="p-6 flex flex-col gap-4">
                  {posts.map(post => {
                     const { id, date, title } = post;

                     return (
                        <li key={id}>
                           <PostItem id={id} title={title} />
                        </li>
                     )
                  })}
               </ul>
            </div>

            <Link href={'/posts'} className="text-white mr-auto ml-4 hover:text-yellow-200">{'Archive >'}</Link>
         </Wrapper>
      </main>
   );
}
