import type { SearchForm } from "@/http/type/searchForm"
import type { SelectDepartmentOptions } from "@/http/type/selectDepartmentOptions"
import type { CurrEquipmentInfo } from "@/types/CurrEquipmentInfo"
import { defineStore } from "pinia"
import { getEquipmentList, getEquipmentInfo, searchEquipment } from '@/http/request'
export const useEquipmentStore = defineStore('EquipmentStore', {
    state: () => ({
        equipmentList: [],
        selectDepartmentList: [
            {
                value: "健康检测中心",
                label: "健康检测中心",
            },
            {
                value: "标准与检验检测研究中心",
                label: "标准与检验检测研究中心",
            },
            {
                value: "理疗装备中心",
                label: "理疗装备中心",
            },
            {
                value:"针灸装备研究中心",
                label:"针灸装备研究中心"
            },
            {
                value:"明医中医医院",
                label:"明医中医医院"
            },
            {
                value:"中药装备中心",
                label:"中药装备中心"
            },
            {
                value:"居家健康中心",
                label:"居家健康中心"
            },
            {
                value:"睡眠装备中心",
                label:"睡眠装备中心"
            },
            {
                value:"疫病装备中心",
                label:"疫病装备中心"
            },
            {
                value:"理疗装备中心",
                label:"理疗装备中心"
            },
            {
                value:"研发支持小组",
                label:"研发支持小组"
            },
            {
                value:"大数据中心",
                label:"大数据中心"
            },
        ] as SelectDepartmentOptions[],
        currEquipmentInfo: {} as CurrEquipmentInfo
    }),
    getters: {
    },
    actions: {
        async getEquipmentList() {
            const res = await getEquipmentList()
            this.equipmentList = res.data.equipmentList
            return res
        },
        async searchEquipment(searchForm: SearchForm) {
            const res = await searchEquipment(searchForm)
            this.equipmentList = res.data.equipmentList
            return res
        },
        async getEquipmentInfo(id: string) {
            const res = await getEquipmentInfo(id)
            this.currEquipmentInfo = res.data.equipmentInfo
            return res
        }
    },
})