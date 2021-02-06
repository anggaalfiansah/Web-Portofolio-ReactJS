import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
                {/* MAIN MENU */}
                <div className="main-menu" id="main-menu">
                    <ul className="main-menu-list">
                        <li><a href="#page-resume" className="link-home">Home</a></li>
                        <li><a href="#page-resume" className="link-page">Resume</a></li>
                        <li><a href="#page-skills" className="link-page">Skills</a></li>
                        <li><a href="#page-portfolio" className="link-page">Portfolio</a></li>
                        <li><a href="#page-blog" className="link-page">Blog</a></li>
                        <li><a href="#page-contact" className="link-page">Contact</a></li>
                    </ul>
                </div>
                {/* /MAIN MENU */}
            </div>
        );
    }
}

export default Menu;