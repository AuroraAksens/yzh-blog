<template>
    <div class="create">
        <h1>{{id ? '编辑' : '新建'}}Swiper</h1>
        <el-col :span="20" style="margin-top: 40px;">
            <el-form @submit.native.prevent="save" label-width="150px">  
                <el-form-item label="Swiper名称">
                    <el-input v-model="model.title"></el-input>
                </el-form-item>
                <el-form-item label="Swiper">
                    <el-button @click="model.items.push({})"><i class="el-icon-plus"></i>添加Swiper</el-button>
                        <el-row type="flex" style="flex-wrap: wrap;">
                            <el-col :md="24" style="margin: 2rem;padding: 1rem;border: 1px solid gainsboro;" v-for="(item,i) in model.items" :key="i">
                                <el-form-item label="链接(URL)">
                                    <el-input v-model="item.link" ></el-input>
                                </el-form-item>
                                <el-form-item label="SwiperImg" style="margin-top: 1rem;">
                                    <el-upload class="avatar-uploader" 
                                        :action="$http.defaults.baseURL + '/upload'"
                                        :show-file-list="false" 
                                        :on-success="res => $set(item,'img',res.url)">
                                        <img v-if="item.img" :src="item.img" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height: 178px;"></i>
                                    </el-upload>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="danger" 
                                    @click="model.items.splice(i,1)">删除</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
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
        props: {
            id: {}
        },
        data() {
            return {
                model: {
                    items:[]
                },
            }
        },
        created() {
            this.id && this.list()
        },
        methods: {
            async save() {
                var res
                if (this.id) {
                    res = await this.$http.put(`/rest/swiper/${this.id}`, this.model)
                } else {
                    res = await this.$http.post('/rest/swiper', this.model)
                }
                this.$router.push('/swiper/list')
                this.$message({
                    type: 'success',
                    message: '保存成功'
                })
            },
            
            async list() {
                const res = await this.$http.get(`/rest/swiper/${this.id}`)
                this.model = Object.assign({},this.model,res.data)
            },

            tui() {
                this.$router.push('/swiper/list')
            },

            upImg(res){
                this.$set(this.model,'img' ,res.url)
                // this.model.img = res.url
            }
        }
    }
</script>
