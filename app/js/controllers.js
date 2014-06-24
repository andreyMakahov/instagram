'use strict';

/* Controllers */

angular.module('app.controllers', []).
	// main page(first) of application. Search photos by tag
	controller('ControllerMain', ["Instagram", '$scope', function(instagram, $scope){
		instagram.postComment({photoId:"749707591986885447_42689779", text:'text - ololo'});
		$scope.tagValue = '';
	
		this.search = function(tag){
			this._getImages({
				tag: tag,
				replace:true
			});
		};
		
		this.getComments = function(photoId){
			var self = this;
			instagram.getComments({'photoId':photoId}, function(response){
				angular.forEach(self.photos, function(image, index){
					if(self.photos[index].id === photoId){
						self.photos[index].comments.data = response.data;
					}
				});
			});
		};
		
		this.addComment = function(photoId, text){
			instagram.postComment({photoId:"749297696655774484_610578043"});
		};
		
		this.more = function(){
			this._getImages({
				tag: $scope.tagValue,
				max_tag_id: this.pagination.next_max_tag_id, 
				replace:false
			});
		};
		
		this._getImages = function(obj){
			var self = this;
			instagram.getImages({tag:obj.tag, max_tag_id: obj.max_tag_id}, function(response){
				self._formatImages(response, obj.replace);
			});
		};
		this._formatImages = function(response, replace){
			var self = this, data = [], dataImage = [],
				pagination = response.pagination; 
			angular.forEach(response.data, function(image, index) {
				var comments = image.comments.count < 3 ? comments = image.comments : {count: image.comments.count, data: image.comments.data.slice(0,3)};
				dataImage = {
					id:			image.id,
					images:		image.images,
					likes:		image.likes,
					user:		image.user,
					comments:	comments,
					caption:	image.caption
				};
			   data.push(dataImage);
			});
			this.pagination = pagination || null;
			if(replace){
				this.photos = data;
			}else{
				angular.forEach(data, function(image, index){
					self.photos.push(data[index]);
				});
			}
			console.log(self.photos);
		};
	}])
	// second page. Information about the photo
	.controller("ControllerPhoto", ["Instagram", function(instagram){

	}]);
