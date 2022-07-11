import React from 'react';
import { BsCheckSquare } from "react-icons/bs";
import { SiExpress, SiMysql, SiMongodb } from "react-icons/si";
import { FaPhp, FaSymfony, FaLaravel } from "react-icons/fa";

const BackEnd = () => {
    return (
        <div className="skills-back-end">
            <h3>Développement back-end</h3>
            <div className="skills-content">
                <div className="content-1">
                    <article className='skills-detailS'>
                        <BsCheckSquare />
                        <h4>PHP <FaPhp /></h4>
                    </article>
                    <article className='skills-detailS'>
                        <BsCheckSquare />
                        <h4>Symfony <FaSymfony /></h4>
                    </article>
                    <article className='skills-detailS'>
                        <BsCheckSquare />
                        <h4>Laravel <FaLaravel /></h4>
                    </article>
                </div>
                <div className="content-2">
                    <article className='skills-detailS'>
                        <BsCheckSquare />
                        <h4>MYSQL <SiMysql /></h4>
                    </article>
                    <article className='skills-detailS'>
                        <BsCheckSquare />
                        <h4>MongoDB <SiMongodb /></h4>
                    </article>
                    <article className='skills-detailS'>
                        <BsCheckSquare />
                        <h4>Express <SiExpress /></h4>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default BackEnd;