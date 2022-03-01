import React, { FC, useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import InfoLabel from "../InfoLabel";

const SubscribeForm: FC = () => {
  const [state, handleSubmit] = useForm("myyojeer");
  const [emailInput, setEmailInput] = useState("");
  const [isLabelShown, setIsLabelShown] = useState(false);

  useEffect(() => {
    setIsLabelShown(true);
    if (state.submitting) {
      setEmailInput("");
    }

    const timer = setTimeout(() => {
      setIsLabelShown(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [state.submitting]);

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
          />
          <label htmlFor="email" className="subscribe-form__email-label">
            Enter your email here
          </label>
        </div>
        {state.succeeded && isLabelShown && (
          <InfoLabel
            text="Thanks for joining!"
            containerClassName="subscribe-form__succeed"
            textClassName="subscribe-form__succeed-text"
          />
        )}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
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
