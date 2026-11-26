<template>
  <header class="header-bar">
    <span class="brand">PostIt</span>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style scoped>
.header-bar {
  position: sticky;
  top: 10px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--card);
  border-radius: var(--radius);
  padding: 8px 20px;
  box-shadow: var(--shadow);
}

.brand {
  font-weight: bold;
  color: var(--primary);
}

nav {
  display: flex;
  gap: 5px;
}

nav a {
  padding: 6px 12px;
  color: var(--text);
  font-weight: bold;
  text-decoration: none;
  border-radius: 10px;
}

nav a:hover {
  background: var(--primary-soft);
}

nav a.router-link-exact-active {
  background: var(--primary);
  color: #ffffff;
}
</style>
