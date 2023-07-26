<template>
    <div class="nav-dropdown">
        <div class="nav-dropdown-button" @click="isOpen=!isOpen">
            <a>{{ title }}</a>
            <svg viewBox="0 0 1030 638" width="10">
                <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
            </svg>
        </div>

        <div class="nav-dropdown-submenu" v-if="isOpen">
            <div v-for="(menuItem, menuItemKey) in items" :key="menuItemKey" class="nav-dropdown-item">
                <router-link :to="menuItem.link">{{ menuItem.title }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'items'],

    data () {
        return {
            isOpen: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";

.nav-dropdown a {
  color: white;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  transition: 0.4s;
}

.nav-dropdown-button:hover,
.nav-dropdown-item:hover {
  background-color: $lightBlue;
}

.nav-dropdown svg{
    width: 10px;
    margin-left: 10px;
}

.nav-dropdown-submenu {
    position: absolute;
    background-color: $navy;
}
</style>