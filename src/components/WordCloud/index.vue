<template>
  <div class="container">
    <ve-wordcloud
      :data="chartData"
      :settings="chartSettings"
      height="100%"
    ></ve-wordcloud>
  </div>
</template>

<script>
export default {
  name: 'wordCloud',
  data () {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: '马超',
            value: 100 * Math.random()
          },
          {
            name: '马超1',
            value: 100 * Math.random()
          },
          {
            name: '马超2',
            value: 100 * Math.random()
          },
          {
            name: '马超3',
            value: 100 * Math.random()
          },
          {
            name: '马超4',
            value: 100 * Math.random()
          },
          {
            name: '马超5',
            value: 100 * Math.random()
          },
          {
            name: '马超6',
            value: 100 * Math.random()
          },
          {
            name: '马超7',
            value: 100 * Math.random()
          },
          {
            name: '马超8',
            value: 100 * Math.random()
          },
          {
            name: '马超9',
            value: 100 * Math.random()
          },
          {
            name: '马超10',
            value: 100 * Math.random()
          }
        ]
      },
      chartSettings: {
        color: [
          'rgba(97,216,0,.7)',
          'rgba(204,178,26,.7)',
          'rgba(245,166,35,.7)',
          'rgba(156,13,113,.7)'
        ]
      }
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
</style>
