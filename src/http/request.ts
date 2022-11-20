import config from '@/config/httpConfig' // 基础路径
import service from './httpService' //封装的axios

/**
 * get equipmentList optional key
 *
 */
export const getEquipmentList = (key:string)=> service({
  url: `${config.baseUrl}/equipments`,
  method: 'GET',
  params:key,
})

/**
 * get equipment info by id
 * 
 */
 export const getEquipmentInfo = (id:string)=> service({
    url: `${config.baseUrl}/equipments/${id}`,
    method: 'GET',
  })