import process from 'node:process'
import chalk from 'chalk'
import figlet from 'figlet'
import data from '../data/text.json'

// Read more about figlet at https://github.com/patorjk/figlet.js
export async function banner() {
  process.stdout.write(
    chalk.yellow(
      figlet.textSync(data.text, { horizontalLayout: 'full' }),
      '\n',
    ),
  )
}
