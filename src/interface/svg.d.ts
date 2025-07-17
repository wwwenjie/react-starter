declare module '*.svg' {
  // eslint-disable-next-line ts/no-require-imports
  import React = require('react')

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
}
