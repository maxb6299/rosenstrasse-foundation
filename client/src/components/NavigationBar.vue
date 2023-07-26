<template>
  <div>
    <nav>
      <NavigationBarDropdown title="Currently Working Links" :items="links"></NavigationBarDropdown>
      <NavigationBarDropdown title="About" :items="about"></NavigationBarDropdown>
      <NavigationBarDropdown title="Learn" :items="learn"></NavigationBarDropdown>
      <NavigationBarDropdown title="Connect" :items="connect"></NavigationBarDropdown>
      <NavigationBarDropdown title="Resources" :items="resources"></NavigationBarDropdown>
    </nav>
  </div>
</template>

<script>
import NavigationBarDropdown from './NavigationBarDropdown.vue';

export default {
  components: {
    NavigationBarDropdown
  },

  data() {
    return {
      links: [
        {
          title: "Home",
          link: "/"
        },
        {
          title: "Meet The Team",
          link: "/meet-the-team"
        },
        {
          title: "Personal Testimonies",
          link: "/personal-testimonies"
        }
      ],
      about: [
        {
          title: "About This Site",
          link: "about-this-site"
        },
        {
          title: "Meet The Team",
          link: "/meet-the-team"
        }
      ],
      learn: [
        {
          title: "Personal Testimonies",
          link: "personal-testimonies"
        },
        {
          title: "The Rosenstrasse Protest",
          link: "the-rosenstrasse-protest"
        },
        {
          title: "Timeline",
          link: "timeline"
        }
      ],
      connect: [
        {
          title: "Contact Us",
          link: "contact-us"
        },
        {
          title: "Donate",
          link: "donate"
        },
        {
          title: "Gallery",
          link: "gallery"
        },
        {
          title: "Monthly Newsletters",
          link: "monthly-newsletters"
        },
        {
          title: "News/Events",
          link: "news-events"
        }
      ],
      resources: [
        {
          title: "Documents",
          link: "documents"
        },
        {
          title: "Forum",
          link: "forum"
        },
        {
          title: "Media Resources",
          link: "media-resources"
        },
        {
          title: "Sources Cited",
          link: "sources-cited"
        },
        {
          title: "Scholarly Debate",
          link: "scholarly-debate"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 140px;
  width: 100vw;
  background-color: $navy;
}
</style>
