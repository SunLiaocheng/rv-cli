const inquirer = require('inquirer')
const git = require('git-clone')
const path = require('path')
const Table = require('cli-table')
const exec = require('child_process').exec;
// const rm = require('rimraf')
const fs = require('fs-extra')
const ora = require('ora')
const { listTable } = require(`${__dirname}/../utils/table`)
const tplConfig = require(`${__dirname}/../templates`)
  
// inquirer.registerPrompt('selectLine', require('inquirer-select-line'));

const choicesTpl = [
  // {
  //   type: 'list',
  //   message: 'Do you want create web or wap template?',
  //   name: 'tpl',
  //   choices: ['web', 'wap'],
  // },
  {
    type: 'list',
    message: 'Select the appropriate template:',
    name: 'frame',
    choices: ['React-mobx', 'Vue', 'React-redux'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'Project name:',
    validate (val) {
      const reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/
      const files = fs.readdirSync(process.cwd())
      let count = 0
      if (!val) {
        return 'Can not be empty'
      }
      files.some((el) => {
        if (el === val) {
          count++
          return
        }
      })
      if (count) {
        count = 0
        return `the name of "${val}" is already defind`
      }
      if (reg.test(val)) {
        return 'please input English'
      }
      return true
    }
  }
]



module.exports = inquirer.prompt(choicesTpl).then((anwsers) => {
  const spinner = ora('Downloading template...')

  spinner.start()
  spinner.info(`cwd: ${process.cwd()}`)
  spinner.info(`Getting template...`)
  console.log(tplConfig[anwsers.frame])
  try {
    git(tplConfig[anwsers.frame], anwsers.name)
  } catch(err) {
    spinner.fail(err)
  }
  
  fs.remove(`${process.cwd()}/${anwsers.name}/.git`, (err) => {
    err ? spinner.fail(err) : (() => {
      listTable([[anwsers.frame, anwsers.name]])
      spinner.succeed('New project has been initialized successfully!')
    })()
    process.exit()
  });
})
