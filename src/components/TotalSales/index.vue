<template>
  <div class="total-sales">
    <common-card title="累计销售量" value="$222">
      <template>
        <div class="compare">
          <span>日同比</span>
          <span>7.33</span>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额度 </span>
        <span class="money">￥300000</span>
      </template>
    </common-card>
  </div>
</template>

<script>
// import CommonCard from '../CommonCard'
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'totalSales',
  mixins: [commonCardMixin],
  components: {
  },
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  span { font-size: 12px }
  .compare {
    height: 100%;
    background-color: yellow;
  }
  .money {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
</style>
