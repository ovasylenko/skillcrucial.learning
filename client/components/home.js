import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {} from 'universal-cookie';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'

const Home = () => {
  let initialCounter = 0
  if (typeof localStorage !== 'undefined'
    && typeof localStorage.getItem('counter') !== 'undefined') {
    initialCounter = +localStorage.getItem('counter')
  }
  const [counter, setCounterNew] = useState(initialCounter)
  const updateCounter = () => {
    setCounterNew(counter)
    localStorage.setItem('counter', counter)
  }
  return (
    <div>
      <button type="button" onClick={updateCounter}>Update Counter</button>
      <button type="button"><Link to="/">{counter} + &lArr;</Link></button>
      <Head title="Hello" />
      <div> Hello World {counter} </div>
    </div>
  )
}

Home.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
