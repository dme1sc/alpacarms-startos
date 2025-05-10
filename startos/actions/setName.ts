import { sdk } from '../sdk'
import { yamlFile } from '../file-models/config.yml'
import { getSecretPhrase } from '../utils'
import { store } from '../file-models/store.json'

const { InputSpec, Value } = sdk

export const inputSpec = InputSpec.of({
  name: Value.text({
    name: 'Name',
    description:
      'When you launch the Hello World UI, it will display "Hello [Name]"',
    required: true,
    default: 'World',
  }),
})

export const setName = sdk.Action.withInput(
  // id
  'set-name',

  // metadata
  async ({ effects }) => ({
    name: 'Set Name',
    description: 'Set your name so Hello World can say hello to you',
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  // form input specification
  inputSpec,

  // optionally pre-fill the input form
  async ({ effects }) => yamlFile.read().const(effects),

  // the execution function
  async ({ effects, input }) => {
    const yaml = await yamlFile.read().const(effects)

    if (yaml?.name === input.name) return

    await Promise.all([
      yamlFile.merge(effects, input),
      store.merge(effects, {
        secretPhrase: getSecretPhrase(input.name),
        nameLastUpdatedAt: new Date().toISOString(),
      }),
    ])
  },
)
