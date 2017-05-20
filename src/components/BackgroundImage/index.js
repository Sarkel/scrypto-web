/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 20/05/2017
 * @Description
 */
import React from "react";
import PropTypes from "prop-types";
import "./index.css";

class BackgroundImage extends React.Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <section className="container-fluid cover-image flex-on no-gutters">
                <div className="row align-items-center col-12 center-self">
                    <div className="col-md-4 col-sm-12 center-self background-image-content no-padding">
                        <header className="background-image-content__header flex-on">
                            <span className="center-self-vertical">{this.props.title}</span>
                        </header>
                        <main>
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </section>
        );
    }
}

export default BackgroundImage;