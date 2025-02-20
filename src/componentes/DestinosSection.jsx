import GridNumber from "../componentes/GridNumber"
import RowNumber from "../componentes/RowNumber"
import SeparatorBarHorizontal from "../componentes/SeparatorBarHorizontal"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CardDestinos from "../componentes/CardDestinos"
import { useState } from "react"

const tours = [
    {
        titulo: "MACHUPICCHU",
        slug: "machupicchu",
        descripcion:
            `Machu Picchu, la joya del Imperio Inca y una de las maravillas del mundo, te espera con sus imponentes montañas, historia fascinante y paisajes que te dejarán sin aliento...`,
        cantidad: 7,
        imagen: "https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp",
    },
    {
        titulo: "MARAS",
        slug: "maras",
        descripcion:
            `Maras, famoso por sus salineras y paisajes impresionantes, te invita a descubrir la historia y la cultura andina...`,
        cantidad: 5,
        imagen: "https://jisaadventure.com/wp-content/uploads/2023/12/Aventura-Cuatrimotos-Salineras-Moray-Explora.webp",
    },
    {
        titulo: "Lima",
        slug: "Lima",
        descripcion:
            `Lima, la capital del Perú, ofrece una combinación única de historia, gastronomía y cultura vibrante...`,
        cantidad: 4,
        imagen: "https://jisaadventure.com/wp-content/uploads/2024/01/Descubre_Lima_Recorrido_Cultural.png",
    },
    {
        titulo: "MARAS",
        slug: "maras",
        descripcion:
            `Maras, famoso por sus salineras y paisajes impresionantes, te invita a descubrir la historia y la cultura andina...`,
        cantidad: 5,
        imagen: "https://jisaadventure.com/wp-content/uploads/2023/12/Aventura-Cuatrimotos-Salineras-Moray-Explora.webp",
    },
    {
        titulo: "Lima",
        slug: "Lima",
        descripcion:
            `Lima, la capital del Perú, ofrece una combinación única de historia, gastronomía y cultura vibrante...`,
        cantidad: 4,
        imagen: "https://jisaadventure.com/wp-content/uploads/2024/01/Descubre_Lima_Recorrido_Cultural.png",
    },
];
const DestinosSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="w-full relative mx-auto py-16 bg-cover bg-center" style={{ backgroundImage: `url(${tours[activeIndex].imagen})` }}>
            <div className="absolute inset-0 bg-black/75 opacity-100 rounded-xl"></div>
            <div className="relative w-full max-w-7xl mx-auto">
                <GridNumber col={8}>
                    <RowNumber col={3} className="py-5">
                        <div className="flex flex-col pt-4 ps-14 pe-20">
                            <span className="text-left text-white font-semibold text-xl">DESTINOS</span>
                            <span className="text-left text-white font-bold text-5xl">{tours[activeIndex].titulo}</span>
                            <SeparatorBarHorizontal />
                            <p className="text-base font-light my-4 text-white min-h-72">
                                {tours[activeIndex].descripcion}
                            </p>
                            <a href="#" className="text-white font-bold text-md">
                                ({tours[activeIndex].cantidad}) Tours Disponibles
                            </a>
                        </div>
                    </RowNumber>
                    <RowNumber col={5}>
                        <div className="w-full h-full px-10 swiper-destino">
                            <Swiper
                                slidesPerView={2.3}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                spaceBetween={30}
                                navigation={true}
                                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper w-full h-full"
                            >
                                {tours.map((tour, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="w-full h-full bg-red-200 rounded-2xl">
                                            <img src={tour.imagen} alt={tour.titulo} className=" object-center w-full h-full object-cover rounded-2xl" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </RowNumber>
                </GridNumber>
            </div>
        </div>
    )
}

export default DestinosSection