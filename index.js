let omdbkey="440d5507"

function searchMovie(){
    console.log("searching for movie")

    let inputTag=document.getElementById("input")
    console.log(inputTag)
    let movieName=inputTag.value
    console.log(movieName)

    let url=`http://www.omdbapi.com/?t=${movieName}&apikey=${omdbkey}`
    console.log(url)

    let httprequest=new XMLHttpRequest()
    httprequest.open("GET",url)
    httprequest.responseType="json"
    httprequest.send()

    httprequest.onload=function(){
        if(httprequest.status===200){
            console.log(httprequest.response)
            let movie=httprequest.response

            let poster=document.getElementById("poster")
            poster.src=movie.Poster

            let title=document.getElementById("title")
            title.textContent=movie.Title

            let plot = document.getElementById("plot")
            plot.textContent=movie.Plot
            
}
    }}