import CalendarIcon from "../../public/icons/CalendarIcon"
import CameraIcon from "../../public/icons/CameraIcon"
import FacebookIcon from "../../public/icons/FacebookIcon"
import GroupUsers from "../../public/icons/GroupUsers"
import MapDotIcon from "../../public/icons/MapDotIcon"
import GridNumber from "../componentes/GridNumber"
import HeaderTitle from "../componentes/HeaderTitle"
import RowNumber from "../componentes/RowNumber"
import SearchBar from "../componentes/SearchBar"
import Hero from "../componentes/secciones/Hero"
import SeparatorBarHorizontal from "../componentes/SeparatorBarHorizontal"
import SubHeaderTitle from "../componentes/SubHeaderTitle"

const Home = () => {
    return (
        <>
            <>
                <Hero />
                <SearchBar />

                <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-7 h-auto flex flex-col items-start justify-center align-middle px-10">
                            <span className="text-left text-JisaAmarillo font-medium text-lg" >JISA ADVENTURE</span>
                            <HeaderTitle title={'Tours a Machu Picchu, Cusco y Perú 2024'} />
                            <SeparatorBarHorizontal />
                            <p className="text-left text-JisaGris font-light text-md py-4">
                                La fundadora de Jisa Adventure, Felicia Acuña Salas,
                                es una apasionada del turismo y amante de su país, Perú.
                                Con una visión clara y determinación, decidió crear esta agencia
                                para compartir la belleza y riqueza cultural de Perú con el mundo.
                                Gracias a su experiencia como guía oficial de turismo,
                                pudo diseñar experiencias únicas y auténticas para los
                                viajeros que buscan descubrir la magia de Perú. Hoy en día,
                                Jisa Adventure es reconocida por su excelencia en el servicio
                                y por brindar momentos inolvidables a quienes eligen explorar
                                este hermoso país con nosotros. ¡Únete a la aventura y descubre
                                la historia que inspiró a Felicia a crear Jisa Adventure!
                            </p>
                        </div>
                        <div className="col-span-5 h-auto flex flex-col items-start justify-center align-middle">
                            <img src="src\assets\imagen\tourist-preview.png" alt="Jisa-Nosotros-Paquete" className="w-full" />
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
                    <div className="flex-col justify-center flex items-center">
                        <HeaderTitle title={'PAQUETES DESTACADOS'} />
                        <SubHeaderTitle title={`En JISA ADVENTURE, nos preocupamos por cada detalle de tu travesía para que tu experiencia sea inolvidable. Nuestro equipo de asesores está siempre dispuesto a ayudarte a planificar el viaje ideal, adaptando cada tour a tus intereses y necesidades.`} />
                        <SeparatorBarHorizontal />
                    </div>
                    <div className="w-full max-w-6xl mx-auto">
                        <GridNumber col={12} className="gap-x-11">
                            <RowNumber col={4}>
                                <div className="group w-full h-[512px] flex flex-col bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden transition-all duration-300"
                                    style={{ backgroundImage: `url(https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp)` }}>

                                    <div className="absolute inset-0 bg-JisaGris/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                                    <div className="px-6 py-1 bg-JisaCyan rounded-md w-min absolute top-3 left-3 text-sm font-semibold text-white z-10">
                                        Grupal
                                    </div>

                                    <div className="absolute top-10 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        <div className="flex flex-col gap-4">
                                            <a href="#" className="p-2   transition">
                                                <GroupUsers size={24} className="text-white hover:text-JisaCyan transition duration-300" />
                                            </a>
                                            <a href="#" className="p-2   transition">
                                                <CalendarIcon size={24} className="text-white hover:text-JisaCyan transition duration-300" />
                                            </a>
                                            <a href="#" className="p-2   transition">
                                                <CameraIcon size={24} className="text-white hover:text-JisaCyan transition duration-300" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="bg-white absolute bottom-0 w-full flex flex-col py-2 rounded-b-xl transition-all duration-300  z-10">
                                        <div className="flex gap-x-2 text-JisaGris/30 px-4 items-center">
                                            <MapDotIcon size={14} />
                                            <div className="text-xs font-medium">Montaña de Colores Palccoyo, Cusco</div>
                                        </div>

                                        <div className="text-left font-medium text-base ps-4 text-JisaGris/80">
                                            Rainbow Mountain Vinicunca Tour (Group Service)
                                        </div>
                                        <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-in-out ps-4">
                                            <div className="mt-2 w-[90%] self-center border-t border-JisaGris/20"></div>
                                            <div className="flex flex-col">
                                                <span className="text-base font-semibold text-JisaGris/50">Desde</span>
                                                <span className="text-xl font-bold text-JisaVerde">$999.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </RowNumber>
                            <RowNumber col={4}>
                                <div className="w-full h-20 bg-red-100">

                                </div>
                            </RowNumber>
                            <RowNumber col={4}>
                                <div className="w-full h-20 bg-red-100">

                                </div>
                            </RowNumber>
                        </GridNumber>
                    </div>
                </div>
            </>
        </>
    )
}

export default Home