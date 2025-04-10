# Hello World for StartOS

## Container init sequence

1. init store (initial install only)
1. preInstall (initial install only)
1. setServiceInterfaces
1. actions.update
1. store.exposeForDependents
1. setDependencies
1. postInstall (initial install only)
1. migrate (update only)
