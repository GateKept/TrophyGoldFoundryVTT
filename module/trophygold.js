/**
* A template for building game systems for Foundry VTT
* Author: GateKept
* Software License: MIT License
*/

//Import Modules

import { TrophyItemSheet } from "./item-sheet.js";

import { TrophyActorSheet} from "./actor-sheet.js";

Hooks.once("init", async function() {
  console.log(`Initializing An Empty Template`);

	/**
	 * Set an initiative formula for the system
	 * @type {String}
	 */
	CONFIG.Combat.initiative = {
	  formula: "1d20",
    decimals: 2
  };
    

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("TrophyGold", TrophyActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("TrophyGold", TrophyItemSheet, {makeDefault: true});
});