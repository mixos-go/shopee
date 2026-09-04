import type { TokenSet } from './types'

/**
 * Abstraksi penyimpanan token, kunci = shop/seller id.
 * Implementasi boleh sync (return nilai) atau async (return Promise).
 */
export interface TokenStore {
  get(shopId: string): Promise<TokenSet | undefined> | TokenSet | undefined
  set(shopId: string, token: TokenSet): Promise<void> | void
  delete(shopId: string): Promise<void> | void
}

export class InMemoryTokenStore implements TokenStore {
  private readonly map = new Map<string, TokenSet>()

  get(shopId: string): TokenSet | undefined {
    return this.map.get(shopId)
  }

  set(shopId: string, token: TokenSet): void {
    this.map.set(shopId, token)
  }

  delete(shopId: string): void {
    this.map.delete(shopId)
  }

  keys(): string[] {
    return [...this.map.keys()]
  }
}