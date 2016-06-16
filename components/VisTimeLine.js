	var VisTimeLine = Vue.extend({
		template: '<div id="visualization"></div>',
		props: ['visData'],

		ready: function () {

			var container = document.getElementById('visualization');
			  var items = new vis.DataSet(this.visData);
			  var options = {};
			  var timeline = new vis.Timeline(container, items, options);
		}
	});
	Vue.component('vis-time-line',VisTimeLine);