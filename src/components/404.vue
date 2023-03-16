<template>
    <div class="container">
      
        <h1 className="error">Error</h1>
        <h2 className="not-found">Oops, Page not Found!</h2>
          
          <router-link to="/" class="link">
              <p className="error-button">Back to Home Page</p>
          </router-link>
    </div>
</template>

<script>
export default {
    name: "NotFound",
} 
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30vh 0;
    flex-direction: column;

    .error{
        color: red;
    }

    .link{
        text-decoration: none;
    }
    .error-button{
        background-color: #4D73F8;
        color: #ffffff;
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
    }
}

</style>