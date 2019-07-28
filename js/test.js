var images = ['archery', 'baseball', 'basketball', 'canoeing', 'climbing', 'cricket', 'cycling',
                          'fishing', 'football', 'golf', 'kayaking', 'lacrosse', 'nfl', 'pool', 'running',
                          'showjumping', 'skateboarding', 'surfing', 'swimming', 'tennis', 'volleyball',
                          'wakeboarding', 'waterpolo', 'weightlifting', 'whitewaterrafting', 'windsurfing', 'yoga']

var score = 0
var round = 1
var sport = []
var guess;
var num_images = images.length

sport = images[Math.floor(Math.random() * num_images)]

$('#score').text(score)
$('#round').text(round)


$("#sport-pic").html($("<img>").attr('src', 'images/'+sport+'.jpg'));

// Guess Input
$('#guess-btn').click(function () {
    guess = document.getElementById('guess-box').value
     if (guess == sport) {
         $('#feedback').text("Correct!");
         score += 10
         $('#score').text(score)
     } else {
         $('#feedback').text("Wrong!");
     }
     
})
