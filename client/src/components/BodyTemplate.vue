<template>
  <div class="body-items">
    <div class="body-title">{{ title }}</div>
    <div class="page-body"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
}

.body-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  padding: 10px 0px;
  gap: 32px;
}

.page-body {
  width: 860px;
  padding: 32px;
  background-color: #d9d9d9;
}

.body-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 630px;
  padding: 21px 32px 32px 32px; 
  background: #9dbfd2;
  text-align: center;

  color: #000;
  font-family: Crimson Pro;
  font-size: 52px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
}

@media only screen and (max-width: 900px) {
  .body-items {
    padding: 5px 0px;
    gap: 16px;
  }
  .page-body {
    width: 100%;
    padding: 16px;
  }

  .body-title {
    width: 75%;
    padding: 11px 16px 16px 16px;

    font-size: 26px
  }
}
</style>
