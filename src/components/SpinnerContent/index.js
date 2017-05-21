/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 21/05/2017
 * @Description
 */
import React from "react";
import "./index.css";
import Backdrop from "../Backdrop";

class SpinnerContent extends React.Component {
    render() {
        return (
            <Backdrop>
                <div className="spinner-container">
                    <svg
                        className="spinner-container__item"
                        width="65px"
                        height="65px"
                        viewBox="0 0 66 66"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            className="spinner-container__item__path"
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                            cx="33"
                            cy="33"
                            r="30"
                        />
                    </svg>
                </div>
            </Backdrop>
        );
    }
}

export default SpinnerContent;