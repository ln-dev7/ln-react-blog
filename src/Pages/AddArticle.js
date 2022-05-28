import '../Styles/AddArticle.css'
const AddArticle = () => {
    return (
        <div className="add-article">
            <form>
                <div className="article-input">
                    <label htmlFor="title">Titre de l' article</label>
                    <input type="text" id="title" />
                </div>
                <div className="article-input">
                    <label htmlFor="author">Nom de l' auteur</label>
                    <input type="text" id="author" />
                </div>
                <div className="article-input">
                    <label htmlFor="content">Contenu de l' article</label>
                    <textarea id="content" rows="3" />
                </div>
                <div className="article-input">
                    <label htmlFor="image">Lien de l' image</label>
                    <input type="text" id="image" value="https://picsum.photos/500/300" placeholder="https://picsum.photos/500/300" />
                </div>
                <button type="submit">Ajouter l' article</button>
            </form>
        </div>
    )
}

export default AddArticle;