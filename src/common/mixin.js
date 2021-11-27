export const backTopMixin  = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    }
  }
}
