import { configure } from 'log4js'
import * as logConfig from './config/log4js-config.json'
import * as packageJson from './package.json'
import { Application } from './src/application'

console.log('Loading Logger...')
const logger = configure(logConfig).getLogger('Main')

logger.debug('Setting up process...')
process.on('uncaughtException', function (error) {
  logger.fatal(error)
  process.exitCode = 1
})

process.title = packageJson.name

if (process.argv.includes('test-run')) {
  logger.warn('Argument passed to run in testing mode')

  // test here

  logger.warn('Test Loading finished.')
  logger.warn('Returning from program with exit code 0')
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(0)
}

const app = new Application()
app.exampleFunction()
