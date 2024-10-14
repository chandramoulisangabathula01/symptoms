/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import "./Home.css";

const Home = (props) => {
  //   console.log("is checked", props, props.isChecked, props.checked);
  return (
    <React.Fragment>
      <div className="tablet:grid-col padding-x-4 gap-4 ">
        <p className="mb-4 text-2xl font-bold text-gray-700">Before using this symptom checker, please read carefully and accept our Terms and Services:</p>
        <ul className="list-disc text-lg text-gray-700">
          <li>This checkup is not a diagnosis.</li>
          <li>This checkup is for informational purposes and is not a qualified medical opinion.</li>
          <li>Information that you provide is anonymous and not shared with anyone. We also do not store any information on our server.</li>
        </ul>
        <form class="usa-form TermsCheckbox">
          <div class="usa-checkbox">
            <input checked={props.isChecked} onChange={props.checked} class="usa-checkbox__input" id="truth" type="checkbox" name="historical-figures-1" value="truth" />
            <label class="usa-checkbox__label text-lg font-bold text-gray-700 " for="truth">
              I agree to the terms and conditions
            </label>
          </div>
        </form>
      </div>

      <div className="tablet:grid-col">{/* <img src="/images/TOS.png" /> */}</div>
    </React.Fragment>
  );
};

export default Home;
