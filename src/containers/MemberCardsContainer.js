import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAllMembers } from '../redux/actions/members'

import { MemberCards } from '../components'

import defaultMembers from '../data/members.json'

const MemberCardsContainer = ({ isLoading, members, handleGetAllMembers }) => {
  // Dispatch an action whenever this container is rendered
  useEffect(() => handleGetAllMembers(), [handleGetAllMembers])

  return (
    <MemberCards
      isLoading={isLoading}
      members={members ? members : defaultMembers}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.members.isLoading,
    members: state.members.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleGetAllMembers: () => dispatch(getAllMembers())
  }
}

MemberCardsContainer.propTypes = {
  isLoading: PropTypes.bool,
  members: PropTypes.array,
  handleGetAllMembers: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberCardsContainer)
