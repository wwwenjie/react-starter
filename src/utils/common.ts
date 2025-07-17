export const sleep = async (timeout = 2000): Promise<void> =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve()
    }, timeout),
  )

export const delay = (func: () => void, timeout = 300): void => {
  setTimeout(() => {
    func()
  }, timeout)
}
