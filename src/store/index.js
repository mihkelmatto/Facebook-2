import { createStore } from "vuex";
import postsData from "@/data/posts.json";

export default createStore({
  state: {
    posts: postsData.posts,
  },
  getters: {
    allPosts: (state) => state.posts,
    postById: (state) => (id) => state.posts.find((post) => post.id === id),
  },
  mutations: {
    incrementLikes(state, id) {
      const post = state.posts.find((post) => post.id === id);
      post.likes++;
    },
    resetLikes(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },
  },
  actions: {
    likePost({ commit }, id) {
      commit("incrementLikes", id);
    },
    resetLikes({ commit }) {
      commit("resetLikes");
    },
  },
});
