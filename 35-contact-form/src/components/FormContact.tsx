// React
import { useState } from "react";

// Components
import InputText from "./InputText";
import InputEmail from "./InputEmail";
import InputRadio from "./InputRadio";
import InputTextarea from "./InputTextarea";
import InputCheckbox from "./InputCheckbox";
import ButtonSubmit from "./ButtonSubmit";
import InputRequired from "./InputRequired";
import ToastSuccess from "./ToastSuccess";

export default function FormContact() {
  const [showToast, setShowToast] = useState(false);
  const [formValidity, setFormValidity] = useState({
    firstName: false,
    lastName: false,
    emailAddress: false,
    queryType: false,
    message: false,
    approve: false,
  });

  function handleOnValidityChange(
    input: keyof typeof formValidity,
    isValid: boolean,
  ) {
    setFormValidity((prev) => ({ ...prev, [input]: isValid }));
  }

  const isFormValid = Object.values(formValidity).every(Boolean);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!isFormValid) {
            setShowToast(false);
            return;
          } else {
            setShowToast(true);
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
          }
          console.log("Form Başarıyla gönderildi.");
        }}
      >
        <div className="rounded-2xl bg-white p-6 md:p-10">
          <div className="flex flex-col items-stretch justify-start gap-10">
            <div className="form-content space-y-8">
              <h1 className="text-heading text-grey-900">Contact Us</h1>

              <div className="form-fields space-y-6">
                <div className="form-control flex flex-col gap-4 md:flex-row">
                  <InputText
                    inputID="input-text-first-name"
                    inputName="input-firstname"
                    labelContent="First Name"
                    inputRequired={true}
                    onValidityChange={(isValid) =>
                      handleOnValidityChange("firstName", isValid)
                    }
                  />
                  <InputText
                    inputID="input-text-last-name"
                    inputName="input-lastname"
                    labelContent="Last Name"
                    inputRequired={true}
                    onValidityChange={(isValid) =>
                      handleOnValidityChange("lastName", isValid)
                    }
                  />
                </div>

                <InputEmail
                  inputID="input-email-address"
                  inputName="input-email"
                  labelContent="Email Address"
                  inputRequired={true}
                  onValidityChange={(isValid) =>
                    handleOnValidityChange("emailAddress", isValid)
                  }
                />

                <div className="space-y-4">
                  <label
                    htmlFor="input-query-type"
                    className="text-body-sm text-grey-900 block"
                  >
                    Query Type <InputRequired />
                  </label>
                  <div className="form-control flex flex-col gap-4 md:flex-row">
                    <InputRadio
                      inputId="input-radio-query-type-1"
                      inputName="input-query-type"
                      inputText="General Enquiry"
                      inputRequired={true}
                      onValidityChange={(isValid) =>
                        handleOnValidityChange("queryType", isValid)
                      }
                    />
                    <InputRadio
                      inputId="input-radio-query-type-2"
                      inputName="input-query-type"
                      inputText="Support Request"
                      inputRequired={true}
                      onValidityChange={(isValid) =>
                        handleOnValidityChange("queryType", isValid)
                      }
                    />
                  </div>
                </div>

                <InputTextarea
                  inputID="input-textarea-message"
                  inputName="input-message"
                  labelContent="Message"
                  inputRequired={true}
                  onValidityChange={(isValid) =>
                    handleOnValidityChange("message", isValid)
                  }
                />
              </div>
            </div>
            <InputCheckbox
              inputId="input-checkbox-approve"
              inputText="I consent to being contacted by the team"
              inputName="input-checkbox-approved"
              inputRequired={true}
              onValidityChange={(isValid) =>
                handleOnValidityChange("approve", isValid)
              }
            />
            <ButtonSubmit
              text="Submit"
              class={`${!isFormValid ? "cursor-not-allowed opacity-50" : ""}`}
              disabled={!isFormValid}
            />
          </div>
        </div>
      </form>
      {showToast && <ToastSuccess />}
    </>
  );
}
