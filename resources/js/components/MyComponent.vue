<template>
    <div>
        <el-switch
            v-model="value1"
            active-text="Pay by month"
            inactive-text="Pay by year">
        </el-switch>
        <el-switch
            v-model="value2"
            active-text="Pay by month"
            inactive-text="Pay by year">
        </el-switch>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: true,
                value2: false
            }
        }
    };
</script>