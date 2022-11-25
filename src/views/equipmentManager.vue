<script lang="ts" setup>
import type { UploadChangeParam, UploadProps } from 'ant-design-vue'
import { SmileOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue'
import { message } from 'ant-design-vue'
import { uploadPic } from '@/http/request'
let isShowUploader = ref<boolean>(false)
let uploading = ref<boolean>(false)
let currId = ref<string>('')
let fileList = ref<UploadProps['fileList']>([]);
const columns = [
    {
        name: '设备名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '描述',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: '操作',
        key: 'action',
    },
];

const data = [
    {
        id: '1',
        name: 'John Brown',
        description: 'New York No. 1 Lake Park',
    },
    {
        id: '2',
        name: 'Jim Green',
        description: 'London No. 1 Lake Park',
    },
    {
        id: '3',
        name: 'Joe Black',
        description: 'Sidney No. 1 Lake Park',
    },
];
const openUploader = (record:any) => {
    console.log('open uploader');
    currId.value = record.id
    isShowUploader.value = true
};
const handleChange = (info: UploadChangeParam) => {
    const status = info.file.status;
    if (status !== 'uploading') {
        console.log(info.file, info.fileList);
    }
    if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
    }
};
const handleDrop = (e: Event) => {
    console.log(e)
}
const handleOk = () => {
    isShowUploader.value = false
    handleUpload()
}
const beforeUpload: UploadProps['beforeUpload'] = file => {
    fileList.value = [...fileList.value, file];
    return false;
};
const handleUpload = async () => {
    const formData = new FormData();
    fileList.value.forEach((file: UploadProps['fileList'][number]) => {
        formData.append('files[]', file as any);
    });
    uploading.value = true;
    const res = await uploadPic(formData, currId.value)
    console.log(res)
    // request('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
    //     method: 'post',
    //     data: formData,
    // })
    //     .then(() => {
    //         fileList.value = [];
    //         uploading.value = false;
    //         message.success('upload successfully.');
    //     })
    //     .catch(() => {
    //         uploading.value = false;
    //         message.error('upload failed.');
    //     });
};
const handleRemove: UploadProps['onRemove'] = file => {
    const index = fileList.value.indexOf(file);
    const newFileList = fileList.value.slice();
    newFileList.splice(index, 1);
    fileList.value = newFileList;
};
</script>
<template>
    <div class="tableWrap">
        <a-table :columns="columns" :data-source="data">
            <template #headerCell="{ column }">
                <template v-if="column.key === 'name'">
                    <span>
                        <smile-outlined />
                        {{ column.name }}
                    </span>
                </template>
            </template>

            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'name'">
                    <a>
                        {{ record.name }}
                    </a>
                </template>
                <template v-else-if="column.key === 'action'">
                    <span>
                        <a-button type="link" @click="openUploader(record)">上传图片</a-button>
                    </span>
                </template>
            </template>
        </a-table>
    </div>
    <a-modal @ok="handleOk" :keyboard="false" :maskClosable="false" centered title="上传文件"
        v-model:visible="isShowUploader">
        <a-upload-dragger :before-upload="beforeUpload" @remove="handleRemove" :fileList="fileList" name="file"
            :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" @change="handleChange"
            @drop="handleDrop">
            <p class="ant-upload-drag-icon">
                <inbox-outlined></inbox-outlined>
            </p>
            <p class="ant-upload-text">Click or drag file to this area to upload</p>
            <p class="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
            </p>
        </a-upload-dragger>
    </a-modal>
</template>
<style scoped>
.tableWrap {
    width: 100%;
    height: 100%;
}
</style>