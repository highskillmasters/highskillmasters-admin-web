import React from 'react'
import PropTypes from 'prop-types'

const MemberCards = ({ members }) => {
  return (
    <div>
      {members.map((member, index) => {
        return <div key={index}>{member.email}</div>
      })}
    </div>
  )
}

MemberCards.propTypes = {
  members: PropTypes.array
}

export default MemberCards
