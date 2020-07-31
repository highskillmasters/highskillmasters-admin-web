import React from 'react'
import PropTypes from 'prop-types'

const MemberCards = ({ isLoading, members }) => {
  return (
    <div>
      {isLoading ? (
        <div>
          <p>Loading members...</p>
        </div>
      ) : (
        members.map((member, index) => {
          return <div key={index}>{member.email}</div>
        })
      )}
    </div>
  )
}

MemberCards.propTypes = {
  isLoading: PropTypes.bool,
  members: PropTypes.array
}

export default MemberCards
