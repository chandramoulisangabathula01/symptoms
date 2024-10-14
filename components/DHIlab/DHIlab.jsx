/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import "./DHIlab.css";
class DHIlabLogo extends Component {
    render() {
        return (<React.Fragment>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[40px] w-auto"
            whileHover={{ scale: 1.2 }}
          >
            <rect width="7" height="7" x="14" y="3" rx="1"></rect>
            <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
          </svg>
       

        {/* <div> */}
        {/* </div> */}
      </React.Fragment>);
    }
}
export default DHIlabLogo;