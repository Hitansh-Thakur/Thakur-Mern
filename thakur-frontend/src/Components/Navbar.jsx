import { React, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { gsap, Flip } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
	gsap.registerPlugin(Flip);
	const location = useLocation();
	const indicatorRef = useRef(null);
	const links = useRef([]);

	useEffect(() => {
		// Get the current active link based on location
		const activeIndex = links.current.findIndex(
			(link) =>
				link.querySelector("a").getAttribute("href") ===
				location.pathname
		);

		if (activeIndex !== -1) {
			moveIndicator(links.current[activeIndex]);
		}

        // cleanup animations
        return () => {
            gsap.killTweensOf(indicatorRef.current);
            links.current.forEach((link) => {
                gsap.killTweensOf(link);
            });
        }
        
	}, [location]);

	const moveIndicator = (target) => {
		// Get the initial state
		const state = Flip.getState(indicatorRef.current);

		// Move the indicator to the new parent
		target.insertBefore(indicatorRef.current, target.firstChild);

		// Animate from the initial state to the final state
		Flip.from(state, {
			duration: 0.5,
			ease: "elastic.out(1.1, 0.8)",
		});
	};

	return (
		<>
			<div className="flex absolute w-full items-center justify-between py-4 px-14 bg-transparent backdrop-blur-md">
				<div>
					<img
						className="w-[12rem]"
						src={logo}
						alt="Thakur Industries"
					/>
				</div>
				<ul className="flex gap-10 text-xl font-semibold text-orange-400">
					<li
						ref={(el) => {
							links.current[0] = el;
						}}
						className="hover:text-orange-500 link relative"
					>
						<span
							ref={indicatorRef}
							className="absolute top-[-8px] h-[2px] w-1/2 bg-orange-500 block rounded-lg"
						/>
						<NavLink to="/">Home</NavLink>
					</li>
					<li
						ref={(el) => {
							links.current[2] = el;
						}}
						className="hover:text-orange-500 link relative"
					>
						<NavLink to="/products">Products</NavLink>
					</li>
					<li
						ref={(el) => {
							links.current[1] = el;
						}}
						className="hover:text-orange-500 link relative"
					>
						<NavLink to="/about">About</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
