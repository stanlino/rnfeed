import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderRight = styled.View`
  flex-direction: row;
  width: 80px;
`

export const HeaderRightButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const HeaderRightIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
`

export const ItemSeparator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.disabled};
`