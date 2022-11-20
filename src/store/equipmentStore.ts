import type { SearchForm } from "@/http/type/searchForm"
import type { CurrEquipmentInfo } from "@/types/CurrEquipmentInfo"
import { defineStore } from "pinia"
import { getEquipmentList, getEquipmentInfo, searchEquipment } from '@/http/request'
export const useEquipmentStore = defineStore('EquipmentStore', {
    state: () => ({
        euipmentList: [],
        selectDepartmentList: [
            {
                value: "standard",
                label: "标准中心",
            },
            {
                value: "standard2",
                label: "标准中心2",
            }
        ],
        currEquipmentInfo: {} as CurrEquipmentInfo
    }),
    getters: {
    },
    actions: {
        async getEquipmentList() {
            const res = await getEquipmentList()
            this.euipmentList = res.data.equipmentList
            return res
        },
        async searchEquipment(searchForm: SearchForm) {
            const res = await searchEquipment(searchForm)
            this.euipmentList = res.data.equipmentList
            return res
        },
        async getEquipmentInfo(id: string) {
            const res = await getEquipmentInfo(id)
            this.currEquipmentInfo = res.data.equipmentInfo
            return res
        }
    },
})