
import FacebookIcon from "../../../public/icons/FacebookIcon"
import GoogleIcon from "../../../public/icons/GoogleIcon"
import InstagramIcon from "../../../public/icons/InstagramIcon"
import TripAdvisorIcon from "../../../public/icons/TripAdvisorIcon"
import logoJisa from "../../assets/imagen/LogoJisaSecundario.webp"
import FooterJisa from "../../assets/imagen/Footer-Jisa-Adventure-Caminante.webp"

function Footer() {
    return (
        <>
            <div className="w-full">
                <img src={FooterJisa} alt="" className="-mb-2" />
            </div>
            <div className="bg-black w-full">
                <div className="w-full max-w-7xl grid grid-cols-12 gap-4 mx-auto">
                    <div className="col-span-4 p-4 text-white flex flex-col px-8">
                        <img src={logoJisa} alt="Logo Jisa" className="h-32 object-contain py-2" />
                        <div>
                            <p className="text-sm p-4 pt-2">
                                ¡Conozca a nuestros expertos en planificación de viajes! En Jisa Adventure, contamos con un equipo apasionado y conocedor de cada destino en Perú.
                            </p>
                        </div>
                        <div className="text-white flex justify-center align-middle items-center gap-x-4">
                            <GoogleIcon size={40} className="" />
                            <TripAdvisorIcon size={40} className="" />
                            <InstagramIcon size={30} className="" />
                            <FacebookIcon size={30} className="" />
                        </div>
                    </div>
                    <div className="col-span-4 p-4 text-white px-12">
                        <h4 className="font-bold text-xl">Jisa Adventure</h4>
                        <div className="lista-menu-footer ps-4 py-2">
                            <ul className="text-lg font-medium">
                                <li>
                                    <a href="#">Inicio</a>
                                </li>
                                <li>
                                    <a href="#">Destinos</a>
                                </li>
                                <li>
                                    <a href="#">Tours</a>
                                </li>
                                <li>
                                    <a href="#">Paquetes personalizados</a>
                                </li>
                                <li>
                                    <a href="#">Nuestro blog</a>
                                </li>
                                <li>
                                    <a href="#">Sobre nosotros</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-4 bg-green-500 p-4 text-white">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer