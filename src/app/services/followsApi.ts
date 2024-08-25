import { Follows } from "../types";
import { api } from "./api";

export const followsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        followUser: builder.mutation<Follows, { followingId: string }>({
            query: (body) => ({
                url: '/follows',
                method: 'POST',
                body
            })
        }),
        unfollowUser: builder.mutation<void, { followingId: string }>({
            query: (body) => ({
                url: '/unfollows',
                method: 'DELETE',
                body
            })
        }),
    })
})

export const {
    endpoints: {
        followUser,
        unfollowUser
    }
} = followsApi

export const {
    useFollowUserMutation,
    useUnfollowUserMutation
} = followsApi