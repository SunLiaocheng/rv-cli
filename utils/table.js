const Table = require('cli-table')

const table = new Table({
  head: ['Frame Type', 'Template Name/description'],
  chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
         , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
         , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
         , 'right': '║' , 'right-mid': '╢' , 'middle': '│' },
  style: {
    head: ['green']
  }
})

function listTable (tplList) {
  tplList.forEach(el => (table.push(el)))
  console.log(table.toString())
}

exports.listTable = listTable
