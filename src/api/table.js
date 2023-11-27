import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function test(params) {
  return request({
    url: '/sys/demo/demo',
    method: 'get',
    params: params
  })
}
