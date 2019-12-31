const handleProfileGet = (req, res, db) => {
	const { id } = req.params;
	db.sselect('*').from('users').where({id})
	.then(user => {
		if (user.length) {
			res.json(user[0])
		} else {
			res.status(400).json('not found')
		}
	})
	.catch(err => res.status(400).json('error getting users'))
}

module.exports = {
	handleProfileGet
}