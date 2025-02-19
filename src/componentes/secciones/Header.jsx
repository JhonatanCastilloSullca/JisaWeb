import Marquee from "react-fast-marquee"
import logoJisa from "../../assets/imagen/LogoJisa.webp"
import WhatsappIcon from "../../../public/icons/WhatsappIcon"
import EnvelopeIcon from "../../../public/icons/EnvelopeIcon"
import FlagPeru from "../../../public/icons/FlagPeru"
import IconText from "../IconText"
import SeparatorBar from "../SeparatorBar"





function Header() {
    return (
        <>
            <header className="top-0 absolute z-10 bg-white" >
                <Marquee className=" bg-JisaGris text-white font-medium h-10" speed={50} >
                    Tour machupicchu 2025 en oferta 20 % de descuento  -  Reserva tu paquete con nosotros  -  Temporada verano 2025 - Tour Lima Ica Paracas - Tour Gastronomico de Lujo - Parapente Rap Motocross - Salidas diarias | Servicio grupal y privado - Excursiones Atencion Personalizada
                </Marquee>
                <div className="w-full">
                    <div className="max-w-7xl w-full mx-auto">
                        <div className="flex justify-between py-2">
                            <div className="image">
                                <img src={logoJisa} alt="Logo Jisa" className="h-20 object-cover py-2" />
                            </div>
                            <div className="">
                                <div className="flex flex-col justify-evenly h-full">
                                    <div className="flex gap-x-2 align-middle items-center justify-end">
                                        <IconText icon={WhatsappIcon} text="999 999 999  /  999 999 999" />
                                        <SeparatorBar />
                                        <IconText icon={EnvelopeIcon} text="contacto@jisa.com" />
                                        <SeparatorBar />
                                        <IconText text="Blog" />
                                        <SeparatorBar />
                                        <IconText icon={FlagPeru} />
                                    </div>
                                    <div className="flex gap-x-4">
                                        <div className="border-JisaCyan border-2 flex justify-center items-center rounded-md">
                                            <div className="size-8 bg-JisaCyan rounded-sm flex justify-center items-center">
                                                <EnvelopeIcon size={20} className="text-white" />
                                            </div>
                                            <div className="px-2">
                                                <span>Urb. Dirección Calle Avenida 1233 - A</span>
                                            </div>
                                        </div>
                                        <div className="border-JisaCyan border-2 flex justify-center items-center rounded-md">
                                            <div className="size-8 bg-JisaCyan rounded-sm flex justify-center items-center">
                                                <EnvelopeIcon size={20} className="text-white" />
                                            </div>
                                            <div className="px-2">
                                                <span>Nuevas reseñas</span>
                                            </div>
                                        </div>
                                        <a href="#" className="bg-JisaCyan text-white rounded-md text-center items-center flex px-4">
                                            Reservar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header