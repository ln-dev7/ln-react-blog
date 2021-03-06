import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="240" height="240"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" fill="rgba(149,164,166,1)"/></svg>
            <h2>Cette page n' existe pas :(</h2>
            <Link to="/">Retour a l' accueil</Link>
        </div>
    )
}

export default NotFound;