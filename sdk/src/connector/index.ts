export type { TokenSet, ShopeeConnectorConfig, ShopeeConnectorScope } from './types'
export type { TokenStore } from './token-store'
export { InMemoryTokenStore } from './token-store'
export { ShopeeConnector } from './connector'
import type { ShopeeConnectorConfig } from './types'
import { ShopeeConnector } from './connector'

/** Factory: buat ShopeeConnector untuk satu kredensial partner. */
export function createShopeeConnector(config: ShopeeConnectorConfig): ShopeeConnector {
  return new ShopeeConnector(config)
}