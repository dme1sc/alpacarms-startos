import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v2_1_11_0 = VersionInfo.of({
  version: '2.1.11:0',
  releaseNotes: 'Revamped for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
