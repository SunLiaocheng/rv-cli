# RV_CLI
A simple CLI for React and Vue.

# Installation
```
npm install rv-cli -g
```

# Usage
```
  Usage: $ rv <command>


  Commands:

    list|l     List all the templates
    init|i     Create a new project

  Example:

		$ rv init
```

# Commands

### list | l
It shows you the templates list.
```
$ scion list

┌────────────────┬─────────────────────────────┐
│ Frame Type     │ Template Name/description   │
├────────────────┼─────────────────────────────┤
│ React-redux    │ react+router+redux 		   	 │
├────────────────┼─────────────────────────────┤
│ Vue            │ vue+router+vuex 					   │
├────────────────┼─────────────────────────────┤
│ React-mobx     │ react+router+mobx	  			 │
└────────────────┴─────────────────────────────┘
```

### init | i
Install a new template!
```
$ scion init

? Select the appropriate template: React-mobx
	❯ React-mobx
	  Vue
	  React-redux
? Project name: my-project
⠹ Downloading template...

✔New project has been initialized successfully!
```

# License
MIT.









