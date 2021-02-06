import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        foto: state.home.foto,
        nama: state.home.nama,
        job: state.home.job,
        about: state.home.about,
        email: state.home.email,
        phone: state.home.phone,
        instagram: state.home.instagram,
        facebook: state.home.facebook,
        linkedin: state.home.linkedin,
        youtube: state.home.youtube
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                {/* SECTION: vCard Body  */}
                <div className="section-vcardbody section-home" id="section-home">
                    {/* Profile pic*/}
                    <div className="vcard-profile-pic">
                        <img style={{height: 200}} src={this.props.foto} id="profile2" alt={this.props.foto} />
                        <img style={{height: 200,transform: "scaleX(-1)"}} src={this.props.foto} id="profile1" className="profileActive" alt={this.props.foto} />
                    </div>
                    {/* /Profile pic */}
                    {/* Description */}
                    <div className="vcard-profile-description">
                        {/* Profile title */}
                        <h1 className="profile-title">Hi, i'm <span className="color1">{this.props.nama}</span></h1>
                        <h2 className="profile-subtitle">{this.props.job}</h2>
                        {/* /Profile Title */}
                        {/* Description Text */}
                        <hr className="hr1" />
                        <div className="vcard-profile-description-text">
                            <p>{this.props.about}</p>
                        </div>
                        {/*/ Description Text */}
                        {/* Description feature */}
                        <div className="vcard-profile-description-feature">
                            {/* item */}
                            <div className="vcard-profile-description-ft-item">
                                <p>Email :  {this.props.email} / Phone {this.props.phone}</p>
                            </div>
                            {/* item */}
                        </div>
                        {/* /Description feature */}
                    </div>
                    {/* /Description */}
                    {/* Footer */}
                    <div className="vcard-footer">
                        {/* Social Icons */}
                        <div className="footer-social-icons">
                            <a href={this.props.instagram} target="blank"><i className="fa fa-instagram" /></a>
                            <a href={this.props.facebook} target="blank"><i className="fa fa-facebook" /></a>
                            <a href={this.props.linkedin} target="blank"><i className="fa fa-linkedin" /></a>
                            <a href={this.props.youtube} target="blank"><i className="fa fa-youtube" /></a>
                        </div>
                        {/* /Social Icons */}
                    </div>
                </div>
                {/* /SECTION: vCard Body  */}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);