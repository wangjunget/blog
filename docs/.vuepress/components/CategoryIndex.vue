<template>
  <div class="category-container">
    <navbar></navbar>
    <sidebar :items="sidebarItems"></sidebar>
    <div class="custom-page">
    
    </div>
  </div>
</template>

<script>
import Navbar from '@vuepress/theme-default/components/Navbar'
import Sidebar from '@vuepress/theme-default/components/Sidebar'
import Page from '@vuepress/theme-default/components/Page'
import { resolveSidebarItems } from '@vuepress/theme-default/util'

export default {
  name: 'CategoryIndex',
  components: {
    Navbar,
    Sidebar,
    Page
  },
  computed: {
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    }
  }
}
</script>

<style lang="stylus" scope>
.custom-page 
  padding-left 20rem
  padding-top 3.6rem

</style>
