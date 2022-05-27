const Home = () => {
    const handleClick = (name) => {
        console.log(`Salut, ${name}`)
    }
    return (
        <div className="home">
            <h1>Home</h1>
            <button onClick={() => handleClick('Leo')}>CLICK</button>
        </div>
    );
}

export default  Home;