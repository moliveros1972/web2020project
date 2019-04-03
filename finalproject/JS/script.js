
		var body = document.getElementsByTagName('body')[0];
        // body.style="background-color:pink;"

		// set configuration values
		var time = 2000;
		var winner = 15;
		
		// create and resize the target
		var img = new Image();
		img.src = 'images/red_ghost.jpeg';
		img.style.position="absolute";
		body.appendChild(img);

		img.style.width="100px"
		img.style.position="absolute";

		// move the target for the first time
		moveTarget();

		// move the target for the first time
		var loop = setInterval(moveTarget, time);

		// create the score board
		var score = 0;
		var board = document.createTextNode(score + '/' + winner) ;
		var scoreContainer = document.getElementById('score');
		scoreContainer.appendChild(board);

		// add click event to the target
		img.onclick = function () {
			// add one to the score   <<------------------add xplosijn
			score = score + 1;
			board.nodeValue = score + '/' + winner;

			// check winning condition
			var victory = checkVictory();
			if(victory) return true;

			// move the target
			moveTarget();

			// make target go faster
			time = time - 10;
			clearInterval(loop);
			loop = setInterval(moveTarget, time);
		}

		//move the target to a random place
		function moveTarget() {
			// change the size of the target
			var size = Math.floor(Math.random() * 100) + 20;

			// calculate the new position, do not let the image go offscreen on the right
			var posH = Math.random() * window.innerWidth - size;
			var posV = Math.random() * window.innerHeight - size;

			// do not let the image go offscreen on the left
			if(posH < 0) posH = 0;
			if(posV < 0) posV = 0;

			// position the image on screen
			img.style.width = size + "px";
			img.style.top = posV + "px";
			img.style.left = posH + "px";
		}

		setInterval(function(){
		var posH = Math.random() * window.innerWidth;
		var posV = Math.random() * window.innerHeight;

		img.style.top = posV + "px";
		img.style.left = posH + "px";
		}, 1000);

		

		// check if you won the game and display the message
		function checkVictory() {
			if(score >= winner) {
				// stop the game
				clearInterval(loop);

				// clear the image click event
				img.onclick = null;

				// create victory message
				var victoryMessage = document.createElement("h1");
				victoryMessage.appendChild(document.createTextNode("Congratulations. PACKMAN lives another Day!"));
				victoryMessage.style.marginTop="200px";
				victoryMessage.style.textAlign="center";
				body.appendChild(victoryMessage);

				return true;
			}
		}

			
		

		




		

		// plays the explosion sound