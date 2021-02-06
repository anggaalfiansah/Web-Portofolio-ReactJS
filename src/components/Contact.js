import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        map: state.contact.map,
        alamat: state.contact.alamat,
        phone: state.contact.phone,
        email: state.contact.email
    }
}

class Contact extends Component {
    render() {
        return (
            <div>
                {/* SECTION: CONTACT*/}
                <div className="section-vcardbody section-page" id="page-contact">
                    <div className="section-contact">
                        {/* Section title */}
                        <h2 className="section-title">Contact</h2>
                        {/* /Section title */}
                        <div className="map">
                            <div className="map-overlay" />
                            <iframe title="map" src={this.props.map} height={250} style={{ border: 0 }} allowFullScreen />
                        </div>
                        {/* Contact infos */}
                        <div className="contact-infos">
                            <h4 className="contact-subtitle-1"><i className="fa fa-map" />&nbsp;   Address</h4>
                            <p>{this.props.alamat}</p>
                            <h4 className="contact-subtitle-1"><i className="fa fa-phone-square" />&nbsp; Phone</h4>
                            <p>{this.props.phone}</p>
                            <h4 className="contact-subtitle-1"><i className="fa fa-envelope" />&nbsp; Mail</h4>
                            <p>{this.props.email}</p>
                        </div>
                        {/* /Contact infos */}
                        {/* Contact form */}
                        <h4 className="contact-subtitle-1"><i className="fa fa-paper-plane-o" />&nbsp; Send Me a Message</h4>
                        <form id="contactForm" method="post" className="form">
                            {/* Form Field */}
                            <div className="form-group">
                                <input className="form-control required" id="name" name="name" placeholder="Name" type="text" required />
                            </div>
                            {/* /Form Field */}
                            {/* Form Field */}
                            <div className="form-group">
                                <input className="form-control required" id="email" name="email" placeholder="Email" type="email" required />
                            </div>
                            {/* /Form Field */}
                            {/* Form Field */}
                            <div className="form-group">
                                <input className="form-control required" id="subject" type="text" name="subject" placeholder="Subject" required />
                            </div>
                            {/* /Form Field */}
                            {/* Form Field */}
                            <div className="form-group">
                                <textarea className="form-control required" id="message" name="message" placeholder="Message" rows={5} required defaultValue={""} />
                            </div>
                            {/* /Form Field */}
                            {/* Form Field */}
                            <div className="form-group">
                                <input type="submit" className="btn btn-default form-send" defaultValue="Send!" />
                            </div>
                            {/* /Form Field */}
                        </form>
                        {/* /Contact Form */}
                    </div>
                </div>
                {/* /SECTION: CONTACT  */}

            </div>
        );
    }
}

export default connect(mapStateToProps)(Contact);