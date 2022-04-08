import { useEffect, useState } from 'react'; 

const Timeline = () => {
    const [posts, setPosts] = useState([])

    useEffect(async () => {
        
        let req = await fetch('https://github.com/rmdashrfv/lifeinvader/blob/main/src/data/posts.json')
        let res = await req.json()
        setPosts(res)
    })

    return (
        <div>
            <h2>Timeline</h2>
        
        </div> 
    )
}

export default Timeline; 