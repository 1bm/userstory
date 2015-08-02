angular.module('storyController', ['storyService'])

.controller('storyController', function(Story, socketio){
	var vm = this;

	Story.allStories()
		.success(function(data){
			vm.stories = data;
		});

	vm.createStory = function(){

		vm.message = '';
		Story.create(vm.storyData)
			.success(function(data){

				//clear form
				vm.storyData = '';

				vm.message = data.message;

				vm.stories.push(data);

			});
	};	

	socketio.on('story', function(data){
		vm.stories.push(data);
	})

})

.controller('allStoriesController', function(stories, socketio){
	var vm = this;
	vm.stories = stories.data;

	socketio.on('story', function(data){
		vm.stories.push(data);
	});
});
