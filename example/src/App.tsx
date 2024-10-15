import Imagallery from 'react-imagallery';

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
        <Imagallery items={items} />
    );
}

export default App;
