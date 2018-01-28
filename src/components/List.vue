<template>
  <div>
    <ul>
      <li v-for="(item, key) in results" :key="key">
        <img width="100" height="100" :src="item.author.avatar_url">
        <p>{{ item.author_id }}</p>
        <!-- <p>{{ item.author.loginname }}</p> -->
        <div>
          <router-link :to="{ path: '/authordetails/' + item.author.loginname }">{{ item.author.loginname }}</router-link>
        </div>
        <router-link :to="{ path: 'listdetails/' + item.id }">{{ item.title | str_cut(10) }}</router-link>
      </li>
    </ul>
    <a href="javascript:;" @click="next">NEXT</a>
    <div>
      <a href="javascript:;" @click="changeTab('good')">GOOD</a>
      <a href="javascript:;" @click="changeTab('share')">SHARE</a>
      <a href="javascript:;" @click="changeTab('ask')">ASK</a>
      <a href="javascript:;" @click="changeTab('job')">JOB</a>
    </div>
    <div>
      <input v-model="limit" type="number" name="" @keyup.enter="changeLimit">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      results: [],
      page: 1,
      limit: 3,
      tab: ''
    }
  },
  mounted: function () {
    this.getTopics(this.page, this.tab, this.limit)
    // this.getTopics(this.page, this.tab)
  },
  methods: {
    getTopics (page, tab, limit) {
      const _this = this
      _this.$http.get('https://cnodejs.org/api/v1/topics?page=' + page + '&limit=' + limit + '&tab=' + tab)
        .then(function (response) {
          if (response.data.success) {
            _this.$set(_this.$data, 'results', response.data.data)
            // console.log(_this.results)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    next () {
      this.page++
      this.$set(this.$data, 'page', this.page)
      this.getTopics(this.page, this.tab, this.limit)
    },
    changeTab (tab) {
      // console.log(tab)
      this.$set(this.$data, 'tab', tab)
      this.$set(this.$data, 'page', 1)
      this.getTopics(this.page, tab, this.limit)
    },
    changeLimit () {
      // console.log(this.limit)
      this.getTopics(this.page, this.tab, this.limit)
    }
  }
}
</script>
