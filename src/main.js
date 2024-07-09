import process from 'node:process'
import chalk from 'chalk'
import clear from 'clear'
import { Spinner } from 'clui'
import { banner } from './banner'
import { askEmailPermission, askForName } from './prompt'

// Read more about chalk at https://github.com/chalk/chalk
// Read more about clui at https://github.com/nathanpeck/clui

async function main() {
  clear()
  banner()

  let answer
  try {
    answer = {
      name: await askForName(),
      email: await askEmailPermission(),
    }
  }
  catch (error) {
    process.stdout.write('\nSee ya...\n')
    process.exit(0)
  }

  try {
    await run(answer)
  }
  catch (error) {
    process.stderr.write(
      chalk.red(error),
    )

    return process.exit(1)
  }
}

async function run(answer) {
  await simulateLoading()
  process.stdout.write(
    chalk.magenta(`\nHello, ${answer.name}!`, '\n'),
  )

  console.group('\nInput Value')
  console.log(answer)
  console.groupEnd()
}

async function simulateLoading() {
  const status = new Spinner('Example of spinner...')

  status.start()
  await new Promise(resolve => setTimeout(resolve, 1500))
  status.stop()
}

main()
