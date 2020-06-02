<template>
    <div class="create">
        <h2>分类列表</h2>
        <el-table :data="item">
            <el-table-column prop="_id" label="ID" width="220">
            </el-table-column>
            <el-table-column prop="parent.title" label="上级分类">
            </el-table-column>
            <el-table-column prop="title" label="分类名称">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
                <template slot-scope="scope">
                    <el-button type="primary" @click="$router.push(`/catearticle/updata/${scope.row._id}`)" size="small">编辑
                    </el-button>
                    <el-button type="danger" @click="del(scope.row)" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                item: []
            }
        },
        created() {
            this.list()
        },
        methods: {
            async list() {
                const res = await this.$http.get('/rest/catearticle')
                this.item = res.data
            },
            async del(row) {
                this.$confirm(`此操作将永久删除该数据:"${row.title}", 是否继续?`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async () => {
                    await this.$http.delete(`/rest/catearticle/${row._id}`)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.list()
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
                
            }
        }
    }
</script>