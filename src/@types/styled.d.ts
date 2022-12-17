import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      shape: string
      background: string
      disabled: string
    }
  }
}

