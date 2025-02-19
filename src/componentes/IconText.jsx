
const IconText = ({ icon: Icon, text }) => {
    return (
        <div className="contactos-header flex gap-x-2 items-center justify-center align-middle">
            {Icon && <Icon size={20} className="text-black" />}
            <span>{text}</span>
        </div>
    );
};

export default IconText