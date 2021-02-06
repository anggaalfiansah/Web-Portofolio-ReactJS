import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        professional: state.skill.professional,
        software: state.skill.software,
        code: state.skill.code,
    }
}

class Skill extends Component {
    render() {
        return (
            <div>
                {/* SECTION: SKILLS*/}
                <div className="section-vcardbody section-page" id="page-skills">
                    <div className="section-skills">
                        {/* Section title */}
                        <h2 className="section-title">SKILLS</h2>
                        {/* /Section title */}
                        {/* Subtitle */}
                        <h3 className="section-item-title-2"><i className="fa fa-users" />&nbsp;&nbsp; Professional Skills</h3>
                        {/* /Subtitle */}
                        {/* Skils List */}
                        <ul className="skills-list">

                            {/* item-list */}
                            {this.props.professional.map((data, key) => {
                                return (
                                    <li>
                                        <div className="progress" key={key}>
                                            <div className="progress-bar" role="progressbar" data-percent={data.persen} style={{ width: `${data.persen}` }}>
                                                <span className="sr-only">{data.persen} Complete</span>
                                            </div>
                                            <span className="progress-type">{data.nama}</span>
                                            <span className="progress-completed">{data.persen}</span>
                                        </div>
                                    </li>
                                )
                            })}
                            {/* /item list */}

                        </ul>
                        {/* /Skils List */}
                        {/* Subtitle */}
                        <h3 className="section-item-title-2"><i className="fa fa-laptop" />&nbsp;&nbsp; Software Skills</h3>
                        {/* /Subtitle */}
                        {/* Skils List */}
                        <ul className="skills-list">

                            {/* item-list */}
                            {this.props.software.map((data, key) => {
                                return (
                                    <li>
                                        <div className="progress" key={key}>
                                            <div className="progress-bar progress-bar-2" role="progressbar" data-percent={data.persen} style={{ width: `${data.persen}` }}>
                                                <span className="sr-only">{data.persen} Complete</span>
                                            </div>
                                            <span className="progress-type">{data.nama}</span>
                                            <span className="progress-completed">{data.persen}</span>
                                        </div>
                                    </li>
                                )
                            })}
                            {/* /item list */}

                        </ul>
                        {/* /Skils List */}
                        {/* Subtitle */}
                        <h3 className="section-item-title-2"><i className="fa fa-code" />&nbsp;&nbsp; Code Skills</h3>
                        {/* /Subtitle */}
                        {/* Skils List */}
                        <ul className="skills-list">
                            
                            {/* item-list */}
                            {this.props.code.map((data, key) => {
                                return (
                                    <li>
                                        <div className="progress" key={key}>
                                            <div className="progress-bar progress-bar-3" role="progressbar" data-percent={data.persen} style={{ width: `${data.persen}` }}>
                                                <span className="sr-only">{data.persen} Complete</span>
                                            </div>
                                            <span className="progress-type">{data.nama}</span>
                                            <span className="progress-completed">{data.persen}</span>
                                        </div>
                                    </li>
                                )
                            })}
                            {/* /item list */}

                        </ul>
                        {/* /Skils List */}
                    </div>
                </div>
                {/* /SECTION: SKILLS  */}

            </div >
        );
    }
}

export default connect(mapStateToProps)(Skill);