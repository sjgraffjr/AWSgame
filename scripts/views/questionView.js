const QuestionView = Backbone.View.extend({

  tagName: "h1",

  className: "document-row",

  events: {
    "click span":          "logQuestion",

  },
  logQuestion: function(){
    console.log(this.model.get("question"))
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    this.$el.html(this.template({question: this.model.get("question")}))
  },

  template: _.template("<span>question: <%= question %></span>")

});
