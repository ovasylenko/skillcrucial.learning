import React, {} from 'react';
import {} from 'universal-cookie';
import {} from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getData } from '../redux/reducers/users'

const Flex = () => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100vh',
      justifyContent: 'space-between',
      flexDirection: 'column' // flex-direction
    }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>

    </div>
  )
}

Flex.propTypes = {}

const mapStateToProps = state => ({
  users: state.users.list,
  isRequesting: state.users.isRequesting
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Flex)
