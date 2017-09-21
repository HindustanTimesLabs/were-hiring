d3.csv("data/projects.csv", function(error, data){
	if (error) throw error;

	data.forEach(function(project){

		$(".projects-wrapper").append('<a href="' + project.url + '"><div class="project"><div class="project-title">' + project.headline + '</div><div class="project-image"><img src="' + project.image + '" /></div></div></a>')
		
	});	
})