<template>
  <div class="home">
    <aside class="side"></aside>
    <section class="feed">
      <h1>Posts</h1>
      <PostCard v-for="post in posts" :key="post.id" :post-id="post.id" />
      <button type="button" class="reset-button" @click="resetLikes">Reset likes</button>
    </section>
    <aside class="side"></aside>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";

export default {
  name: "HomeView",
  components: { PostCard },
  computed: {
    posts() {
      return this.$store.getters.allPosts;
    },
  },
  methods: {
    resetLikes() {
      this.$store.dispatch("resetLikes");
    },
  },
};
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 12px;
  align-items: start;
}

.feed {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.reset-button {
  align-self: center;
  padding: 6px 16px;
  border: none;
  border-radius: 20px;
  background: var(--primary);
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
}

.reset-button:hover {
  background: var(--primary-dark);
}

@media (max-width: 700px) {
  .home {
    grid-template-columns: 1fr;
  }

  .side {
    display: none;
  }
}
</style>
