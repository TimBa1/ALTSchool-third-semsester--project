<template>
    <div class="main-container">
        <ProfileSection />
        <RepoSection />
    </div>
</template>
  
<script>
import ProfileSection from './Profile.vue'
import RepoSection from './Repos.vue'

export default {
    name: 'HomePage',
    components: {
        ProfileSection,
        RepoSection
    }
}
</script>
  
<style lang="scss" scoped>


</style>