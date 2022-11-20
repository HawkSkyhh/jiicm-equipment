import { defineStore } from "pinia"
export const useEquipmentStore = defineStore('EquipmentStore', {
    state: () => ({
        euipmentList: [
            {
                name: "数字式医用红外热像仪",
                description: "医学技术as.das.das.d.",
                id: "JIICM20210012",
                equipmentId: 'MTI-Economy-C',
                avator: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            },
            {
                name: "数字式医用红外热像仪2",
                description: "医学技术as.das.das.d2.",
                id: "JIICM20210013",
                equipmentId: 'MTI-Economy-C',
                avator: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            },
            {
                name: "数字式医用红外热像仪3",
                description: "医学技术as.das.das.d3.",
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
        ],
        currEquipmentInfo: {
            name: '数字式设备',
            id: 'JIICM20210012',
            equipmentId: 'MTI-Economy-C',
            description: '医学技术as.das.das.d.',
            classfication: '竞品',
            equipmentTable: [{
                key: '1',
                name: '胡彦斌',
                createTime: 32,
                location: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                location: '西湖区湖底公园1号',
            },],
            headerPics: [
                {
                    id: '1',
                    src: 'https://img.alicdn.com/imgextra/i3/2204889401/O1CN01Q2ZQ2L1ZQZ0ZQZ0ZQ_!!2204889401.jpg_430x430q90.jpg',
                },
                {
                    id: '2',
                    src: 'https://img.alicdn.com/imgextra/i3/2204889401/O1CN01Q2ZQ2L1ZQZ0ZQZ0ZQ_!!2204889401.jpg_430x430q90.jpg',
                }
            ],
            equipmentPictures: [
                {
                    id: '1',
                    src: 'https://img.alicdn.com/imgextra/i3/2204889401/O1CN01Q2ZQ2L1ZQZ0ZQZ0ZQ_!!2204889401.jpg_430x430q90.jpg',
                    overview: '整体图片',
                },
                {
                    id: '2',
                    src: 'https://img.alicdn.com/imgextra/i3/2204889401/O1CN01Q2ZQ2L1ZQZ0ZQZ0ZQ_!!2204889401.jpg_430x430q90.jpg',
                    overview: '局部图片',
                }
            ]
        }
    }),
    getters: {
    },
    actions: {
    },
})