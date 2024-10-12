import { ImgGallery } from 'react-image-gallery';

const createImage = (path: string) => {
    return {
        original: path,
        thumbnail: path,
    };
}

function App() {
    const items = [
        createImage('/burger.jpg'),
        createImage('/gulas.jpg'),
        createImage('/hermelin.jpg'),
        createImage('/limonada.jpg'),
        createImage('/maso.jpg'),
        createImage('/spagety.jpg'),
    ];

    return (
        <ImgGallery items={items} />
    );
}

export default App;
