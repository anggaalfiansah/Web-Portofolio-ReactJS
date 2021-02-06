import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        namaDepan: state.loader.namaDepan,
        namaBelakang: state.loader.namaBelakang,
        job: state.loader.job
    }
}

class Loader extends Component {
    render() {
        return (
            <div>
                {/* Page Loader */}
                < div className="loader-container" id="page-loader" >
                    <div className="loading-wrapper">
                        <div className="loader-animation" id="loader-animation">
                            <span className="loader"><span className="loader-inner" /></span>
                        </div>
                        {/* Edit With Your Name */}
                        <div className="loader-name" id="loader-name">
                            {this.props.namaDepan} <strong>{this.props.namaBelakang}</strong>
                        </div>
                        {/* /Edit With Your Name */}
                        {/* Edit With Your Job */}
                        <p className="loader-job" id="loader-job">{this.props.job}</p>
                        {/* /Edit With Your Job */}
                    </div>
                </div >
                {/* End of Page loader */}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Loader);