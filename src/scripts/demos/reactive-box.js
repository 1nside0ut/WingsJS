/*!
 * Reactive box example.
 */
(function() {
	'use strict';

	Wings.run(function() {

		var view = new Wings.View(document.getElementById('reactive-box'));

		view.color('cyan');
		view.borderColor('transparent');

		var ReactiveBox = Wings.Panel.extend({
			init : function ReactiveBox(msg) {
				this._super();
				this.size(50, 50);
				this.color('magenta');
				this.add(new Wings.MouseDown(function() {
					alert(msg);
				}));
			},
			draw : function(ctx) {
				ctx.beginPath();
				ctx.lineWidth = '10';
				ctx.strokeStyle = this.color();
				ctx.rect(0, 0, this.width(), this.height());
				ctx.stroke();
			}

		});

		var box = new ReactiveBox('hey! why did you clicked on me!?');
		box.location((view.width() - box.width()) / 2, (view.height() - box
				.height()) / 2);

		view.add(box);

	});
})();