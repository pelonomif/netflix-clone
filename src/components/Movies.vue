<template>
    <div>
        <ul v-for=" movie in movies" :key="movie.id" class="movie">
            <li>{{movie.id}}</li>
            <li>{{movie.name}}</li>
            <li>{{movie.duration}}</li>
            <li> <img :src="movie.image"/></li>
            <li>{{movie.release_date}}</li>
            <li>{{movie.description}}</li>
           

        </ul>
    </div>
</template>

<script>
 
export default {
  name: "Movies",
  data() {
    return { 
        movies: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/movies')
        .then(res => res.json())
        .then(data => this.movies = data)
        .catch(err => console.log(err.message))
  }
};
</script>

<style>
.movies img{
    width:50px;
}
ul{
    list-style: none;
}
</style>