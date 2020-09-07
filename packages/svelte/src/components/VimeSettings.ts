/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimeSettingsProps {
  
  /** The height of any lower control bar in pixels so that the settings can re-position itself
accordingly. */
  controlsHeight?: Components.VimeSettings["controlsHeight"]
  
  /** Pins the settings to the defined position inside the video player. This has no effect when
the view is of type `audio`, it will always be `bottomRight`. */
  pin?: Components.VimeSettings["pin"]
  
  /** Whether the settings menu is opened/closed. */
  active?: Components.VimeSettings["active"]
  
  /**  */
  isMobile?: Components.VimeSettings["isMobile"]
  
  /**  */
  isAudioView?: Components.VimeSettings["isAudioView"]
}

interface VimeSettingsEvents {
  
}

interface VimeSettingsSlots {
  default: any
}
  
/* generated by Svelte v3.24.1 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let vime_settings;
	let current;
	const default_slot_template = /*$$slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

	return {
		c() {
			vime_settings = element("vime-settings");
			if (default_slot) default_slot.c();
			set_custom_element_data(vime_settings, "controls-height", /*controlsHeight*/ ctx[0]);
			set_custom_element_data(vime_settings, "pin", /*pin*/ ctx[1]);
			set_custom_element_data(vime_settings, "active", /*active*/ ctx[2]);
			set_custom_element_data(vime_settings, "is-mobile", /*isMobile*/ ctx[3]);
			set_custom_element_data(vime_settings, "is-audio-view", /*isAudioView*/ ctx[4]);
		},
		m(target, anchor) {
			insert(target, vime_settings, anchor);

			if (default_slot) {
				default_slot.m(vime_settings, null);
			}

			/*vime_settings_binding*/ ctx[10](vime_settings);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 256) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, null, null);
				}
			}

			if (!current || dirty & /*controlsHeight*/ 1) {
				set_custom_element_data(vime_settings, "controls-height", /*controlsHeight*/ ctx[0]);
			}

			if (!current || dirty & /*pin*/ 2) {
				set_custom_element_data(vime_settings, "pin", /*pin*/ ctx[1]);
			}

			if (!current || dirty & /*active*/ 4) {
				set_custom_element_data(vime_settings, "active", /*active*/ ctx[2]);
			}

			if (!current || dirty & /*isMobile*/ 8) {
				set_custom_element_data(vime_settings, "is-mobile", /*isMobile*/ ctx[3]);
			}

			if (!current || dirty & /*isAudioView*/ 16) {
				set_custom_element_data(vime_settings, "is-audio-view", /*isAudioView*/ ctx[4]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(vime_settings);
			if (default_slot) default_slot.d(detaching);
			/*vime_settings_binding*/ ctx[10](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { controlsHeight = undefined } = $$props;
	let { pin = undefined } = $$props;
	let { active = undefined } = $$props;
	let { isMobile = undefined } = $$props;
	let { isAudioView = undefined } = $$props;
	const setController = (...args) => __ref.setController(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(5, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	let { $$slots = {}, $$scope } = $$props;

	function vime_settings_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(5, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("controlsHeight" in $$props) $$invalidate(0, controlsHeight = $$props.controlsHeight);
		if ("pin" in $$props) $$invalidate(1, pin = $$props.pin);
		if ("active" in $$props) $$invalidate(2, active = $$props.active);
		if ("isMobile" in $$props) $$invalidate(3, isMobile = $$props.isMobile);
		if ("isAudioView" in $$props) $$invalidate(4, isAudioView = $$props.isAudioView);
		if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
	};

	return [
		controlsHeight,
		pin,
		active,
		isMobile,
		isAudioView,
		__ref,
		setController,
		getWebComponent,
		$$scope,
		$$slots,
		vime_settings_binding
	];
}

class VimeSettings extends SvelteComponent {
  $$prop_def: VimeSettingsProps;
  $$events_def: VimeSettingsEvents;
  $$slot_def: VimeSettingsSlots;

  $on<K extends keyof VimeSettingsEvents>(type: K, callback: (e: VimeSettingsEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimeSettingsProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			controlsHeight: 0,
			pin: 1,
			active: 2,
			isMobile: 3,
			isAudioView: 4,
			setController: 6,
			getWebComponent: 7
		});
	}

	
  /** Sets the controller responsible for opening/closing this settings. */
 get setController(): Components.VimeSettings["setController"] {
		return this.$$.ctx[6];
	}

	get getWebComponent(): HTMLVimeSettingsElement | undefined {
		return this.$$.ctx[7];
	}
}

export default VimeSettings;