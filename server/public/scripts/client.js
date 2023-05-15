console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    // console.log('DOM ready');
    $('#addJokeButton').on('click',addJokes)
    getJokes()
   
}





function addJokes(event){
    event.preventDefault();

let whoseJoke = $('#whoseJokeIn').val()
let jokeQuestion = $('#questionIn').val()
let punchLine = $('#punchlineIn').val()


$.ajax({
    method: 'POST',
    url: '/jokes',
    data:{
      whoseJoke,
      jokeQuestion,
      punchLine
}
}).then(function(response){
    console.log('Success!');
    getJokes()
}).catch(function (error){
    alert('Error!')
    console.log('in my post func', error)
})


}

function getJokes() {
       
        $.ajax({
            method: 'GET',
            url: '/jokes'
    
        }).then(function (response){
            // console.log(response)
            renderDom(response)

        }).catch(function(error){
            console.log('my jokes get ',error)
        })



    }

function renderDom(arr){

    //  let whoJ = $('#whoseJokeIn').val()
    // let questionJ = $('#questionIn').val()
    // let punchJ = $('#punchlineIn').val()
        $('#outputDiv').empty();
    
        for( joke of arr){
              
        $('#outputDiv').append(`<li> ${joke.whoseJoke} said  ${joke.jokeQuestion} ? ${joke.punchLine} ! </li>`)
        }
    }
