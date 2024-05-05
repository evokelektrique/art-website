import Link from "next/link";

export default function PostItem({ id, title }) {
   return <Link href={`/posts/${id}`} className="text-white text-md lg:text-2xl font-light uppercase hover:text-yellow-200">{title}</Link>
}