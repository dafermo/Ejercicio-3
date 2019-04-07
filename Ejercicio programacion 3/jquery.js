$(document).on("mobileinit", function(){


	$(function(){
		$(window).on("orientationchange", function(event){
			$("#orient").text("Este dispositivo está en modo " + event.orientation);
			if(event.orientation == "portrait"){
				$("#menu").collapsible("option", "collapsed", false);
			}			
			if(event.orientation == "landscape"){
				$("#menu").collapsible("option", "collapsed", true);
			}
		});

	});
});
		//});


//	let usuarios =  [ 
//		{
//			"id": "1",
//			"nombre": "María",
//			"email": "maria@hotmail.com"
//		},
//		{
//			"id":"2",
//			"nombre": "Nicolás",
//			"email": "nicodacal@hotmail.com"
//		}
//	];	
//
//	//$("#info").find(".ui-content").text(usuarios[0].nombre);
//	
//
//
//	$.each(usuarios, function(index,item){
//	$("#info").find(".ui-content")
//		.append(usuarios[index].nombre + "<br>");
//	});
//
