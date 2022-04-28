<template>
  <footer class="footer">
    <div class="navbar navbar--footer">
      <div class="container footer__wrapper">
        <div class="navbar__content">
          <ul class="navbar__list">
            <li
              class="navbar__item"
              v-for="link in links"
              :key="link.alias"
            >
              <router-link
                class="navbar__link"
                :to="link.url"
                >{{ link.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
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
