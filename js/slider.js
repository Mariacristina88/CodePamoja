var Carousel = function (frameSelector, sliderSelector, slidesSelector, btnLeftSelector, btnRightSelector) {
	    var leftPosition = 0;
	    
	    var frame = document.querySelector(frameSelector);
	    
	    var slides = document.querySelectorAll(slidesSelector);
	        
	    var slidesNumber = slides.length;
	    
	    var leftButton = document.querySelector(btnLeftSelector);
	    
	    var rightButton = document.querySelector(btnRightSelector);
	    
	    var slider = document.querySelector(sliderSelector);

	    var text = document.querySelector('#auto');

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
		        console.log(Math.abs(leftPosition/100)); 
	    };

	    var highlightCity = function (value)
		    {    
		        if (value === 1)
		        {
		        	removeActive('#bonn div', '#bonn span');
					makeActive('denhaag');
		        }   
		        else if (value === 2)
		        {
					removeActive('#denhaag div', '#denhaag span');
					makeActive('bonn');
		        }
		        else
		        {
					removeActive('#denhaag div', '#denhaag span');
					removeActive('#bonn div', '#bonn span');
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
					highlightCity(2);
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

	document.querySelector('#denhaag').addEventListener("click", function(){ 
		console.log(1);
		removeActive('#bonn div', '#bonn span');
		makeActive('denhaag');
		carousel.moveToSlide(-1); 
	});

	document.querySelector('#bonn').addEventListener("click", function(){ 
		removeActive('#denhaag div', '#denhaag span');
		makeActive('bonn');
		carousel.moveToSlide(-2); 
	});

	function makeActive(city) {
		document.querySelector('#' + city + ' ' +'span').style.color = '#F39200';
		document.querySelector('#' + city + ' ' + 'div').style.backgroundPosition = 'center top';
	}

	function removeActive(city1, city2) {
		document.querySelector(city1).removeAttribute('style');
	    document.querySelector(city2).removeAttribute('style');
	}


