var myApp=angular.module("WebBhumi",[]);
var classes=function ($scope) {
  var students = [{name:"Raj",course:"Angular",batch:"08:00 pm",like:0,dislike:0 },
  {name:"Brijesh",course:"Web Design",batch:"12:00 pm",like:23,dislike:0}, {name:"Darshay",course:"Web Design",batch:"11:00 am",like:0,dislike:0}, {name:"Shalini",course:"Web Design",batch:"04:00 pm",like:0,dislike:0},
  {name:"Aruna",course:"All",batch:"09:00 am",like:0,dislike:0 },
  {name:"Jayesh",course:"All",batch:"12:00 am",like:0,dislike:0 },
  {name:"AKhlesh",course:"Angular",batch:"08:00 pm",like:0,dislike:0 }];
  $scope.students=students;
  $scope.increseLike=function (that) {
    that.like++;
  };
  $scope.increseDisLike=function (that) {
    that.dislike++;
  }
$scope.setSelectedValue=function (value){
	console.log(value);
  if($scope.selectedValue==value)
  {
	 $scope.selectedValue="-"+value;
	return true;
  }
  else
  {
			$scope.selectedValue=value;
			return false;
  }
   
   
}
$scope.getSelectedValue=function (value){
	console.log(value);
  if($scope.selectedValue==value)
  {
	return true;
  }
  else
  {
			return false;
  }
   
   
}
};
myApp.controller("classes",classes);


var coursesFunc= function($scope) {
  var courses = [{name:"Angular",covers:[{name:"JavaScript"},{name:"Angular"}]},{name:"Web Design",covers:[{name:"html"},{name:"css"},{name:"JavaScript"},{name:"Angular"}]}];
  $scope.courses=courses;
  $scope.filterByMe=function(item) {
    if(item.name==$scope.st.name||$scope.st.name=="All")
    {
      return true;
    }
    else {
      return false;
    }
  }
}

myApp.controller("courses",coursesFunc);
