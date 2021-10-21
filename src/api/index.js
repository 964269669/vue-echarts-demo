import request from '../utils/request'
import axios from 'axios'

const icode = '60136E793C2E28BB'

export function wordcloudLocal () {
  return axios({
    url: '/static/data.json',
    method: 'get'
  })
}

export function mapScatterLocal () {
  return axios({
    url: '/static/data.json',
    method: 'get'
  })
}

export function screenDataLocal () {
  return axios({
    url: '/static/data.json',
    method: 'get'
  })
}

export function wordcloud () {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: { icode }
  })
}

export function mapScatter () {
  return request({
    url: '/screen/map/scatter',
    method: 'get',
    params: { icode }
  })
}

export function screenData () {
  return request({
    url: '/screen/data',
    method: 'get',
    params: { icode }
  })
}
