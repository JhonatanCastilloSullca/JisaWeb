
import SearchBar from "../componentes/SearchBar"
import Hero from "../componentes/secciones/Hero"
import AboutSection from "../componentes/secciones/AboutSection"
import PackageSection from "../componentes/secciones/PackageSection"
import PromocionSection from "../componentes/PromocionSection";
import JisaTitleContent from "../componentes/layout/JisaTitleContent";
import SeparatorBarHorizontal from "../componentes/SeparatorBarHorizontal";
import HeaderTitle from "../componentes/layout/HeaderTitle";
import { useState } from "react";
import RowNumber from "../componentes/RowNumber"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import FormContact from "../componentes/FormContact";
import BlogSection from "../componentes/secciones/BlogSection";
import SubHeaderTitle from "../componentes/layout/SubHeaderTitle";
import TabButton from "../componentes/TabButton";
import CalendarIcon from "../assets/icons/CalendarIcon";
import FacebookIcon from "../assets/icons/FacebookIcon";
import Testimonios from "../componentes/secciones/Testimonios";
import TripAdvisorIcon from "../assets/icons/TripAdvisorIcon";
import GoogleIcon from "../assets/icons/GoogleIcon";
import ImageGrid from "../componentes/ImageGrid";


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

const Home = () => {

    const [formData, setFormData] = useState({
        country: "",
        phone: "",
        name: "",
        email: "",
        travelDate: "",
        additionalInfo: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeTab, setActiveTab] = useState("tripadvisor");

    const tabs = [
        { id: "tripadvisor", label: "Tripadvisor", icon: TripAdvisorIcon, activeColor: "bg-JisaCyan" },
        { id: "google", label: "Google", icon: GoogleIcon, activeColor: "bg-[#eb4939]" },
    ];
    const images = [
        "https://jisaadventure.com/wp-content/uploads/2024/03/Ministerio_de_Comercio_Exterior_y_Turismo.webp",
        "https://jisaadventure.com/wp-content/uploads/2024/03/Tripadvisor.webp",
        "https://jisaadventure.com/wp-content/uploads/2024/03/Gercetur.webp",
        "https://jisaadventure.com/wp-content/uploads/2024/03/Ministerio_de_Comercio_Exterior_y_Turismo.webp",
        "https://jisaadventure.com/wp-content/uploads/2024/03/Tripadvisor.webp",
        "https://jisaadventure.com/wp-content/uploads/2024/03/Ministerio_de_Comercio_Exterior_y_Turismo.webp",
        "https://jisaadventure.com/wp-content/uploads/2024/03/Tripadvisor.webp",
        "https://jisaadventure.com/wp-content/uploads/2024/03/Gercetur.webp",
    ];



    return (
        <>
            <Hero />
            <SearchBar />
            <AboutSection />
            <PackageSection />
            <div className="w-full relative mx-auto py-16 bg-cover bg-center" style={{ backgroundImage: `url(${tours[activeIndex].imagen})` }}>
                <div className="absolute inset-0 bg-black/75 opacity-100 rounded-xl"></div>
                <div className="relative w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-8">
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
                    </div>
                </div>
            </div>


            <PackageSection />
            <PromocionSection />
            <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-7 h-auto flex flex-col items-start justify-center align-middle px-10 ">
                        <div className="ps-10 pe-32">
                            <SeparatorBarHorizontal />
                            <HeaderTitle title={'CONTÁCTANOS'} />
                            <JisaTitleContent contenido={`¿Listo para descubrir la belleza de Perú? Ponte en contacto con nosotros y hagamos realidad el viaje de tus sueños.`} />
                        </div>
                        <div className="ps-10 pe-10 w-full">
                            <FormContact />
                        </div>
                    </div>
                    <div className="col-span-5 h-auto flex flex-col items-start justify-center align-middle">
                        <img src="src\assets\imagen\tourist-preview.png" alt="Jisa-Nosotros-Paquete" className="w-full" />
                    </div>
                </div>
            </div>
            <BlogSection />
            <div className="w-full max-w-7xl mx-auto my-24  mb-12 ">
                <div className="flex-col justify-center flex items-center py-10">
                    <HeaderTitle title={'Reseñas de Nuestros Clientes'} />
                    <SubHeaderTitle title={`Descubre las historias y testimonios de aquellos que han viajado con Jisa Adventure y han experimentado momentos inolvidables en los hermosos destinos de Perú.`} />
                    <SeparatorBarHorizontal />
                </div>

                <div>
                    <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-JisaGris/50">
                        {tabs.map((tab) => (
                            <li key={tab.id} className="me-2">
                                <TabButton
                                    {...tab}
                                    isActive={activeTab === tab.id}
                                    onClick={setActiveTab}
                                />
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4">
                        {activeTab === "tripadvisor" ? <Testimonios marca={'Tripadvisor'} /> : <Testimonios marca={'Google'} />}
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto my-24 pb-24 mb-12">
                <ImageGrid images={images} />
            </div>
        </>
    );
};

export default Home;