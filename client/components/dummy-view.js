import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'

const Dummy = () => {
  const [counter] = useState(4)
  return (
    <div>
      <Head title="Hello" />
      <div> Hello World {counter} </div>
      <img src={`/tracker/${counter}.gif`} alt="tracker" />
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
