import { setupManifest } from '@start9labs/start-sdk'
import { SDKImageInputSpec } from '@start9labs/start-sdk/base/lib/types/ManifestTypes'

const BUILD = process.env.BUILD || ''

const architectures =
  BUILD === 'x86_64' || BUILD === 'aarch64' ? [BUILD] : ['x86_64', 'aarch64']

export const manifest = setupManifest({
  id: 'alpacarms',
  title: 'Alpacarms',
  license: 'MIT', // @TODO
  wrapperRepo: 'https://github.com/dme1sc/alpacarms-wrapper',
  upstreamRepo: 'https://github.com/dme1sc/alpacarms',
  supportSite: 'https://github.com/dme1sc/alpacarms',
  marketingSite: 'https://github.com/dme1sc/alpacarms',
  donationUrl: 'https://github.com/dme1sc/alpacarms',
  docsUrl:
    'https://github.com/dme1sc/alpacarms-startos/blob/master/instructions.md',
  description: {
    short: 'Retail Management System and Point of Sale',
    long: 'AlpacaRMS is a web-based retail management system and point of sale system.  The application is written in PHP, javascript and uses MariaDB(mysql) as data storage back-end. The interface is simple but intuitive.',
  },
  volumes: ['main'],
  images: {
    alpacarms: {
      source: { dockerTag: 'msimbc/alpacarms:alpacarms2.1.11' },
      arch: architectures,
    } as SDKImageInputSpec,
  },
  hardwareRequirements: {
    arch: architectures,
  },
  alerts: {
    install: 'Optional alert to display before installing the service',
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
