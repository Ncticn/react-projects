// Components
import BrandLogo from "../ui/BrandLogo";
import ButtonRequest from "../ui/ButtonRequest";

export default function Header() {
    return (
        <header>
            <div className="flex flex-row items-center justify-between gap-0">
                <BrandLogo />
                <ButtonRequest text="Request Beta Access" />
            </div>
        </header>
    );
}