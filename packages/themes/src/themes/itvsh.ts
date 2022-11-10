import { KoliBri } from '@public-ui/schema';
import { KOL_ICON } from './defaults/icon';

// IT-Verbund Schleswig-Holstein (ITVSH)
export const ITVSH = KoliBri.createTheme('itvsh', {
	GLOBAL:
		':host {--primary-blue: rgb(0, 48, 100);--primary-blue-dark: rgb(0, 30, 73);--primary-red: rgb(212, 0, 75);--secondary-01: rgb(30, 174, 156);--secondary-02: rgb(0, 162, 171);--secondary-03: rgb(0, 160, 201);--secondary-04: rgb(0, 140, 207);--secondary-05: rgb(58, 120, 184);--secondary-06: rgb(122, 111, 172);--secondary-07: rgb(181, 92, 156);--secondary-08: rgb(214, 47, 135);--feature-black: rgb(0, 0, 0);--feature-white: rgb(255, 255, 255);--feature-grey: rgb(164, 173, 182);--feature-sand: rgb(187, 179, 171);--font-family-avenir: "Avenir Next Pro", "Arial";--font-family-celeste: "Celeste", "Times";}',
	'KOL-BUTTON':
		'button {font-family: var(--font-family-avenir);font-weight: 400;font-style: normal;font-size: 1.125rem;cursor: pointer;color: #fff;padding: 0.7em 1.25em 0.75em;align-self: baseline;transition: color 0.2s ease, background-color 0.2s ease,border-color 0.2s ease;line-height: 1.25;border: 2px solid;justify-content: center;border-radius: 0.25em;display: grid;gap: 0.25em;}button:focus {outline: 2px dotted var(--primary-red);outline-offset: 0;}button.primary {color: var(--feature-white);background-color: var(--primary-blue);}button.primary:focus,button.primary:hover {background-color: var(--primary-red);}button.secondary {color: var(--feature-white);background-color: var(--secondary-01);}button.secondary:focus,button.secondary:hover {background-color: var(--secondary-08);}button.normal {color: var(--feature-white);background-color: var(--secondary-02);}button.normal:focus,button.normal:hover {background-color: var(--secondary-07);}button.danger {color: var(--feature-white);background-color: var(--primary-red);}button.danger:focus,button.danger:hover {color: var(--primary-red);background-color: var(--feature-white);}button.ghost {color: var(--feature-black);background-color: var(--feature-white);border-color: var(--feature-white);}button.ghost:focus,button.ghost:hover {color: var(--feature-white);background-color: var(--feature-black);border-color: var(--feature-black);}button > span {display: flex;gap: 0.25em;align-items: center;justify-content: center;}button:active {outline: 0 !important;box-shadow: none !important;}kol-button-wc {width: inherit;}button:disabled {cursor: not-allowed;opacity: 0.5;box-shadow: none;}',
	'KOL-BADGE':
		':host {display: inline-block;}span {align-items: center;border-radius: 0.3125rem;display: flex;line-height: 1.25rem;gap: 0.5rem;padding: 0.25rem 0.75rem;}',
	'KOL-ACCORDION':
		':host > *,:host kol-heading button {font-family: var(--font-family-avenir);}:host > * {border: 1px solid;border-left: 0;border-right: 0;width: 100%;}:host kol-heading button {background-color: transparent;border: 0;cursor: pointer;padding: 0.5rem 3rem 0.5rem 0;text-align: left;width: 100%;}:host kol-heading button kol-icon {min-width: 3rem;display: inherit;text-align: center;}:host [part="header"],:host [part="content"] {padding: 0 3rem;}:host > div > kol-heading > button kol-icon::part(icon) {font-weight: 900;color: var(--secondary);}:host > div > kol-heading > button kol-icon::part(close)::before {font-family: "Font Awesome 6 Free";content: "\\f077";}:host > div > kol-heading > button kol-icon::part(open)::before {font-family: "Font Awesome 6 Free";content: "\\f078";}',
	'KOL-ICON': KOL_ICON,
});
