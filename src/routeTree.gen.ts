/* eslint-disable */
// @ts-nocheck

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as CarteiraRouteImport } from './routes/carteira'
import { Route as ConvivenciaRouteImport } from './routes/convivencia'
import { Route as ExplorarRouteImport } from './routes/explorar'
import { Route as OferecerRouteImport } from './routes/oferecer'
import { Route as PerfilRouteImport } from './routes/perfil'
import { Route as TrocasRouteImport } from './routes/trocas'
import { Route as ServicoIdRouteImport } from './routes/servico.$id'

const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const CarteiraRoute = CarteiraRouteImport.update({ id: '/carteira', path: '/carteira', getParentRoute: () => rootRouteImport } as any)
const ConvivenciaRoute = ConvivenciaRouteImport.update({ id: '/convivencia', path: '/convivencia', getParentRoute: () => rootRouteImport } as any)
const ExplorarRoute = ExplorarRouteImport.update({ id: '/explorar', path: '/explorar', getParentRoute: () => rootRouteImport } as any)
const OferecerRoute = OferecerRouteImport.update({ id: '/oferecer', path: '/oferecer', getParentRoute: () => rootRouteImport } as any)
const PerfilRoute = PerfilRouteImport.update({ id: '/perfil', path: '/perfil', getParentRoute: () => rootRouteImport } as any)
const TrocasRoute = TrocasRouteImport.update({ id: '/trocas', path: '/trocas', getParentRoute: () => rootRouteImport } as any)
const ServicoIdRoute = ServicoIdRouteImport.update({ id: '/servico/$id', path: '/servico/$id', getParentRoute: () => rootRouteImport } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/carteira': typeof CarteiraRoute
  '/convivencia': typeof ConvivenciaRoute
  '/explorar': typeof ExplorarRoute
  '/oferecer': typeof OferecerRoute
  '/perfil': typeof PerfilRoute
  '/trocas': typeof TrocasRoute
  '/servico/$id': typeof ServicoIdRoute
}
export interface FileRoutesByTo extends FileRoutesByFullPath {}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/carteira': typeof CarteiraRoute
  '/convivencia': typeof ConvivenciaRoute
  '/explorar': typeof ExplorarRoute
  '/oferecer': typeof OferecerRoute
  '/perfil': typeof PerfilRoute
  '/trocas': typeof TrocasRoute
  '/servico/$id': typeof ServicoIdRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/carteira' | '/convivencia' | '/explorar' | '/oferecer' | '/perfil' | '/trocas' | '/servico/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/carteira' | '/convivencia' | '/explorar' | '/oferecer' | '/perfil' | '/trocas' | '/servico/$id'
  id: '__root__' | '/' | '/carteira' | '/convivencia' | '/explorar' | '/oferecer' | '/perfil' | '/trocas' | '/servico/$id'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CarteiraRoute: typeof CarteiraRoute
  ConvivenciaRoute: typeof ConvivenciaRoute
  ExplorarRoute: typeof ExplorarRoute
  OferecerRoute: typeof OferecerRoute
  PerfilRoute: typeof PerfilRoute
  TrocasRoute: typeof TrocasRoute
  ServicoIdRoute: typeof ServicoIdRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': { id: '/'; path: '/'; fullPath: '/'; preLoaderRoute: typeof IndexRouteImport; parentRoute: typeof rootRouteImport }
    '/carteira': { id: '/carteira'; path: '/carteira'; fullPath: '/carteira'; preLoaderRoute: typeof CarteiraRouteImport; parentRoute: typeof rootRouteImport }
    '/convivencia': { id: '/convivencia'; path: '/convivencia'; fullPath: '/convivencia'; preLoaderRoute: typeof ConvivenciaRouteImport; parentRoute: typeof rootRouteImport }
    '/explorar': { id: '/explorar'; path: '/explorar'; fullPath: '/explorar'; preLoaderRoute: typeof ExplorarRouteImport; parentRoute: typeof rootRouteImport }
    '/oferecer': { id: '/oferecer'; path: '/oferecer'; fullPath: '/oferecer'; preLoaderRoute: typeof OferecerRouteImport; parentRoute: typeof rootRouteImport }
    '/perfil': { id: '/perfil'; path: '/perfil'; fullPath: '/perfil'; preLoaderRoute: typeof PerfilRouteImport; parentRoute: typeof rootRouteImport }
    '/trocas': { id: '/trocas'; path: '/trocas'; fullPath: '/trocas'; preLoaderRoute: typeof TrocasRouteImport; parentRoute: typeof rootRouteImport }
    '/servico/$id': { id: '/servico/$id'; path: '/servico/$id'; fullPath: '/servico/$id'; preLoaderRoute: typeof ServicoIdRouteImport; parentRoute: typeof rootRouteImport }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute,
  CarteiraRoute,
  ConvivenciaRoute,
  ExplorarRoute,
  OferecerRoute,
  PerfilRoute,
  TrocasRoute,
  ServicoIdRoute,
}

export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}
