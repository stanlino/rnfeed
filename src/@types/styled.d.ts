import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      shape: string
      text: string
      background: string
      disabled: string
    }
  }
}

