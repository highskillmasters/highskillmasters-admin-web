import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { MemberCards } from '../components'

import defaultMembers from '../data/members.json'

const dashboard = ({ members }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <MemberCards members={members ? members : defaultMembers} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    members: state.members.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllMembers: () => dispatch({ type: 'GET_ALL_MEMBERS' })
  }
}

dashboard.propTypes = {
  members: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(dashboard)
