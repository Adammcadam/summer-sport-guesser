var images = ['archery', 'baseball', 'basketball', 'canoeing', 'climbing', 'cricket', 'cycling',
                          'fishing', 'football', 'golf', 'kayaking', 'lacrosse', 'nfl', 'pool', 'running',
                          'showjumping', 'skateboarding', 'surfing', 'swimming', 'tennis', 'volleyball',
                          'wakeboarding', 'waterpolo', 'weightlifting', 'whitewaterrafting', 'windsurfing', 'yoga']

var score = 0
var sport = []
var answer;
var num_images = images.length

sport = images[Math.floor(Math.random() * num_images)]

$("#sport-pic").html($("<img>").attr('src', 'images/'+sport+'.jpg'));

// Guess Input
$('#guess-btn').click(function () {
    answer = document.getElementById('guess-box').value
     if (answer == sport) {
         $('#feedback').text("Correct!");
     } else {
         $('#feedback').text("Wrong!");
     }
     
})
