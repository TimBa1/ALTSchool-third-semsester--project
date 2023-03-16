<template>
  <div class="container">
    <h1 className="repo-header">Repositories</h1>
    <ul class="repo">
      <li class="repo-container" v-for="repo in paginatedRepositories" :key="repo.id">
        <router-link class="link" :to="{ name: 'SingleRepo', params: { id: repo.id } }">
          <h2>{{ repo.name }}</h2>

          <p class="desc">{{ repo.description }}</p>
          <div class="icon">
            <p class="id">ID:{{ repo.id }}</p>
            <i class="fa-solid fa-layer-group"></i>
          </div>
          <div class="lang-size">
            <p className="repo-lang"><i class="fa-regular fa-circle-dot"></i> {{ repo.language }}</p>
            <p className="repo-size">{{ repo.size }}Kb</p>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="btn-container">
      <button @click="currentPage--" :disabled="currentPage === 1" :class="{ disabled: currentPage === 1 }">
        Prev
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="currentPage++" :disabled="currentPage === totalPages"
        :class="{ disabled: currentPage === totalPages }">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RepoSection",

  data() {
    return {
      repositories: [],
      currentPage: 1,
      perPage: 8,
      totalPages: 0,
    };
  },
  methods: {
    async fetchRepositories() {
      this.loading = true;
      try {
        const response = await axios.get(
          "https://api.github.com/users/timba1/repos"
        );
        console.log(response);
        this.repositories = response.data;
        this.totalPages = Math.ceil(this.repositories.length / this.perPage);
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    paginatedRepositories() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.repositories.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.fetchRepositories();
  },
};
</script>



<style lang="scss" scoped>
@use 'sass:math';

/* variables*/
$primary:#4db5ff ;
$base-gap: 30px;
$text-color:#4db5ff ;
$background: #ffffff;
$breakpoint-minipc:1500px;
$breakpoint-tablet:1350px;
$breakpoint-minitab:800px;
$breakpoint-phone:600px;
$breakpoint-miniphone:500px;

.container {
  margin: 30px 0;

  .repo-header {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: $text-color;
  }

  .repo {
    padding: 20px;
    display: grid;
    gap: $base-gap;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    list-style: none;

    .link {
      text-decoration: inherit;
      color: inherit;
    }

    .repo-container {
      box-sizing: border-box;
      background: #2c2c6c;
      border: 1px solid rgba(77, 115, 248, 0.15);
      border-radius: 6px;
      padding: $base-gap/2 $base-gap;
      height: 330px;

      &:hover {
        box-shadow: 14px 8px 15px -1px rgba(0, 0, 0, 0.39);
        -webkit-box-shadow: 14px 8px 15px -1px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 14px 8px 15px -1px rgba(0, 0, 0, 0.2);
        transition: all ease-out 0.7s;
      }

      h2 {
        color: $primary;
      }

      .desc {
        font-size: 16px;
      }

      .icon {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .fa-layer-group {
          color: $primary;
        }

        .id {
          color: #616161;
        }
      }


      .lang-size {
        display: flex;
        justify-content: space-between;
        font-size: 15px;

        .fa-circle-dot {
          color: $primary;
        }
      }
    }
    @media(max-width: $breakpoint-minipc){
      grid-template-columns:1fr 1fr 1fr ;
    }
    @media(max-width: $breakpoint-tablet){
      grid-template-columns:1fr 1fr ;
    }
    @media(max-width: $breakpoint-minitab){
      grid-template-columns:1fr  ;
    }
  }

  .btn-container {
    text-align: center;

    button {
      margin: $base-gap/3;
      background: $primary;
      border: none;
      border-radius: 10px;
      padding: 10px 20px;
      color: $background;

      &:hover {
        background: rgba(77, 115, 248, 0.5);
        color: $text-color;
      }
    }

    span {
      color: #616161;
      font-size: 15px;
    }
  }
}
</style>