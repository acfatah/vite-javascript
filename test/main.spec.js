import { describe, expect, it, vi } from 'vitest'

describe('example', () => {
  it('should print hello world', async () => {
    const consoleSpy = vi.spyOn(console, 'log')

    await import('../src/main.js')
    expect(consoleSpy).toHaveBeenCalledWith('Hello, World!')

    consoleSpy.mockRestore()
  })
})
