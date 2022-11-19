import { defineStore } from "pinia"
export const useEquipmentStore = defineStore('EquipmentStore', {
    state: () => ({
        euipmentList: [
            { 
                name: "数字式医用红外热像仪",
                overview: "医学技术as.das.das.d.", 
                id: "JIICM20210012", 
                equipmentId: 'MTI-Economy-C',
                avator:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
            },
            { 
                name: "数字式医用红外热像仪2",
                overview: "医学技术as.das.das.d2.", 
                id: "JIICM20210013", 
                equipmentId: 'MTI-Economy-C', 
                avator:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
            },
            { 
                name: "数字式医用红外热像仪3",
                overview: "医学技术as.das.das.d3.", 
                id: "JIICM20210014", 
                equipmentId: 'MTI-Economy-C' 
            }
        ],
        selectDepartmentList: [
            {
                value: "standard",
                label: "标准中心",
            },
            {
                value: "standard2",
                label: "标准中心2",
            }
        ]
    }),
    getters: {
    },
    actions: {
    },
})