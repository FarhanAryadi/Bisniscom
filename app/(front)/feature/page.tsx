import React from 'react';

const FeaturePage = () => {
	return (
		<>
			<article className="mx-32">
				<div className="flex items-center justify-start py-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6"
					>
						<path
							fillRule="evenodd"
							d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
							clipRule="evenodd"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6"
					>
						<path
							fillRule="evenodd"
							d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
							clipRule="evenodd"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6"
					>
						<path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6"
					>
						<path
							fillRule="evenodd"
							d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div>
					<h1 className="text-7xl">Display 1</h1>
					<h2 className="text-6xl">Display 2</h2>
					<h3 className="text-5xl">Display 3</h3>
					<h4 className="text-4xl">Display 4</h4>
				</div>
				<div className="flex justify-center my-5">
					<p>
						Tailwind removes all of the default browser styling from paragraphs,
						headings, lists and more.
					</p>
				</div>
				<div className="flex justify-end">
					<p>
						We get lots of <mark> complaints about</mark> it actually
					</p>
				</div>
				<div className="flex justify-end">
					<p className="line-through">
						This ends up being really useful for building application UIs
					</p>
				</div>
				<div className="flex justify-end">
					<p className="line-through">
						This ends up being really useful for building application UIs
					</p>
				</div>
				<div className="flex justify-end">
					<p className="underline">
						This ends up being really useful for building application UIs
					</p>
				</div>
				<div className="flex justify-end">
					<p className="underline">
						This ends up being really useful for building application UIs
					</p>
				</div>
				<div className="flex justify-end">
					<p className="text-xs">
						This ends up being really useful for building application UIs
					</p>
				</div>
				<div className="flex justify-end">
					<p className="font-bold">
						This ends up being really useful for building application UIs
					</p>
				</div>
				<div className="flex justify-end">
					<p className="italic">
						This ends up being really useful for building application UIs
					</p>
				</div>
			</article>
		</>
	);
};

export default FeaturePage;
