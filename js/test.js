var images = ['archery', 'baseball', 'basketball', 'canoeing', 'climbing', 'cricket', 'cycling',
    'fishing', 'football', 'golf', 'kayaking', 'lacrosse', 'nfl', 'pool', 'running',
    'showjumping', 'skateboarding', 'surfing', 'swimming', 'tennis', 'volleyball',
    'wakeboarding', 'waterpolo', 'weightlifting', 'whitewaterrafting', 'windsurfing', 'yoga'
]

var score = 0
var reward = 100
var turn = 1
var round = 0
var sport = []
var guess;
var num_images = images.length

$('#guess-box').focus()

// Display initial stats
$('#feedback').text(" ")
$('#score').text(score)
$('#round').text(round)
$('#reward').text(reward)


// Debugging
console.log('Score: ', score)
console.log('Reward: ', reward)
console.log('Turn: ', turn)
console.log('Round: ', round)
console.log('Sport: ', sport)
console.log('Guess: ', guess)

// Tile overlay


// New Round
function f_new_round() {
    // Assign random sport to guess
    sport = images[Math.floor(Math.random() * num_images)]
    // Load image for round
    $("#sport-pic").html($("<img>").attr('src', 'images/' + sport + '.jpg'));
    round += 1
    $('#round').text(round)
    reward = 100
    $('#reward').text(reward)
}

function game_over() {
    alert("Game Over. Your final score is " + score);
    location.reload();
}

// Guess Input
$('#guess-btn').click(function() {
    // Store value of users guess
    guess = document.getElementById('guess-box').value
    // Clear input field
    $('#guess-box').val('')
    $('#guess-box').focus()

    if (guess != sport && reward >= 20) {
        $('#feedback').text("Wrong!");
        reward -= 20;
        $('#reward').text(reward)
    }
    else if (guess != sport && reward < 20) {
        $('#feedback').text("Wrong - Out of guesses. Correct answer was " + sport)
        if (round < 6) {
            f_new_round();
        }
        else {
            game_over()
        }
    }
    else {
        $('#feedback').text("Correct!");
        score += reward
        $('#score').text(score)
        if (round < 3) {
            f_new_round();
        }
        else {
            game_over()
        }
    }
})

f_new_round()
blockOverlay()

