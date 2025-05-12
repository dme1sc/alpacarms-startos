import { sdk } from '../sdk'
import { yamlFile } from '../file-models/config.yml'
import { store } from '../file-models/store.json'
import { setName } from './setName'

export const nameToLogs = sdk.Action.withoutInput(
  // id
  'name-to-logs',

  // metadata
  async ({ effects }) => ({
    name: 'Print name to Logs',
    description: 'Prints "Hello [Name]" to the service logs.',
    warning: null,
    allowedStatuses: 'only-running',
    group: null,
    visibility: (await store.read((s) => s.nameLastUpdatedAt).const(effects))
      ? 'enabled'
      : {
          disabled: 'Cannot print name to logs until you update your name.',
        },
  }),

  // the execution function
  async ({ effects }) => {
    const name = (await yamlFile.read().const(effects))!.name
    console.info(`Hello ${name}`)

    await sdk.action.requestOwn(effects, setName, 'important')

    return {
      version: '1',
      title: 'Success',
      message: `"Hello ${name}" has been logged. Open the Hello World service logs to view it.`,
      result: null,
    }
  },
)
