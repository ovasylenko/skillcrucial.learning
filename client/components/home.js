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
  const [login, changeLogin] = useState('')
  const [pass, changePass] = useState('')
  const userLogin = (e) => {
    changeLogin(e.target.value)
    sessionStorage.setItem('user-login', login)
  }
  const userPass = (e) => {
    changePass(e.target.value)
    sessionStorage.setItem('user-passsword', pass)
  }
  return (
    <div>
      <Link to="/images/img1.jpg">image</Link>
      <span>Enter your login:</span>
      <br />

      <input type="text" onChange={userLogin} />
      <br />

      <span>Enter your password:</span>
      <br />

      <input type="password" onChange={userPass} />
      <br />
      {/* <button type="button" onClick={user}>Save and continue</button> */}

      <button type="button" onClick={updateCounter}>Update Counter</button>
      <br />

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
