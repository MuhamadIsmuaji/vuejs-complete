import Home from './components/Home.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import User from './components/user/User.vue'
import Header from './components/Header.vue'

export const routes = [
	{path: '', name: 'home', components: {
		default: Home,
		'header-top': Header,
	}},
	{path: '/user', components: {
		default: User,
		// 'header-bottom': Header,
		'header-top': Header,
	}, children: [
		{path: '', component: UserStart},
		{path: ':id', component: UserDetail},
		{path: ':id/edit', component: UserEdit, name: 'userEdit'},
	]}, // example.com/user
	{path: '/redirect-me', redirect: '/user'},
	{path: '*', redirect: {name: 'home'}}
];