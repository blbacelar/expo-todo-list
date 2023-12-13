import { StyleSheet } from 'react-native'

import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.gray_500,
    padding: 24
  },
  input: {
    backgroundColor: theme.gray_400,
    height: 56,
    borderRadius: 5,
    color: theme.gray_100,
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 5
  },
  plus: {
    width: 18,
    height: 18
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: theme.blue_dark,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute', // Position the form absolutely
    top: -30, // Adjust this value based on your Header's height
    left: 24,
    right: 0,
    zIndex: 10 // Make sure the form is layered above other components
  },
  emptyList: {
    color: theme.gray_100,
    textAlign: 'center'
  }
})
