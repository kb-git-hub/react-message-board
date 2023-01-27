import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const EditPost = ({ posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle}) => {
  const {id} = useParams()
    const post = posts.find(post=> post.id.toString() === id)

    useEffect(()=>{
      if (post){
        setEditTitle(post.title)
        setEditBody(post.body)
      }
    }, [post, setEditTitle, setEditBody])

    return (
        <main className='NewPost'>
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className='newPostForm' onSubmit={(e)=> e.preventDefault()}>
                        <label htmlFor='postTitle'>Title:</label>
                        <input 
                        required
                        type="text" 
                        id="postTitle"
                        value={editTitle}
                        onChange={((e)=>setEditTitle(e.target.value))}
                        />
                        <label htmlFor='postBody'>Post:</label>
                        <textarea
                        required
                        id='postBody'
                        value={editBody}
                        onChange={(e)=> setEditBody(e.target.value)}
                        />
                        <button type='submit' onClick={()=> handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!editTitle &&
          <>
            <h2>Post not found</h2>
            <p>
              <Link to='/'>Visit our homepage</Link>
            </p>
          </>
        }
        </main>

    )
}

export default EditPost