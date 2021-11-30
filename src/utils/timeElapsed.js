export const timeElapsed = (start) => {
	const millis = Date.now() - Date.parse(start);

	// days minutes hours seconds since start
	const years = Math.floor(millis / (1000 * 60 * 60 * 24 * 365));
	const days = Math.floor(millis / (1000 * 60 * 60 * 24));
	const hours = Math.floor((millis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((millis % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((millis % (1000 * 60)) / 1000);

	return years > 0
		? `${years} year`
		: days > 0
		? `${days} days`
		: hours > 0
		? `${hours} hours`
		: minutes > 0
		? `${minutes} minutes`
		: seconds > 0
		? `just now`
		: `just now`;
};
