export default function Controls({ setSortBy }) {
	// search and filter controls

	// handle filter input
	const handleFilter = (e) => {
		setSortBy(e.target.name);
	};

	return (
		<div className="controls">
			<button
				name="comment_count"
				className="new-button btn active"
				onClick={handleFilter}
			>
				<i className="fas fa-fire-alt"></i> Hot
			</button>
			<button
				name="created_at"
				className="new-button btn active"
				onClick={handleFilter}
			>
				<i className="fas fa-star"></i> New
			</button>
			<button
				name="votes"
				className="new-button btn active"
				onClick={handleFilter}
			>
				<i className="fas fa-level-up-alt"></i> Top
			</button>
		</div>
	);
}
