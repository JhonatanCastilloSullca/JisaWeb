const ImageGrid = ({ images }) => {
    return (
        <div className="grid grid-cols-4 gap-10">
            {images.map((src, index) => (
                <div key={index} className="col-span-1">
                    <img
                        src={src}
                        alt={`img-${index}`}
                        className="w-full rounded-lg opacity-25 hover:opacity-100 transition-opacity duration-300 h-24 object-contain"
                    />
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;
