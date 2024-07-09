import { confirm, input } from '@inquirer/prompts'

// Read more about inquirer at https://github.com/SBoudrias/Inquirer.js
// Another alternative is using clack, https://github.com/bombshell-dev/clack/tree/main

export async function askForName() {
  return await input({ message: 'What is your name?' })
}

export async function askEmailPermission() {
  return await confirm({ message: 'Would you like to receive email updates?' })
}
