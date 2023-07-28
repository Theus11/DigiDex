import './Banner.css'

const Banner = () => {
    return (
        <header className='banner'>
            <img src={require('../../imagens/logo.png')} alt='Banner principal da DigiDex'></img>
        </header>
    )
}

export default Banner