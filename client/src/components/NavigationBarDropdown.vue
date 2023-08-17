<template>
    <div class="nav-dropdown" @mouseenter="isOpen = true" @mouseleave="isOpen = false" @click="isOpen = !isOpen">
        <div class="nav-dropdown-button">
            <a>{{ title }}</a>
            <svg viewBox="0 0 1030 638" width="10">
                <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
            </svg>
        </div>

            <div class="nav-dropdown-submenu" v-if="isOpen" @click="isOpen=false">
            <div v-for="(menuItem, menuItemKey) in items" :key="menuItemKey" class="nav-dropdown-item">
                <router-link class="nav-dropdown-submenu-item" :to="menuItem.link">{{ menuItem.title }}</router-link>
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

* {
  font-size: 24px;
}
.nav-dropdown a {
  color: white;
  position: relative;
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

.nav-dropdown-submenu-item {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

@media only screen and (max-width: 900px) {
    * {
    font-size: 14px;
    }
    .nav-dropdown a {
    border-bottom: 3px solid transparent;
    transition: 0.4s;
    }

    .nav-dropdown-button {
        padding: 0px;
    }
    .nav-dropdown {
        padding: 0px;
    }

    .nav-dropdown svg{
        display: none;
    }
}
</style>