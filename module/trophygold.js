/**
* A simple implementation of Trophy Gold, for use in Foundry VTT
* Author: GateKept
* Software license: MIT License
* This work is based on Trophy (trophyrpg.com), product of Jesse Ross and Hedgemaze Press, and licensed for our use under the Creative Commons Attribution 4.0 License (https://creativecommons.org/licenses/by/4.0/). Trophy is adapted from Cthulhu Dark with permission of Graham Walmsley. Trophy is also based on Blades in the Dark (found at http://www.bladesinthedark.com/), product of One Seven Design, developed and authored by John Harper, and licensed for our use under the Creative Commons Attribution 3.0 Unported license (http://creativecommons.org/licenses/by/3.0/).
*/

//Import Modules

import { TrophyItemSheet } from "./item-sheet.js";
import { TrophyActor } from "./actor.js";
import { TrophyActorSheet } from "./actor-sheet.js";

Hooks.once("init", async function() {
    console.log(`Initializing Trophy Gold`);
    
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("TrophyGold", TrophyActorSheet, {makeDefault: true});
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("TrophyGold", TrophyItemSheet, {makeDefault: true});
    
})