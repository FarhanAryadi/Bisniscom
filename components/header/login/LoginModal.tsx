'use client';

import React, { useState } from 'react';
import UpdateModal from './UpdateModal';

const LoginModal = () => {
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setShowModal(true);
	};

	return (
		<div className="relative">
			<button
				className="btn btn-outline btn-warning"
				onClick={() => setShowLoginForm(!showLoginForm)}
			>
				Login
			</button>
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

			{showModal && <UpdateModal />}
		</div>
	);
};

export default LoginModal;
