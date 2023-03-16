<template>
    <div class="repos-container">
        <div class="repos">
            <p @click="redirectToHome" class="btn">X</p>
            <h1>{{ repo.name }}</h1>
            <p class="desc">{{ repo.description }}</p>
            <div class="space">
                <p><i class="fa-solid fa-code"></i> Language</p>
                <p class="details">{{ repo.language }}</p>
            </div>
            <div class="space">
                <p><i class="fa-solid fa-eye"></i> Visiblity</p>
                <p class="details">{{ repo.visibility }}</p>
            </div>
            <div class="space">
                <p><i class="fa-solid fa-calendar-days"></i> Created At</p>
                <p class="details">{{ repo.created_at }}</p>
            </div>
            <p>Link: <a class="links" :href="repo.html_url">
                    {{ repo.html_url }}</a>
            </p>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            repo: {},
        };
    },
    async created() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch(
            `https://api.github.com/repositories/${this.$route.params.id}`
        );
        const data = await response.json();
        this.repo = data;
    },
    methods: {
        redirectToHome() {
            this.$router.push("/");
        },
    },
    mounted() { },
};
</script>
  
<style lang="scss" scoped>
@use 'sass:math';

/* variables*/
$primary:#4db5ff ;
$base-gap: 30px;
$text-color:#4db5ff ;
$background: #2c2c6c;
$breakpoint-minipc:1500px;
$breakpoint-tablet:1350px;
$breakpoint-minitab:800px;
$breakpoint-phone:600px;
$breakpoint-miniphone:500px;


.repos-container {
    display: flex;
    justify-content: center;
    align-items: center;




    .repos {
        background-color: $background ;
        padding: $base-gap*1.5 $base-gap;
        border-radius: 6px;
        border: 1px solid rgba(77, 115, 248, 0.15);


        .btn {
            cursor: pointer;
            color: $primary;
            font-weight: 600;
            font-size: 20px;
            text-align: right;
        }

        h1 {
            font-weight: 600;
            font-size: 20px;
            text-align: center;
            color: $text-color;
            margin: 30px 0;
        }

        .desc {
            text-align: center;
            color:rgba(255, 255, 255, 0.6);
        }

        .space {
            display: flex;
            justify-content: space-between;

            .fa-code,
            .fa-eye,
            .fa-calendar-days {
                color: $primary;
                font-size: 18px;
            }

            .details {
                font-weight: 600;
                font-size: 16px;

            }
            p{
                color:rgba(255, 255, 255, 0.6);
            }
        @media(max-width : $breakpoint-miniphone){
            justify-content: center;
            gap: $base-gap/3;
        }
        }

        .links{
            text-decoration: none;
            color: rgba(255, 255, 255, 0.6);
            font-size: 17px;

            &:hover{
                text-decoration: underline;
            }
        }
    }
}
</style>