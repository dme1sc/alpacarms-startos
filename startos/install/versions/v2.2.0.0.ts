import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v2_2_0_0 = VersionInfo.of({
  version: '2.2.12:0',
  releaseNotes: 'Revamped for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {},
  }
})
