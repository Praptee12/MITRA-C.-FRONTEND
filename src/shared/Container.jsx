const Container = ({ children }) => {
    return (
        <div className="flex flex-col items-start w-[1440px] bg-white">
            {children}
        </div>
    );
};

export default Container;