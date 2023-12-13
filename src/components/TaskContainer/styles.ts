import { StyleSheet } from 'react-native'
import theme from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.gray_500,
    padding: 5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24
  },
  separator: {
    borderBottomColor: theme.gray_300,
    borderBottomWidth: 1,
    marginVertical: 20
  },
  statusGroupLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  statusGroupRight: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  created: {
    color: theme.blue,
    fontFamily: 'Inter-Bold',
    fontSize: 14
  },
  countContainer: {
    backgroundColor: theme.gray_300,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countText: {
    color: theme.gray_100,
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    textAlign: 'center',
    includeFontPadding: false
  },
  completed: {
    color: theme.purple,
    fontFamily: 'Inter-Bold',
    fontSize: 14
  },
  completedCount: {
    color: theme.gray_100,
    fontFamily: 'Inter-Bold',
    fontSize: 14
  },
  emptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  emptyImage: {
    width: 56,
    height: 56,
    marginBottom: 20
  },
  emptyListText: {
    color: theme.gray_100,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    marginBottom: 10
  },
  emptyListSubtext: {
    color: theme.gray_100,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    fontSize: 16
  }
})
