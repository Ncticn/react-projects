import InputRequired from "./InputRequired";

interface InputCheckbox {
  inputId: string;
  inputName: string;
  inputText: string;
  required: boolean;
}

export default function InputCheckbox(props: InputCheckbox) {
  return (
    <div className="input-checkbox">
      <div className="flex items-center justify-center gap-4">
        <input
          type="checkbox"
          name={props.inputName}
          id={props.inputId}
          className="border-grey-500 size-4.5 appearance-none rounded-[1px] border bg-white text-green-600 transition delay-75 ease-linear checked:border-green-600 checked:bg-[url(src/assets/icons/icon-checkbox-check.svg)] checked:bg-auto checked:bg-center checked:bg-no-repeat"
        />
        <label htmlFor={props.inputId} className="text-grey-900 text-body-sm">
          {props.inputText} {props.required && <InputRequired />}
        </label>
      </div>
    </div>
  );
}
