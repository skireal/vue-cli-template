<template>
  <div class="wrapper">
    <the-header></the-header>
    <div class="wrapper-content">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
