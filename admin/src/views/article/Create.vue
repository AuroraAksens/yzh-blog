<template>
    <div class="create">
        <h1>{{id ? '编辑' : '添加'}}文章</h1>
        <el-col :span="18" style="margin-top: 40px;">
            <el-form @submit.native.prevent="save" label-width="150px">
                <el-form-item label="文章标题">
                    <el-input v-model="model.title"></el-input>
                </el-form-item>
                <el-form-item label="文章简介">
                    <el-input :rows="4" type="textarea" v-model="model.brief"></el-input>
                </el-form-item>
                <el-form-item label="所属分类">
                    <el-select v-model="model.cateArticle" placeholder="选择所属分类">
                        <el-option v-for="item in listcate" :key="item._id" :label="item.title" :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="文章封面" style="margin-top: 1rem;">
                    <el-upload class="avatar-uploader" :action="$http.defaults.baseURL + '/upload'"
                        :show-file-list="false" :on-success="upImg">
                        <img v-if="model.image" :src="model.image" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height: 178px;"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="文章内容">
                    <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="model.body"></vue-editor>
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
    import { VueEditor } from "vue2-editor";

    export default {
        components: {
            VueEditor
        },
        props: {
            id: {}
        },
        data() {
            return {
                model: {},
                listcate: {}
            }
        },
        created() {
            this.listCate()
            this.id && this.list()
        },
        methods: {

            //editor
            async handleImageAdded(file, Editor, cursorLocation, resetUploader) {

                var formData = new FormData();
                formData.append("file", file);

                const res = await this.$http.post('upload',formData);
                Editor.insertEmbed(cursorLocation, "image", res.data.url);
                resetUploader();
            },

            async save() {
                var res
                if (this.id) {
                    res = await this.$http.put(`/rest/article/${this.id}`, this.model)
                } else {
                    res = await this.$http.post('/rest/article', this.model)
                }
                this.$router.push('/article/list')
                this.$message({
                    type: 'success',
                    message: '保存成功'
                })
            },

            async list() {
                const res = await this.$http.get(`/rest/article/${this.id}`)
                this.model = res.data
            },

            async listCate() {
                const res = await this.$http.get(`/rest/catearticle`)
                this.listcate = res.data
            },

            tui() {
                this.$router.push('/article/list')
            },
            upImg(res) {
                this.$set(this.model, 'image', res.url)
                //  this.model.image = res.url
            }
        }
    }
</script>