const RowNumber = ({ col, children, className = "" }) => {
    return (
        <div className={`col-span-${col} h-auto flex ${className}`}>
            {children}
        </div>
    );
};


export default RowNumber