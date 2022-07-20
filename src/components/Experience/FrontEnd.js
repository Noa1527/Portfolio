import React from 'react';
import { BsCheckSquare } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap, FaReact, FaSass } from "react-icons/fa";

const FrontEnd = () => {
	return (
		<div className="skills-front-end">
			<h3>Développement front-end</h3>
			<div className="skills-content">
				<div className="content-1">
					<article className='skills-detailS'>
						<BsCheckSquare />
						<h4>HTML5 <AiOutlineHtml5 /></h4>
					</article>
					<article className='skills-detailS'>
						<BsCheckSquare />
						<h4>CSS3 <IoLogoCss3 /></h4>
					</article>
					<article className='skills-detailS'>
						<BsCheckSquare />
						<h4>JavaScript <TbBrandJavascript /></h4>
					</article>
				</div>
				<div className="content-2">
					<article className='skills-detailS'>
						<BsCheckSquare />
						<h4>Bootstrap<FaBootstrap /></h4>
					</article>
					<article className='skills-detailS'>
						<BsCheckSquare />
						<h4>React et react-native <FaReact /></h4>
					</article>
					<article className='skills-detailS'>
						<BsCheckSquare />
						<h4>scss <FaSass /></h4>
					</article>
				</div>
			</div>
		</div>
	);
};

export default FrontEnd;