import { StyleSheet } from 'react-native'
import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.gray_400,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    height: 64
  },
  checkboxAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1
  },
  text: {
    marginLeft: 10,
    color: theme.gray_100,
    fontSize: 16
  },
  textChecked: {
    marginLeft: 10,
    color: theme.gray_300,
    fontSize: 16,
    textDecorationLine: 'line-through'
  },
  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkboxIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain'
  },
  trashContainer: {
    alignItems: 'center'
  },
  trash: {
    height: 36,
    width: 36,
    resizeMode: 'contain'
  }
})
