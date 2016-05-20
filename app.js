		// var $select = $("<select></select>");
		// $("#sidenav").append($select);
		// $("#sidenav a").each(function(){
		// 	var $anchor = $(this);
		// 	var $option = $("<option></option>");
		// 	var $anchorText = $anchor.text();
		// 	$option.val($anchor.attr("href"));
		// 	$option.text($anchor.text());
		// 	$select.append($option);
		// });

		// 	$select.change(function(){
		// 		window.location = $select.val();
		// 	});

		$("#loadAnalog").click(function(){
		    $("#list").load("analog.html", function(responseTxt, statusTxt, xhr){
		    });
				$('html, body').animate({
				    scrollTop: $("#list").offset().top
				}, 1000);
		});

		$("#loadIp").click(function(){
		    $("#list").load("ipcamera.html", function(responseTxt, statusTxt, xhr){
		    });
				$('html, body').animate({
				    scrollTop: $("#list").offset().top
				}, 1000);
		});

		// $("#toTop").click(function(){
		// 		$('html, body').animate({
		// 		    scrollTop: $("#productsDiv").offset().top
		// 		}, 1000);
		// });

if ($('#back-to-top').length) {
    var scrollTrigger = 200, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 170
        }, 700);
    });
}