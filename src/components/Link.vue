<template>
  <a class="link-item" :href='data.fields.linkUrl'>
    <div class="link-wrapper">
      <div class="beacon" :id="'beacon_' + data.sys.id" ></div>
      <div class="artwork">
        <img crossorigin="anonymous" @load="onLoad(data.sys.id)" :id="'image_' + data.sys.id" :src="data.fields.image.fields.file.url" alt="">
      </div>
      
      <div class="details">
        <div class="title">{{data.fields.title}}</div>
        <div class="details">{{data.fields.details}}</div>
      </div>
    </div>
  </a>
</template>

<script>
import FastAverageColor from 'fast-average-color'

export default {
  props: ['data'],
  
  methods: {
		onLoad(id){
			let fac = new FastAverageColor()
			let image = document.querySelector('#image_' + id)
			let beacon = document.querySelector('#beacon_' + id)

			fac.getColorAsync(image).then((color) =>  {
				beacon.style.backgroundColor = color.hex
				beacon.style.visibility = "visible"
			})	
		}
	},
}
</script>

<style lang="sass" scoped>


.link-item
	margin-bottom: 20px
	display: block

.link-item .link-wrapper:after
	content: ""
	clear: both 
	display: table

.link-item .link-wrapper 
	display: block
	height: 80px
	border-radius: 4px
	padding: 0 10px
	margin-left: 10px
	background-color: #333
	color: white
	position: relative

	& > .beacon
		visibility: hidden
		position: absolute
		border-radius: 4px
		width: 60px
		height: 60px
		top: 10px
		background-color: red
		left: -10px
		animation: beacon 1.8s infinite running
		@media (max-width: 480px)
			left: -20px
		
	& > .artwork
		width: 60px
		height: 60px
		padding: 10px 0
		overflow: hidden
		float: left
		border-radius: 4px
		position: relative
		left: -20px
		@media (max-width: 480px)
			left: -30px
		
		& > img
			width: 100%

	& > .details
		padding: 15px 0px 0px 0px
		float: left
		@media (max-width: 480px)
			position: relative
			left: -15px

		& > .title
			color: #f2f2f2
			word-wrap: break-word
			
		& > .details
			color: #999
			font-size: 14px
			padding: 2px 0

@keyframes beacon
	0%
		opacity: 1
		transform: scale(0)
	50%
		opacity: 0.2
	100%
		transform: scale(1.5)
		opacity: 0
</style>