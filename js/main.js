var images = ['archery', 'baseball', 'basketball', 'canoeing', 'climbing', 'cricket', 'cycling',
    'fishing', 'football', 'golf', 'kayaking', 'lacrosse', 'nfl', 'pool', 'running',
    'showjumping', 'skateboarding', 'surfing', 'swimming', 'tennis', 'volleyball',
    'wakeboarding', 'waterpolo', 'weightlifting', 'whitewaterrafting', 'windsurfing', 'yoga'
];

var pixel = 20;
var blurRemoval = 4;
var blurTotal = pixel - blurRemoval;
var score = 0;
var reward = 100;
var turn = 1;
var round = 0;
var sport = [];
var guess;
var num_images = images.length;

$('#guess-box').focus()

// Display initial stats
$('#feedback').text("Let's Go!")
$('#score').text(score)
$('#round').text(round)
$('#reward').text(reward)




// New Round
function new_round() {
    // blur the image on round start 
    $("#sport-pic").css({ 'filter': 'blur(' + pixel + 'px)' });
    // Assign random sport to guess
    sport = images[Math.floor(Math.random() * num_images)];
    // Load image for round
    $("#sport-pic").html($("<img>").attr('src', 'images/' + sport + '.jpg'));
    round += 1;
    $('#round').text(round)
    reward = 100;
    $('#reward').text(reward)
}

function game_over() {
    $('#score').text(score)
    alert("Game Over. Your final score is " + score);
    location.reload();
}

// Guess Input
$('#guess-btn').click(function() {

    // Remove blur on each guess
    $("#sport-pic").css({ 'filter': 'blur(' + blurTotal + 'px)' });
    // Store value of users guess
    guess = document.getElementById('guess-box').value.toLowerCase();
    $('#guess-box').val('')
    $('#guess-box').focus()
    
    //If correct guess
    if (guess === sport) {
        $("#sport-pic").css({ 'filter': 'blur(0px)' });
    }

    // If wrong guess
    if (guess != sport) {
        // If still points left
        if (reward != 20) {
            $('#feedback').text("Wrong!");
            reward -= 20;
            $('#reward').text(reward)
            blurTotal -= 5;
        }
        // If no points left and out of guesses
        else {
            alert("No points remaining\nThe correct answer was " + sport);
            $('#feedback').text(" ")
            if (round < 3) {
                new_round();
            }
            else {
                game_over();
            }
        }
    }
    // If correct guess
    else {
        $('#feedback').text("You guessed right - Well Done!");
        score += reward;
        $('#score').text(score)
        // setTimeout(function(){ alert("Well done! You guessed correctly"); }, 500);
        // alert("Well done! You guessed correctly");
        if (round < 3) {
            new_round();
        }
        else {
            game_over();
        }
    }

    // Debugging
    console.log('blur', pixel);
    console.log('Score: ', score);
    console.log('Reward: ', reward);
    console.log('Turn: ', turn);
    console.log('Round: ', round);
    console.log('Sport: ', sport);
    console.log('Guess: ', guess);

});

new_round();
