const HeroSection = ({
    backgroundImage,
    overlayColor = "rgba(0, 0, 0, 0.35)",
    title,
    description,
    buttonText,
    buttonLink
}) => {
    return (
        <div
            className="h-screen bg-cover bg-center relative flex flex-col justify-end items-center text-white text-center p-4 py-32"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div
                className="absolute inset-0"
                style={{ backgroundColor: overlayColor }}
            ></div>

            {/* Contenido */}
            <div className="relative z-10 max-w-[1440px] w-full flex flex-col">
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-3 flex flex-col items-start">
                        <h1 className="text-7xl text-left font-bold mb-4">{title}</h1>
                        <p className="text-xl mb-6 w-full text-left pe-72">{description}</p>
                        {buttonText && buttonLink && (
                            <a
                                href={buttonLink}
                                className="px-16 py-2 bg-JisaCyan text-white font-bold text-lg rounded-lg shadow-md hover:bg-gray-200 hover:text-JisaGris transition"
                            >
                                {buttonText}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
