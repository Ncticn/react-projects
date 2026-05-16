
// Components
import BrandLogo from "../ui/BrandLogo";
import Divider from "../ui/Divider";
import SocialMedia from "../ui/SocialMedia";
import FormContact from "../ui/FormContact";

// Pattern Image
import PatternRings from "@/src/assets/patterns/pattern-rings.svg";

export default function Footer() {

    return (
        <footer className=" md:pt-15 md:pb-10 pt-15 pb-15 lg:pt-21 lg:pb-23 bg-base-dark-grey relative overflow-hidden">
            <div className="mx-auto max-w-85.75 md:max-w-177 lg:max-w-277.5 relative z-20">
                <div className="flex flex-col items-stretch justify-center gap-10 md:gap-7.5 lg:gap-12">

                    <div aria-label="footer-contact_me" className="pb-14 md:pb-15.5 lg:pb-11">
                        <div className="grid grid-cols-1 md:grid-cols-[445px] items-center justify-center gap-12 lg:grid-cols-[repeat(2,445px)] lg:justify-between lg:items-start lg:gap-0">
                            <div className="space-y-5 text-center lg:space-y-9 lg:text-left">
                                <h4 className="text-base-white text-heading-xl">Contact</h4>
                                <p className="text-body text-base-grey">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                            </div>

                            <FormContact />
                        </div>
                    </div>

                    <Divider />

                    <div aria-label="footer-brand_logo-social_media">
                        <div className="flex flex-col md:flex-row items-center md:justify-between md:gap-0 justify-center gap-5">
                            <BrandLogo />
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
            <img src={PatternRings.src} alt="Pattern Image" className="absolute top-[52%] left-[-50%] md:top-[70%] md:left-[-45%] lg:top-[50%] lg:left-[-15%] 2xl:top-[45%] 2xl:left-[-10%] w-fit h-auto"/>
        </footer>
    );
}