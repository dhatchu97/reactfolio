import React from "react";

function article_1() {
	return {
		date: "1 sept 2024",
		title: "Creating a VM Lab for Testing Vulnerabilities",
		description:
			"Set up a VM lab to safely test vulnerabilities and understand web application security in a controlled environment. Learn practical steps to secure your applications through hands-on testing.",
		keywords: [
			"Creating a VM lab",
			"dhatchu",
			"dhatchina moorthy N",
			"owasp vmware",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"><a href="https://github.com/dhatchu97/vulnerable-lab" className="githubb">click here for github repo.</a></div>
					<img
						src="https://www.stationx.net/wp-content/uploads/2023/02/How-to-Create-a-Virtual-Hacking-Lab-for-Pentesting.jpg"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "12 May 2024",
		title: "Step-by-Step Guide to Building Secure Web Applications with OWASP Top 10",
		description:
			"In today’s digital landscape, securing web applications is crucial. This guide breaks down the OWASP Top 10 vulnerabilities and provides actionable steps to build secure web applications.",
		style: ``,
		keywords: [
			"secure web applications",
			"owasp",
			"dhatchina G dhatchu",
			"dhatchina moorthy",
		],
		body: (
			<React.Fragment>
				<h1><a href="https://medium.com/@dhatchu9715/step-by-step-guide-to-building-secure-web-applications-with-owasp-top-10-7c603dda58f3">click to read full article</a></h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
