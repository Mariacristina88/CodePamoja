var Carousel = function (frameSelector, sliderSelector, slidesSelector, btnLeftSelector, btnRightSelector) {
	    var leftPosition = 0;
	    
	    var frame = document.querySelector(frameSelector);
	    
	    var slides = document.querySelectorAll(slidesSelector);
	        
	    var slidesNumber = slides.length;
	    
	    var leftButton = document.querySelector(btnLeftSelector);
	    
	    var rightButton = document.querySelector(btnRightSelector);
	    
	    var slider = document.querySelector(sliderSelector);

	    frame.classList.add('frame');

	    leftButton.addEventListener("click", function(){ 
	    	carousel.previous(); 
	    });

		rightButton.addEventListener("click", function(){ 
			carousel.next(); 
		});
	    
	    for (var i = 0; i < slidesNumber; i++) 
		{
	        slides[i].classList.add('slide');
	    }
	    
	    leftButton.innerHTML = '<<';
	    leftButton.style.visibility = 'visible';
	    
	    rightButton.innerHTML = '>>';
	    rightButton.style.visibility = 'visible';
	    
	    var moveSlide = function (value)
	    {    
	        leftPosition += value*100;
	        slider.style.left = leftPosition + '%'; 

		        highlightCity(Math.abs(leftPosition/100));     
	    };

	    var highlightCity = function (value)
		    {    
		        if (value === 1)
		        {
		        	removeActive('#oxford', '#oxford span', '#denhaag', '#denhaag span', '#milan', '#milan span');
					makeActive('manchester');
		        }   
		        else if (value === 2)
		        {
					removeActive('#manchester div', '#manchester span', '#denhaag div', '#denhaag span', '#milan div', '#milan span');
					makeActive('oxford');
		        }
		        else if (value === 3)
		        {
					removeActive('#manchester div', '#manchester span', '#oxford div', '#oxford span', '#milan div', '#milan span');
					makeActive('denhaag');
		        }
		        else if (value === 4)
		        {
					removeActive('#manchester div', '#manchester span', '#oxford div', '#oxford span', '#denhaag div', '#denhaag span');
					makeActive('milan');
		        }
		        else
		        {
					removeActive('#manchester div', '#manchester span', '#oxford div', '#oxford span', '#milan div', '#milan span');
		        }
		    };
	    
	    return {
	        next: function() {
	            if(leftPosition > (slidesNumber-1)*-100)
	            {
	                moveSlide(-1);
	            }
				else
				{
					leftPosition = 0;
					slider.style.left = leftPosition + '%'; 
					highlightCity(0); 
				}
	        },
	        previous: function() {
	            if(leftPosition !== 0)
	            {
	                 moveSlide(1);
	            }
				else
				{
					leftPosition = (slidesNumber-1)*-100;
					slider.style.left = leftPosition + '%';  
					highlightCity(4);
				}
	        },
	        moveToSlide: function (value)
		    {    
		        leftPosition = value*100;
		        slider.style.left = leftPosition + '%';    
		    }
	    };
	};

	var carousel = new Carousel('#frame', '#slider', '#slider .slide', '.left', '.right');

	document.querySelector('#manchester').addEventListener("click", function(){ 
		removeActive('#oxford div', '#oxford span', '#denhaag div', '#denhaag span', '#milan div', '#milan span');
		makeActive('manchester');
		carousel.moveToSlide(-1); 
	});

	document.querySelector('#oxford').addEventListener("click", function(){ 
		removeActive('#manchester div', '#manchester span', '#denhaag div', '#denhaag span', '#milan div', '#milan span');
		makeActive('oxford');
		carousel.moveToSlide(-2); 
	});

	document.querySelector('#denhaag').addEventListener("click", function(){ 
		removeActive('#manchester div', '#manchester span', '#oxford div', '#oxford span', '#milan div', '#milan span');
		makeActive('denhaag');
		carousel.moveToSlide(-3); 
	});

	document.querySelector('#milan').addEventListener("click", function(){ 
		removeActive('#manchester div', '#manchester span', '#oxford div', '#oxford span', '#denhaag div', '#denhaag span');
		makeActive('milan');
		carousel.moveToSlide(-4); 
	});

	function makeActive(city) {
		document.querySelector('#' + city + ' ' +'span').style.color = '#fcdb3d';
		document.querySelector('#' + city + ' ' + 'div').style.backgroundPosition = 'center top';
	}

	function removeActive(city1, city2, city3, city4, city5, city6) {
		document.querySelector(city1).removeAttribute('style');
	    document.querySelector(city2).removeAttribute('style');
		document.querySelector(city3).removeAttribute('style');
		document.querySelector(city4).removeAttribute('style');
	    document.querySelector(city5).removeAttribute('style');
		document.querySelector(city6).removeAttribute('style');
	}


