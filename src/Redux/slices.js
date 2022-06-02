import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPostsData = createAsyncThunk(
    'fetch/fetchPostsData',
    async function (currentPage) {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`)
            const data = res.data
            return data
        } catch {
            alert('Упс, что-то пошло не так (︶︹︺)')
        }
    }
)

const postSlice = createSlice({
    name: 'fetch',
    initialState: {
        posts: [],
        currentPage: 1
    },
    reducers: {
        setReversePage(state) {
            state.posts.reverse()
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        }
    },
    extraReducers: {
        [fetchPostsData.fulfilled]: (state, action) => {
            state.posts = action.payload
        }
    }
})

export const { fetchPosts, setCurrentPage, setReversePage } = postSlice.actions
export default postSlice.reducer