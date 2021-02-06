import React, { Component } from 'react';
import Menu from './Menu';
import Home from './Home';
import Resume from './Resume';
import Skill from './Skill';
import Portofolio from './Portofolio';
import Blog from './Blog';
import Contact from './Contact';
import BlogIsi from './BlogIsi';

class Body extends Component {
    render() {
        return (
                <section id="body">
                    <div className="container">
                        <Menu />
                        <Home />
                        <Resume />
                        <Skill />
                        <Portofolio />
                        <Blog />
                        <BlogIsi />
                        <Contact />
                    </div>
                </section>
        );
    }
}

export default Body;