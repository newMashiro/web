<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column type="index" width="60">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120" sortable>
				</el-table-column>
				<el-table-column prop="username" label="用户名" width="100" sortable>
				</el-table-column>
				<el-table-column prop="grade" label="年级" width="100" sortable>
				</el-table-column>
				<el-table-column prop="role.role" label="角色名" width="120" sortable>
				</el-table-column>
				<el-table-column prop="role.description" label="角色描述" min-width="180" sortable>
				</el-table-column>
			</el-table>
		</template>

	</section>
</template>
<script>
	import { getUserList } from '../../api/api';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				loading: false,
				users: [
				],
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//获取用户列表
			getUser: function () {
				let para = {
					name: this.filters.name
				};
				this.loading = true;
				//NProgress.start();
				//getUserList(para)把用户输入的name传给mock中，
				//res是Mock通过筛选后传回来的数据
				getUserList(para).then((res) => {
					this.users = res.data.data.list;
					// for(var i = 0; i < users.length; i++){
					// 	this.users[i].roleXX = this.users[i].role.description;
					// 	console.log(this.users.roleXX);
					// }
					this.loading = false;
					//NProgress.done();
				});
				//getUserList(para){}.then(
//					function(res){
						//.....
//						}
//					)
			}
		},
		mounted() {
			this.getUser();
		}
	};

</script>

<style scoped>

</style>