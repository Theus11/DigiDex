import './Gallery.css'

const images = ['Agumon', 'Greymon', 'MetalGreymon', 'WarGreymon', 'Gabumon', 'Garurumon', 'WereGarurumon', 'MetalGarurumon']
const imagesURL = imgPath => `/imagens/${imgPath}.webp`

const Gallery = () => {
    return (
        <div className='gallery'>
            {images.map(image => (
                        <div className='border'>
                            <div className='item'>
                                <img src={imagesURL(image)}/>
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