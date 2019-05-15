import Login from './views/Login.vue'
import Register from './views/Register.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import PlantDetect from './views/nav2/PlantDetect.vue'
import AdvancedGeneral from './views/nav2/AdvancedGeneral.vue'
import AnimalDetect from './views/nav2/AnimalDetect.vue'
import CarDetect from './views/nav2/CarDetect.vue'
import DishDetect from './views/nav2/DishDetect.vue'
import Page6 from './views/nav3/Page6.vue'
import userInfo from './views/userInfo/User.vue'
import lostInfo from './views/lostInfo/Lost.vue'
import article from './views/article/Article.vue'
import articleDetail from './views/article/articleDetail.vue'
import {checkRole,ROLE_ENUM} from './api/permission'
import Hall from "./views/hall/Hall";

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/register',
        component: Register,
        name: '',
        hidden: true
    },
    {
        path: '/hall',
        component: Hall,
        name: 'hall',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/about', component: Page6, name: '个人信息模块'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            //,hidden: !checkRole(ROLE_ENUM.SYS.ADMIN)
            { path: '/lostInfo', component: lostInfo, name: '失物管理模块'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            //,hidden: !checkRole(ROLE_ENUM.SYS.ADMIN)
            { path: '/userinfo', component: userInfo, name: '人员管理模块'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/article', component: article, name: '失物招领模块'},
            { path: '/articleDetail', component: articleDetail, name: '失物招领模块'}
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;