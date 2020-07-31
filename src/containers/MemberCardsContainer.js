import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { MemberCards } from '../components'

import defaultMembers from '../data/members.json'

const MemberCardsContainer = ({ members }) => {
  return <MemberCards members={members ? members : defaultMembers} />
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

MemberCardsContainer.propTypes = {
  members: PropTypes.array
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberCardsContainer)
