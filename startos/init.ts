import { sdk } from './sdk'
import { setDependencies } from './dependencies'
import { setInterfaces } from './interfaces'
import { versions } from './versions'
import { actions } from './actions'
import { getSecretPhrase } from './utils'
import { yamlFile } from './file-models/config.yml'
import { store } from './file-models/store.json'
import { showSecretPhrase } from './actions/showSecretPhrase'

// **** PreInstall ****
const preInstall = sdk.setupPreInstall(async ({ effects }) => {
  const name = 'World'

  await Promise.all([
    yamlFile.write(effects, { name }),
    store.write(effects, {
      secretPhrase: getSecretPhrase(name),
      nameLastUpdatedAt: null,
    }),
  ])
})

// **** PostInstall ****
const postInstall = sdk.setupPostInstall(async ({ effects }) => {
  await sdk.action.requestOwn(effects, showSecretPhrase, 'important', {
    reason: 'Check out your secret phrase!',
  })
})

// **** Uninstall ****
const uninstall = sdk.setupUninstall(async ({ effects }) => {})

/**
 * Plumbing. DO NOT EDIT.
 */
export const { packageInit, packageUninit, containerInit } = sdk.setupInit(
  versions,
  preInstall,
  postInstall,
  uninstall,
  setInterfaces,
  setDependencies,
  actions,
)
