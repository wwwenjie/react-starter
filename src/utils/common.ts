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
