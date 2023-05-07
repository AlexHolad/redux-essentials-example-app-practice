import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'
import { useSelector } from 'react-redux'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export default usersSlice.reducer

// REUSABLE SELECTOR FUNCTIONS

export const selectAllUsers = state => state.users

export const selectUserById = (state, userId) => state.users.find(user => user.id === userId)
