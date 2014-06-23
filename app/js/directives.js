'use strict';

/* Directives */

angular.module('app.directives', []).
	directive("photos", function(){
		return {
			restrict:"E",
			scope:{
				photos:"=items",
				onGetComments:'&onGetComments',
				more:'&onLoadMore'
			},
			templateUrl:"templates/photos.html",
		};
	}).
	directive("photoItem", function(){
		return {
			restrict:"E",
			templateUrl:"templates/photo-item.html",
			scope:{
				source:"@",
				id:'@',
				likeCount:"=",
				comments:"=",
				dscr:"=",
				userThumb:"@",
				issetDscr:"@",
				onGetComments:'&onGetComments'
			},
			link:function($scope,$elem,attrs){
				$elem.css('display', 'block');
			}
		};
	}).
	directive("photoUser", function(){
		return {
			restrict:"E",
			templateUrl:"templates/photo-user.html",
			scope:{
				time:"=",
				nickname:"=",
				avatar:"@"
			}
		};
	}).
	directive("moreComments", function(){
		return {
			restrict:"C",
			link:function($scope, $elem, atrrs){
				$($elem).on('click', function(){
					$(this).slideUp(500);
				});
			}
		};
	});
