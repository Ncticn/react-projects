import Image from "next/image";

interface ModalSuccessProps {
    email: string;
    onClose: () => void;
}

export default function ModalSuccess({ email, onClose }: ModalSuccessProps) {

    function handleClick(){
        onClose();
    }

    return (
        <div className="absolute inset-0 md:inset-auto">
            <div className="md:rounded-[36px] bg-white px-6 md:px-16 md:py-16 md:max-w-126 h-full md:h-fit">
                <div className="flex items-center justify-center h-full">
                    <div className="h-155.75 md:h-fit flex flex-col items-center justify-between md:justify-center gap-8">
                        <header className="space-y-8">
                            <Image src={"assets/icons/icon-success.svg"} width={64} height={64} alt="Icon Success" />
                            <h1 className="text-preset-1 text-blue-800">Thanks for subscribing!</h1>
                        </header>

                        <section>
                            <p className="text-preset-2 font-normal text-blue-800">A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription.</p>
                        </section>

                        <footer className="w-full">
                            <button type="button" className="text-preset-2 w-full text-center font-bold text-white bg-linear-to-r hover:from-0% hover:from-[#FF6A3A] hover:to-100% hover:to-[#FF527B] bg-blue-800 cursor-pointer rounded-lg px-8 py-4 transition delay-75 ease-linear hover:drop-shadow-[0_16px_32px_rgba(255,97,85,50%)]" onClick={handleClick}>Dismiss message</button>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}