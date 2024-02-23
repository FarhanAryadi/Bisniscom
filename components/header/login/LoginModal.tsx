'use client';

import React, { useState } from 'react';
import UpdateModal from './UpdateModal';

const LoginModal = () => {
	// state variables for showing the login form and the modal
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [showModal, setShowModal] = useState(false);

	// function to handle form submission
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// Prevent the default form submission behavior
		event.preventDefault();
		setShowModal(true);
	};

	return (
		<div className="relative">
			{/* Button to toggle the login form (start) */}
			<button
				className="btn btn-outline text-navybig"
				onClick={() => setShowLoginForm(!showLoginForm)}
			>
				Login
			</button>
			{/* Button to toggle the login form (end) */}

			{/* Login form shown when showLoginForm is true (start) */}
			{showLoginForm && (
				<form
					className="absolute right-0 bg-white p-2 shadow-lg z-10 mt-2 rounded-md"
					onSubmit={handleSubmit}
				>
					<p className="text-black">Email</p>
					<input className="px-2 my-2" type="text" placeholder="Username" />
					<p className="text-black">Password</p>
					<input className="px-2 my-2" type="password" placeholder="Password" />
					<button className="btn btn-info my-2 mx-auto block" type="submit">
						Submit
					</button>
				</form>
			)}
			{/* Login form shown when showLoginForm is true (end) */}

			{/* Modal shown when showModal is true */}
			{showModal && <UpdateModal />}
		</div>
	);
};

export default LoginModal;
