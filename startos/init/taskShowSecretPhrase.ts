import { showSecretPhrase } from '../actions/showSecretPhrase'
import { sdk } from '../sdk'

export const taskShowSecretPhrase = sdk.setupOnInstall(async (effects) => {
  await sdk.action.createOwnTask(effects, showSecretPhrase, 'important', {
    reason: 'Check out your secret phrase!',
  })
})
