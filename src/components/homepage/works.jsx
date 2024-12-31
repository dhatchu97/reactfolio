import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./fb.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Bharathidasan University</div>
							<div className="work-subtitle">
								BTECH - Computer science engineering.
							</div>
							<div className="work-duration">2020 - 2024</div>
						</div>

						<div className="work">
							<img
								src="./fb.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Freelancing</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
