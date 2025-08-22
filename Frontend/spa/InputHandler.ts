// Copyright (c) 2025 Sony Pictures Animation.  All Rights Reserved.

import { GamepadLayout } from '../library/src/Inputs/GamepadController'

// Attach client-side actions to input events
export class InputHandler {
    onGamepadButton(button: number){
	if (button == GamepadLayout.RightClusterBottomButton) {
	    console.log('X')
	}
	if (button == GamepadLayout.RightClusterRightButton) {
	    console.log('O')
	}
	if (button == GamepadLayout.RightClusterLeftButton) {
	    console.log('SQ')
	}
	if (button == GamepadLayout.RightClusterTopButton) {
	    console.log('TR')
	}
    }
}
