import { useParams } from "react-router-dom";
const TourDetail = () => {
    const { slug } = useParams();
    return (
        <>
            <div>
                <h1 className="text-3xl font-bold">Detalles del Tour: {slug}</h1>
            </div>
        </>
    )
}
export default TourDetail