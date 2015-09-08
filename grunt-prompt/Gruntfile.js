var chalk = require('chalk');

// questions: [
//   {
//     config: 'config.name', // arbitrary name or config for any other grunt task
//     type: '<question type>', // list, checkbox, confirm, input, password
//     message: 'String|function()', // Question to ask the user, function needs to return a string,
//     default: 'value', // default value if nothing is entered
//     choices: 'Array|function(answers)',
//     validate: function(value), // return true if valid, error message if invalid. works only with type:input 
//     filter:  function(value), // modify the answer
//     when: function(answers) // only ask this question when this function returns true
//   }
// ]

module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        bannerCopyright: 'Copyright <%= grunt.template.today(\'yyyy\') %>, <%= pkg.author %> // The MIT License (MIT)',
        prompt: {
            examples: {
                options: {
                    questions: [
                        {
                            config: 'first-example',
                            type: 'checkbox',
                            message: 'Choose items through checkbox.',
                            choices: [
                            {
                                name: 'Animal',
                                checked: false,
                                value: 'monkey'
                            },
                            {
                                name: 'Car',
                                checked: false,
                                value: 'bmw'
                            }, 
                            {
                                name: 'Phone',
                                checked: true,
                                value: 'nokia'
                            }, 
                            {
                                name: 'Processor',
                                checked: false,
                                value: 'intel'
                            }],
                            default: ['bmw', 'intel'],
                            filter: function(value) {
                                return value;
                            }
                        }, 
                        {
                            config: 'second-example',
                            type: 'list',
                            message: 'Choose items through list.',
                            choices: [
                            {
                                name: chalk.white('White'),
                                value: 'white'
                            }, 
                            {
                                name: chalk.grey('Grey'),
                                value: 'grey'
                            }, 
                            {
                                name: chalk.blue('Blue'),
                                value: 'blue'
                            }, 
                            {
                                name: chalk.cyan('Cyan'),
                                value: 'cyan'
                            }],
                            default: 'blue',
                            filter: function(str) {
                                return chalk.stripColor(str.toLowerCase());
                            }
                        }, 
                        {
                            config: 'third-example',
                            type: 'confirm',
                            message: 'Choose yes or no'
                        },
                        {
                            config: 'fourth-example',
                            type: 'input',
                            message: 'Text Input',
                            validate: function(value) {
                                return true;
                            }
                        },
                        {
                            config: 'final-example',
                            type: 'password',
                            message: 'Password Input',
                            validate: function(value) {

                                if (value.length < 5) {
                                    return 'Password should be at least 5 characters.';
                                }
                                return true;
                            }
                        }
                    ],
                    then: function(allAnswers) {
                        console.log(allAnswers);
                    }
                }

            }
        }
    });

    grunt.loadNpmTasks('grunt-prompt');

    // Run task as -
    // grunt prompt
    // grunt prompt:examples
};