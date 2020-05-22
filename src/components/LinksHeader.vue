<template>
  <div class="links-header">
    <div class="cover" :style="'background-image: url(' + data.coverphoto.fields.file.url + ')'"> </div>
    <div class="profile-card">
      <div class="avatar" :style="'background-image: url(' + data.avatar.fields.file.url + ')'"></div>
      <div class="profile-content">
        <div class="name">Goofer</div>
        <div class="bio">{{data.bio.content[0].content[0].value}}</div>
        <div class="social-links">
          <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:00ka0j0W9lE9iO3obHwOxd&size=basicl&theme=light&show-count=0" width="92" height="26" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>
          <a href="https://open.spotify.com/artist/00ka0j0W9lE9iO3obHwOxd"></a>
        </div>
        <div class="social-icons">
          <a class="social-icon-item" :href="data.youtubeurl"><img src="../assets/youtube.svg" alt=""> </a>
          <a class="social-icon-item" :href="data.instagramurl"><img src="../assets/instagram.svg" alt=""></a>
          <a class="social-icon-item" :href="data.soundcloudurl"><img src="../assets/soundcloud.svg" alt=""></a>
          <a class="social-icon-item" :href="data.twitterurl"><img src="../assets/twitter.svg" alt=""></a>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name: "links-header",
  props: ['data'],
  
}
</script>

<style lang="sass" scoped>
  
  .links-header
    margin-bottom: -150px
    @media (max-width: 990px)
      margin-bottom: -60px
    @media (max-width: 480px)
      margin-bottom: -90px
    

  .cover
    height: 400px
    background-size: cover
    background-position: center center
    @media (max-width: 990px)
      height: 200px
    @media (max-width: 768px)
      height: 125px

  .profile-card
    max-width: 1000px
    height: 340px
    background-color: #333
    position: relative
    top: -180px
    margin: 0 auto
    @media (max-width: 990px)
      top: 0
      background-color: transparent
    @media (max-width: 480px)
      top: 15px

    .avatar
      width: 200px
      height: 200px
      overflow: hidden
      border-radius: 100% 
      background-size: cover
      background-position: center center
      position: relative
      top: -75px
      margin: 0 auto

      @media (max-width: 990px)
        width: 150px
        height: 150px
      @media (max-width: 480px)
        width: 120px
        height: 120px
      
    .profile-content
      margin: 0 auto
      position: relative
      top: -65px

      .name
        font-size: 30px
        color: white
        text-align: center
        font-weight: 600
        margin-bottom: 3px
        
      .bio
        margin-bottom: 20px
        text-align: center

      .social-links
        text-align: center
        margin-bottom: 10px
        position: relative

        & > a
          position: absolute
          left: 0
          right: 0
          top: 0
          bottom: 0

      .social-icons
        text-align: center

        & > .social-icon-item
          overflow: hidden
          width: 41px
          height: 41px
          background-color: #242424
          display: inline-block
          border-radius: 100%
          margin: 0 5px
          & > img
            width: 100%

</style>