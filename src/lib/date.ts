const formatDate = (date: Date) =>
	`${(date.getFullYear() + '').substring(2)}-${date.getMonth() + 1}-${date.getMonth()}`;

export { formatDate };
