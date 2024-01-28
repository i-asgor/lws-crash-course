import Link from "next/link";

export default async function page() {
    const blogs = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
    return (
        <div className="mt-10">
            Blog List
            <ul>
                {blogs.map(blog => <li key={blog.id}><Link href={`/blogs/${blog.id}`}>{blog.id} : {blog.title}</Link></li>)}
            </ul>
        </div>
    );
}
