angular.module('app').controller('homeCtrl', function($scope, $http) {
	//commented out until there is an active end point
	// $http.get('/api/mmwrcase/currentCase/').then(function(res) {
	// 	if (res.data) {
	// 		$scope.currentCase = res.data[0];
	// 		console.log($scope.currentCase);
	// 	} else {
	// 		alert('no data received');
	// 	}
	// });
	
	//temporary case object to work on front end
	$scope.currentCase = {
		'case_id': 1,
		'title': 'Hepatitis B',
		'overview': 'A 28yo Asian woman presents to arrange ongoing care for her new baby following delivery. She is in her 37th week of what has been a completely uneventful, normal, first pregnancy. She has had excellent prenatal care and fetal development has been normal based on standard, non-invasive measures.',
		'created_date': '2014-11-11 12:45:34',
		'published_date': '2014-11-11 12:45:34',
		'case_text': '',
		'abstract_text':'',
		'additional_information':'',
		'current': 1,
		'archived': 0,
		'rating': '',
		'development_status':'',
		'development_status_notes':'',
		'display_status':'',
		'available_cme_credits':'',
		'cme_release_date':'',
		'cme_valid_until':'',
		'number_cme_credits_available':''
	};


});