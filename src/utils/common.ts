export const sleep = async (timeout = 2000): Promise<void> =>
  new Promise((resolve) =>
    // eslint-disable-next-line no-promise-executor-return
    setTimeout(() => {
      resolve()
    }, timeout),
  )

export const delay = (func: () => void, timeout = 300): void => {
  setTimeout(() => {
    func()
  }, timeout)
}

// handle: TypeError: window.matchMedia is not a function
// detail: https://github.com/ant-design/ant-design/issues/21096
export const handleMatchMedia = (): void => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
}
