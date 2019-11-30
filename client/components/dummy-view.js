import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {} from 'universal-cookie';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'
import { getData } from '../redux/reducers/users'

const Dummy = () => {
  const [counter] = useState(0)
  const [showText, AnyText] = useState({
    text1: true,
    text2: false
  })
  const toggle = () => {
    AnyText({
      text1: !showText.text1,
      text2: !showText.text2
    })
  }
  const [text, setText] = useState('')
  const changeTextBox = () => {
    setText('my new text')
  }
  const data = sessionStorage.setItem('my-text', JSON.stringify({ data: 'alex' }))
  return (
    <div>
      <input type="checkbox" />
      <input type="radio" />
      <br />
      Enter your login
      <br />
      <input type="text" value={text} onChange={changeTextBox} />
      <br />
      !!!!!{text}!!!!
      <br />
      <input type="password" onChange={data} />
      <br />

      {
        showText.text1 && (
          <div>Text numder 1</div>
        )
      }
      {
        showText.text2 && (
          <div>Text numder 2</div>
        )
      }
      <button type="button" onClick={toggle}>Show text</button>
      <br />
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
