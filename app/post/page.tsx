import React from 'react'

type Post = {
    id: number;
    title: string;
    body: string;
}

async function getPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        { cache: 'no-store' }
    )

    if(!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return response.json();
}

async function PostPage() {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-3xl font-bold underline"> Post  </h1>
        <div className="grid grid-cols-1 gap-4 mt-4">
            {posts.slice(0, 10).map((post) => (
                <div key={post.id} className="p-4 border rounded shadow">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-600">{post.body}</p>
                </div>
            ))}
        </div>
    </main>
  )
}

export default PostPage