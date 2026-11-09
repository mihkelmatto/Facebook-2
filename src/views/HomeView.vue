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
    
    import { ref } from 'vue';
    import { data } from '../../public/json/temp_data';

    const posts = ref(data);
    
</script>

<style scoped>

</style>