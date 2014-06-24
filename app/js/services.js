'use strict';

/* Services */
//"https://api.instagram.com/v1/media/popular?access_token=1395668844.f59def8.c96b87a06ab0443bb0ee99291d4381fa"

angular.module('app.services', ['ngResource'])
	.factory('Instagram', ['$resource', "CLIENT_ID", "CLIENT_SECRET", function($resource, CLIENT_ID, CLIENT_SECRET){
		return $resource('https://api.instagram.com/v1/tags/:tag/media/recent?client_id='+CLIENT_ID+'&count=10', 
			{callback:"JSON_CALLBACK"}, { 
				getImages: 			{method:"JSONP"},
				getComments:	{
					url:"https://api.instagram.com/v1/media/:photoId/comments?client_id="+CLIENT_ID, 
					method:"JSONP"
				},
				postComment:{
					url:"https://api.instagram.com/v1/media/749707591986885447_42689779/comments?client_id="+CLIENT_ID+"&access_token="+CLIENT_SECRET, 
					method:"POST", callback:"JSON_CALLBACK"
				}
			});
	}
]);
