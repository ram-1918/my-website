const gradientBG = "bg-gradient-to-b from-white to-purple-200";

const NoPage = () => {
    return (
    <div className={`w-full h-screen text-black text-center ${gradientBG}`}>
        <span className="text-[3rem] font-semibold font-dance">Page Not Found</span>
    </div>
    );
}

export default NoPage;