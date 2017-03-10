<template>
<div class="hello">
	<input type="text" placeholder="search" class="input-search" v-model="search" />

	<div class="icons">
		<div v-for="icon in icons" class="icon hexagon">
			<span class="icon-title">{{icon.title}}</span>
			<img class="icon-img" :src="imgUrl(icon.filename)">
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
			icons: [{
					title: 'Comment',
					filename: "comment.svg"
				},
				{
					title: 'Comment O',
					filename: 'comment-o.svg'
				}
			]
		}
	}
}
</script>
