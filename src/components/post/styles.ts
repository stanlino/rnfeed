import styled from "styled-components/native"
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  padding: 16px;
  flex-direction: row;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 8px;
`

export const Content = styled.View`
  flex: 1;
  padding: 0 8px;
`

export const Header = styled.View`
  min-height: 40px;
  justify-content: flex-start;
  margin-bottom: 8px;
`

export const User = {
  Container: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  Name: styled.Text`
    font-weight: bold;
    margin-right: 4px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
  `,
  Username: styled.Text`
    color: ${({ theme }) => theme.colors.disabled};
    font-size: 14px;
  `,
}

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`

export const Image = styled.Image`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
`

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Action = {
  Container: styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 12px;
    flex: 1;
  `,
  Icon: styled(Feather)`
    margin-right: 4px;
    font-size: 18px;
    color: #777;
  `,
  Name: styled.Text`
    color: #777;
    font-size: 13px;
  `,
}
