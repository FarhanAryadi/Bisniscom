import React from 'react';

const UpdateModal = () => {
	return (
		<div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-50">
			{/* Form login*/}
			<div className="bg-white p-4 rounded shadow-lg">
				<form>
					<label className="label text-black">
						Name
						<input
							className="input input-bordered my-2 ml-52"
							type="text"
							placeholder="New Username"
						/>
					</label>
					<label className="label text-black">
						Password
						<input
							className="input ml-20"
							type="text"
							placeholder="New Password"
						/>
					</label>
					<label className="label text-black">
						Email
						<input
							className="input ml-20"
							type="text"
							placeholder="New Email"
						/>
					</label>
					<label className="label text-white">
						Date
						<input
							className="input ml-20 text-slate-400"
							type="date"
							placeholder="date"
						/>
					</label>
					<button className="btn btn-info mt-4 mx-2" type="submit">
						Close
					</button>
					<button className="btn btn-error mt-4 mx-2" type="submit">
						Delete
					</button>
					<button className="btn btn-success mt-4 mx-2" type="submit">
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateModal;
