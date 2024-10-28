import React,{useState,useEffect} from 'react'

const FetchDataEffect = () => {
    const [Post, SetPost] = useState([])

    useEffect(() => {
        async function getPosts(){
            const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await posts.json();
            if(data && data.length > 0) SetPost(data);
        }
        getPosts();
    },[])
  return (
    <section>
    
    {Post.map((p) => (
        <ul key={p.id}>
            <li>{p.title}</li>
            <p>{p.body}</p>
            <p>Im so smart, Hello World</p>
            
        </ul>
    ))}
    </section>
  )
}

export default FetchDataEffect
