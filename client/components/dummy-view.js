import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'
import { getData } from '../redux/reducers/users'

const Dummy = () => {
  const [counter] = useState(0)
  return (
    <div>
      <span>Aren&acute;t me</span>
      <br />
      <span>In water solt - 100&permil;</span>
      <br />

      <Link to="/dashboard">Go to dashboard</Link>
      <Head title="Hello" />
      <div> Hello World {counter + 1}</div>
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = state => ({
  users: state.users.list,
  isRequesting: state.users.isRequesting
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
