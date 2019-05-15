<template>
    <div>
        <el-container>
            <el-header class="header" height="">
                <el-row>
                    <el-col :span="24">
                        <el-button @click="push2Back">进入后台</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="title" :span="24">失物招领</el-col>
                </el-row>
                <el-row>
                    <el-col class="level2-title" :span="24">shiwuzhaoling</el-col>
                </el-row>
                <el-row>
                    <el-col class="level3-title" :span="24">------ 2019全新上线 防诈骗系统重磅开启 ------</el-col>
                </el-row>
                <el-row>
                    <el-col class="menu" :span="24">
                        <div>
                            <router-link to="/hall">首页</router-link>
                            <router-link to="/hall">失物招领</router-link>
                            <router-link to="/hall">寻物启事</router-link>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-row class="publish-row">
                    <el-button type="danger" icon="el-icon-search">发布寻物</el-button>
                    <el-button type="danger" icon="el-icon-search">发布招领</el-button>
                </el-row>
                <el-row type="flex" justify="center" class="carousel">
                    <el-col class="level2-title" :span="12">
                        <el-carousel height="240px">
                            <el-carousel-item>
                                <el-image
                                        :src="school1Url"
                                        fit="fill"></el-image>
                            </el-carousel-item>
                            <el-carousel-item>
                                <el-image
                                        :src="school2Url"
                                        fit="fill"></el-image>
                            </el-carousel-item>
                        </el-carousel>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center" :gutter="20">
                    <el-col :span="8">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span class="card-tile">失物招领</span>
                            </div>
                            <div v-for="item in notClaimList" :key="item.id" class="text item">
                                <i class="el-icon-s-cooperation"></i>
                                <el-link type="primary" @click="showNotClaimDetail(item)"> {{ item.description }}
                                </el-link>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span class="card-tile">寻物启事</span>
                            </div>
                            <div v-for="i in claimList" :key="i.id" class="text item">
                                <i class="el-icon-search"></i>
                                <el-link type="primary" @click="showNotClaimDetail(i)">{{ i.description }}</el-link>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>

            </el-main>
            <el-footer class="footer" height="">
                <p class="top-nav">
                    <span style="color: #000">友情链接：</span>
                    <a href="https://www.sicau.edu.cn/" target="_blank">四川农业大学</a>
                </p>
                <p class="site-info">
                    <i></i>
                    <span>Copyright © 2019 四川农业大学16舍109 版权所有</span>
                </p>
            </el-footer>
        </el-container>
        <el-dialog
                title="详情"
                :visible.sync="dialogVisible"
                width="30%">
            <span>{{ dialogData.description }}</span>
            <div v-if="dialogData.status === 0">地点： {{dialogData.place.placePosition }}</div>
            <div>
                <i class="el-icon-user-solid"></i>{{ dialogData.publishUser.username }}
                <span style="margin-left: 10px"><i class="el-icon-phone"></i>{{dialogData.publishUser.phone}}</span>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>

    import {getUserById, listClaim, listNotClaim} from "../../api/api";
    import school1 from '../../assets/picture/school1.jpg'
    import school2 from '../../assets/picture/school2.jpg'

    export default {
        name: "Index",
        data() {
            return {
                notClaimList: [],
                claimList: [],
                dialogVisible: false,
                dialogData: {
                    description: '',
                    place: {
                        placePosition: ''
                    },
                    status: 1,
                    //发布人
                    publishUser: {
                        username: '',
                        phone: ''
                    }
                },
                school1Url: school1,
                school2Url: school2
            }
        },
        methods: {
            push2Back() {
                this.$router.push('/')
            },
            listNotClaim() {
                listNotClaim({}).then(data => {
                    this.notClaimList = data.data.data.list
                }).catch(err => {
                    console.error(err)
                })
            },
            listClaim() {
                listClaim({}).then(data => {
                    this.claimList = data.data.data.list
                }).catch(err => {
                    console.error(err)
                })
            },
            showNotClaimDetail(modelData) {
                getUserById({id: modelData.foundId}).then(data => {
                    this.dialogData = modelData
                    this.dialogData.publishUser = data.data.data
                })
                this.dialogVisible = true
            }
        },
        mounted() {
            this.listNotClaim()
            this.listClaim()
        }
    }
</script>

<style scoped>
    .header {
        color: white;
        background-color: rgb(200, 43, 58);
    }

    .title {
        font-size: 32px;
        text-align: center;
    }

    .level2-title {
        font-size: 16px;
        text-align: center;
    }

    .level3-title {
        font-size: 14px;
        text-align: center;
    }

    .menu {
        font-size: 18px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 5px;
    }

    .menu a:link, .menu a:visited {
        text-decoration: none;
        color: white;
    }

    .publish-row {
        text-align: center;
    }

    .publish-row button {
        background-color: rgb(200, 43, 58);
        height: 50px;
        font-size: 20px;
    }

    .carousel {
        text-align: center;
        margin-top: 20px;
    }

    .card-tile {
        font-size: 24px;
        color: #000;
        line-height: 26px;
        font-weight: 400;
    }

    .box-card {
        margin-top: 20px;
        height: 350px;
    }

    .footer {
        margin-top: 50px;
        background-color: rgb(240, 240, 240);
        text-align: center;
    }

    .footer a, .footer a:link, a:hover {
        font-weight: 400;
        color: #858585;
        margin: 0 5px;
        text-decoration: none;
    }
</style>