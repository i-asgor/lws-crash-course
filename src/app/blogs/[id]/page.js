import Button from "@/app/button";
import notFound from "@/app/not-found";
import Link from "next/link";

export async function generateMetadata({params}) {
    const id = params.id

    const blog = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(response => response.json())

    return {
        title: blog.title,
        description: blog.body,
  }
}

export default async function page({params}) {
    const blog = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(response => response.json())
    if(params.id > 100){
       return notFound();
    }else{
        return (
            <div className="mt-10">
                <h1><b>Blog Number:</b> {params.id}</h1> <br />
                <h1><b>Blog Title:</b> {blog.title} </h1><br />
                <p><b>Blog Body:</b>{blog.body}</p> < br/>
                <Button/>
                
                <p className="pt-6"><Link href="/blogs">Back to Blogs Page</Link></p>
            </div>
        );
            
    }
}

