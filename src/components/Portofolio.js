import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        portofolio: state.portofolio.portofolio
    }
}

class Portofolio extends Component {
    render() {
        return (
            <div>
                {/* SECTION: PORTFOLIO*/}
                <div className="section-vcardbody section-page" id="page-portfolio">
                    <div className="section-portfolio">
                        {/* Section title */}
                        <h2 className="section-title">Portfolio</h2>
                        {/* /Section title */}
                        {/* Projects list */}
                        <div className="projects-list">

                            {/* item */}
                            {this.props.portofolio.map((data, key) => {
                                return (
                                    <div className="project-item" key={key}>
                                        {/* ==> Put your thumbnail as a background */}
                                        <a href={data.gambar} className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{ backgroundImage: `url(${data.thumbnail})` }}>
                                            {/* project-description */}
                                            <div className="project-description-wrapper">
                                                <div className="project-description">
                                                    {/* project name */}
                                                    <h2 className="project-title">{data.title}</h2>
                                                    {/* /project name */}
                                                    <span className="see-more">{data.tag}</span>
                                                </div>
                                            </div>
                                            {/* /project-description */}
                                        </a>
                                    </div>
                                )
                            })}
                            {/* /item */}

                        </div>
                        {/* /projects list */}
                    </div>
                </div>
                {/* /SECTION: PORTFOLIO  */}

            </div>
        );
    }
}

export default connect(mapStateToProps)(Portofolio);