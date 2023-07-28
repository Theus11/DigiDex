import './Gallery.css'
import { useNavigate } from 'react-router-dom';

const images = ['Agumon', 'Greymon', 'MetalGreymon', 'WarGreymon', 'Gabumon', 'Garurumon', 'WereGarurumon', 'MetalGarurumon']

const digimonClick = () => {
    alert('You clicked me!');
}



const Gallery = (props) => {
    const onReturnDigimonName = (name) => {
        console.log(name);
        props.onDigimonName(name);
    }

    const navigate = useNavigate();

    return (
        
        <div className='gallery'>
            {images.map(image => (
                <div className='border'>
                    <div className='item'  onClick={() => {
                            onReturnDigimonName(image); 
                            navigate(`/${image}`);
                        }}>
                        <img src={require(`../../imagens/${image}.webp`)} alt='Digimon'/>
                        <div className='title-card'>
                            <h1 className='title'>{image}</h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Gallery