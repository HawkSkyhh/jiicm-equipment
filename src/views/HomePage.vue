<template>
    <div class="all">
        <div class="titleWrap">
            <div class="titleCardWrap">{{ route.meta.welcomeWord }}</div>
        </div>
        <div class="mainContentWrap">
            <div class="searchBoxWrap">
                <a-form class="formBox" :model="searchForm">
                    <a-form-item class="searchWordWrap">
                        <a-input class="seachInput" v-model:value="searchForm.searchContent"
                            placeholder="please input" />
                    </a-form-item>
                    <a-form-item>
                        <a-row>
                            <a-col :span="3">
                                <a-label>属性:</a-label>
                            </a-col>
                            <a-col :span="21">
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
                            <a-col :span="5">
                                <a-label>部门:</a-label>
                            </a-col>
                            <a-col :span="18">
                                <a-select v-model:value="searchForm.department" placeholder="选择部门"
                                    :options="selectDepartmentList">
                                </a-select>
                            </a-col>
                        </a-row>

                    </a-form-item>
                </a-form>
            </div>
            <div class="offsetBottomBtn">
                <a-button class="searchBtn" @click="handleSearch">查询设备</a-button>
            </div>
        </div>
        <div class="seachAllWrap">
            <a-button @click="handleSearch('all')" class='searchAllBtn '>查看所有设备</a-button>
        </div>
        <div class="managerWrap">
            <a-button @click="handleMan">man</a-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { SearchForm } from '@/http/type/searchForm'
import { ref, watch } from "vue"
import { useRoute, useRouter } from 'vue-router'
import { useEquipmentStore } from '@/store/equipmentStore'
const route = useRoute()
const router = useRouter()
const equipmentStore = useEquipmentStore()
let isShowSelect = ref(false)
let searchForm = ref<SearchForm>({
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
const handleSearch = async (flag = "") => {
    equipmentStore.euipmentList = []
    if (flag === 'all') {
        await equipmentStore.getEquipmentList()
    } else {
        await equipmentStore.searchEquipment(searchForm.value)
    }
    router.push("/equipmentlist")
}
const handleMan = ()=>{
    router.push('/man')
}
</script>

<style scoped>
.managerWrap{
    position: absolute;
    top: 0;
    width: 1rem;
    margin: 1rem;
}
.all {
    background-image: linear-gradient(to bottom, #1661ab, #ffffff);
    align-items: center;
}

.titleWrap {
    margin-bottom: 10%;
    padding-top: 20%;
    border-radius: 0.2rem;
    text-align: center;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.titleCardWrap {
    border-radius: 0.2rem;
    width: 75%;
    line-height: 3rem;
    font-size: 1rem;
    background-color: white;
}

.searchBoxWrap {
    width: 100%;
    height: 25%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mainContentWrap {
    border-radius: 0.2rem;
    box-shadow: 0 0 1px #fff;
    background-color: white;
    width: 80%;
    margin: 0 auto;
}

.formBox {
    margin-top: 1rem;
    width: 100%;
    box-shadow: #ffffff;
}

.searchWordWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 1rem;
}

.seachInput {
    width: 90%;
}

.searchBtn {
    width: 80%;
    background: #1661ab;
    color: #fff;
}

.offsetBottomBtn {
    width: 100%;
    height: 25%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
}


.seachAllWrap {
    margin-top: 10%;
    width: 100%;
    height: 25%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
}

.searchAllBtn {
    width: 80%;

}
</style>
  
  