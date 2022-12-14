import { getCookie } from '@/util/cookieTool'
import Request from './requestClass'
import type { SearchForm } from './type/searchForm'

const request = new Request({
  headers: {
    "x-csrf-token": getCookie("csrfToken"),
  }
})

/**
 * get equipmentList
 *
 */
export const getEquipmentList = () => request.request({
  url: `api/equipments`,
  method: 'GET',
})

/**
 * search equipment by searchContent\property\department
 *
 */
export const searchEquipment = (searchForm: SearchForm) => request.request({
  url: `api/equipments/search`,
  method: 'POST',
  data: searchForm
})

/**
 * get equipment info by id
 * 
 */
export const getEquipmentInfo = (id: string) => request.request({
  url: `api/equipments/${id}`,
  method: 'GET',
})