export function convertDocToObj(doc: any) {
	if (doc && doc._id) {
		doc._id = doc._id.toString();
	}
	return doc;
}
