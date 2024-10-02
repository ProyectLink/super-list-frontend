import { Link } from "react-router-dom";
import { apps, otherLinks, social, superlist } from "./footer-data";

export function Footer() {
	return (
		<footer>
			<div className="pt-[100px] pb-[50px] bg-[#20202e] text-white">
				<div className="mb-16 sm:px-[100px] px-5 py-[65px] flex lg:flex-row flex-col lg:gap-y-0 gap-y-5 justify-center lg:max-w-[1250px] max-w-[500px] mx-auto">
					<div className="flex flex-1">
						<div className="flex flex-col flex-1 items-stretch gap-1.5">
							<p className="text-lg font-bold mb-2.5 text-[#F84F39]">
								Superlist
							</p>
							{superlist.map(({ label, href }) => (
								<Link
									key={label}
									to={href}
									className="text-[15px] min-h-[30px] flex items-center justify-start"
								>
									{label}
								</Link>
							))}
						</div>
						<div className="flex flex-col flex-1 items-stretch gap-1.5">
							<p className="w-full mb-2.5 min-h-[30px]" />
							{otherLinks.map(({ label, href }) => (
								<Link
									key={label}
									to={href}
									className="text-[15px] min-h-[30px] flex items-center justify-start"
								>
									{label}
								</Link>
							))}
						</div>
					</div>
					<div className="flex flex-1">
						<div className="flex flex-col flex-1 items-stretch gap-1.5">
							<p className="text-lg font-bold mb-2.5 text-[#2590f2]">App</p>
							{apps.map(({ label, href }) => (
								<Link
									key={label}
									to={href}
									className="text-[15px] min-h-[30px] flex items-center justify-start"
								>
									{label}
								</Link>
							))}
						</div>
						<div className="flex flex-col flex-1 items-stretch gap-1.5">
							<p className="text-lg font-bold mb-2.5 text-[#2a966f]">Social</p>
							{social.map(({ label, href }) => (
								<Link
									key={label}
									to={href}
									className="text-[15px] min-h-[30px] flex items-center justify-start"
								>
									{label}
								</Link>
							))}
						</div>
					</div>
					<div className="lg:max-w-[230px] max-w-full">
						<div className="flex flex-col flex-1 items-stretch gap-1.5">
							<p className="text-lg font-bold mb-2.5 text-[#8f89fa]">Updates</p>
							<div className="rounded-2xl pt-4 pl-5 lg:pr-[50px] pr-5 pb-5 bg-[#2c2c3d] w-full hover:scale-105 duration-300">
								<p className="text-[#f84f39] text-[30px] mb-4 font-semibold">
									Pick Your <br className="lg:block hidden" /> Calendar
								</p>
								<span className="bg-[#f84f39] text-white text-sm font-semibold px-[14px] py-[5px] rounded-full">
									v 1.16.0
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="min-h-[50px] flex items-end justify-center">
					<p className="text-center text-[#696f81] hover:text-white text-sm">
						ⓒ Superlist 2024
					</p>
				</div>
			</div>
		</footer>
	);
}
