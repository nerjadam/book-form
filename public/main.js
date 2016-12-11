
	$(".btn-info").on('click' , function(){
		$.ajax({
			url :'/submit' , 
			type : 'POST' , //4 butova vetemm : put post get delete
			dataType: 'json' ,
			data : {
				bookName: $("#book_name").val() ,
				authorName: $("#author_name").val()
				
				} ,
			success: function(arr){
				$("p").html("");
			  
			
		});
		
		
	});
	
	$("#searchbya").on('click' , function(){
		$.ajax({
			url:'/search by author name' ,
			type: 'POST' ,
			dataType: 'json' ,
			data: {
				authorName: $("#author_name").val(),
				
			}, 
			success: function(){
					$("p").html("");
				$('#').html('Elementi u gjet  me sukses!!!');
			}
			
		});
	});
	  
	  
	  $("#searchbyb").on('click' , function(){
		$.ajax({
			url:'/search by book name' ,
			type: 'POST' ,
			dataType: 'json' ,
			data: {
				bookName : $("#book_name").val() ,
				
			}, 
			success: function(){
					$("p").html("");
				$('#search_output').html('Elementi u gjet  me sukses!!!');
			}
			
		});
	});