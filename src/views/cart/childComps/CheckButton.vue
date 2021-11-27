<template>
  <div class='icon-selector' :class="{'selector-active':checked}" @click="selectItem">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      checked: this.value
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    }
  },
  components: {

  },
  computed: {

  },
  watch: {
    value: function(newVal) {
      this.checked = newVal;
    }
  },
  created () {

  },
  methods: {
    selectItem() {
      this.$emit('checkBtnClick')
    }
  }
}
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  .selector-active {
    background-color: var(--color-high-text);
  }
</style>
