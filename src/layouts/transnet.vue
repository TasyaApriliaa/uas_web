<template>
    <div>
        <navbar></navbar>
        <router-view/>
        <!-- <footer-comp></footer-comp> -->
    </div>

</template>

<script>
export default {
    components:{
        'Navbar' : () => import('@/components/user/Navbar.vue'),
        // 'FooterComp' : () => import('@/components/user/Footer.vue'),
    }
}
</script>

<style>

</style>
