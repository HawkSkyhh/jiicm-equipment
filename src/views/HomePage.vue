<template>
    <div class="titleWrap">{{ route.meta.title }}</div>
    <div class="searchBoxWrap">
        <a-row>
            <a-col :span="24">
                <a-form class="formBox" :model="searchForm">
                    <a-form-item>
                        <a-input v-model:value="searchForm.searchContent" placeholder="please input" />
                    </a-form-item>
                    <a-form-item>
                        <a-row>
                            <a-col :span="4">
                                <a-label>属性:</a-label>
                            </a-col>
                            <a-col :span="20">
                                <a-radio-group v-model:value="searchForm.property">
                                    <a-radio value="all">所有</a-radio>
                                    <a-radio value="yard">联创院</a-radio>
                                    <a-radio value="item">联创项目</a-radio>
                                </a-radio-group>
                            </a-col>
                        </a-row>

                    </a-form-item>
                    <a-form-item v-show="isShowSelect">
                        <a-row>
                            <a-col :span="4">
                                <a-label>部门:</a-label>
                            </a-col>
                            <a-col :span="20">
                                <a-select v-model:value="searchForm.department" placeholder="选择部门"
                                    :options="selectDepartmentList">
                                </a-select>
                            </a-col>
                        </a-row>

                    </a-form-item>
                </a-form>
            </a-col>
        </a-row>
    </div>
    <div class="offsetBottomBtn">
        <a-button @click="searchEquipment" class='searchBtn'>查询设备</a-button>
    </div>
    <div class="seachAllWrap">
        <a-button @click="searchEquipment('all')" class='searchAllBtn searchBtn'>查看所有设备</a-button>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"
import { useRoute, useRouter } from 'vue-router'
import { useEquipmentStore } from '@/store/equipmentStore'
const route = useRoute()
const router = useRouter()
const equipmentStore = useEquipmentStore()
let isShowSelect = ref(false)
let searchForm = ref({
    searchContent: '',
    property: '',
    department: ''
})
let selectDepartmentList = ref(equipmentStore.selectDepartmentList)
watch(() => searchForm.value.property, (value: string) => {
    if (value === 'yard') {
        isShowSelect.value = true
    } else {
        isShowSelect.value = false
    }
})
const searchEquipment = (flag = "") => {
    if (flag === 'all') {
        console.log("all")
    } else {
        console.log(searchForm.value)
    }
    router.push("/equipmentlist")
}
</script>

<style scoped>
.searchBoxWrap {
    width: 100%;
    height: 25%;
    text-align: center;
}

.searchBtn {
    width: 60%;
}

.offsetBottomBtn {
    text-align: center;
}

.seachAllWrap {
    margin-top: 10%;
    text-align: center;
}
</style>
  
  