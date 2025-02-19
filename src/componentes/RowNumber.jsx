const RowNumber = ({ col, children }) => {
    return (
        <div className={`col-span-${col} h-auto flex `}>
            {children}
        </div>
    );
};


export default RowNumber