import React, { FC, useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import InfoLabel from "../InfoLabel";

const SubscribeForm: FC = () => {
  const [state, handleSubmit] = useForm("myyojeer");
  const [emailInput, setEmailInput] = useState("");
  const [isLabelShown, setIsLabelShown] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  // submitting
  useEffect(() => {
    if (state.succeeded && !state.submitting && state.errors.length === 0) {
      setEmailInput("");
      setIsLabelShown(true);
    }

    const timer = setTimeout(() => {
      setIsLabelShown(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [state.submitting, state.succeeded, state.errors]);

  // change label position if there is some value in the input
  useEffect(() => {
    if (emailInput !== "") {
      emailInputRef.current?.classList.add(
        "subscribe-form__email-input_active"
      );
    } else {
      emailInputRef.current?.classList.remove(
        "subscribe-form__email-input_active"
      );
    }
  }, [emailInput, emailInputRef]);

  return (
    <div className="subscribe-form">
      <h3 className="subscribe-form__heading">
        Free top cocktails list every weekend
      </h3>
      <form onSubmit={handleSubmit} className="subscribe-form__form">
        <div className="subscribe-form__input-container">
          <input
            id="email"
            type="email"
            name="email"
            className="subscribe-form__email-input"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            ref={emailInputRef}
          />
          <label htmlFor="email" className="subscribe-form__email-label">
            Enter your email here
          </label>
        </div>
        {isLabelShown && (
          <InfoLabel
            text="Thanks for joining!"
            containerClassName="subscribe-form__succeed"
            textClassName="subscribe-form__succeed-text"
          />
        )}
        {state.submitting && (
          <div className="loader subscribe-form__loader"></div>
        )}
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="subscribe-form__error"
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="btn3 subscribe-form__submit-btn"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
