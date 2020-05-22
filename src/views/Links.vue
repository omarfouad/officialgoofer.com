<template>

	<div class="links">
		<links-header v-if="headerReady" :data="headerData"></links-header>

		<div class="link-list">
			<template v-for="link in links">
				<link-item :data="link"></link-item>
			</template>
		</div>

		<div class="copyright">&copy 2020 Goofer - All Rights Reserved.</div>
	</div>
</template>

<script>
var contentful = require('contentful')
var axios = require('axios')

import Link from '../components/Link.vue'
import LinksHeader from '../components/LinksHeader.vue'
import Notifier from '../utils/Notifier.js'

export default {
	created() {
		
		Notifier("Links Page")

		var client = contentful.createClient({
			space: 'vi6hl46udqpd',
			accessToken: 'wBpUPHueY1ncouzLSMTmYmH5cAcxHNlqb1ERBzrToDc'
		})

		client.getEntries({
			'content_type': 'link',
			order: '-fields.order'
		}).then((entries) => {
			this.links = entries.items
		})

		client.getEntries({
			'content_type': 'linksHeader'
		}).then((entries) => {
			this.headerData = entries.items[0].fields
			this.headerReady = true
		})
	},

	data() {
		return {
			links: [],
			headerData: {},
			headerReady: false
		}
	},

	components: {
		"link-item": Link,
		"links-header": LinksHeader
	}
}
</script>

<style lang="sass">
	.link-list
		padding: 10px 30px
		max-width: 1000px
		margin: 0 auto

	.copyright
		text-align: center
		font-size: 12px
		padding-bottom: 30px
		color: rgba(white, 0.4)

</style>