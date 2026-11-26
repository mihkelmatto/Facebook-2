<template>
  <footer class="footer-bar">
    <p>&copy; {{ year }} PostIt &middot; Team AD</p>
    <p>Web Application Development</p>
  </footer>
</template>

<script>
export default {
  name: "FooterBar",
  data() {
    return { year: new Date().getFullYear() };
  },
};
</script>

<style scoped>
.footer-bar {
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 12px 20px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

.footer-bar p {
  margin: 4px 0;
}
</style>
