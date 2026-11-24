<template>
    <Header />
    <main>
        <a href="" @click.prevent="resetLikes()">Reset Likes</a>
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
    import { useDataStore } from '@/stores/dataStore';
    
    import { ref } from 'vue';

    const postsStore = usePostsStore();
    const dataStore = useDataStore();

    const posts = ref(postsStore.postsFormatted);

    async function resetLikes(){
        dataStore.resetLikes();
        await postsStore.refresh();
    }
</script>

<style scoped>

</style>