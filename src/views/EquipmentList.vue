<template>
    <div class="pageHeaderbox">设备查询</div>

    <div class="listWrap">
        <a-list item-layout="horizontal" :data-source="euipmentList">
            <template #renderItem="{ item }">
                <a-list-item>
                    <a-list-item-meta :description="item.equipment_description">
                        <template #avatar>
                            <a-avatar :src="item.avator" />
                        </template>
                        <template #title>
                            <div class="title_id">{{ `${item.id} || ${item.equipment_id}` }}</div>
                            <div @click="turnToDetail(item)">{{ item.equipment_name }}</div>
                        </template>
                    </a-list-item-meta>
                </a-list-item>
            </template>
        </a-list>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useEquipmentStore } from '@/store/equipmentStore';
import { CurrEquipmentInfo } from '@/types/CurrEquipmentInfo';
const router = useRouter()
const equipmentStore = useEquipmentStore()
const euipmentList = ref(equipmentStore.euipmentList)
const turnToDetail = (item: CurrEquipmentInfo) => {
    equipmentStore.currEquipmentInfo = item
    router.push('/deailequipment')
}
</script>

<style scoped>
.pageHeaderbox {
    background: #1661ab;
    text-align: center;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
}

.title_id {
    font-size: xx-small;
    color: #afb5c6;
}

.listWrap {
    margin-left: 1rem;
}
</style>