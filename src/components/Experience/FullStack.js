import React from 'react';
import { BsCheckSquare } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const FullStack = () => {
    return (
        <div className="skills-full-stack">
            <h3>Développment Fullstack</h3>
            <div className="skills-content">
                <div className="content-1">
                    <article className='skills-detailS'>
                        <BsCheckSquare />
                        <h4>Mongodb <SiMongodb /></h4>
                    </article>
                    <article className='skills-detailS'>
                        <BsCheckSquare />
                        <h4>Express <SiExpress /></h4>
                    </article>
                    <div className="content-1">
                        <article className='skills-detailS'>
                            <BsCheckSquare />
                            <h4>React <FaReact /></h4>
                        </article>
                        <article className='skills-detailS'>
                            <BsCheckSquare />
                            <h4>NodeJs <FaNodeJs /></h4>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullStack;