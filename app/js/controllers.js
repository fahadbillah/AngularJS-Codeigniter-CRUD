'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('RegistrationCtrl', ['$scope','$http','$location','headerFooterData', function($scope,$http,$location,headerFooterData) {

	headerFooterData.getHeaderFooterData().then(function(data) {
		// console.log(data);
		if(data.success === true){
			$location.path('home').replace();
		}else{
			$scope.nav = data.menu;
		}
	});

	var loadCSRFToken = function() {
		$http.get('api/registration')
		.success(function(data, status, headers, config) {
			// console.log(data);
			$scope.csrf_cookie_name = data.csrf_cookie_name;
		})
		.error(function(data, status, headers, config) {
			alert('api failure');
		});
	};
	// loadCSRFToken();checkUsername

	$scope.checkUsername = function() {
		if($scope.username == ''){
			$scope.usernameCheck = '';
			return false;
		}
		$http.post('api/registration/check_username',{'username': $scope.username})
		.success(function(data, status, headers, config) {
			$scope.usernameCheck = data.message;
		})
	}

	$scope.checkEmail = function() {
		if($scope.email == ''){
			$scope.emailCheck = '';
			return false;
		}
		$http.post('api/registration/check_email',{'email': $scope.email})
		.success(function(data, status, headers, config) {
			$scope.emailCheck = data.message;
		})
	}


	$scope.signup = function() {
		if($scope.password !== $scope.repassword)
			return false;

		// 'csrf_cookie_name' : $scope.csrf_cookie_name,

		var data = {
			'username' : $scope.username,
			'email' : $scope.email,
			'password' : $scope.password,
			'repassword' : $scope.repassword
		};

		// console.log(data);

		$http.post('api/registration/signup',data)
		.success(function(data, status, headers, config) {
			// console.log(data);
			alert(data.message);
			if (data.success == true) {
				$location.path(data.url).replace();
			};
		})
		.error(function(data, status, headers, config) {
			alert('api failure');
		});
	};
}])
.controller('LoginCtrl', ['$scope','$http','$location','headerFooterData', function($scope,$http,$location,headerFooterData) {

	headerFooterData.getHeaderFooterData().then(function(data) {
		// console.log(data);
		if(data.success === true){
			$location.path('home').replace();
		}else{
			$scope.nav = data.menu;
		}
	});


	$scope.login = function() {
		var login = {
			'username': $scope.username,
			'password': $scope.password
		};

		$http.post('api/login/login_check',login)
		.success(function(data, status, headers, config) {
			// console.log(data);
			// alert(data.message);
			if (data.success == true) {
				$location.path(data.url).replace();
			};
		})
		.error(function(data, status, headers, config) {
			alert('api failure');
		});
	}
}])
.controller('HomeCtrl', ['$scope','$http','$location','headerFooterData', function($scope,$http,$location,headerFooterData) {

	$scope.limit = 5;
	$scope.offset = 0;
	headerFooterData.getHeaderFooterData().then(function(data) {
		// console.log(data);
		if(data.success === false)
			$location.path('login').replace();

		$scope.nav = data.menu;
		getAllPost($scope.limit,$scope.offset);
	});
	// return false;


	// $scope.allPost;

	var getAllPost = function(limit,offset) {
		$http.get('api/users/get_all_home_post/'+limit+'/'+offset)
		.success(function(data, status, headers, config) {
			// console.log(data);
			// alert(data.message);
			$scope.allPost = data;
		})
		.error(function(data, status, headers, config) {
			alert('api failure');
		});
	}


}])
.controller('NewPostCtrl', ['$scope','$http','$location','headerFooterData', function($scope,$http,$location,headerFooterData) {

	headerFooterData.getHeaderFooterData().then(function(data) {
		// console.log(data);
		if(data.success === false)
			$location.path('login').replace();

		$scope.nav = data.menu;
	});

	$scope.submitPost = function() {
		
		if ($scope.title == '' || $scope.details == ''){
			alert("Please fill data properly!");
			return false;
		}


		var data = {
			title: $scope.title,
			details: $scope.details
		}

		$http.post('api/users/submit_new_post',data)
		.success(function(data, status, headers, config) {
			console.log(data);
			alert(data.message);
			$scope.title = '';
			$scope.details = '';
		})
		.error(function(data, status, headers, config) {
			alert('api failure');
		});
	}
}])
.controller('ProfileCtrl', ['$scope','$http','$location','headerFooterData', function($scope,$http,$location,headerFooterData) {

	headerFooterData.getHeaderFooterData().then(function(data) {
		// console.log(data);
		if(data.success === false)
			$location.path('login').replace();

		$scope.nav = data.menu;
	});


	$http.get('api/users/user_details')
	.success(function(data, status, headers, config) {
		// console.log(data);
		if (data.success === true) {
			$scope.userdata = data.userdata;
		}else{
			alert(data.message);
		}
	})
	.error(function(data, status, headers, config) {
		alert('api failure');
	});
}])
.controller('PostCtrl', ['$scope','$http','$location','$routeParams','headerFooterData', function($scope,$http,$location,$routeParams,headerFooterData) {

	headerFooterData.getHeaderFooterData().then(function(data) {
		// console.log(data);
		if(data.success === false)
			$location.path('login').replace();

		$scope.nav = data.menu;
		getPostDetails($routeParams["id_posts"]);
		getAllComments($routeParams["id_posts"]);
	});

	$scope.likes = 0;
	$scope.favorites = 0;
	$scope.showLike = true;
	$scope.showFavorite = true;
	// console.log($routeParams["id_posts"]);
	// return false;
	var getPostDetails = function(id_posts) {
		$http.get('api/users/post_details/'+id_posts)
		.success(function(data, status, headers, config) {
			// console.log(data);
			if (data.success === true) {
				$scope.post = data.post;

				$scope.showLike = data.post.liked;
				$scope.showFavorite = data.post.added_to_favorite;
				$scope.likes = data.likes_favorites.likes;
				$scope.favorites = data.likes_favorites.favorites;
				// console.log($scope.showLike);
				// console.log($scope.showFavorite);
			}else{
				alert(data.message);
			}
		})
		.error(function(data, status, headers, config) {
			alert('api failure');
		});
	};

	var getAllComments = function(id_posts) {
		$http.get('api/users/all_comments/'+id_posts)
		.success(function(data, status, headers, config) {
			// console.log(data);
			$scope.error = '';
			if (data.success === true) {
				$scope.comments = data.comments;
			}else{
				$scope.error = data.message;
			}
		})
		.error(function(data, status, headers, config) {
			alert('api failure');
		});
	}


	$scope.commentSubmit = function() {
		if ($scope.comment == '') {
			alert('Please write some comment first');
			return false;
		};
		var comment = {
			'id_posts' : $routeParams["id_posts"],
			'comment' : $scope.comment
		}
		$http.post('api/users/submit_comment/',comment)
		.success(function(data, status, headers, config) {
			// console.log(data);
			$scope.comment = '';
			getAllComments($routeParams["id_posts"]);
			alert(data.message);
		})
		.error(function(data, status, headers, config) {
			alert('api failure');
		});
	}

	$scope.likeFavoriteSubmit = function(type) {
		if (type=='')
			return false;
		var id_posts = $routeParams["id_posts"];

		$http.get('api/users/submit_like_favorite/'+id_posts+'/'+type)
		.success(function(data, status, headers, config) {
			// console.log(data);
			if (data.success) {
				$scope.likes = data.likes_favorites.likes;
				$scope.favorites = data.likes_favorites.favorites;
				
				if(type == 'l')
					$scope.showLike = true;
				if(type == 'f') 
					$scope.showFavorite = true;
			};
			alert(data.message);
		})
		.error(function(data, status, headers, config) {
			alert('api failure');
		});
	}

	$scope.likeFavoriteWithdraw = function(type) {

		$http.get('api/users/remove_likes_favorites/'+$routeParams["id_posts"]+'/'+type)
		.success(function(data, status, headers, config) {
			console.log(data);
			if (data.success === true){
				if(type == 'l')
					$scope.showLike = false;
				if(type == 'f') 
					$scope.showFavorite = false;
			}

			alert(data.message);
		})
		.error(function(data, status, headers, config) {
			alert('api failure');
		});
	}

}])
.controller('LogoutCtrl', ['$scope','$http','$location','headerFooterData', function($scope,$http,$location,headerFooterData) {

	$http.get('api/users/logout')
	.success(function(data, status, headers, config) {
		headerFooterData.getHeaderFooterData().then(function(data) {
			$scope.nav = data.menu;
		});
	})
	.error(function(data, status, headers, config) {
		alert('api failure');
	});
}]);
// .controller('MenuCtrl', ['$scope','$location','headerFooterData', function($scope,$location,headerFooterData) {

	// headerFooterData.getHeaderFooterData().then(function(data) {
	// 	console.log(data);
	// 	if(data.success === true){
	// 		$location.path(data.url).replace();
	// 	}else{
	// 		$scope.nav = data.menu;
	// 	}
	// });


// }]);
