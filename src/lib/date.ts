const formatDate = (date: Date) =>
	`${(date.getFullYear() + '').substring(2)}-${(date.getMonth() + 1 + '').padStart(2, '0')}-${(
		date.getDate() + ''
	).padStart(2, '0')}`;

export { formatDate };
