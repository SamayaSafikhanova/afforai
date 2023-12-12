import React from "react";
const AppSumo=()=>{
    return (
      <>
        <div className="d-inline-flex align-items-center">
          <img
            src={require("../../assets/appsumo.png").default}
            width="26"
            height="20"
            alt="AppSumo"
          />
          <span>Now on AppSumo</span>
          <a
            href="https://appsumo.8odi.net/3eR3xn"
            target="_blank"
            className="d-flex align-items-center justify-content-center"
          >
            <span>Get Lifetime Deal</span>
            <div style={{ lineHeight: "0px", transform: "rotate(-90deg)" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="angle-down">
                  <path
                    id="angle-up-small_2"
                    d="M5.3338 5.99981C5.50446 5.99981 5.67515 6.06512 5.80515 6.19512L8.00046 8.39044L10.1958 6.19512C10.4564 5.93446 10.8778 5.93446 11.1385 6.19512C11.3992 6.45579 11.3992 6.87717 11.1385 7.13783L8.47182 9.8045C8.21115 10.0652 7.78978 10.0652 7.52911 9.8045L4.86244 7.13783C4.60178 6.87717 4.60178 6.45579 4.86244 6.19512C4.99244 6.06512 5.16313 5.99981 5.3338 5.99981Z"
                    fill="#333"
                  ></path>
                </g>
              </svg>
            </div>
          </a>
        </div>
      </>
    );
}

export default AppSumo;