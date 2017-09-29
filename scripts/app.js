
let question = new Question({
	answer: "s3", 
	question: "what is a storage service"
})
// const squirtle = new Tomagotchi('squirtle',1,1,1,1);
// question.get("answer")

// question.set("question","2")

// question.get("question")

const view = new QuestionView({model: question})
// const buttonView = new ButtonView(squirtle);
view.render()
$("#app").html(view.el)

