<template>
  <article class="post-card">
    <header>
      <img class="avatar" src="img/avatar.svg" :alt="post.authorName" />
      <time :datetime="isoDate">{{ formattedDate }}</time>
    </header>
    <img v-if="post.image" class="photo" :src="post.image" :alt="post.description" />
    <p>{{ post.description }}</p>
    <footer>
      <button type="button" class="like-button" aria-label="Like" @click="like">
        👍
      </button>
      <span class="likes">{{ post.likes }} likes</span>
    </footer>
  </article>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    postId: { type: Number, required: true },
  },
  computed: {
    post() {
      return this.$store.getters.postById(this.postId);
    },
    isoDate() {
      return new Date(this.post.createdAt).toISOString();
    },
    formattedDate() {
      return new Date(this.post.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    },
  },
  methods: {
    like() {
      this.$store.dispatch("likePost", this.postId);
    },
  },
};
</script>

<style scoped>
.post-card {
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 15px 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.avatar {
  width: 24px;
  height: 24px;
}

time {
  font-size: 0.8em;
  color: var(--muted);
}

.photo {
  display: block;
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  margin-top: 12px;
  border-radius: 12px;
}

p {
  margin: 12px 0 8px;
  line-height: 1.5;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.likes {
  font-size: 0.9em;
  color: var(--muted);
}

.like-button {
  background: var(--bg);
  border: none;
  border-radius: 20px;
  padding: 4px 14px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background 0.2s;
}

.like-button:hover {
  background: var(--primary-soft);
}
</style>
