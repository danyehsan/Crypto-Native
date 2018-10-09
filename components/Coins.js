import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { getCoins } from '../reducers/coins'
import Coin from './Coin'

class Coins extends React.Component {
  componentDidMount() {
      const { dispatch } = this.props
      dispatch(getCoinc())

      this.interval = setInterval( () => dispatch(getCoinc()), 60000)
  }

  componentWillUnmount() {
      clearInterval(this.interval)
  }

  render() {
    const { coins } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          My Portfolio
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center'
  }
})


const mapStateToProps = (state) => {
  return { coins: state.coins }
}


export default connect(mapStateToProps)(Coins)