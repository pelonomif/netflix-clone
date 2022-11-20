<template>
    <div>
        <ul v-for=" movie in movies" :key="movie.id" class="movie">
            <li>{{movie.id}}</li>
            <li>{{movie.name}}</li>
            <li>{{movie.duration}}</li>
            <li> <img :src="movie.image + movie.id"/></li>
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


div {
  text-align: center;
  padding: 10px 20px;
}

.movie {
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    border: 1px solid blue;

}

img{
    max-width: 100%;
    height: 200px;
    padding: 10%;
}
ul{
    list-style: none;
}

</style>