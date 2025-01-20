import Footer from "./Footer";

const FooterDiv = () => {
    return (
        <div id="contact" className="flex items-center justify-center p-5 bg-slate-900">
            {/* <Footer /> */}
            <NavigateTo id="#about" color="#D1D2D3" />
            <BaseCopyrights />
        </div>
    )
};

export default FooterDiv;