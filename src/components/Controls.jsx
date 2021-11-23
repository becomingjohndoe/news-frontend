import { useState } from "react";

export default function Controls() {
	// search and filter controls
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("all");

	// handle search input
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	// handle filter input
	const handleFilter = (e) => {
		setFilter(e.target.value);
	};

	return (
		<div className="controls">
			<input
				type="text"
				placeholder="Search"
				value={search}
				onChange={handleSearch}
			/>
			<select value={filter} onChange={handleFilter}>
				<option value="all">All</option>
				<option value="active">Active</option>
				<option value="completed">Completed</option>
			</select>
		</div>
	);
}
