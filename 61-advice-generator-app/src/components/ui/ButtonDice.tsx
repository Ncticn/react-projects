import IconDice from "@/src/assets/icons/icon-dice.svg";

interface ButtonDiceProps {
    onClick?: () => void,
    classList?: string,
}

export default function ButtonDice({ onClick, classList }: ButtonDiceProps) {

    return (
        <button
            onClick={onClick}
            type="button"
            className={`size-16 bg-green-300 rounded-4xl cursor-pointer transition delay-75 ease-linear hover:drop-shadow-[0_0_40px_rgba(83,255,170,1)] ${classList}`}>
            <img src={IconDice.src || IconDice} alt="Icon Dice" className="m-auto" />
        </button>
    );
}