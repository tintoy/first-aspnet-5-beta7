import {Aurelia, LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia: Aurelia) {
	aurelia.use
		.defaultBindingLanguage()
		.defaultResources()
		.history()
		.router()
		.eventAggregator();

	aurelia.start().then(
		app => app.setRoot('app/home', document.body)
	);
}
