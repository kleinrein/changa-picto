<template>
	<div class="hello">
		<input type="text" placeholder="search" class="input-search" v-model="search" />

		<div class="icons">
			<div v-for="icon in icons" v-if="icon.replace('.svg', '') === search || icon.replace('.svg', '').includes(search)" class="icon">
				<span class="icon-title">{{icon.replace('.svg', '')}}</span>
				<img class="icon-img" :src="imgUrl(icon)">
			</div>
		</div>
	</div>
</template>

<script>
var icons = require.context('../../../svg/', false, /\.svg$/)

export default {
	name: 'hello',
	data() {
		return {
			imgUrl: function (path) {
		      return icons('./' + path)
		   	},
			search: '',
			icons: ["comment-o.svg", "comment.svg", "commenting-o.svg", "commenting.svg", "messaging.svg"]
		}
	}
}
</script>
