<template>
  <div class="container">
    <!-- v-for="profile in data" :key="profile.id" -->
    <div class="image">
      <img
        src="https://avatars.githubusercontent.com/u/85769423?v=4"
        alt="avi"
      />
    </div>
    <div class="profile-content">
      <h2>{{ data.name }}</h2>
      <p>@{{ data.login }}</p>
      <h5>{{data.bio}}</h5>
       <h5>{{data.blog}}</h5>
      <section class="section">
        <div class="stat" id="repos">
          <p class="profile-figures" id="repo-fig">{{ data.public_repos }}</p>
          <h3 class="profile-details">Repos</h3>
        </div>
        <div class="stat">
          <p class="profile-figures">{{ data.followers }}</p>
          <h3 class="profile-details">Followers</h3>
        </div>
        <div class="stat">
          <p class="profile-figures">{{ data.following }}</p>
          <h3 class="profile-details">Following</h3>
        </div>
        <div class="stat">
          <p class="profile-figures">4</p>
          <h3 class="profile-details">Stars</h3>
        </div>
        <div class="socials">
          <h3>Get In Touch:</h3>
          <div class="icons">
            <a href="mailto:timilehinbakare.tb@gmail.com"
              ><i class="fa-solid fa-envelope"></i
            ></a>
            <a href="https://twitter.com/iam_timba" target="_blank"
              ><i class="fa-brands fa-twitter"></i
            ></a>
            <a href="https://github.com/timba1" target="_blank"
              ><i class="fa-brands fa-github"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/timilehin-fredrick-bakare"
              target="_blank"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProfileSection",
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/users/Timba1")
      .then((response) => response.data)
      .then((data) => {
        this.data = data;
      });
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

/* variables*/
$primary: green;
$base-gap: 30px;
$text-color: #4db5ff;
$background: #ffffff;
$breakpoint-minipc: 1500px;
$breakpoint-tablet: 1350px;
$breakpoint-minitab: 800px;
$breakpoint-phone: 600px;
$breakpoint-miniphone: 500px;

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(77, 115, 248, 0.03);
  border: 1px solid rgba(77, 115, 248, 0.15);
  padding: $base-gap;
  border-radius: $base-gap/3;
  @media (max-width: $breakpoint-minipc) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: $breakpoint-tablet) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: $breakpoint-minitab) {
    display: flex;
    flex-direction: column;
  }

  .image {
    width: 222px;
    height: 222px;
    padding: 5px;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      to bottom,
      $text-color,
      rgba(77, 115, 248, 0.15)
    );

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .profile-content {
line-height:2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    @media (max-width: $breakpoint-minitab) {
      line-height: normal;
      text-align: center;
    }

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      color: $text-color;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
      line-height: 10px;
    }

    h5 {
      font-weight: 600;
      font-size: 20px;
      color: $text-color;
    
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: $base-gap;
        flex-direction: column;
        justify-content: center;
      @media (max-width: $breakpoint-minitab) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .stat {
        padding: $base-gap/3;
        width: 92%;
        background: #2c2c6c;
        border-radius: 4px;
        text-align: center;
        line-height: $base-gap/3;

        @media (max-width: $breakpoint-minitab) {
          width: 92%;
        }
      }

      //     .socials {}
      .icons {
        gap: 1rem;
        a {
          margin: 0.5rem;
          color: $text-color;
        }
      }
    }
  }
}
</style>
