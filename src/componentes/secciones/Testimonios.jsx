import GoogleTestimonio from "../GoogleTestimonio";
import TripadvisorReview from "../TripTestimonio";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const testimoniosPorMarca = {
    Tripadvisor: [
        {
            userImage: "https://randomuser.me/api/portraits/women/44.jpg",
            userName: "María López",
            contributions: 15,
            votes: 8,
            title: "¡Increíble experiencia!",
            date: "15 de febrero de 1111",
            description:
                "La atención fue excelente y la vista espectacular. Definitivamente lo recomiendo para una experiencia única.",
        },
        {
            userImage: "https://randomuser.me/api/portraits/men/45.jpg",
            userName: "Carlos Pérez",
            contributions: 20,
            votes: 12,
            title: "Muy recomendable",
            date: "10 de enero de 2222",
            description:
                "Un lugar hermoso con un servicio excepcional. No dudaría en volver.",
        },
        {
            userImage: "https://randomuser.me/api/portraits/women/46.jpg",
            userName: "Laura González",
            contributions: 8,
            votes: 5,
            title: "Buena experiencia",
            date: "5 de marzo de 3333",
            description:
                "El lugar es bonito, pero la atención podría mejorar. Aún así, pasé un buen rato.",
        },
        {
            userImage: "https://randomuser.me/api/portraits/women/44.jpg",
            userName: "María López",
            contributions: 15,
            votes: 8,
            title: "¡Increíble experiencia!",
            date: "15 de febrero de 1111",
            description:
                "La atención fue excelente y la vista espectacular. Definitivamente lo recomiendo para una experiencia única.",
        },
        {
            userImage: "https://randomuser.me/api/portraits/men/45.jpg",
            userName: "Carlos Pérez",
            contributions: 20,
            votes: 12,
            title: "Muy recomendable",
            date: "10 de enero de 2222",
            description:
                "Un lugar hermoso con un servicio excepcional. No dudaría en volver.",
        },
        {
            userImage: "https://randomuser.me/api/portraits/women/46.jpg",
            userName: "Laura González",
            contributions: 8,
            votes: 5,
            title: "Buena experiencia",
            date: "5 de marzo de 3333",
            description:
                "El lugar es bonito, pero la atención podría mejorar. Aún así, pasé un buen rato.",
        },
    ],
    Google: [
        {
            userImage: "https://randomuser.me/api/portraits/women/44.jpg",
            userName: "María López",
            contributions: 15,
            votes: 8,
            title: "¡Increíble experiencia!",
            date: "15 de febrero de 4444",
            description:
                "La atención fue excelente y la vista espectacular. Definitivamente lo recomiendo para una experiencia única.",
        },
        {
            userImage: "https://randomuser.me/api/portraits/men/45.jpg",
            userName: "Carlos Pérez",
            contributions: 20,
            votes: 12,
            title: "Muy recomendable",
            date: "10 de enero de 5555",
            description:
                "Un lugar hermoso con un servicio excepcional. No dudaría en volver.",
        },
        {
            userImage: "https://randomuser.me/api/portraits/women/46.jpg",
            userName: "Laura González",
            contributions: 8,
            votes: 5,
            title: "Buena experiencia",
            date: "5 de marzo de 6666",
            description:
                "El lugar es bonito, pero la atención podría mejorar. Aún así, pasé un buen rato.",
        },
        {
            userImage: "https://randomuser.me/api/portraits/women/44.jpg",
            userName: "María López",
            contributions: 15,
            votes: 8,
            title: "¡Increíble experiencia!",
            date: "15 de febrero de 4444",
            description:
                "La atención fue excelente y la vista espectacular. Definitivamente lo recomiendo para una experiencia única.",
        },
        {
            userImage: "https://randomuser.me/api/portraits/men/45.jpg",
            userName: "Carlos Pérez",
            contributions: 20,
            votes: 12,
            title: "Muy recomendable",
            date: "10 de enero de 5555",
            description:
                "Un lugar hermoso con un servicio excepcional. No dudaría en volver.",
        },
        {
            userImage: "https://randomuser.me/api/portraits/women/46.jpg",
            userName: "Laura González",
            contributions: 8,
            votes: 5,
            title: "Buena experiencia",
            date: "5 de marzo de 6666",
            description:
                "El lugar es bonito, pero la atención podría mejorar. Aún así, pasé un buen rato.",
        },
        {
            userImage: "https://randomuser.me/api/portraits/women/44.jpg",
            userName: "María López",
            contributions: 15,
            votes: 8,
            title: "¡Increíble experiencia!",
            date: "15 de febrero de 4444",
            description:
                "La atención fue excelente y la vista espectacular. Definitivamente lo recomiendo para una experiencia única.",
        },
        {
            userImage: "https://randomuser.me/api/portraits/men/45.jpg",
            userName: "Carlos Pérez",
            contributions: 20,
            votes: 12,
            title: "Muy recomendable",
            date: "10 de enero de 5555",
            description:
                "Un lugar hermoso con un servicio excepcional. No dudaría en volver.",
        },
        {
            userImage: "https://randomuser.me/api/portraits/women/46.jpg",
            userName: "Laura González",
            contributions: 8,
            votes: 5,
            title: "Buena experiencia",
            date: "5 de marzo de 6666",
            description:
                "El lugar es bonito, pero la atención podría mejorar. Aún así, pasé un buen rato.",
        },
    ],
};

const Testimonios = ({ marca }) => {
    const testimonios = testimoniosPorMarca[marca] || [];

    return (
        <div className="w-full max-w-7xl mx-auto my-24 pb-24 mb-12">
            <div className="grid grid-cols-12 items-center">
                <div className="col-span-9">
                    <div className="">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiperTestimonio"
                        >

                            {testimonios.map((comentario, index) => (
                                <SwiperSlide key={index}>
                                    {marca === "Tripadvisor" ? (
                                        <TripadvisorReview review={comentario} />
                                    ) : (
                                        <GoogleTestimonio review={comentario} />
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="flex justify-center py-4">

                        {marca === "Tripadvisor" ? (
                            <p>La evaluación general en <span className="text-JisaCyan font-bold">Tripadvisor </span>es <span className="text-JisaCyan font-bold">5.0 </span> de 5,en base a<span className="text-JisaCyan font-bold"> 479 reseñas </span></p>
                        ) : (
                            <p>La evaluación general en <span className="text-[#eb4939] font-bold">Tripadvisor </span>es <span className="text-[#eb4939] font-bold">5.0 </span> de 5,en base a<span className="text-[#eb4939] font-bold"> 479 reseñas </span></p>

                        )}
                    </div>
                </div>
                <div className="col-span-3 flex justify-center">

                    {marca === "Tripadvisor" ? (
                        <img src="src\assets\imagen\tourist-preview.png" alt="Jisa-Nosotros-Paquete" className="w-44" />
                    ) : (
                        <img src="src\assets\imagen\LogoJisaSecundario.webp" alt="Jisa-Nosotros-Paquete" className="w-44" />

                    )}
                </div>
            </div>
        </div>
    );
};

export default Testimonios;
