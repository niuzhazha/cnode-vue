<template>
  <div>
    <h3>{{ details.title }}</h3>
    <div v-html="details.content"></div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      details: {}
    }
  },
  mounted: function () {
    console.log(this.$route.params.id)
    this.getDetails()
    // this.getTopics(this.page, this.tab, this.limit)
    // this.getTopics(this.page, this.tab)
  },
  methods: {
    getDetails () {
      const _this = this
      _this.$http.get('https://cnodejs.org/api/v1/topic/' + this.$route.params.id)
        .then(function (response) {
          if (response.data.success) {
            _this.$set(_this.$data, 'details', response.data.data)
            console.log(_this.details)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
