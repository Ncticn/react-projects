interface InputRadio {
  inputId: string;
  inputName: string;
  inputText: string;
}

export default function InputRadio(props: InputRadio) {
  return (
    <div className="form-input-item w-full">
      <label
        className="border-grey-500 inline-block w-full rounded-lg border bg-white px-6 py-3 hover:border-green-600 active:bg-green-200 has-checked:border-green-600 has-checked:bg-green-200"
        htmlFor={props.inputId}
      >
        <div className="flex flex-row items-center justify-start gap-3">
          <input
            type="radio"
            name={props.inputName}
            id={props.inputId}
            className="border-grey-500 relative inline-flex size-5 appearance-none items-center justify-center overflow-hidden rounded-full border-2 opacity-50 transition delay-75 ease-linear checked:border-green-600 checked:opacity-100 checked:after:absolute checked:after:inset-x-1/7 checked:after:inset-y-2/12 checked:after:size-2.75 checked:after:rounded-full checked:after:bg-green-600"
          />
          <span className="text-body-md text-grey-900 font-normal">
            {props.inputText}
          </span>
        </div>
      </label>
    </div>
  );
}
