import service from '../utils/http'
export function GetCode(data) {
  return service.request({
      url: '/getCode/',
      method: 'post',
      data
    })

}