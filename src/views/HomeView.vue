<template>
    <Header />
    <main>
        <Post
            v-for="post in posts"
            :key="post.id"
            :post="post"/>
    </main>
    <Footer />
</template>

<script setup>
    import Footer from '@/components/Footer.vue';
    import Header from '@/components/Header.vue';
    import Post from '@/components/Post.vue';
    import { usePostsStore } from '@/stores/postsStore';
    
    import { ref } from 'vue';

    const postsStore = usePostsStore();

    const posts = ref(postsStore.posts);
</script>

<style scoped>

</style>