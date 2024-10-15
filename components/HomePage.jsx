/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import Link from "next/link";
import React, { Component } from "react";

import Disease from "./Disease/Disease";
import Home from "./Home/Home";
import Navbar from "./Navbar";
import Patient from "./Patient/Patient1";
import Patient2 from "./Patient/Patient2";
import Symptom from "./Symptom/Symptom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_page: "Home", // Name of the current component
      tab_progress: 25,
      button_is_disabled: true, // Next button disabled if not agreed to terms
      home_button_checked: false, 
      age: "18", 
      button_name: "Next",
      gender: "Male", 
      male: true,// patient checkbox
      female: false,// patient checkbox
      home_nav_icon: <p>1</p>,
      patient_nav_icon: <p>2</p>,
      symptom_nav_icon: <p>3</p>,
      disease_nav_icon: <p>4</p>,
      patient_question: [],
      patient_2_next_button_disabled: "",
      home_nav_value: false,
      patient_nav_value: false,
      symptom_nav_value: false,
      disease_nav_value: false,
      disease_possibility: [],
      user_symptoms: [],
      user_symptom_length: "",
    };
    this.symptomPage = React.createRef();
  }

  home_button_check_event = (e) => {
    if (e.target.checked === true) {
      return this.setState({ button_is_disabled: false, home_button_checked: true, home_nav_value: true, patient_nav_value: true });
    } else if (e.target.checked === false) {
      return this.setState({ button_is_disabled: true, home_button_checked: false, home_nav_value: false, patient_nav_value: false });
    }
  };

  get_next_page = (e) => {
    switch (this.state.current_page) {
      case "Home":
        return this.setState({
          current_page: "Patient",
          tab_progress: 50,
          home_nav_value: true,
          button_is_disabled: false,
          home_button_checked: false,
        });
      case "Patient":
        return this.setState({
          current_page: "Patient-2",
          button_name: "Next",
          patient_2_next_button_disabled: true,
        });
      case "Patient-2":
        return this.setState({
          current_page: "Symptom",
          tab_progress: 75,
          button_name: "Finish",
          patient_nav_value: true,
          user_symptom_length: 0,
        });
      case "Symptom":
        return this.setState({
          current_page: "Disease",
          button_name: "Retry",
          tab_progress: 100,
          symptom_nav_value: true,
          disease_nav_value: true,
        });
      case "Disease":
        return this.setState({
          tab_progress: 25,
          current_page: "Home", // Name of the current component
          button_is_disabled: true, // Next button disabled if not agreed to terms
          home_button_checked: false, 
          age: "18", 
          button_name: "Next",
          gender: "Male", 
          male: true, 
          female: false, 
          home_nav_icon: <p>1</p>,
          patient_nav_icon: <p>2</p>,
          symptom_nav_icon: <p>3</p>,
          disease_nav_icon: <p>4</p>,
          patient_question: [],
          patient_2_next_button_disabled: "",
          home_nav_value: false,
          patient_nav_value: false,
          symptom_nav_value: false,
          disease_nav_value: false,
          disease_possibility: [],
          user_symptoms: [],
          user_symptom_length: "",
        });
    }
  };

  get_gender = (e) => {
    if (e.target.value === "male") {
      this.setState({
        male: true,
        female: false,
        gender: "Male",
      });
    } else if (e.target.value === "female") {
      this.setState({
        male: false,
        female: true,
        gender: "Female",
      });
    }
  };

  get_age_event = (e) => {
    this.setState({ age: e.target.value });
  };

  symptomInfoCallback = (data, data2) => {
    this.setState({
      disease_possibility: data,
      user_symptoms: data2,
      user_symptom_length: data2.length,
    });
  };

  patient_2_callback = (data) => {
    const d = data.filter((key) => key.answer !== "");
    const avl = data.length !== d.length;
    this.setState({
      patient_question: data,
      patient_2_next_button_disabled: avl,
      symptom_nav_value: true,
    });
  };

  get_previous_page = (e) => {
    switch (this.state.current_page) {
      case "Disease":
        return this.setState({
          current_page: "Symptom",
          button_name: "Finish",
          tab_progress: 75,
          disease_nav_value: false,
          user_symptom_length: this.state.user_symptoms.length,
        });
      case "Symptom":
        return this.setState({
          current_page: "Patient-2",
          tab_progress: 50,
          button_name: "Next",
          patient_nav_value: false,
          patient_2_next_button_disabled: true,
          disease_possibility: [],
          user_symptoms: [],
        });
      case "Patient-2":
        return this.setState({ current_page: "Patient", patient_2_next_button_disabled: false });
      case "Patient":
        return this.setState({
          current_page: "Home",
          home_nav_value: false,
          button_is_disabled: true,
          home_button_checked: false,
          tab_progress: 25,
          user_symptom_length: 1,
        });
    }
  };

  showPage = (e) => {
    const { current_page, home_button_checked, age, male, female } = this.state;
    switch (current_page) {
      case "Home":
        return <Home isChecked={home_button_checked} checked={this.home_button_check_event} />;
      case "Patient":
        return <Patient male={male} female={female} gender={this.get_gender} age={age} ageChange={this.get_age_event} />;
      case "Patient-2":
        return <Patient2 callback={this.patient_2_callback} />;
      case "Symptom":
        return (
          <Symptom
            ref={this.symptomPage}
            userSymptoms={this.state.user_symptoms}
            diseasePossibility={this.state.disease_possibility}
            getPossibleDisease={this.symptomInfoCallback}
          />
        );
      case "Disease":
        return <Disease patientInfo={this.state.patient_question} disease_with_possibility={this.state.disease_possibility} gender={this.state.gender} age={this.state.age} />;
    }
  };

  render() {
    const { tab_progress, button_is_disabled, patient_2_next_button_disabled, user_symptom_length, current_page } = this.state;
    return (  
      <>
        {/* <Navbar /> */}

        <div className="flex h-screen max-h-screen">
        
          <main id="main-content" className="container mx-auto py-6">
            <div className="grid gap-4 rounded-xl border border-gray-200 p-4">
              <div className="flex">
                <div className="mr-4 w-1/6 p-4">
                  <ul className="flex list-none flex-col justify-center gap-4 pl-2 leading-relaxed">
                    <li id="progressbar" className="float-right w-1/4 rounded-lg bg-gray-200 p-1">
                      <div
                        className={`h-[3px] rounded-full bg-green-500 ${
                          tab_progress === 25 ? "w-1/4" :
                          tab_progress === 50 ? "w-1/2" :
                          tab_progress === 75 ? "w-3/4" :
                          tab_progress === 100 ? "w-full" : ""
                        }`}
                      ></div>
                    </li>
                    <li className={`border-l-2 ${current_page === "Home" ? "border-green-500 font-bold text-green-500" : "border-gray-300 font-normal text-gray-700"}`}>
                      Welcome
                    </li>
                    <li className={`border-l-2 ${tab_progress >= 50 ? "border-green-500 font-bold text-green-500" : "border-gray-300 font-normal text-gray-700"}`}>
                      Patient
                    </li>
                    <li className={`border-l-2 ${tab_progress >= 75 ? "border-green-500 font-bold text-green-500" : "border-gray-300 font-normal text-gray-700"}`}>
                      Symptom
                    </li>
                    <li className={`border-l-2 ${tab_progress === 100 ? "border-green-500 font-bold text-green-500" : "border-gray-300 font-normal text-gray-700"}`}>
                      Disease
                    </li>
                  </ul>
                </div>
                <div className="w-5/6" id="ContentDiv">
                  <div className="shoPageSection grid gap-4 p-4">{this.showPage()}</div>
                  <div id="buttonsSection" className="mt-4 flex justify-between border-t border-gray-200 pt-4">
                    <button className="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300" onClick={this.get_previous_page} disabled={current_page === "Home"}>
                      Back
                    </button>
                    <button
                      className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                      onClick={this.get_next_page}
                      disabled={current_page === "Patient-2" ? patient_2_next_button_disabled : button_is_disabled}
                    >
                      {this.state.button_name}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default HomePage;
