const { listTable } = require(`${__dirname}/../utils/table`)
const list = [
	['react-redux', 'react+router+redux'],
	['react-mobx', 'react+mobx+redux'],
	['vue', 'vue+router+vuex']
]

module.exports = listTable(list)