<template>
    <div class="listWrap">
        <a-list item-layout="horizontal" :data-source="euipmentList">
            <template #renderItem="{ item }">
                <a-list-item>
                    <a-list-item-meta :description="item.overview">
                        <template #title>
                            <div class="title_id">{{ `${item.id} || ${item.equipmentId}` }}</div>
                            <a-button @click="turnToDetail">{{ item.name }}</a-button>
                        </template>
                        <template #avatar>
                            <a-avatar :src="item.avator" />
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
const router = useRouter()
const equipmentStore = useEquipmentStore()
const euipmentList = ref(equipmentStore.euipmentList)
const turnToDetail = () => {
    console.log('detail')
    router.push('/deailequipment')
}
</script>

<style scoped>
.title_id {
    font-size: xx-small;
    color: #afb5c6;
}

.listWrap {
    margin-left: 1rem;
}
</style>