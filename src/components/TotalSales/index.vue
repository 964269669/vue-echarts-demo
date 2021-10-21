<template>
  <div class="total-sales">
    <common-card title="累计销售量" :value="salesToday">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">{{salesGrowthLastDay}}</span>
            <div class="increase" />
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">{{salesGrowthLastMonth}}</span>
            <div class="decrease" />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额 {{testA.text}}</span>
        <span class="money">{{salesLastDay}}</span>
      </template>
    </common-card>
  </div>
</template>

<script>
// import CommonCard from '../CommonCard'
import commonCardMixin from '@/mixins/commonCardMixin'
import commonDatadMixin from '@/mixins/commonDataMixin'

export default {
  name: 'totalSales',
  mixins: [commonCardMixin, commonDatadMixin],
  // inject: ['getReportData'],
  data () {
    return {}
  },
  // computed: {
  //   data () {
  //     return this.getReportData()
  //   }
  // },
  created () {},
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .compare {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-top: 3px;
      color: #666;
    }
  }
</style>
