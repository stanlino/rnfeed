import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

const BORDER_WIDTH = 0.2

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: ${BORDER_WIDTH}px;
  border-bottom-color: ${({ theme }) => theme.colors.disabled};
`

export const HeaderAction = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-color: ${({ theme }) => theme.colors.disabled};
  border-width: ${BORDER_WIDTH}px;
  border-radius: 20px;
`

export const HeaderActionIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`

export const ItemSeparator = styled.View`
  height: 0.3px;
  background-color: ${({ theme }) => theme.colors.disabled};
`