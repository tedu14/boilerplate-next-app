module.exports = (plop) => {
	// create your generators here
	plop.setGenerator('component', {
	  description: 'Create a component',
	  prompts: [
		{
		  type: 'input',
		  name: 'name',
		  message: 'What is your component name?'
		}
	  ],
	  actions: [
		{
		  type: 'add',
		  path: '../src/components/{{pascalCase name}}/index.tsx',
		  templateFile: 'templates/component/Component.tsx.hbs'
		},
		{
		  type: 'add',
		  path: '../src/components/{{pascalCase name}}/styles.ts',
		  templateFile: 'templates/component/styles.ts.hbs'
		},
		{
		  type: 'add',
		  path: '../src/components/{{pascalCase name}}/stories.tsx',
		  templateFile: 'templates/component/stories.tsx.hbs'
		},
		{
		  type: 'add',
		  path: '../src/components/{{pascalCase name}}/test.tsx',
		  templateFile: 'templates/component/test.tsx.hbs'
		}
	  ]
	})
  }
