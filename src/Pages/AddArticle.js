import '../Styles/AddArticle.css'
import {useState} from "react";

const AddArticle = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('https://picsum.photos/500/300');

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(title, author, body, image);
        const tmp_date = new Date().toISOString().split('T')
        const date = `${tmp_date[0]} ${tmp_date[1]}`
        const blog = {
            title,
            author,
            body,
            image,
            date
        };
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
            .then(() => {
                alert("Article ajoute' avec success")
                setTitle('')
                setAuthor('')
                setBody('')
            })
    }
    return (
        <div className="add-article">
            <form>
                <div className="article-input">
                    <label htmlFor="title">Titre de l' article</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div className="article-input">
                    <label htmlFor="author">Nom de l' auteur</label>
                    <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
                </div>
                <div className="article-input">
                    <label htmlFor="content">Contenu de l' article</label>
                    <textarea id="content" rows="3" value={body} onChange={(e) => setBody(e.target.value)} required/>
                </div>
                <div className="article-input">
                    <label htmlFor="image">Lien de l' image</label>
                    <input type="text" id="image" placeholder="https://picsum.photos/500/300" value={image}
                           onChange={(e) => setImage(e.target.value)} required/>
                </div>
                <button onClick={handelSubmit} type="submit">Ajouter l' article</button>
            </form>
        </div>
    )
}

export default AddArticle;