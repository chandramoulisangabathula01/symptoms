/* eslint-disable camelcase */
"use client"

import React, { Component } from "react";

import Disease from "./Disease/Disease";
import Home from "./Home/Home";
import Patient from "./Patient/Patient1";
import Patient2 from "./Patient/Patient2";
import Symptom from "./Symptom/Symptom";

interface HomePageState {
  current_page: string;
  tab_progress: number;
  button_is_disabled: boolean;
  home_button_checked: boolean;
  age: string;
  button_name: string;
  gender: string;
  male: boolean;
  female: boolean;
  home_nav_icon: JSX.Element;
  patient_nav_icon: JSX.Element;
  symptom_nav_icon: JSX.Element;
  disease_nav_icon: JSX.Element;
  patient_question: any[];
  patient_2_next_button_disabled: boolean;
  home_nav_value: boolean;
  patient_nav_value: boolean;
  symptom_nav_value: boolean;
  disease_nav_value: boolean;
  disease_possibility: any[];
  user_symptoms: any[];
  user_symptom_length: number | string;
}

class HomePage extends Component<{}, HomePageState> {
  private symptomPage: React.RefObject<Symptom>;
  get_gender: any;
  get_age_event: any;

  constructor(props: {}) {
    super(props);
    this.state = {
      current_page: "Home",
      tab_progress: 25,
      button_is_disabled: true,
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
      patient_2_next_button_disabled: false,
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

  componentDidMount(): void {
    // Client-side logic can be placed here
  }

  home_button_check_event = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked === true) {
      this.setState({ button_is_disabled: false, home_button_checked: true, home_nav_value: true, patient_nav_value: true });
    } else if (e.target.checked === false) {
      this.setState({ button_is_disabled: true, home_button_checked: false, home_nav_value: false, patient_nav_value: false });
    }
  };

  get_next_page = (): void => {
    switch (this.state.current_page) {
      case "Home":
        this.setState({
          current_page: "Patient",
          tab_progress: 50,
          home_nav_value: true,
          button_is_disabled: false,
          home_button_checked: false,
        });
        break;
      case "Patient":
        this.setState({
          current_page: "Patient-2",
          button_name: "Next",
          patient_2_next_button_disabled: true,
        });
        break;
      case "Patient-2":
        this.setState({
          current_page: "Symptom",
          tab_progress: 75,
          button_name: "Finish",
          patient_nav_value: true,
          user_symptom_length: 0,
        });
        break;
      case "Symptom":
        this.setState({
          current_page: "Disease",
          button_name: "Retry",
          tab_progress: 100,
          symptom_nav_value: true,
          disease_nav_value: true,
        });
        break;
      case "Disease":
        this.setState({
          tab_progress: 25,
          current_page: "Home",
          button_is_disabled: true,
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
          patient_2_next_button_disabled: false,
          home_nav_value: false,
          patient_nav_value: false,
          symptom_nav_value: false,
          disease_nav_value: false,
          disease_possibility: [],
          user_symptoms: [],
          user_symptom_length: "",
        });
        break;
    }
  };

  symptomInfoCallback = (data: any[], data2: any[]): void => {
    this.setState({
      disease_possibility: data,
      user_symptoms: data2,
      user_symptom_length: data2.length,
    });
  };

  patient_2_callback = (data: any[]): void => {
    const d = data.filter((key) => key.answer !== "");
    const avl = data.length !== d.length;
    this.setState({
      patient_question: data,
      patient_2_next_button_disabled: avl,
      symptom_nav_value: true,
    });
  };

  get_previous_page = (): void => {
    switch (this.state.current_page) {
      case "Disease":
        this.setState({
          current_page: "Symptom",
          button_name: "Finish",
          tab_progress: 75,
          disease_nav_value: false,
          user_symptom_length: this.state.user_symptoms.length,
        });
        break;
      case "Symptom":
        this.setState({
          current_page: "Patient-2",
          tab_progress: 50,
          button_name: "Next",
          patient_nav_value: false,
          patient_2_next_button_disabled: true,
          disease_possibility: [],
          user_symptoms: [],
        });
        break;
      case "Patient-2":
        this.setState({ current_page: "Patient", patient_2_next_button_disabled: false });
        break;
      case "Patient":
        this.setState({
          current_page: "Home",
          home_nav_value: false,
          button_is_disabled: true,
          home_button_checked: false,
          tab_progress: 25,
          user_symptom_length: 1,
        });
        break;
    }
  };

  showPage = (): JSX.Element => {
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
      default:
        return <></>;
    }
  };

  render(): JSX.Element {
    const { tab_progress, button_is_disabled, patient_2_next_button_disabled, user_symptom_length, current_page } = this.state;
    return (  
      <>
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

                <div className="w-5/6 p-4">{this.showPage()}</div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2">
              <button
                type="button"
                onClick={this.get_previous_page}
                disabled={tab_progress === 25}
                className="inline-flex w-1/2 justify-center rounded-md border border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={this.get_next_page}
                disabled={
                  (current_page === "Home" && button_is_disabled) ||
                  (current_page === "Patient-2" && patient_2_next_button_disabled) ||
                  (current_page === "Symptom" && user_symptom_length === 0)
                }
                className="inline-flex w-1/2 justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600"
              >
                {this.state.button_name}
              </button>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default HomePage;
