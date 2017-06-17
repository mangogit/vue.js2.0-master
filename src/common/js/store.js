export function saveToLocal(id, key, val) {
	let seller = window.localStorage._seller_;
	if (!seller) {
		seller = {};
		seller[id] = {};
	} else {
		seller = JSON.parse(seller);
		if (!seller[id]) {
       seller[id] = {};
		}
	}
	seller[id][key] = val;
	window.localStorage._seller_ = JSON.stringify(seller);
}

export function getFromLocal(id, key, def) {
	let seller = window.localStorage._seller_;
	if (!seller) {
		return def;
	}
	seller = JSON.parse(seller)[id];
	if (!seller) {
		return def;
	}
	let result = seller[key];
	return result || def;
};
