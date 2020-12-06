
import { NotifierOptions } from 'angular-notifier';
/**
 * Custom angular notifier options
 */
export const customNotifierOptions: NotifierOptions = {
	position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
	theme: 'material',
	behaviour: {
		autoHide: 3000,
		onClick: false,
		onMouseover: 'pauseAutoHide',
		showDismissButton: true,
		stacking: 4
	},
	animations: {
		enabled: true,
		show: {
			preset: 'fade',
			speed: 300,
			easing: 'ease'
		},
		hide: {
			preset: 'slide',
			speed: 300,
			easing: 'ease',
			offset: 50
		},
		shift: {
			speed: 100,
			easing: 'ease'
		},
		overlap: 150
	}
};