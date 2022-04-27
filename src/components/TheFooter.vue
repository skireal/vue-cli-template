<template>
  <footer class="footer">
    <div class="container footer__wrapper">
      <ul class="navbar-list">
        <li class="navbar-item" v-for="link in links" :key="link.alias">
          <router-link class="navbar-link" :to="link.url">{{ link.title }}</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>


<script>
import { links } from '@/config'

export default {
  data() {
    return {
      links: links
    }
  }
}
</script>