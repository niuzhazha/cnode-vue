<template>
  <div>
    <h3><img :src="details.avatar_url"></h3>
    <p>创建时间：{{ details.create_at | format_date }}</p>
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
    this.getAuthorDetails()
    // this.getTopics(this.page, this.tab, this.limit)
    // this.getTopics(this.page, this.tab)
  },
  methods: {
    getAuthorDetails () {
      const _this = this
      _this.$http.get('https://cnodejs.org/api/v1/user/' + this.$route.params.loginname)
        .then(function (response) {
          if (response.data.success) {
            // response.data.data.format_time = moment(response.data.data.create_at).format('YYYY-MM-DD HH:mm:ss')
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
