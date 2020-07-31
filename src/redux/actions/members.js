import axios from 'redaxios'

export const getAllMembers = () => {
  return (dispatch, getState) => {
    dispatch(getAllMembersStarted())

    const state = getState()
    const apiKey = state.auth.apiKey

    axios
      .get(`${process.env.REACT_APP_API_URL}/members?api_key=${apiKey}`)
      .then((response) => dispatch(getAllMembersSucceed(response.data)))
      .catch((error) => dispatch(getAllMembersFailed(error)))
  }
}

const getAllMembersStarted = () => ({
  type: 'GET_ALL_MEMBERS_STARTED'
})

const getAllMembersSucceed = (response) => ({
  type: 'GET_ALL_MEMBERS_SUCCEED',
  payload: { ...response }
})

const getAllMembersFailed = (error) => ({
  type: 'GET_ALL_MEMBERS_FAILED',
  payload: { error }
})
