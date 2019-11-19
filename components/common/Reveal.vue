<template lang="html">
  <div :class="['Reveal', { 'hide': loaded }, { 'welcome': welcome }]">
    <h5 class="sz-heading welcome">
      <span>Hey.</span>
    </h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
    welcome: false
  }),
  methods: {
    hide() {
      this.welcome = false
      this.loaded = true
    }
  },
  mounted () {
    setTimeout(() => this.welcome = true, 300)
    setTimeout(() => this.hide(), 1600)
  }
}
</script>
<style lang="scss" scoped>
.Reveal {
  align-items: center;
  background: $cl-black;
  bottom: 0;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  transform-origin: top center;
  transition: transform 1200ms cubic-bezier(0.23, 1, 0.32, 1) 1200ms;
  will-change: transform;
  z-index: 999;

  .welcome {
    color: $cl-white;
    overflow: hidden;

    & > span {
      display: block;
      transition: transform 900ms cubic-bezier(0.23, 1, 0.32, 1);
      transform: translateY(100%);
      will-change: transform;
    }
  }
}

.Reveal.welcome {
  .welcome > span {
    transform: translateY(0);
  }
}

.Reveal.hide {
  transform: scale(1, 0);

  .welcome > span {
    transition: transform 900ms cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translateY(100%);
  }
}
</style>
