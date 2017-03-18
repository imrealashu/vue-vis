var VisTimeLine = Vue.extend({
  template: '<div></div>',
  props: ['id', 'items', 'groups', 'options'],

  mounted: function () {
    var items = new vis.DataSet(this.items);
    var options = this.options;
    var groups = this.groups;
    var timeline = new vis.Timeline(this.$el, items, groups, options);
  }
});
Vue.component('vis-time-line', VisTimeLine);