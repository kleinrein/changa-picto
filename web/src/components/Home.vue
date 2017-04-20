<template>
	<div class="hello">
		<input type="text" placeholder="search" class="input-search" v-model="search" />
		<div class="icons">
			<div v-for="icon in icons" v-if="icon.replace('.svg', '') === search || icon.replace('.svg', '').includes(search)" class="icon" @click="showModal = true; iconName = icon;">
				<span class="icon-title">{{icon.replace('.svg', '')}}</span>
				<img class="icon-img" :src="imgUrl(icon)" v-bind:alt="icon">
			</div>
		</div>

		<div v-if="showModal" class="modal">
			<h3>{{iconName}}</h3>
			<h2>DOWNLOAD AS</h2>

			<img id="test" :src="imgUrl(iconName)" />

		    <button type="submit">PNG</button>
			<button>SVG</button>


		</div>
	</div>
</template>

<script>
var icons = require.context('../../../svg/', false, /\.svg$/)

export default {
	name: 'hello',
	data() {
		return {
			showModal: false,
			imgUrl: function (path) {
		      return icons('./' + path)
		   	},
			search: '',
			iconName: '',
			iconUrl: '',
			icons: ["changa_ban-o.svg", "changa_ban.svg", "changa_beer.svg", "changa_bell.svg", "changa_bluetooth-circle-o.svg", "changa_bluetooth-circle.svg", "changa_bluetooth-full.svg", "changa_bluetooth.svg", "changa_calendar.svg", "changa_caret-left.svg", "changa_caret-right.svg", "changa_caret-s-left.svg", "changa_caret-s-right.svg", "changa_check-circle-o.svg", "changa_check-circle.svg", "changa_check-square.svg", "changa_check.svg", "changa_cigarette.svg", "changa_circle-dot.svg", "changa_circle-open.svg", "changa_circle.svg", "changa_clock.svg", "changa_cloud-o.svg", "changa_cloud.svg", "changa_comment-o.svg", "changa_comment.svg", "changa_commenting-o.svg", "changa_commenting.svg", "changa_cross.svg", "changa_email-circle-o.svg", "changa_email-circle.svg", "changa_email.svg", "changa_flag-o.svg", "changa_flag.svg", "changa_heart-o.svg", "changa_heart.svg", "changa_hourglass.svg", "changa_location.svg", "changa_lock-closed.svg", "changa_lock-open.svg", "changa_message.svg", "changa_pause-circle-o.svg", "changa_pause-circle.svg", "changa_pause.svg", "changa_pill-circle-o.svg", "changa_pill-circle.svg", "changa_pill.svg", "changa_play-circle-o.svg", "changa_play-circle.svg", "changa_play.svg", "changa_rss-circle.svg", "changa_rss.svg", "changa_search-circle.svg", "changa_search.svg", "changa_settings.svg", "changa_sound-volume-low-circle.svg", "changa_sound-volume-low-square.svg", "changa_sound-volume-low.svg", "changa_sound-volume-max-circle.svg", "changa_sound-volume-max-square.svg", "changa_sound-volume-max.svg", "changa_sound-volume-mute-circle.svg", "changa_sound-volume-mute-square.svg", "changa_sound-volume-mute.svg", "changa_star-o.svg", "changa_star.svg", "changa_stop-circle-0.svg", "changa_stop-circle.svg", "changa_stop.svg", "changa_syringe.svg", "changa_telephone-circle-o.svg", "changa_telephone-circle.svg", "changa_telephone-square.svg", "changa_telephone.svg", "changa_toggle-off.svg", "changa_toggle-on.svg", "changa_trash.svg", "changa_user.svg", "changa_web-open.svg", "changa_web.svg", "changa_wifi-circle.svg", "changa_wifi-signal.svg", "changa_wifi.svg"]
		}
	}
}
</script>
