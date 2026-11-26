<template>
  <HeaderBar />
  <main class="page">
    <router-view />
  </main>
  <FooterBar />
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "App",
  components: { HeaderBar, FooterBar },
};
</script>

<style>
:root {
  --bg: #f0f2f5;
  --card: #ffffff;
  --text: #1c1e21;
  --muted: #65676b;
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --primary-soft: #e7f0fe;
  --border: #dddddd;
  --error: #d93025;
  --accent: #d34da6;
  --radius: 16px;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text);
  background: var(--bg);
}

#app {
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.page {
  flex: 1;
}
</style>
