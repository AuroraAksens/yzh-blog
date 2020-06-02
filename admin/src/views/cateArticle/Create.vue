<template>
    <div class="create">
        <h1>{{id ? '编辑' : '新建'}}导航条内容</h1>
        <el-col :span="12">
            <el-form  label-width="120px" style="margin-top: 40px;" @submit.native.prevent="save">
                <el-form-item label="分类名称">
                    <el-input v-model="model.title"></el-input>
                </el-form-item>
                <el-form-item label="父级分类">
                    <el-select v-model="model.parent" placeholder="选择父级分类">
                        <el-option v-for="item in parent" :key="item._id" :label="item.title" :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit">保存</el-button>
                    <el-button @click="tui">取消</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<script>
    export default {
        props:{
            id:{}
        },
        data(){
            return {
                model: {},
                parent:{}
            }
        },
        created(){
            this.listParent()
            this.id && this.list()
        },
        methods:{
            async save(){
                var res
                if(this.id){
                    res = await this.$http.put(`/rest/catearticle/${this.id}`,this.model)
                }else{
                    res = await this.$http.post('/rest/catearticle',this.model)
                }
                this.$router.push('/catelist/list')
                this.$message({
                    type:'success',
                    message:'保存成功'
                })
            },
            async list(){
                const res = await this.$http.get(`/rest/catearticle/${this.id}`)
                this.model = res.data
            },
            async listParent(){
                const res = await this.$http.get(`/rest/catearticle`)
                this.parent = res.data
            },
            tui(){
                this.$router.push('/catelist/list')
            }
        }
    }
</script>

<style>

</style>