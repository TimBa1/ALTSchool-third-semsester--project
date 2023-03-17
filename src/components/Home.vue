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

$breakpoint-minipc:1500px;
$breakpoint-tablet:1350px;
$breakpoint-minitab:800px;
$breakpoint-phone:600px;
$breakpoint-miniphone:500px;

.main-container{
    display:flex;
  @media(max-width: $breakpoint-minitab){
      flex-direction:column;
    }
}
</style>