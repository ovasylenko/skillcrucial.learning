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
  const [text, setText] = useState('')
  const [clickLog, clickLogChange] = useState('')
  const [clickLog2, clickLog2Change] = useState('')

  // e.preventDefault();
  // e.stopPropagation();

  const toggle = () => {
    AnyText({
      text1: !showText.text1,
      text2: !showText.text2
    })
  }
  const changeTextBox = (e) => {
    setText(e.target.value)
    sessionStorage.setItem('password', text)
  }
  return (
    <div>
      <div
        onClick={() => {
          clickLogChange(`parentDivClick ${clickLog}`)
        }}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
      >
        Click Me
        <div
          onClick={(e) => {
            e.stopPropagation()
            clickLog2Change(`myInnerDivClicked ${clickLog2}`)
          }}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
        >
          Click Me2 Gently
        </div>
      </div>
      { clickLog2 }
      <br />

      { clickLog }
      <br />
      <input type="checkbox" />
      <input type="radio" />
      <br />
      Enter your login
      <br />
      <input type="text" onChange={changeTextBox} />
      <br />
      !!!!!password!!!!
      <br />
      <input type="password" onChange={changeTextBox} />
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
