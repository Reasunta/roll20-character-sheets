const wfrpModule = ( () => {

    // Global Variables

    const wfrp = {
        sheet_version: "1.0.4",

        characteristics: [
            "weapon_skill",
            "ballistic_skill",
            "strength",
            "toughness",
            "initiative",
            "agility",
            "dexterity",
            "intelligence",
            "willpower",
            "fellowship"
        ],

        characteristics_v2: [
            {
                "attr": "weapon_skill",
                "bonus_attr": "weapon_skill_bonus",
                "modifier_attr": "weapon_skill_modifier",
                "bonus_modifier_attr": "weapon_skill_bonusmod",
                "custom_modifier_attr": "weapon_skill_custom_mod",
                "short": "WS",
                "bonus_short": "WSB",
            },
            {
                "attr": "ballistic_skill",
                "bonus_attr": "ballistic_skill_bonus",
                "modifier_attr": "ballistic_skill_modifier",
                "bonus_modifier_attr": "ballistic_skill_bonusmod",
                "custom_modifier_attr": "ballistic_skill_custom_mod",
                "short": "BS", "bonus_short": "BSB"
            },
            {
                "attr": "strength",
                "bonus_attr": "strength_bonus",
                "modifier_attr": "strength_modifier",
                "bonus_modifier_attr": "strength_bonusmod",
                "custom_modifier_attr": "strength_custom_mod",
                "short": "S",
                "bonus_short": "SB"
            },
            {
                "attr": "toughness",
                "bonus_attr": "toughness_bonus",
                "modifier_attr": "toughness_modifier",
                "bonus_modifier_attr": "toughness_bonusmod",
                "custom_modifier_attr": "toughness_custom_mod",
                "short": "T",
                "bonus_short": "TB"
            },
            {
                "attr": "initiative",
                "bonus_attr": "initiative_bonus",
                "modifier_attr": "initiative_modifier",
                "bonus_modifier_attr": "initiative_bonusmod",
                "custom_modifier_attr": "initiative_custom_mod",
                "short": "I",
                "bonus_short": "IB"
            },
            {
                "attr": "agility",
                "bonus_attr": "agility_bonus",
                "modifier_attr": "agility_modifier",
                "bonus_modifier_attr": "agility_bonusmod",
                "custom_modifier_attr": "agility_custom_mod",
                "short": "Ag",
                "bonus_short": "AgB"
            },
            {
                "attr": "dexterity",
                "bonus_attr": "dexterity_bonus",
                "modifier_attr": "dexterity_modifier",
                "bonus_modifier_attr": "dexterity_bonusmod",
                "custom_modifier_attr": "dexterity_custom_mod",
                "short": "Dex",
                "bonus_short": "DexB"
            },
            {
                "attr": "intelligence",
                "bonus_attr": "intelligence_bonus",
                "modifier_attr": "intelligence_modifier",
                "bonus_modifier_attr": "intelligence_bonusmod",
                "custom_modifier_attr": "intelligence_custom_mod",
                "short": "Int",
                "bonus_short": "IntB"
            },
            {
                "attr": "willpower",
                "bonus_attr": "willpower_bonus",
                "modifier_attr": "willpower_modifier",
                "bonus_modifier_attr": "willpower_bonusmod",
                "custom_modifier_attr": "willpower_custom_mod",
                "short": "WP",
                "bonus_short": "WPB"
            },
            {
                "attr": "fellowship",
                "bonus_attr": "fellowship_bonus",
                "modifier_attr": "fellowship_modifier",
                "bonus_modifier_attr": "fellowship_bonusmod",
                "custom_modifier_attr": "fellowship_custom_mod",
                "short": "Fel",
                "bonus_short": "FelB"
            }
        ],

        characteristics_short: [
            "WS",
            "BS",
            "S",
            "T",
            "I",
            "Ag",
            "Dex",
            "Int",
            "WP",
            "Fel"
        ],

        skills: [
            "animal-care",
            "animal-training",
            "channelling",
            "evaluate",
            "heal",
            "language",
            "lore",
            "perform",
            "pick-lock",
            "play",
            "pray",
            "ranged",
            "research",
            "sail",
            "secret-signs",
            "set-trap",
            "sleight-of-hand",
            "swim",
            "track",
            "trade",
            "art",
            "athletics",
            "bribery",
            "charm",
            "charm-animal",
            "climb",
            "consume-alcohol",
            "cool",
            "dodge",
            "drive",
            "endurance",
            "entertain",
            "gamble",
            "gossip",
            "haggle",
            "intimidate",
            "intuition",
            "leadership",
            "melee",
            "navigation",
            "outdoor-survival",
            "perception",
            "ride",
            "row",
            "stealth",
            "grapple"
        ],

        specialisations: [
            "basic",
            "brawling",
            "cavalry",
            "fencing",
            "flail",
            "parry",
            "polearm",
            "two-handed",
            "blackpowder",
            "bow",
            "crossbow",
            "engineering",
            "entangling",
            "explosives",
            "sling",
            "throwing",
            "azyr",
            "aqshy",
            "chamon",
            "dhar",
            "ghur",
            "ghyran",
            "hysh",
            "shyish",
            "ulgu",
            "magick",
            "custom"
        ],

        repeating_skills: [
            "art",
            "entertain",
            "ride",
            "stealth",
            "animal-training",
            "language",
            "lore",
            "perform",
            "play",
            "sail",
            "secret-signs",
            "trade"
        ],

        repeating_sections: [
            {"name": "talent", "mods_attr": "talent_mods"},
            {"name": "condition", "mods_attr": "condition_mods"},
            {"name": "psychology", "mods_attr": "psychology_mods"},
            {"name": "corruption", "mods_attr": "corruption_mods"},
            {"name": "trappings", "mods_attr": "trappings_mods"},
            {"name": "armour", "mods_attr": "armour_mods"},
            {"name": "weapons", "mods_attr": "weapon_mods"}
        ],

        species: {
            "human": {
                "attributes": {
                    "weapon_skill": 20,
                    "ballistic_skill": 20,
                    "strength": 20,
                    "toughness": 20,
                    "initiative": 20,
                    "agility": 20,
                    "dexterity": 20,
                    "intelligence": 20,
                    "willpower": 20,
                    "fellowship": 20
                },
                "fate": 2,
                "resilience": 1,
                "movement": 4,
                "motivation": "3 extra points for fate and resilience",
                "size": "average"
            },
            "halfling": {
                "attributes": {
                    "weapon_skill": 10,
                    "ballistic_skill": 30,
                    "strength": 10,
                    "toughness": 20,
                    "initiative": 20,
                    "agility": 20,
                    "dexterity": 30,
                    "intelligence": 20,
                    "willpower": 30,
                    "fellowship": 30
                },
                "fate": 0,
                "resilience": 2,
                "movement": 3,
                "size": "small",
                "motivation": "3 extra points for fate and resilience"
            },
            "high elf": {
                "attributes": {
                    "weapon_skill": 30,
                    "ballistic_skill": 30,
                    "strength": 20,
                    "toughness": 20,
                    "initiative": 40,
                    "agility": 30,
                    "dexterity": 30,
                    "intelligence": 30,
                    "willpower": 30,
                    "fellowship": 20
                },
                "fate": 0,
                "resilience": 0,
                "movement": 5,
                "size": "average",
                "motivation": "2 extra points for fate and resilience"
            },
            "wood elf": {
                "attributes": {
                    "weapon_skill": 30,
                    "ballistic_skill": 30,
                    "strength": 20,
                    "toughness": 20,
                    "initiative": 40,
                    "agility": 30,
                    "dexterity": 30,
                    "intelligence": 30,
                    "willpower": 30,
                    "fellowship": 20
                },
                "fate": 0,
                "resilience": 0,
                "movement": 5,
                "size": "average",
                "motivation": "2 extra points for fate and resilience"
            },
            "gnome": {
                "attributes": {
                    "weapon_skill": 10,
                    "ballistic_skill": 20,
                    "strength": 10,
                    "toughness": 15,
                    "initiative": 30,
                    "agility": 30,
                    "dexterity": 30,
                    "intelligence": 30,
                    "willpower": 40,
                    "fellowship": 15
                },
                "fate": 2,
                "resilience": 0,
                "movement": 3,
                "size": "small",
                "motivation": "2 extra points for fate and resilience"
            },
            "dwarf": {
                "attributes": {
                    "weapon_skill": 30,
                    "ballistic_skill": 20,
                    "strength": 20,
                    "toughness": 30,
                    "initiative": 20,
                    "agility": 10,
                    "dexterity": 30,
                    "intelligence": 20,
                    "willpower": 40,
                    "fellowship": 10
                },
                "fate": 0,
                "resilience": 2,
                "movement": 3,
                "size": "average",
                "motivation": "2 extra points for fate and resilience"
            },
            "custom": {
                "attributes": {
                    "weapon_skill": 0,
                    "ballistic_skill": 0,
                    "strength": 0,
                    "toughness": 0,
                    "initiative": 0,
                    "agility": 0,
                    "dexterity": 0,
                    "intelligence": 0,
                    "willpower": 0,
                    "fellowship": 0
                },
                "fate": 0,
                "resilience": 0,
                "movement": 0,
                "size": "average",
                "motivation": ""
            },
            " ": {
                "attributes": {
                    "weapon_skill": 0,
                    "ballistic_skill": 0,
                    "strength": 0,
                    "toughness": 0,
                    "initiative": 0,
                    "agility": 0,
                    "dexterity": 0,
                    "intelligence": 0,
                    "willpower": 0,
                    "fellowship": 0
                },
                "fate": 0,
                "resilience": 0,
                "movement": 0,
                "size": "average",
                "motivation": ""
            }
        },

        hit_locations: {
            "head":{"from": 1, "to": 9, "label": "Head"},
            "leftarm": {"from": 10, "to": 24, "label": "Left Arm"},
            "rightarm":{"from": 25, "to": 44, "label": "Right Arm"},
            "body": {"from": 45, "to": 79, "label": "Body"},
            "leftleg":{"from": 80, "to": 89, "label": "Left Leg"},
            "rightleg": {"from": 90, "to": 100, "label": "Right Leg"}
        },

        weapon_attrs_for_opposed_test:[
            "repeating_weapons_weapon_name",
            "repeating_weapons_weapon_group",
            "repeating_weapons_weapon_target_display",
            "repeating_weapons_weapon_damage_flat",
            "repeating_weapons_weapon_damage_bonus",
            "strength_bonus",
            "repeating_weapons_weapon_q_accurate",
            "repeating_weapons_weapon_q_damaging",
            "repeating_weapons_weapon_q_defensive",
            "repeating_weapons_weapon_q_fast",
            "repeating_weapons_weapon_q_impact",
            "repeating_weapons_weapon_q_impale",
            "repeating_weapons_weapon_q_penetrating",
            "repeating_weapons_weapon_q_pistol",
            "repeating_weapons_weapon_q_precise",
            "repeating_weapons_weapon_q_dangerous",
            "repeating_weapons_weapon_q_imprecise",
            "repeating_weapons_weapon_q_slow",
            "repeating_weapons_weapon_q_undamaging",
            "repeating_weapons_weapon_qualities",
            "repeating_weapons_weapon_qualities_str"
        ],

        weapon_qualities: [
            "accurate",
            "damaging",
            "defensive",
            "fast",
            "impact",
            "impale",
            "penetrating",
            "precise",
            "dangerous",
            "imprecise",
            "slow",
            "undamaging",
            "pistol",
        ],

        public_weapon_attrs: [
            `weapon_id`,
            `weapon_name`,
            `weapon_s_index`,
            `weapon_s_value`,
            `weapon_damage`,
            `weapon_qualities`,
            `weapon_qualities_str`,
            `weapon_is_off_hand`,
            `weapon_is_ranged`,
            `weapon_is_pistol`,
            `weapon_is_dodge`,
        ],

        combat_modifiers: [
            {
                "attr": "cm_outnumbered_21",
                "values": { "melee": 20 },
                "group": "outnumbered"
            },
            {
                "attr": "cm_outnumbered_31",
                "values": { "melee": 40 },
                "group": "outnumbered"
            },
            {
                "attr": "cm_target_grapple_leader",
                "values": { "melee": 10 },
                "group": "grapple"
            },
            {
                "attr": "cm_target_grapple_follower",
                "values": { "melee": 20 },
                "group": "grapple"
            },
            {
                "attr": "cm_point_blank_range",
                "values": {"ranged": 40},
                "group": "distance"
            },
            {
                "attr": "cm_short_range",
                "values": {"ranged": 20},
                "group": "distance"
            },
            {
                "attr": "cm_long_range",
                "values": {"ranged": -10},
                "group": "distance"
            },
            {
                "attr": "cm_extreme_range",
                "values": {"ranged": -30},
                "group": "distance"
            },
            {
                "attr": "cm_target_small_group",
                "values": {"ranged": 20},
                "group": "group_size"
            },
            {
                "attr": "cm_target_large_group",
                "values": {"ranged": 40},
                "group": "group_size"
            },
            {
                "attr": "cm_target_crowd",
                "values": {"ranged": 60},
                "group": "group_size"
            },
            {
                "attr": "cm_shoot_after_move",
                "values": {"ranged": -10},
            },
            {
                "attr": "cm_target_soft_cover",
                "values": { "melee": -10, "ranged": -10 },
                "group": "cover"
            },
            {
                "attr": "cm_target_medium_cover",
                "values": { "melee": -20, "ranged": -20 },
                "group": "cover"
            },
            {
                "attr": "cm_target_hard_cover",
                "values": { "melee": -30, "ranged": -30 },
                "group": "cover"
            },
            {
                "attr": "cm_specific_hit_location",
                "values": { "melee": -20, "ranged": -20 },
            },
            {
                "attr": "cm_shoot_after_aim",
                "values": {"ranged": 20}
            },
            {
                "attr": "cm_hard_terrain",
                "values": { "melee": -10 },
                "group": "terrain"
            },
            {
                "attr": "cm_extreme_terrain",
                "values": { "melee": -30, "dodge": -30 },
                "group": "terrain"
            },
            {
                "attr": "cm_extreme_weather",
                "values": { "melee": -20, 'ranged': '-20' }
            },
            {
                "attr": "cm_darkness",
                "values": {
                    "melee": -20,
                    "ranged": -30,
                    "parry": -20,
                    "dodge": -20,
                },
            },
            {
                "attr": "cm_side_rear_attack",
                "values": { "melee": 20 },
            },
            {
                "attr": "cm_target_is_fleeing",
                "values": { "melee": 20 },
            },
            {
                "attr": "cm_defensive_stand",
                "values": { "parry": 20, "dodge": 20 },
            },
            {
                "attr": "cm_after_dual_wielder",
                "values": { "parry": -10, "dodge": -10 },
            }
        ],

        sizes: ["tiny", "little", "small", "average", "large", "enormous", "monstrous"],

        modifiers: [
            {
                "short": "W",
                "attr": "wound_mod"
            },
            {
                "short": "CP",
                "attr": "corruption_points_mod"
            },
            {
                "short": "MD",
                "attr": "melee_damage_bonus"
            },
            {
                "short": "RD",
                "attr": "ranged_damage_bonus"
            },
            {
                "short": "R",
                "attr": "run_mod"
            },
            {
                "short": "Enc",
                "attr": "encumbrance_bonus"
            },
        ]
    }

    // if input is skill name, return integer positive number
    // in input is specialisation name, return float positive number from 0 to 1
    const getSkillId = (skill) => {
        let result = -1;
        if(wfrp.skills.includes(skill)) result = wfrp.skills.indexOf(skill)
        if(wfrp.specialisations.includes(skill)) result = (wfrp.specialisations.indexOf(skill) + 1) / 100
        return result
    }

    const getSkillLabelById = (id) => {
        if (id < 0) return ""
        const integerId = id * 100
        const skill_name = getSkillAttrById(id)

        if (integerId > 0 && integerId < 100) {
            const skill_label = skill_name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('-');

            if (wfrp.specialisations.slice(0, 8).includes(skill_name)) return `Melee (${skill_label})`
            if (wfrp.specialisations.slice(8, 16).includes(skill_name)) return `Ranged (${skill_label})`
            if (wfrp.specialisations.slice(16, 24).includes(skill_name)) return `Channeling (${skill_label})`
        }
        else {
            return skill_name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
        }
    }

    const getSkillAttrById = (id) => {
        if (id < 0) return ""
        const integerId = Math.round(id * 100)
        return (integerId > 0 && integerId < 100) ? wfrp.specialisations[integerId - 1] : wfrp.skills[id];
    }

    const getHitLocation = (roll) => {
        const reversed = helperFunctions.reverseRoll(roll)
        const result = Object.entries(wfrp.hit_locations).filter(e => reversed >= e[1]["from"] && reversed <= e[1]["to"])[0]
        return result
    }

    const hasQuality = (qualities, quality_name) => {
        const index = wfrp.weapon_qualities.indexOf(quality_name)
        return (qualities & (1 << index)) > 0
    }

    const addQuality = (qualities, quality_name) => {
        const index = wfrp.weapon_qualities.indexOf(quality_name)
        return qualities + 2**index
    }

    const extractRollResults = (results) => {
        const result = {}
        Object.keys(results.results).forEach(roll_name => result[roll_name] = results.results[roll_name].result)
        return result
    }

    const getLastValue = (outputs, attr) => {
        const a_ts = parseInt(outputs[`a_last_ts`]), d_ts = parseInt(outputs[`d_last_ts`])
        if (!a_ts && !d_ts) return 0
        if (!d_ts) return outputs[`a_last_${attr}`]
        return a_ts > d_ts ? outputs[`a_last_${attr}`] : outputs[`d_last_${attr}`]
    }

    const rtEntry = (key, value) => `{{${key}=${value}}}`
    const rtAttrEntry = (key, value) => `{{${key}=@{${value}}}}`
    const rtNumAttrEntry = (key, value) => `{{${key}=[[@{${value}}]]}}`
    const rtNumEntry = (key, value) => `{{${key}=[[${value}]]}}`
    const rtOutputEntry = (key) => `{{${key}=[[1]]}}`

    const rtString = (template_name, entries) => `${template_name} `.concat(entries.join(" "))

    const addWeaponToRoll = (entries, prefix, char_source, w_type) => {
        if (w_type === 'dodge') {
            entries.push(
                rtEntry(`${prefix}w_name`, `Dodge`),
                rtNumEntry(`${prefix}s_id`, `${getSkillId('dodge')}`),
                rtNumAttrEntry(`${prefix}s_value`, `${char_source}dodge`),
                rtNumEntry(`${prefix}w_damage`, `0`),
                rtNumEntry(`${prefix}w_qualities`, `0`),
                rtNumAttrEntry(`${prefix}w_off_hand`, `0`),
                rtNumAttrEntry(`${prefix}w_is_dodge`, `1`)
            )
        } else if (w_type === 'grapple') {
            entries.push(
                rtEntry(`${prefix}w_name`, `Strength`),
                rtNumEntry(`${prefix}s_id`, `${getSkillId('grapple')}`),
                rtNumAttrEntry(`${prefix}s_value`, `${char_source}strength`),
                rtNumEntry(`${prefix}w_damage`, `0`),
                rtNumEntry(`${prefix}w_qualities`, `0`),
                rtNumAttrEntry(`${prefix}w_off_hand`, `0`),
                rtNumAttrEntry(`${prefix}w_is_dodge`, `0`)
            )
        }
        else {
            entries.push(
                rtAttrEntry(`${prefix}w_name`, `${char_source}${w_type}_weapon_name`),
                rtNumAttrEntry(`${prefix}s_id`, `${char_source}${w_type}_weapon_s_index`),
                rtNumAttrEntry(`${prefix}s_value`, `${char_source}${w_type}_weapon_s_value`),
                rtNumAttrEntry(`${prefix}w_damage`, `${char_source}${w_type}_weapon_damage`),
                rtNumAttrEntry(`${prefix}w_qualities`, `${char_source}${w_type}_weapon_qualities`),
                rtNumAttrEntry(`${prefix}w_off_hand`, `${char_source}${w_type}_weapon_is_off_hand`),
                rtNumAttrEntry(`${prefix}w_is_ranged`, `${char_source}${w_type}_weapon_is_ranged`),
                rtNumAttrEntry(`${prefix}w_is_dodge`, `${char_source}${w_type}_weapon_is_dodge`)
            )
        }
        return entries
    }
    const addDefenderResistanceToRoll = (entries, d_char_source) => {
        entries.push(
            rtNumAttrEntry(`da_head`, `${d_char_source}armour_head`) ,
            rtNumAttrEntry(`da_leftarm`, `${d_char_source}armour_leftarm`) ,
            rtNumAttrEntry(`da_rightarm`, `${d_char_source}armour_rightarm`) ,
            rtNumAttrEntry(`da_body`, `${d_char_source}armour_body`) ,
            rtNumAttrEntry(`da_leftleg`, `${d_char_source}armour_leftleg`),
            rtNumAttrEntry(`da_rightleg`, `${d_char_source}armour_rightleg`),
            rtNumAttrEntry(`da_shield`, `${d_char_source}armour_shield`),
            rtNumAttrEntry(`d_tb`, `${d_char_source}toughness_bonus`)
        )
        return entries
    }
    const addLastValuesToRoll = (entries, a_char_source, d_char_source) => {
        entries.push(
            rtNumAttrEntry(`a_last_a_roll`, `${a_char_source}last_a_roll`),
            rtNumAttrEntry(`a_last_d_roll`, `${a_char_source}last_d_roll`) ,
            rtNumAttrEntry(`d_last_a_roll`, `${d_char_source}last_a_roll`) ,
            rtNumAttrEntry(`d_last_d_roll`, `${d_char_source}last_d_roll`) ,
            rtNumAttrEntry(`a_last_total_sl`, `${a_char_source}last_total_sl`),
            rtNumAttrEntry(`d_last_total_sl`, `${d_char_source}last_total_sl`) ,
            rtNumAttrEntry(`a_last_opposed`, `${a_char_source}last_opposed`) ,
            rtNumAttrEntry(`d_last_opposed`, `${d_char_source}last_opposed`) ,
            rtNumAttrEntry(`a_last_ts`, `${a_char_source}last_ts`) ,
            rtNumAttrEntry(`d_last_ts`, `${d_char_source}last_ts`)
        )
        return entries
    }
    const addRollsToRoll = (entries, a_roll_source, d_roll_source, opposed_source) => {
        entries.push(
            rtEntry(`a_roll`, `[[${a_roll_source === "last" ? "-1" : a_roll_source}]]`) ,
            rtEntry(`d_roll`, `[[${d_roll_source === "last" ? "-1" : d_roll_source}]]`) ,
            rtEntry(`is_opposed`, `[[${opposed_source === "last" ? "-1": opposed_source}]]`)
        )
        return entries
    }
    const addOutputsToRoll = (entries, outputs) => {
        outputs.forEach(key => {
            entries.push(rtOutputEntry(key))
        })
        return entries
    }

    const saveLastRoll = (outputs) => {
        const update = {}
        update["last_a_roll"] = outputs.a_roll
        update["last_d_roll"] = outputs.d_roll
        update["last_total_sl"] = outputs.total_sl
        update["last_opposed"] = outputs.is_opposed
        update["last_ts"] = Math.floor(Date.now() / 1000)
        setAttrs(update)
    }
    const processRoll = (input, p) => {
        if (input[`${p}_mod`] > 60) input[`${p}_mod`] = 60
        if (input[`${p}_mod`] < -30) input[`${p}_mod`] = -30

        input[`${p}_target`] = input[`${p}_target`] + input[`${p}_mod`]

        input[`${p}_is_passed`] = input[`${p}_roll`] <= input[`${p}_target`] && input[`${p}_roll`] < 100
        input[`${p}_roll_sl`] = Math.trunc((input[`${p}_target`] - input[`${p}_roll`]) / 10)

        const is_double = helperFunctions.isRollDouble(input[`${p}_roll`])
        input[`${p}_is_crit`] = !is_double ? 0 : input[`${p}_is_passed`] ? 1 : -1;
        return input
    }

    const makeAttack = (test_name, a_char_source, aw_type, d_char_source, dw_type, a_roll_source, d_roll_source, opposed_source, active_defence_source) => {
        const prepareRoll = (input) => {
            input.a_adv = input.a_adv * 10
            input.d_adv = input.d_adv * 10

            input.a_mod = 0
            input.d_mod = 0

            input.a_target = input.as_value + input.a_adv
            input.d_target = input.ds_value + input.d_adv

            return input
        }

        const applyAccurateQuality = (input) => {
            input.aw_accurate = hasQuality(input.aw_qualities, 'accurate') ?  10 : 0
            input.a_mod = input.a_mod + input.aw_accurate
            return input
        }
        const applyFastQuality = (input) => {
            input.dw_fast = 0
            if (hasQuality(input.aw_qualities, 'fast')) {
                if(!hasQuality(input.dw_qualities, 'fast')) {
                    const attr = wfrpModule.getSkillAttrById(input.ds_id)
                    const is_melee = wfrp.specialisations.slice(0, 8).includes(attr)
                    input.dw_fast = is_melee ? -10 : 0
                    input.d_mod = input.d_mod + input.dw_fast
                }
            }
            return input
        }
        const applyOffHand = (input) => {
            input.a_off_hand_penalty = !input.aw_off_hand
                ? 0
                : Math.min(-20 + (parseInt(input.a_ambidextrous_rank) || 0) * 10, 0)

            input.d_off_hand_penalty = (!input.dw_off_hand || hasQuality(input.dw_qualities, 'defensive'))
                ? 0
                : Math.min(-20 + (parseInt(input.d_ambidextrous_rank) || 0) * 10)

            input.a_mod = input.a_mod + input.a_off_hand_penalty
            input.d_mod = input.d_mod + input.d_off_hand_penalty
            return input
        }
        const applyCombatModifiers= (input) => {
            const a_type = input.aw_is_ranged ? `ranged` : `melee`
            const d_type = input.dw_is_dodge ? `dodge` : `parry`

            wfrp.combat_modifiers.filter(m => input[`a_${m.attr}`]).forEach(m => {
                if (Object.keys(m.values).includes(a_type)) {
                    input.a_mod = input.a_mod + m.values[a_type]
                    input[`a_${m.attr}_value`] = m.values[a_type] > 0 ? `+${m.values[a_type]}` : `${m.values[a_type]}`
                }
                else {
                    input[`a_${m.attr}`] = 0
                }
            })

            wfrp.combat_modifiers.filter(m => input[`d_${m.attr}`]).forEach(m => {
                if (Object.keys(m.values).includes(d_type)) {
                    input.d_mod = input.d_mod + m.values[d_type]
                    input[`d_${m.attr}_value`] = m.values[d_type] > 0 ? `+${m.values[d_type]}` : `${m.values[d_type]}`
                }
                else {
                    input[`d_${m.attr}`] = 0
                }
            })

            return input
        }

        const applyDefensiveQuality = (input) => {
            input.dw_defensive = hasQuality(input.dw_qualities, 'defensive') ?  1 : 0
            input.d_roll_sl = input.d_roll_sl + input.dw_defensive
            return input
        }
        const applyPreciseQuality = (input) => {
            input.aw_precise = hasQuality(input.aw_qualities, 'precise') && input.a_is_passed ? 1 : 0
            input.a_roll_sl = input.a_roll_sl + input.aw_precise
            return input
        }
        const applyImpaleQuality = (input) => {
            const isImpaleRoll = (qualities, roll, is_passed) => hasQuality(qualities, 'impale') && roll % 10 === 0 && is_passed

            input.aw_impale = isImpaleRoll(input.aw_qualities, input.a_roll, input.a_is_passed) ? 1 : 0
            input.dw_impale = isImpaleRoll(input.dw_qualities, input.d_roll, input.d_is_passed) ? 1 : 0
            input.a_is_crit = input.aw_impale ? 1 : input.a_is_crit
            input.d_is_crit = input.dw_impale ? 1 : input.d_is_crit

            return input
        }

        const applyImpreciseQuality = (input) => {
            input.aw_imprecise = hasQuality(input.aw_qualities, 'imprecise') ? -1 : 0
            input.a_roll_sl = input.a_roll_sl + input.aw_imprecise
            return input
        }
        const applyDangerousQuality = (input) => {
            const isDangerousRoll = (qualities, roll, is_passed) => hasQuality(qualities, 'dangerous')
                && (roll % 10 === 9 || Math.floor(roll / 10) === 9) && !is_passed

            input.aw_dangerous = isDangerousRoll(input.aw_qualities, input.a_roll, input.a_is_passed) ? 1 : 0
            input.dw_dangerous = isDangerousRoll(input.dw_qualities, input.d_roll, input.d_is_passed) ? 1 : 0

            input.a_is_crit = input.aw_dangerous ? -1 : input.a_is_crit
            input.d_is_crit = input.dw_dangerous ? -1 : input.d_is_crit

            return input
        }
        const applySlowQuality = (input) => {
            input.dw_slow = hasQuality(input.aw_qualities, 'slow') ? 1 : 0
            input.d_roll_sl = input.d_roll_sl + input.dw_slow
            return input
        }

        const applySizeModifers = (input) => {
            input.a_is_smaller_mod = 0
            input.d_size_mod = 0

            if (input.size_delta < 0 && !input.aw_is_ranged) input.a_is_smaller_mod = 10
            if (input.aw_is_ranged) {
                input.d_size_mod = input.d_size < 4 ? 10 * input.d_size - 30 : 20 * input.d_size - 60
            }
            input.a_mod = input.a_mod + input.a_is_smaller_mod + input.d_size_mod
            return input
        }
        const applySizeSL = (input) => {
            const attr = wfrpModule.getSkillAttrById(input.ds_id)
            const d_is_melee = !input.dw_is_ranged && !input.dw_is_dodge

            input.d_is_smaller_sl = (!input.aw_is_ranged && d_is_melee && input.size_delta > 0) ? -2 * input.size_delta : 0
            input.d_roll_sl = input.d_roll_sl + input.d_is_smaller_sl

            return input
        }

        let entries = []
        entries.push(rtEntry(`name`, test_name))
        entries.push(rtAttrEntry(`a_name`, `${a_char_source}character_name`), rtAttrEntry(`d_name`, `${d_char_source}character_name`))
        entries.push(active_defence_source === "defender"
            ? rtNumAttrEntry(`d_active_defence`, `${d_char_source}active_defence`)
            : rtNumEntry(`d_active_defence`, active_defence_source)
        )
        entries.push(rtAttrEntry(`a_talent_str`, `${a_char_source}attacker_talent_str`), rtAttrEntry(`d_talent_str`, `${d_char_source}defender_talent_str`))
        entries.push(rtNumAttrEntry(`a_talent_rank`, `${a_char_source}attacker_talent_rank`), rtNumAttrEntry(`d_talent_rank`, `${d_char_source}defender_talent_rank`))
        entries.push(rtNumAttrEntry(`a_adv`, `${a_char_source}advantage`))
        entries.push(rtNumAttrEntry(`d_adv`, `${d_char_source}advantage`))
        entries.push(rtNumAttrEntry(`a_ambidextrous_rank`,`${a_char_source}ambidextrous_rank`),rtNumAttrEntry(`d_ambidextrous_rank`,`${d_char_source}ambidextrous_rank`))
        entries.push(rtNumAttrEntry(`a_size`, `${a_char_source}size_index`), rtNumAttrEntry(`d_size`, `${d_char_source}size_index`))

        entries = addWeaponToRoll(entries, 'a', a_char_source, aw_type)
        entries = addWeaponToRoll(entries, 'd', d_char_source, dw_type)
        entries = addDefenderResistanceToRoll(entries, d_char_source)
        entries = addLastValuesToRoll(entries, a_char_source, d_char_source)
        entries = addRollsToRoll(entries, a_roll_source, d_roll_source, opposed_source)

        wfrp.combat_modifiers.filter(m => Object.keys(m.values).includes('melee') || Object.keys(m.values).includes('ranged'))
            .forEach(m => {
                entries.push(rtNumAttrEntry(`a_${m.attr}`, `${a_char_source}${m.attr}`), rtOutputEntry(`a_${m.attr}_value`))
            })
        wfrp.combat_modifiers.filter(m => Object.keys(m.values).includes('parry') || Object.keys(m.values).includes('dodge'))
            .forEach(m => {
                entries.push(rtNumAttrEntry(`d_${m.attr}`, `${d_char_source}${m.attr}`), rtOutputEntry(`d_${m.attr}_value`))
            })
        entries = addOutputsToRoll(entries, [
            `a_target`, `d_target`, `a_roll_sl`, `d_roll_sl`, `total_sl`,
            `hit_location`, `armour`, `is_attacker_win`, `a_is_crit`, `d_is_crit`, `total_damage`,
            `aw_accurate`, `aw_damaging`, `aw_impact`, `aw_impale`, `aw_penetrating`, `aw_precise`,
            `aw_dangerous`, `aw_imprecise`, `aw_undamaging`,
            `dw_defensive`, `dw_fast`, `dw_impale`, `dw_dangerous`, `dw_slow`,
            `is_only_aw_name`, `a_off_hand_penalty`, `d_off_hand_penalty`,
            `a_is_smaller_mod`, `d_size_mod`, `d_is_smaller_sl`, `size_damage_mod`])

        startRoll(rtString(`&{template:wfrp-opposed}`, entries), (results) => {
            let outputs = extractRollResults(results)

            if (a_roll_source === "last") outputs.a_roll = getLastValue(outputs, "a_roll")
            if (d_roll_source === "last") outputs.d_roll = getLastValue(outputs, "d_roll")
            if (opposed_source === "last") outputs.is_opposed = getLastValue(outputs, "opposed")

            outputs.is_only_aw_name = (!outputs.is_opposed || outputs.d_active_defence) ? 1 : 0
            outputs.size_delta = outputs.a_size - outputs.d_size

            outputs = prepareRoll(outputs)
            outputs = applyAccurateQuality(outputs)
            outputs = applyFastQuality(outputs)
            outputs = applyOffHand(outputs)
            outputs = applyCombatModifiers(outputs)
            outputs = applySizeModifers(outputs)

            outputs = processRoll(outputs, "a")
            outputs = processRoll(outputs, "d")

            outputs = applyDefensiveQuality(outputs)
            outputs = applyPreciseQuality(outputs)
            outputs = applyImpaleQuality(outputs)
            outputs = applyDangerousQuality(outputs)
            outputs = applyImpreciseQuality(outputs)
            outputs = applySlowQuality(outputs)
            outputs = applySizeSL(outputs)

            if (!outputs.a_is_passed) outputs.a_talent_rank = 0
            if (!outputs.d_is_passed) outputs.d_talent_rank = 0
            outputs.a_roll_sl = outputs.a_roll_sl + outputs.a_talent_rank
            outputs.d_roll_sl = outputs.d_roll_sl + outputs.d_talent_rank

            outputs.total_sl = outputs.is_opposed ? outputs.a_roll_sl - outputs.d_roll_sl : outputs.a_roll_sl;
            outputs.is_attacker_win = outputs.is_opposed
                ? (outputs.total_sl > 0 || outputs.total_sl == 0 && outputs.as_value > outputs.ds_value ? 1 : 0)
                : (outputs.a_is_passed ? 1 : 0)

            outputs = calculateDamage(outputs)

            const update = {}
            update["last_a_roll"] = outputs.a_roll
            update["last_d_roll"] = outputs.d_roll
            update["last_total_sl"] = outputs.total_sl
            update["last_opposed"] = outputs.is_opposed
            update["last_ts"] = Math.floor(Date.now() / 1000)
            setAttrs(update)
            finishRoll(results.rollId, outputs);
        });
    }

    const makeRiposte = () => {
        let entries = []
        entries.push(rtEntry(`name`, `Riposte`))
        entries.push(rtAttrEntry(`a_name`, `character_name`), rtAttrEntry(`d_name`, `target|character_name`))

        entries = addWeaponToRoll(entries, 'a', '', `defence`)
        entries = addDefenderResistanceToRoll(entries, 'target|')
        entries = addLastValuesToRoll(entries, '', 'target|')
        entries = addRollsToRoll(entries, `last`, `last`, `last`)
        entries = addOutputsToRoll(entries, [`total_sl`, `hit_location`, `armour`, `total_damage`,
            `aw_damaging`, `aw_impact`, `aw_penetrating`, `aw_undamaging`, `size_damage_mod`])

        entries.push(rtNumAttrEntry(`a_size`, `size_index`), rtNumAttrEntry(`d_size`, `target|size_index`))

        startRoll(rtString(`&{template:wfrp-riposte}`, entries), (results) => {
            let inputs = extractRollResults(results)
            inputs.a_roll = getLastValue(inputs, "a_roll")
            inputs.total_sl = getLastValue(inputs, "total_sl")
            inputs.total_sl = -inputs.total_sl
            inputs.size_delta = inputs.a_size - inputs.d_size

            let outputs = calculateDamage(inputs)

            console.log(outputs)
            finishRoll(results.rollId, outputs);
        });
    }

    const calculateDamage = (inputs) => {
        const applyDamagingQuality = (input) => {
            input.aw_damaging = 0

            if (hasQuality(input.aw_qualities, 'damaging') && input.total_sl >= 0) {
                let units = input.a_roll % 10
                if (units == 0) units = 10
                const max_total_sl = Math.max(input.total_sl, units)
                input.aw_damaging = max_total_sl - input.total_sl
                input.total_sl = max_total_sl
            }

            return input
        }
        const applyImpactQuality = (input) => {
            input.aw_impact = 0
            if (hasQuality(input.aw_qualities, 'impact') && input.total_sl >= 0) {
                let units = input.a_roll % 10
                if (units == 0) units = 10
                input.total_sl = input.total_sl + units
                input.aw_impact = units
            }
            return input
        }
        const applyPenetratingQuality = (input) => {
            input.aw_penetrating = hasQuality(input.aw_qualities, 'penetrating') && input.armour > 0 ? -1 : 0
            input.armour = input.armour + input.aw_penetrating
            return input
        }
        const applyUndamagingQuality = (input) => {
            const is_undamaging = hasQuality(input.aw_qualities, 'undamaging')
            input.aw_undamaging = is_undamaging ? input.armour : 0
            input.min_damage =  is_undamaging ? 0 : 1
            input.armour = input.armour + input.aw_undamaging

            return input
        }

        const applySizeWeaponQualities = (input) => {
            if (input.aw_is_ranged) return input
            if (input.size_delta == 1 && !hasQuality(input.aw_qualities, 'damaging')) {
                input.aw_qualities = addQuality(input.aw_qualities, 'damaging')
            }
            if (input.size_delta > 1 && !hasQuality(input.aw_qualities, 'impact')) {
                input.aw_qualities = addQuality(input.aw_qualities, 'impact')
            }
            return input
        }
        const applySizeDamage = (input) => {
            input.size_damage_mod = (!input.aw_is_ranged && input.size_delta > 1) ? input.size_delta : 1
            return input
        }

        const hit_location = getHitLocation(inputs.a_roll)

        inputs.hit_location = hit_location[1].label
        const initial_armour = inputs[`da_${hit_location[0]}`] + inputs.da_shield
        inputs.armour = initial_armour

        const initial_total_sl = inputs.total_sl

        let outputs = applySizeWeaponQualities(inputs)
        outputs = applyDamagingQuality(inputs)
        outputs = applyImpactQuality(outputs)
        outputs = applyPenetratingQuality(outputs)
        outputs = applyUndamagingQuality(outputs)
        outputs = applySizeDamage(outputs)

        outputs.total_damage = Math.max((outputs.total_sl + outputs.aw_damage) * outputs.size_damage_mod - outputs.armour - outputs.d_tb, outputs.min_damage)
        outputs.total_sl = initial_total_sl
        outputs.armour = initial_armour
        return outputs
    }

    // Sheet Functions

    const initSheet = () => {

        wfrp.characteristics.forEach(char => {
            calculateCharacteristic(char)
        });
        updateAllCharModifiers()

        wfrp.skills.forEach(skill => calculateSkill(skill));

        wfrp.specialisations.forEach(specialisation => calculateSpecialisation(specialisation));

        getAttrs(["sheet_version"], values => (values["sheet_version"] !== wfrp.sheet_version) ? updateSheet(values["sheet_version"]) : 0);

        recalculateEarnedXP();

        calculateArmour();

        getAttrs(["setting_init_option","setting_whisper","setting_bonus_option","setting_crit_option"], values => {

            toggleInitOption(values["setting_init_option"]);

            toggleWhisper(values["setting_whisper"]);

            toggleRollBonus(values["setting_bonus_option"]);

            toggleRollCrits(values["setting_crit_option"]);

        })

        saveLastRoll({a_roll: "0", d_roll: "0", total_sl: "0", is_opposed: "0"})

        getAttrs(["setting_max_advantage"], values => {
            const update = {}
            update.advantage= "0"
            update.advantage_max= values["setting_max_advantage"] || 10
            setAttrs(update)
        })
        calculateCombatTalentAttr()
    }

    const updateSheet = (version) => {
        let updateAttrs = {};

        switch (version) {
            default:
                updateAttrs["sheet_version"] = wfrp.sheet_version;
            break;
        }

        setAttrs(updateAttrs);
    }

    const toggleRollDifficulty = (new_value) => {
        const difficulty = (new_value === "1") ? `?{Difficulty|Average (+20), 20|Very Easy (+60), 60|Easy (+40), 40|Average (+20), 20|Challenging (0), 0|Difficult (-10), -10|Hard (-20), -20|Very Hard (-30), -30}` :
                           0;

        setAttrs({
            difficulty_query:difficulty
        });
    }

    const toggleRollBonus = (new_value) => {
        let query = 0;
        let slbonus = "";

        if (new_value === "1") {
            query = "?{Target Bonus|0}";
            slbonus = "{{sl_bonus=?{SL Bonus|0}}}"
        }

        setAttrs({
            roll_query:query,
            roll_slbonus:slbonus
        });

    }

    const toggleRollCrits = (new_value) => {
        const cf = (new_value === "1") ? 95 :
                   (new_value === "2") ? 95 :
                   (new_value === "3") ? 99 :
                   95;

        const cs = (new_value === "1") ? 5 :
                   (new_value === "2") ? 1 :
                   (new_value === "3") ? 1 :
                   5;

        setAttrs({
            roll_cs:cs,
            roll_cf:cf
        });
    }

    const toggleInitOption = (new_value) => {
        const init = (new_value === "1") ? `{{init=[[@{initiative}+@{init_bonus} &{tracker}]]}}` :
                     (new_value === "2") ? `{{init=[[@{initiative}+1d10+@{init_bonus} &{tracker}]]}}` :
                     (new_value === "3") ? `{{init=[[@{agility_bonus}+@{initiative_bonus}+1d10+@{init_bonus} &{tracker}]]}}` :
                     `{{init=[[@{initiative}]]}}`;
        setAttrs({roll_init:init});
    }

    const toggleWhisper = (new_value) => {
        const whisper = (new_value === "2") ? `/w gm` :
                                            ``;

        setAttrs({roll_whisper:whisper});
    }

    // Iterates on all modifier sources and updates all possible char modifiers
    const updateAllCharModifiers = () => {
        // acquires all repeating sections ids
        let handled_section_count = 0
        const section_ids = []

        wfrp.repeating_sections.forEach(section => {
            getSectionIDs(section.name, (ids) => {
                section_ids.push({section, ids})
                handled_section_count++

                if (handled_section_count === wfrp.repeating_sections.length) setModifiers(section_ids)
            })
        })

        // gets all needed attrs and updates modifiers
        const sectionAttr = (name, id, attr) => `repeating_${name}_${id}_${attr}`
        const setModifiers = (section_ids) => {
            const repeating_mod_attrs = section_ids.flatMap(s => [
                ...s.ids.map(id => sectionAttr(s.section.name, id, s.section.mods_attr)),
                ...(s.section.name === "talent" ? s.ids.map(id => sectionAttr("talent", id, "talent_ranks")) : [])
            ])
            const attrs = [
                ...repeating_mod_attrs,
                ...wfrp.characteristics_v2.flatMap(c => [c.attr, c.bonus_attr, c.custom_modifier_attr])
            ]

            getAttrs(attrs, values => {
                let update = {}
                wfrp.characteristics_v2.forEach(c => {update[c.modifier_attr] = 0; update[c.bonus_modifier_attr] = 0;})
                wfrp.modifiers.forEach(m => {update[m.attr] = 0;})
                wfrp.skills.forEach(s => {update[`${s}_modifier`] = 0;})

                for (section of section_ids) update = handleRepModValue(update, values, section)

                wfrp.characteristics_v2.forEach(c => {
                    const custom_mod = parseInt(values[c.custom_modifier_attr]) || 0
                    update[c.modifier_attr] = update[c.modifier_attr] + custom_mod
                })

                setAttrs(update)
            })
        }

        const handleRepModValue = (result, values, section) => {
            for(id of section.ids) {
                const mod_attr = sectionAttr(section.section.name, id, section.section.mods_attr)
                let mod_string = values[mod_attr] || ""

                mod_string.split(",").map(i => i.trim()).forEach(mod => {
                    const mod_parts = mod.split(" ").map(i => i.trim())
                    if (mod_parts.length !== 2) return

                    let mod_value = mod_parts[0], mod_unit = mod_parts[1]
                    if (section.section.name === `talent`) mod_value = mod_value.replace(`[TR]`, values[sectionAttr('talent', id, `talent_ranks`)])
                    if (wfrp.modifiers.map(m => m.short).includes(mod_unit)) {
                        wfrp.characteristics_v2.forEach(c => {
                            mod_value = mod_value
                                .replace(`[${c.short}]`, values[c.attr])
                                .replace(`[${c.bonus_short}]`, values[c.bonus_attr])
                        })
                    }

                    if (mod_value.match(/\[\s*\d+\s*\*\s*\d+\s*\]/)) {
                        const parts = mod_value.replace("[", "").replace("]", "").split("*").map(i => i.trim())
                        mod_value = parseInt(parts[0]) * parseInt(parts[1])
                    }

                    if(!parseInt(mod_value)) return

                    wfrp.characteristics_v2.forEach(c => {
                        if (c.short === mod_unit) result[c.modifier_attr] = result[c.modifier_attr] + parseInt(mod_value)
                        if (c.bonus_short === mod_unit) result[c.bonus_modifier_attr] = result[c.bonus_modifier_attr] + parseInt(mod_value)
                    })
                    wfrp.modifiers.forEach(m => {
                        if (m.short === mod_unit) result[m.attr] = result[m.attr] + parseInt(mod_value)
                    })
                    wfrp.skills.forEach(s => {
                        if (s === mod_unit) result[`${s}_modifier`] = result[`${s}_modifier`] + parseInt(mod_value)
                    })
                })
            }

            return result
        }
    }
    // Species Controls

    const changeSpecies = (new_value) => {

        new_value = new_value.toLowerCase();

        let update = {}

        Object.keys(wfrp.species[new_value].attributes).forEach(attribute => {
            update[`${attribute}_species`] = wfrp.species[new_value].attributes[attribute]
        })
        update["fate"] = wfrp.species[new_value]["fate"]
        update["fortune"] = wfrp.species[new_value]["fate"]
        update["fortune_max"] = wfrp.species[new_value]["fate"]
        update["resilience"] = wfrp.species[new_value]["resilience"]
        update["resolve"] = wfrp.species[new_value]["resilience"]
        update["movement"] = wfrp.species[new_value]["movement"]
        update["size"] = wfrp.species[new_value]["size"]
        update["motivation"] = wfrp.species[new_value]["motivation"]

        if (new_value === "") {
            return;
        }
        setAttrs(update)

        if (new_value !== "custom") {
            update = {}
            getCompendiumPage(`Species:${new_value}`, page => {
                const skills = helperFunctions.parseJSON(page.data.Skills);
                const talents = helperFunctions.parseJSON(page.data.Talents);

                const skills_fixed = skills && skills.Fixed.split(",").map(item=>item.trim()) || [];
                const talents_fixed = talents && talents.Fixed.split(",").map(item=>item.trim()) || [];

                let talents_choices = [];

                let skill_index = 1;
                let talent_index = 1;

                if (talents && talents.Choices) talents.Choices.forEach(choice => talents_choices = [...talents_choices, ...choice]);

                for (let index = 1; index <= 12; index++) {
                    update[`species_skill_${index}_name`] = "";
                    update[`species_skill_${index}_advances`] = "0";
                }

                for (let index = 1; index <= 10; index++) {
                    update[`species_talent_${index}_name`] = "";
                    update[`species_talent_${index}_advances`] = "0";
                }

                for (const skill of skills_fixed) {
                    update[`species_skill_${skill_index}_name`] = skill;
                    update[`species_talent_${skill_index}_advances`] = "0";
                    skill_index++;
                }

                for (const talent of talents_fixed) {
                    update[`species_talent_${talent_index}_name`] = talent;
                    update[`species_talent_${talent_index}_advances`] = "1";
                    talent_index++;
                }

                for (const talent of talents_choices) {
                    update[`species_talent_${talent_index}_name`] = talent;
                    update[`species_talent_${talent_index}_advances`] = "0";
                    talent_index++;
                }

                update["advances_changed"] = 1;

                setAttrs(update, {silent:true});
            });

        }
    }

    const checkSpeciesAdvances = () => {
        const attrs = [];

        for (let i = 1; i <= 12; i++) {
            attrs.push(`species_skill_${i}_advances`);
        }

        getAttrs(attrs, values => {
            let threes = 0;
            let fives = 0;

            Object.values(values).forEach(value => {
                if (value === "3") threes++;
                if (value === "5") fives++;
            });

            const update = {};

            update["species_disable3"] = (threes >= 3) ? 1 : 0;
            update["species_disable5"] = (fives >= 3) ? 1 : 0;

            setAttrs(update);

        });

    }

    // Characteristic Functions

    const rollInitial = () => {
        const rolls = wfrp.characteristics.map(ch => `{{${ch}=[[2d10]]}}`)
        update = {}
        startRoll(`&{template:wfrp-initial} {{character_name=@{character_name}}} ${rolls.join(" ")}`, function(results) {
            wfrp.characteristics.forEach(ch => {
                update[`${ch}_initial`] = results.results[ch].result
            })
            setAttrs(update)
            finishRoll(results.rollId);
        });
    }

    const calculateCharacteristic = (characteristic) => {

        const attrs = [
            `npc`,
            `${characteristic}`,
            `${characteristic}_species`,
            `${characteristic}_initial`,
            `${characteristic}_advances`,
            `${characteristic}_modifier`,
            `${characteristic}_custom_mod`,
            `${characteristic}_bonusmod`,
        ];

        getAttrs(attrs, values => {
            const base = parseInt(values[`${characteristic}`]) || 0;
            const species = parseInt(values[`${characteristic}_species`]) || 0;
            const initial = parseInt(values[`${characteristic}_initial`]) || 0;
            const advances = parseInt(values[`${characteristic}_advances`]) || 0;
            const modifier = parseInt(values[`${characteristic}_modifier`]) || 0;
            // const custom_mod = parseInt(values[`${characteristic}_custom_mod`]) || 0;
            const bonusmod = parseInt(values[`${characteristic}_bonusmod`]) || 0;

            if (values["npc"] === "on") {

                const updateAttrs = {};

                const bonus = Math.floor(base / 10) + bonusmod;

                updateAttrs[`${characteristic}_bonus`] = bonus;

                setAttrs(updateAttrs);

                return;
            } else {

                const current = species + initial + advances + modifier;

                const bonus = Math.floor(current / 10) + bonusmod;

                const updateAttrs = {};

                updateAttrs[`${characteristic}`] = current;
                updateAttrs[`${characteristic}_bonus`] = bonus;

                setAttrs(updateAttrs);

            }

        });
    }

    const cascadeAttributeChange = (characteristic) => {

        getAttrs(["npc"], check => {
            //if (check["npc"] === "on") return;

            wfrp.skills.forEach(skill => {
                getAttrs([`${skill}_characteristic`], values => {
                    const skill_characteristic = values[`${skill}_characteristic`];

                    if (skill_characteristic === characteristic) calculateSkill(skill);
                });
            });

            wfrp.specialisations.forEach(specialisation => {
                getAttrs([`${specialisation}_characteristic`], values => {
                    const specialisation_characteristic = values[`${specialisation}_characteristic`];

                    if (specialisation_characteristic === characteristic) calculateSpecialisation(specialisation);
                });
            });

            wfrp.repeating_skills.forEach(section => {
                getSectionIDs(section, id_array => {
                    id_array.forEach(id => {
                        getAttrs([`repeating_${section}_${id}_specialisation_characteristic`], values => {
                            const repeating_characteristic = values[`repeating_${section}_${id}_specialisation_characteristic`];

                            if (repeating_characteristic === characteristic) recalculateRepeatingSkill(`repeating_${section}_${id}_specialisation_characteristic`, section);
                        });
                    });
                });
            });
        });
    }

    const updateMovementRates = () => {

        getAttrs(["npc", "movement", "run_mod"], v => {

            if (v["npc"] === "on") return;

            const movement = parseInt(v["movement"]) || 0;
            const run_mod = parseInt(v["run_mod"]) || 0;
            const walk = movement * 2 || 0;
            const run = (movement + run_mod) * 4 || 0;

            setAttrs({
                walk: walk,
                run: run
            });
        });
    }

    // Skill Functions

    const calculateSkill = (skill) => {

        getAttrs(["npc"], check => {

            //if (check["npc"] === "on") return;

            const attrs = [
                `${skill}_characteristic`
            ];

            getAttrs(attrs, values => {
                const base = values[`${skill}_characteristic`];

                const attrs = [
                    `${base}`,
                    `${skill}_advances`,
                    `${skill}_bonus`,
                    `${skill}_modifier`
                ];

                getAttrs(attrs, values => {
                    const characteristic = parseInt(values[`${base}`]) || 0;
                    const advances = parseInt(values[`${skill}_advances`]) || 0;
                    const modifier = parseInt(values[`${skill}_modifier`]) || 0;
                    const bonus = parseInt(values[`${skill}_bonus`]) || 0;

                    const total = characteristic + advances + modifier + bonus;

                    const updateAttrs = {};

                    updateAttrs[`${skill}`] = total;

                    setAttrs(updateAttrs);
                });

            });

        });

    }

    const calculateSpecialisation = (specialisation) => {

        getAttrs(["npc"], check => {

            //if (check["npc"] === "on") return;

            const attrs = [
                `${specialisation}_characteristic`,
                `npc`
            ];

            getAttrs(attrs, values => {
                const base = values[`${specialisation}_characteristic`];

                const attrs = [
                    `${base}`,
                    `${specialisation}_advances`,
                    `${specialisation}_modifier`,
                    `${specialisation}_bonus`
                ];

                getAttrs(attrs, values => {
                    const characteristic = parseInt(values[`${base}`]) || 0;
                    const advances = parseInt(values[`${specialisation}_advances`]) || 0;
                    const modifier = parseInt(values[`${specialisation}_modifier`]) || 0;
                    const bonus = parseInt(values[`${specialisation}_bonus`]) || 0;

                    const total = characteristic + advances + modifier + bonus;

                    const updateAttrs = {};

                    updateAttrs[`${specialisation}`] = total;

                    setAttrs(updateAttrs);

                });
            });
        });
    }

    const recalculateRepeatingSkill = (attribute, section) => {
        const repeating_id = helperFunctions.extractRepeatingId(attribute, section);

        const attrs = [`${repeating_id}_specialisation_characteristic`]

        getAttrs(attrs, values => {

            const attrs_2 = [
                `${values[`${repeating_id}_specialisation_characteristic`]}`,
                `${repeating_id}_specialisation_char`,
                `${repeating_id}_specialisation_advances`,
                `${repeating_id}_specialisation_modifier`,
            ];

            getAttrs(attrs_2, values_2 => {
                values = {...values, ...values_2};
                characteristic = values[values[`${repeating_id}_specialisation_characteristic`]] || 0;

                const updateAttrs = {};

                updateAttrs[`${repeating_id}_specialisation_char`] = characteristic;

                const advances = parseInt(values[`${repeating_id}_specialisation_advances`]) || 0;
                const modifier = parseInt(values[`${repeating_id}_specialisation_modifier`]) || 0;

                const total = characteristic + advances + modifier;

                updateAttrs[`${repeating_id}_specialisation`] = total;

                setAttrs(updateAttrs, {silent:true});
            });
        });
    }

    const cascadeSkillChanges = (attribute) => {

        const sections = ["spells","weapons"];

        helperFunctions.aggregateRepeatingIDs(sections, ids => {

            for (const id of ids["spells"]) {

                calculateSpellValue(`repeating_spells_${id}_spell_type`);

            }

            for (const id of ids["weapons"]) {

                updateWeaponTarget(`repeating_weapons_${id}_weapon_type`);

            }

        });

    }

    // Career Functions

    const updateCareerPath = () => {
        const attrs = [];

        helperFunctions.getSectionIDsOrdered("careers", id_array => {
            id_array.forEach(id => attrs.push(`repeating_careers_${id}_career_name`));

            getAttrs(attrs, values => {
                const updateAttrs = {};

                const names = Object.values(values).filter(value => value !== "");
                const career_path = names.join("⟶");

                updateAttrs[`career_path`] = career_path;

                setAttrs(updateAttrs);
            });
        });
    }

    const updateFirstCareer = () => {
        helperFunctions.getSectionIDsOrdered("careers", id_array => {

            if (id_array.length > 0) {

                const updateAttrs = {};

                const first = id_array.shift();

                updateAttrs [`repeating_careers_${first}_career_first`] = "on";
                id_array.forEach(id => updateAttrs[`repeating_careers_${id}_career_first`] = 0);

                setAttrs(updateAttrs);

            }

        });
    }

    const updateCurrentCareer = () => {
        const updateAttrs = {};

        helperFunctions.getSectionIDsOrdered("careers", id_array => {

            if (id_array.length > 0) {
                const current_id = id_array.pop();

                id_array.forEach(id => updateAttrs[`repeating_careers_${id}_career_current`] = 0);

                updateAttrs[`repeating_careers_${current_id}_career_current`] = "on";

                getAttrs([`repeating_careers_${current_id}_career_name`,`repeating_careers_${current_id}_career_level`,`repeating_careers_${current_id}_career_status`], values => {
                    updateAttrs[`career`] = values[`repeating_careers_${current_id}_career_name`] || "";
                    updateAttrs[`career_level`] = values[`repeating_careers_${current_id}_career_level`] || "";
                    updateAttrs[`status`] = values[`repeating_careers_${current_id}_career_status`] || "";

                    setAttrs(updateAttrs);
                });
            }
        });
    }

    const updateCurrentCareerLevel = (attribute, new_value) => {
        const section = "careers";
        const repeating_id = helperFunctions.extractRepeatingId(attribute, section);
        const updateAttrs = {};

        updateAttrs[`${repeating_id}_career_level_current`] = new_value;

        setAttrs(updateAttrs);
    }

    const updateCareerNames = (attribute) => {
        const section = "careers";
        const repeating_id = helperFunctions.extractRepeatingId(attribute, section);

        const attrs = [];

        [1,2,3,4].forEach(level => {
            attrs.push(`${repeating_id}_career_level${level}_name`)
            attrs.push(`${repeating_id}_career_level${level}_status`)
        });

        attrs.push(`${repeating_id}_career_current`);
        attrs.push(`${repeating_id}_career_level_current`);

        getAttrs(attrs, values => {
            const updateAttrs = {};
            const current_level = values[`${repeating_id}_career_level_current`];
            const current_career = values[`${repeating_id}_career_current`];

            updateAttrs[`${repeating_id}_career_level`] = values[`${repeating_id}_career_level${current_level}_name`] || "";
            updateAttrs[`${repeating_id}_career_status`] = values[`${repeating_id}_career_level${current_level}_status`] || "";

            if (current_career === "on") {
                updateAttrs[`career_level`] = values[`${repeating_id}_career_level${current_level}_name`] || "-";
                updateAttrs[`status`] = values[`${repeating_id}_career_level${current_level}_status`] || "-";
            }

            setAttrs(updateAttrs);
        });
    }

    // Experience Functions    

    const calculateTotalAdvances = (attribute) => {
        const section = "careers";
        const repeating_id = helperFunctions.extractRepeatingId(attribute, section);

        const attrs = [];

        wfrp.characteristics.forEach(characteristic => attrs.push(`${repeating_id}_career_${characteristic}_advances`));

        for (let i = 1; i <= 4; i++) {
            for (let j = 1; j <= 10; j++) {
                attrs.push(`${repeating_id}_career_skill_${i}_${j}_advances`);
                attrs.push(`${repeating_id}_career_skill_${i}_${j}_init`);
            }

            for (let k = 1; k <= 5; k++) {
                attrs.push(`${repeating_id}_career_talent_${i}_${k}_advances`);
                attrs.push(`${repeating_id}_career_talent_${i}_${k}_init`);
            }
        }

        attrs.push(`${repeating_id}_career_first`);

        getAttrs(attrs, values => {
            const skills_filtered = Object.entries(values).filter(([key,value]) => key.includes("career_skill"));
            const talents_filtered = Object.entries(values).filter(([key,value]) => key.includes("talent"));

            let skills_values = skills_filtered.map(item => parseInt(item[1]) || 0);
            let talents_values = talents_filtered.map(item => parseInt(item[1]) || 0);

            let total_skills_advances = skills_values.reduce((a,b) => a+b);
            let total_talents_advances = talents_values.reduce((a,b) => a+b);

            const abs_total = total_skills_advances + total_talents_advances || "";

            const updateAttrs = {};

            updateAttrs[`${repeating_id}_career_advances`] = (abs_total > 0) ? abs_total : "";

            setAttrs(updateAttrs, recalculateSpentXP());
        });
    }

    const calculateCharacteristicXP = (value, free) => {
        let int = parseInt(value) + parseInt(free);
        let countdown = parseInt(free);
        let accumulator = 0;

        while (int > 0) {
            if (int > countdown) {
                accumulator +=
                    (int <= 5) ? 25 :
                    (int <= 10) ? 30 :
                    (int <= 15) ? 40 :
                    (int <= 20) ? 50 :
                    (int <= 25) ? 70 :
                    (int <= 30) ? 90 :
                    (int <= 35) ? 120 :
                    (int <= 40) ? 150 :
                    (int <= 45) ? 190 :
                    (int <= 50) ? 230 :
                    (int <= 55) ? 280 :
                    (int <= 60) ? 330 :
                    (int <= 65) ? 390 :
                    (int <= 70) ? 450 :
                    520;
            }

            int--;
        }

        return accumulator;
    }

    const calculateSkillXP = (value, free) => {
        let int = parseInt(value) + parseInt(free);
        let countdown = parseInt(free);
        let accumulator = 0;

        while (int > 0) {
            if (int > countdown) {
                accumulator +=
                    (int <= 5) ? 10 :
                    (int <= 10) ? 15 :
                    (int <= 15) ? 20 :
                    (int <= 20) ? 30 :
                    (int <= 25) ? 40 :
                    (int <= 30) ? 60 :
                    (int <= 35) ? 80 :
                    (int <= 40) ? 110 :
                    (int <= 45) ? 140 :
                    (int <= 50) ? 180 :
                    (int <= 55) ? 220 :
                    (int <= 60) ? 270 :
                    (int <= 65) ? 320 :
                    (int <= 70) ? 380 :
                    440;
            }

            int--;
        }

        return accumulator;
    }

    const calculateTalentXP = (value, free) => {
        let int = parseInt(value) + parseInt(free);
        let countdown = parseInt(free);
        let accumulator = 0;

        while (int > 0) {

            if (int > countdown) accumulator += int * 100

            int--;
        }

        return accumulator;
    }

    const recalculateSpentXP = () => {

        helperFunctions.aggregateRepeatingIDs([`careers`, `experience`, `experiencespent`], ids => {

            const attrs = [];

            for (const id of ids.careers) {

                for (const characteristic of wfrp.characteristics) {
                    attrs.push(`repeating_careers_${id}_career_${characteristic}_advances`);
                    attrs.push(`repeating_careers_${id}_career_${characteristic}_init`);
                }

                for (let i = 1; i <= 4; i++) {
                    for (let j = 1; j <= 10; j++) {
                        attrs.push(`repeating_careers_${id}_career_skill_${i}_${j}_name`);
                        attrs.push(`repeating_careers_${id}_career_skill_${i}_${j}_advances`);
                        attrs.push(`repeating_careers_${id}_career_skill_${i}_${j}_init`);
                    }

                    for (let k = 1; k <= 5; k++) {
                        attrs.push(`repeating_careers_${id}_career_talent_${i}_${k}_name`);
                        attrs.push(`repeating_careers_${id}_career_talent_${i}_${k}_advances`);
                        attrs.push(`repeating_careers_${id}_career_talent_${i}_${k}_init`);
                    }
                }
            }

            for (let i = 1; i <= 10; i++) {
                attrs.push(`species_talent_${i}_name`);
                attrs.push(`species_talent_${i}_advances`);
            }

            for (let i = 1; i <= 12; i++) {
                attrs.push(`species_skill_${i}_name`);
                attrs.push(`species_skill_${i}_advances`);
            }

            for (const id of ids.experience) {
                attrs.push(`repeating_experience_${id}_experience_amount`);
            }

            for (const id of ids.experiencespent) {
                attrs.push(`repeating_experiencespent_${id}_experience_amount`);

            }

            getAttrs(attrs, values => {
                const entries = Object.entries(values).filter(([key, value]) => value !== "");

                const characteristic_advances = new Map();
                const characteristic_advances_free = new Map();

                const skill_advances = new Map();
                const skill_advances_free = new Map();

                const talent_advances = new Map();
                const talent_advances_free = new Map();

                for (const id of ids.careers) {

                    wfrp.characteristics.forEach(characteristic => {
                        const value = parseInt(values[`repeating_careers_${id}_career_${characteristic}_advances`]) || 0;
                        const current = characteristic_advances.get(characteristic) || 0;
                        const total = value + current;

                        const value_free = parseInt(values[`repeating_careers_${id}_career_${characteristic}_init`]) || 0;
                        const current_free = characteristic_advances_free.get(characteristic) || 0;
                        const total_free = value_free + current_free;

                        characteristic_advances.set(characteristic, total);
                        characteristic_advances_free.set(characteristic, total_free);
                    });

                    for (let i = 1; i <= 4; i++) {
                        for (let j = 1; j <= 10; j++) {
                            const skill = values[`repeating_careers_${id}_career_skill_${i}_${j}_name`];

                            const value = parseInt(values[`repeating_careers_${id}_career_skill_${i}_${j}_advances`]) || 0;
                            const current = skill_advances.get(skill) || 0;
                            const total = current + value;

                            const value_free = parseInt(values[`repeating_careers_${id}_career_skill_${i}_${j}_init`]) || 0;
                            const current_free = skill_advances_free.get(skill) || 0;
                            const total_free = current_free + value_free;

                            skill_advances.set(skill, total);
                            skill_advances_free.set(skill, total_free);
                        }

                        for (let k = 1; k <= 5; k++) {
                            const talent = values[`repeating_careers_${id}_career_talent_${i}_${k}_name`];

                            const value = parseInt(values[`repeating_careers_${id}_career_talent_${i}_${k}_advances`]) || 0;
                            const current = talent_advances.get(talent) || 0;
                            const total = current + value;

                            const value_free = parseInt(values[`repeating_careers_${id}_career_talent_${i}_${k}_init`]) || 0;
                            const current_free = talent_advances_free.get(talent) || 0;
                            const total_free = current_free + value_free;

                            talent_advances.set(talent, total);
                            talent_advances_free.set(talent, total_free);
                        }
                    }
                }

                for (let i = 1; i <= 12; i++) {
                    const skill = values[`species_skill_${i}_name`];

                    const value_free = parseInt(values[`species_skill_${i}_advances`]) || 0;
                    const current_free = skill_advances_free.get(skill) || 0;
                    const total_free = current_free + value_free;

                    skill_advances_free.set(skill, total_free);
                }

                for (let i = 1; i <= 10; i++) {
                    const talent = values[`species_talent_${i}_name`];

                    const value_free = parseInt(values[`species_talent_${i}_advances`]) || 0;
                    const current_free = talent_advances_free.get(talent) || 0;
                    const total_free = current_free + value_free;
                }

                let xp = 0;

                characteristic_advances.forEach((value, key) => xp += calculateCharacteristicXP(value, characteristic_advances_free.get(key)));
                skill_advances.forEach((value, key) => xp += calculateSkillXP(value, skill_advances_free.get(key)));
                talent_advances.forEach((value, key) => xp += calculateTalentXP(value, talent_advances_free.get(key)));

                for (const id of ids.experiencespent) {
                    const value = parseInt(values[`repeating_experiencespent_${id}_experience_amount`]);

                    xp += value;
                }

                const updateAttrs = {};

                updateAttrs[`spent_xp`] = xp;

                setAttrs(updateAttrs, recalculateCurrentXP());

            });

        });

    }

    const recalculateEarnedXP = () => {
        const attrs = [];

        getSectionIDs("experience", id_array => {

            id_array.forEach(id => {
                attrs.push(`repeating_experience_${id}_experience_amount`);
            });

            attrs.push(`experience_mod`);

            getAttrs(attrs, values => {
                const int_values = Object.values(values).map(item => parseInt(item) || 0).filter(item => item > 0);
                const total_xp = int_values.reduce((a,b) => a+b, 0);

                setAttrs({total_xp: total_xp}, recalculateCurrentXP());
            });
        });
    }

    const recalculateCurrentXP = () => {
        getAttrs(["total_xp","spent_xp"], values => {
            const total = parseInt(values["total_xp"]) || 0;
            const spent = parseInt(values["spent_xp"]) || 0;
            const current = total - spent;

            setAttrs({current_xp:current});
        });
    }

    const consolidateXP = () => {

        let date = ( new Date() ).toLocaleDateString();

        getAttrs(["total_xp"], values => {

            getSectionIDs("experience", id_array => {

                id_array.forEach(id => removeRepeatingRow(`repeating_experience_${id}`));

            });

            const new_id = generateRowID();

            setAttrs({
                [`repeating_experience_${new_id}_experience_desc`]:`XP Consolidated (${date})`,
                [`repeating_experience_${new_id}_experience_amount`]:values.total_xp,
            });

        });
    }

    const calculateCharacteristicAdvances = (characteristic) => {
        getSectionIDs("careers", id_array => {
            const attrs = [];

            id_array.forEach(id => {
                attrs.push(`repeating_careers_${id}_career_${characteristic}_advances`);
                attrs.push(`repeating_careers_${id}_career_${characteristic}_init`);
            });

            attrs.push(`${characteristic}_noncareer`);

            getAttrs(attrs, values => {
                const int_values = Object.values(values).map(item => parseInt(item) || 0);
                const total_advances = int_values.reduce((a,b) => a+b);

                setAttrs({[`${characteristic}_advances`]:total_advances});
            });
        });
    }

    const calculateSkillAdvances = () => {
        getSectionIDs("careers", id_array => {

            getSectionIDs("noncareer-skills", id_array_2 => {
                const attrs = [];
                const skills = new Map();

                id_array.forEach((id, index) => {

                    for (let i = 1; i <= 4; i++) {
                        for (let j = 1; j <= 10; j++) {
                            attrs.push(`repeating_careers_${id}_career_skill_${i}_${j}_name`);
                            attrs.push(`repeating_careers_${id}_career_skill_${i}_${j}_advances`);
                            if (i === 1) attrs.push(`repeating_careers_${id}_career_skill_${i}_${j}_init`);
                        }
                    }
                });

                id_array_2.forEach((id) => {
                    attrs.push(`repeating_noncareer-skills_${id}_advance_name`)
                    attrs.push(`repeating_noncareer-skills_${id}_advance_advances`)
                });

                for (let i = 1; i <= 12; i++) {
                    attrs.push(`species_skill_${i}_name`);
                    attrs.push(`species_skill_${i}_advances`);
                }

                getAttrs(attrs, values => {
                    const skill_list = Object.entries(values);
                    const names = skill_list.filter(([key, value]) => key.match(/name/g) && value !== "");

                    names.forEach(([id, name]) => {
                        const value_addr = id.substring(0,id.length-4) + "advances";
                        const init_addr = id.substring(0,id.length-4) + "init";
                        const value = parseInt(values[value_addr]) || 0;
                        const init = parseInt(values[init_addr]) || 0;

                        const current = skills.get(name) || 0;

                        const set = current + value + init;

                        skills.set(name, set);
                    });

                    const updateAttrs = {};

                    skills.forEach((value, key) => {
                        let parsed_key = key.replace(/ /g,"-").toLowerCase();

                        if (wfrp.skills.includes(parsed_key)) {

                            updateAttrs[`${parsed_key}_advances`] = value;

                        } else if (key.match(/\(/g)) {
                            const group = key.split("(")[0]
                                            .trim()
                                            .replace(/ /g,"-")
                                            .toLowerCase();

                            const specialisation = key.split("(")[1]
                                                      .trim()
                                                      .replace(/\)/g,"");

                            const specialisation_test = specialisation.toLowerCase();

                            if (wfrp.specialisations.includes(specialisation_test)) {

                                updateAttrs[`${specialisation}_advances`] = value;

                                if (value > 0) updateAttrs[`${specialisation}_control`] = "on";

                            } else if (wfrp.repeating_skills.includes(group)) {

                                modifyRepeatingSkill(group, specialisation, value);

                            }
                        }
                    });

                    setAttrs(updateAttrs);

                });

            });

        });
    }

    const modifyRepeatingSkill = (group, specialisation, value) => {

        getSectionIDs(group, id_array => {
            const attrs = [];
            const updateAttrs = {};

            id_array.forEach(id => {
                const addr = `repeating_${group}_${id}`;
                attrs.push(`${addr}_specialisation_name`);
            });

            getAttrs(attrs, values => {
                const value_array = Object.values(values).filter(item => item !== "");
                const value_array_test = value_array.map(item=>item.toLowerCase());
                const key_array = Object.keys(values).filter(item => item !== "");
                const specialisation_test = specialisation.toLowerCase();

                if (value_array_test.includes(specialisation_test)) {
                    const index = value_array_test.indexOf(specialisation_test);
                    const key = key_array[index];
                    const new_key = `${key.substring(0, key.length-5)}_advances`;

                    updateAttrs[new_key] = value;
                } else if (value > 0) {
                    const new_id = generateRowID();
                    updateAttrs[`repeating_${group}_${new_id}_specialisation_name`] = specialisation;
                    updateAttrs[`repeating_${group}_${new_id}_specialisation_advances`] = value;
                }

                setAttrs(updateAttrs);
            });
        });
    };

    const calculateTalentAdvances = () => {
        getSectionIDs("careers", id_array => {
            const attrs = [];
            const talents = new Map();

            id_array.forEach((id, index) => {

                for (let i = 1; i <= 4; i++) {
                    for (let j = 1; j <= 5; j++) {
                        attrs.push(`repeating_careers_${id}_career_talent_${i}_${j}_name`);
                        attrs.push(`repeating_careers_${id}_career_talent_${i}_${j}_advances`);
                        if (index === 0) attrs.push(`repeating_careers_${id}_career_talent_${i}_${j}_init`);
                    }
                }
            });

            for (let i = 1; i <= 10; i++) {
                attrs.push(`species_talent_${i}_name`);
                attrs.push(`species_talent_${i}_advances`);
            }

            getAttrs(attrs, values => {
                const talent_list = Object.entries(values);
                const names = talent_list.filter(([key, value]) => key.match(/name/g) && value !== "");

                names.forEach(([id, name]) => {
                    const value_addr = id.substring(0,id.length-4) + "advances";
                    const init_addr = id.substring(0,id.length-4) + "init";
                    const value = parseInt(values[value_addr]) || 0;
                    const init = parseInt(values[init_addr]) || 0;

                    const current = talents.get(name) || 0;

                    const set = current + value + init;

                    talents.set(name, set);
                });

                talents.forEach((value, key) => {
                    if (value !== 0) {

                        getSectionIDs("talent", id_array => {
                            const attrs = [];
                            const updateAttrs = {};

                            id_array.forEach(id => {
                                const addr = `repeating_talent_${id}`;
                                attrs.push(`${addr}_talent_name`);
                            });

                            getAttrs(attrs, values => {
                                const value_array = Object.values(values).filter(item => item !== "");
                                const value_array_test = value_array.map(item => item.toLowerCase());

                                const key_array = Object.keys(values).filter(item => item !== "");

                                let page_name = key.trim() || key;

                                if (value_array_test.includes(page_name.toLowerCase())) {
                                    const index = value_array_test.indexOf(page_name.toLowerCase());
                                    const array_key = key_array[index];
                                    const new_key = `${array_key.substring(0, array_key.length-5)}_ranks`;

                                    updateAttrs[new_key] = value;
                                } else if (value > 0) {

                                    getCompendiumPage(`Talents:${page_name}`, page => {

                                        if (page.expansion !== 0 && page.expansion) {

                                            wfrpDragAndDrop.handleDrop({drop_name:page.name, drop_content:page.content, drop_data:page.data}, key);

                                        } else {
                                            const new_id = generateRowID();

                                            updateAttrs[`repeating_talent_${new_id}_talent_name`] = key;
                                            updateAttrs[`repeating_talent_${new_id}_talent_ranks`] = value;

                                            setAttrs(updateAttrs);
                                        }

                                    });
                                }

                            });
                        });

                    }

                });

            });

        });
    }

    const calculateInitColumns = (source_attribute, new_value) => {
        const attrs = [];
        const source_type = (source_attribute.match(/talent/g)) ? "talent" :
                            (source_attribute.match(/career_skill/g)) ? "skill" :
                            false;
        const source_id = helperFunctions.extractRepeatingId(source_attribute, "careers");
        const is_init = source_attribute.match(/init/);

        if (!source_type || !is_init) return;

        if (source_type === "talent") {
            for (let i = 1; i <= 5; i++) {
                attrs.push(`${source_id}_career_talent_1_${i}_init`);
            }
        }

        if (source_type === "skill") {
            for (let i = 1; i <= 10; i++) {
                attrs.push(`${source_id}_career_skill_1_${i}_init`);
            }
        }

        getAttrs(attrs, values => {
            const spent = Object.values(values).filter(item => item !== "").map(item => parseInt(item));
            if (spent.length === 0) return;
            const total = spent.reduce((a,b) => a+b) || 0;
            const maximum_allowed = (source_type === "skill") ? 40 : 1;

            if (total > maximum_allowed) {
                const difference = parseInt(new_value) - (total - maximum_allowed);

                setAttrs({[source_attribute]:difference});
            }

        });

    }

    const updateAdvances = () => {
        wfrp.characteristics.forEach(characteristic => calculateCharacteristicAdvances(characteristic));
        calculateSkillAdvances();
        calculateTalentAdvances();

        setAttrs({advances_changed:0});
    }

    // Trappings, Weapons & Armor Functions

    const calculateArmour = () => {

        getSectionIDs("armour", id_array=> {
            const attrs = []

            id_array.forEach(id => {
                attrs.push(`repeating_armour_${id}_armour_points`);
                attrs.push(`repeating_armour_${id}_armour_locations`);
                attrs.push(`repeating_armour_${id}_armour_worn`);
            });

            getAttrs(attrs, values => {
                let armour_head = 0;
                let armour_leftarm = 0;
                let armour_rightarm = 0;
                let armour_body = 0;
                let armour_leftleg = 0;
                let armour_rightleg = 0;
                let armour_shield = 0;
                let armour_all = 0;

                id_array.forEach(id => {
                    const points = parseInt(values[`repeating_armour_${id}_armour_points`]) || 0;
                    const locations = values[`repeating_armour_${id}_armour_locations`];
                    const worn = values[`repeating_armour_${id}_armour_worn`];

                    const locations_array = locations.split(",").map(location => location.trim().replace(" ",""));
                    const locations_array_test = locations_array.map(location => location.toLowerCase());

                    if (worn === "on") {

                        if (locations_array_test.includes("head") || locations_array.includes("H")) armour_head += points;
                        if (locations_array_test.includes("leftarm") || locations_array.includes("LA")) armour_leftarm += points;
                        if (locations_array_test.includes("rightarm") || locations_array.includes("RA")) armour_rightarm += points;
                        if (locations_array_test.includes("body") || locations_array.includes("B")) armour_body += points;
                        if (locations_array_test.includes("leftleg") || locations_array.includes("LL")) armour_leftleg += points;
                        if (locations_array_test.includes("rightleg") || locations_array.includes("RL")) armour_rightleg += points;
                        if (locations_array_test.includes("shield") || locations_array.includes("S")) armour_shield += points;
                        if (locations_array_test.includes("all") || locations_array.includes("ALL")) armour_all += points;

                    }

                    const location_out = locations_array.map(item => {
                        return (item.toLowerCase() === "head" || item === "H") ? "H" :
                               (item.toLowerCase() === "leftarm" || item === "LA") ? "LA" :
                               (item.toLowerCase() === "rightarm" || item === "RA") ? "RA" :
                               (item.toLowerCase() === "body" || item === "B") ? "B" :
                               (item.toLowerCase() === "leftleg" || item === "LL") ? "LL" :
                               (item.toLowerCase() === "rightleg" || item === "RL") ? "RL" :
                               (item.toLowerCase() === "shield" || item === "S") ? "S" :
                               (item.toLowerCase() === "all" || item === "ALL") ? "ALL" :
                               "";
                    }).filter(item => item !== "").join(", ");

                    setAttrs({
                        [`repeating_armour_${id}_armour_locations_display`]: location_out
                    })
                });

                setAttrs({
                    armour_head:armour_head + armour_all,
                    armour_rightarm:armour_rightarm + armour_all,
                    armour_leftarm:armour_leftarm + armour_all,
                    armour_body:armour_body + armour_all,
                    armour_leftleg:armour_leftleg + armour_all,
                    armour_rightleg:armour_rightleg + armour_all,
                    armour_shield:armour_shield,
                });

            });

        });
    }

    const calculateMaxEncumbrance = () => {
        const attrs = ["strength_bonus", "toughness_bonus", "encumbrance_bonus", "encumbrance_mod"];

        getAttrs(attrs, values => {
            const strength_bonus = parseInt(values["strength_bonus"]) || 0;
            const toughness_bonus = parseInt(values["toughness_bonus"]) || 0;
            const encumbrance_bonus = parseInt(values["encumbrance_bonus"]) || 0;
            const encumbrance_mod = parseInt(values["encumbrance_mod"]) || 0;

            const new_enc = strength_bonus + toughness_bonus + encumbrance_bonus + encumbrance_mod;

            const updateAttrs = {};

            updateAttrs["encumbrance_max"] = new_enc;

            setAttrs(updateAttrs);
        });
    }

    const calculateCurrentEncumbrance = () => {

        getSectionIDs("trappings", trappings_array => {
            getSectionIDs("armour", armour_array => {
                getSectionIDs("weapons", weapons_array => {
                    const attrs = []

                    armour_array.forEach(id => {
                        attrs.push(`repeating_armour_${id}_armour_enc`);
                        attrs.push(`repeating_armour_${id}_armour_worn`);
                    });

                    weapons_array.forEach(id => {
                        attrs.push(`repeating_weapons_${id}_weapon_enc`);
                    });

                    trappings_array.forEach(id => {
                        attrs.push(`repeating_trappings_${id}_trappings_enc`);
                        attrs.push(`repeating_trappings_${id}_trappings_amount`);
                        attrs.push(`repeating_trappings_${id}_trappings_inenc`);
                        attrs.push(`repeating_trappings_${id}_trappings_worn`);
                    });

                    getAttrs(attrs, values => {

                        let total_enc = 0;

                        armour_array.forEach(id => {
                            const worn = values[`repeating_armour_${id}_armour_worn`] || false;
                            const enc = parseInt(values[`repeating_armour_${id}_armour_enc`])
                            const total = (enc > 0 && worn === "on") ? enc - 1 : enc || 0

                            total_enc += total;
                        });

                        weapons_array.forEach(id => {
                            const enc = parseInt(values[`repeating_weapons_${id}_weapon_enc`]) || 0;

                            total_enc += enc;
                        });

                        trappings_array.forEach(id => {
                            const enc = parseInt(values[`repeating_trappings_${id}_trappings_enc`]) || 0;
                            const amount = parseInt(values[`repeating_trappings_${id}_trappings_amount`]) || 1;
                            const worn = values[`repeating_trappings_${id}_trappings_worn`] || false;
                            const inenc = values[`repeating_trappings_${id}_trappings_inenc`] || "0";

                            const total = (enc > 0 && worn === "on") ? (enc - 1) * amount : enc * amount;

                            if (inenc === "on") total_enc += total;
                        });

                        setAttrs({encumbrance:total_enc})

                    });

                });

            });

        });

    }

    const calculateMaxWounds = () => {
        const attrs = ["strength_bonus", "toughness_bonus", "willpower_bonus", "size", "wound_mod"];

        getAttrs(attrs, values => {
            const strength_bonus = parseInt(values["strength_bonus"]) || 0;
            const toughness_bonus = parseInt(values["toughness_bonus"]) || 0;
            const willpower_bonus = parseInt(values["willpower_bonus"]) || 0;
            const size = values["size"] || "average";
            const size_test = size.toLowerCase();
            const wound_mod = parseInt(values["wound_mod"]) || 0;

            const new_wounds = (size_test === "tiny") ? 1 :
                               (size_test === "little") ? toughness_bonus :
                               (size_test === "small") ? (toughness_bonus * 2) + willpower_bonus :
                               (size_test === "average") ? strength_bonus + (toughness_bonus * 2) + willpower_bonus :
                               (size_test === "large") ? (strength_bonus + (toughness_bonus * 2) + willpower_bonus) * 2 :
                               (size_test === "enormous") ? (strength_bonus + (toughness_bonus * 2) + willpower_bonus) * 4 :
                               (size_test === "monstrous") ? (strength_bonus + (toughness_bonus * 2) + willpower_bonus) * 8 :
                               (strength_bonus + (toughness_bonus * 2) + willpower_bonus) * 2;

            const updateAttrs = {};

            updateAttrs["wounds_max"] = new_wounds + wound_mod;
            updateAttrs["size_index"] = wfrp.sizes.indexOf(values["size"]) < 0 ? 3 : wfrp.sizes.indexOf(values["size"]);

            setAttrs(updateAttrs);
        });

    }

    const calculateMaxCorruptionPoints = () => {
        const attrs = ["toughness_bonus", "willpower_bonus", "corruption_points_mod"];

        getAttrs(attrs, values => {
            const toughness_bonus = parseInt(values["toughness_bonus"]) || 0;
            const willpower_bonus = parseInt(values["willpower_bonus"]) || 0;
            const cp_mod = parseInt(values["corruption_points_mod"]) || 0;

            const update = {};

            update["corruption_points_max"] = toughness_bonus + willpower_bonus + cp_mod;

            setAttrs(update);
        });

    }

    const calculateWeaponQualitiesString = (sourceAttribute) => {
        getAttrs(wfrpModule.wfrp.weapon_attrs_for_opposed_test, v => {
            const qualities_str_arr = []
            if (v[`repeating_weapons_weapon_qualities`] && v[`repeating_weapons_weapon_qualities`] !== "")
                qualities_str_arr.push(v[`repeating_weapons_weapon_qualities`])

            for (let i = 0; i < wfrpModule.wfrp.weapon_qualities.length; i++) {
                const hasQuality = v[`repeating_weapons_weapon_q_${wfrpModule.wfrp.weapon_qualities[i]}`] !== '0'
                if (hasQuality) {
                    let quality_label = wfrpModule.wfrp.weapon_qualities[i]
                    quality_label = quality_label[0].toUpperCase() + quality_label.substring(1)
                    qualities_str_arr.push(quality_label)
                }
            }
            const result = qualities_str_arr.length > 0 ? qualities_str_arr.join(", ") : "---"
            const repeating_id = helperFunctions.extractRepeatingId(sourceAttribute, "weapons")
            setAttrs({
                [`${repeating_id}_weapon_qualities_str`]: result,
            })
        })
    }

    const calculateCurrentWeaponAttrsForOpposedTest = (source_attr_name, v) => {
        result = {}

        let weapon_damage = +v["repeating_weapons_weapon_damage_flat"] || 0
        const useSB = v["repeating_weapons_weapon_damage_bonus"] === 'on'
        if (useSB) weapon_damage = weapon_damage + +(v["strength_bonus"] || 0)

        // each quality is 1 bit
        let qualityState = 0;

        for (let i = 0; i < wfrpModule.wfrp.weapon_qualities.length; i++) {
            const hasQuality = v[`repeating_weapons_weapon_q_${wfrpModule.wfrp.weapon_qualities[i]}`] !== '0'
            if (hasQuality) {
                qualityState = qualityState + 2**i
            }
        }

        result.weapon_id = source_attr_name.match(/-[A-Za-z0-9]+/)[0]
        result.weapon_name = v[`repeating_weapons_weapon_name`]
        result.weapon_s_index = wfrpModule.getSkillId(v[`repeating_weapons_weapon_group`].toLowerCase())
        result.weapon_s_value = v[`repeating_weapons_weapon_target_display`]
        result.weapon_damage = weapon_damage
        result.weapon_qualities = qualityState
        result.weapon_qualities_str = v[`repeating_weapons_weapon_qualities_str`]
        result.weapon_is_ranged = wfrp.specialisations.slice(8, 16).includes(v[`repeating_weapons_weapon_group`].toLowerCase()) ? 1: 0

        return result
    }

    const setWeaponAttrsForOpposedTest = (weapon_type, weapon) => {
        const update = {}
        wfrp.public_weapon_attrs.forEach(attr => {
            update[`${weapon_type}_${attr}`] = weapon[attr]
        })
        console.log(update)
        setAttrs(update)
    }

    const setAttackWeaponFrom = (weapon_type) => {
        getAttrs(wfrp.public_weapon_attrs.map(attr => `${weapon_type}_${attr}`), v => {
            const weapon = {}
            wfrp.public_weapon_attrs.forEach(attr => {weapon[attr] = v[`${weapon_type}_${attr}`]})
            setWeaponAttrsForOpposedTest('attack', weapon)
        })
    }

    const setSelectedWeaponAs = (weapon_id, weapon_type) => {
        getAttrs(wfrpModule.wfrp.weapon_attrs_for_opposed_test, v => {
            const weapon_attrs = calculateCurrentWeaponAttrsForOpposedTest(weapon_id, v)
            weapon_attrs.weapon_is_off_hand = weapon_type==="off_hand" ? 1 : 0
            weapon_attrs.weapon_is_pistol = hasQuality(weapon_attrs.weapon_qualities, 'pistol') ? 1 : 0
            result.weapon_is_dodge = 0
            setWeaponAttrsForOpposedTest(weapon_type, weapon_attrs)
        })
    }

    const setEmptyWeaponAs = (weapon_type) => {
        const empty = {weapon_id: '', weapon_name: '---',
            weapon_s_index: 0, weapon_s_value: 0, weapon_damage:0, weapon_qualities: 0, weapon_qualities_str: "---",
            weapon_is_off_hand: 0, weapon_is_ranged: 0, weapon_is_dodge: 0
        }
        setWeaponAttrsForOpposedTest(weapon_type, empty)
    }

    const setDodgeAs = (weapon_type) => {
        const skill_index = wfrpModule.getSkillId('dodge')
        getAttrs(['dodge'], v => {
            const dodge_attrs = {
                weapon_id: '', weapon_name: wfrpModule.getSkillLabelById(skill_index),
                weapon_s_index: skill_index, weapon_s_value: v[`dodge`], weapon_damage:0,
                weapon_qualities: 0, weapon_qualities_str: '',
                weapon_is_off_hand: 0, weapon_is_ranged: 0, weapon_is_pistol: 0, weapon_is_dodge: 1
            }
            setWeaponAttrsForOpposedTest(weapon_type, dodge_attrs)
        })
    }

    const unselectOtherWeapons = (id_attr, checkbox_attr) => {
        getSectionIDs("weapons", (ids) => {
            const update = {}
            ids.forEach(id => {
                if (!id_attr.includes(id)) update[`repeating_weapons_${id}_${checkbox_attr}`] = '0'
            })
            setAttrs(update)
        })
    }

    const handleWeaponHandSelection = (eventInfo, weapon_type, empty_state) => {
        if (eventInfo.sourceType === 'sheetworker') return
        const current_new_value = eventInfo.newValue
        const current_id = eventInfo.sourceAttribute

        if (current_new_value !== '0') {
            unselectOtherWeapons(current_id, weapon_type)
            setSelectedWeaponAs(current_id, weapon_type)
        }
        else {
            if (empty_state === 'empty') setEmptyWeaponAs(weapon_type)
            else setDodgeAs(weapon_type)
        }
    }

    const handleDefenceSelection = (source_attribute) => {
        if (source_attribute === 'dodge_defence') {
            setDodgeAs("defence")
            return
        }
        const weapon_type = source_attribute.replace("_defence", "")

        getAttrs(wfrp.public_weapon_attrs.map(attr => `${weapon_type}_${attr}`), v => {
            const update = {}
            wfrp.public_weapon_attrs.forEach(attr => {
                update[attr] = v[`${weapon_type}_${attr}`]
            })
            setWeaponAttrsForOpposedTest("defence", update)
        })

    }

    const incrementAttribute = (attr, attr_max, can_overflow) => {
        getAttrs([attr, attr_max], values => {
            const maximum = (values[attr_max] && parseInt(values[attr_max]) > 0) ? parseInt(values[attr_max]) : 9999;
            const result = (parseInt(values[attr]) < maximum || can_overflow) ? parseInt(values[attr]) + 1 : parseInt(values[attr]);

            const update = {}
            update[attr] = result
            setAttrs(update);
        });
    }

    const decrementAttribute = (attr) => {
        getAttrs([attr], values => {
            const result = (parseInt(values[attr]) > 0) ? parseInt(values[attr]) - 1 : 0;
            const update = {}
            update[attr] = result
            setAttrs(update);
        });
    }

    const updateWeaponDamage = (attribute) => {
        const section = "weapons";
        const repeating_id = helperFunctions.extractRepeatingId(attribute, section);

        const attrs = [];

        attrs.push(`${repeating_id}_weapon_damage_flat`);
        attrs.push(`${repeating_id}_weapon_damage_bonus`);

        getAttrs(attrs, values => {
            const string = (values[`${repeating_id}_weapon_damage_bonus`] === "on") ? `@{strength_bonus}+${values[`${repeating_id}_weapon_damage_flat`]}` : values[`${repeating_id}_weapon_damage_flat`];

            setAttrs({
                [`${repeating_id}_weapon_damage`]:string
            });
        })
    }

    const updateWeaponTarget = (attribute) => {
        const section = "weapons";
        const repeating_id = helperFunctions.extractRepeatingId(attribute, section);

        getAttrs([`${repeating_id}_weapon_group`], values => {

            const name = values[`${repeating_id}_weapon_group`].toLowerCase();

            getAttrs([name], values => {
                const display = values[name];
                const target = `@{${name}}`;

                setAttrs({
                    [`${repeating_id}_weapon_target`]:target,
                    [`${repeating_id}_weapon_target_display`]:display,
                });
            });
        });
    }

    const currencyConversion = (conversion) => {

        getAttrs(["gold","silver","brass"], values => {

            const gold = parseInt(values.gold) || 0;
            const silver = parseInt(values.silver) || 0;
            const brass = parseInt(values.brass) || 0;

            if (conversion === "gold_to_silver") {
                if (gold >= 1) {
                    setAttrs({
                        gold: gold-1,
                        silver: silver+20
                    });
                }
            } else if (conversion === "silver_to_gold") {
                if (silver >= 20) {
                    setAttrs({
                        gold: gold+1,
                        silver: silver-20
                    });
                }
            } else if (conversion === "silver_to_brass") {
                if (silver >= 1) {
                    setAttrs({
                        silver: silver-1,
                        brass: brass+12
                    });
                }
            } else if (conversion === "brass_to_silver") {
                if (brass >= 12) {
                    setAttrs({
                        silver: silver+1,
                        brass: brass-12
                    });
                }
            }

        });

    };

    const calculateCombatTalentAttr = () => {
        const getTAttr = (id, attr) => `repeating_talent_${id}_${attr}`
        const calcTalentStr = (ids, v) => ids.map(id => v[getTAttr(id, 'talent_name')]).join('\n') || '---'
        const calcTalentRank = (ids, v) => ids.map(id => parseInt(v[getTAttr(id, 'talent_ranks')]) || 0).reduce((l, r) => l+r, 0)

        helperFunctions.getSectionIDsOrdered('talent', (ids) => {
            const talent_attrs = []
            ids.forEach(id => {
                talent_attrs.push(getTAttr(id, 'talent_name'),getTAttr(id, 'talent_ranks'),
                    getTAttr(id, `use_in_defence`), getTAttr(id, `use_in_attack`), getTAttr(id, `ambidextrous`)
                )
            })
            getAttrs(talent_attrs, v => {
                const defence_ids = ids.filter(id => v[getTAttr(id, "use_in_defence")] === "1")
                const attack_ids = ids.filter(id => v[getTAttr(id, "use_in_attack")] === "1")
                const ambidextrous_ids = ids.filter(id => v[getTAttr(id, "ambidextrous")] === "1")

                const update = {
                    ["defender_talent_str"]: calcTalentStr(defence_ids, v),
                    ["defender_talent_rank"]: calcTalentRank(defence_ids, v),
                    ["attacker_talent_str"]: calcTalentStr(attack_ids, v),
                    ["attacker_talent_rank"]: calcTalentRank(attack_ids, v),
                    ["ambidextrous_rank"]: calcTalentRank(ambidextrous_ids, v),
                }
                setAttrs(update)
            })
        })
    }

    // Spells & Prayers Functions

    const calculateSpellValue = (attribute) => {
        const section = "spells";
        const repeating_id = helperFunctions.extractRepeatingId(attribute, section);

        getAttrs(["magick","pray",`${repeating_id}_spell_type`], values => {

            const new_value = values[`${repeating_id}_spell_type`];

            const target = (new_value === "Spell") ? "@{magick}" :
                                                     "@{pray}";
            const clear = (new_value === "Spell") ? "deity" :
                                                    "lore";

            const display = (new_value === "Spell") ? values["magick"] : values["pray"];

            setAttrs({
                [`${repeating_id}_spell_total`]:target,
                [`${repeating_id}_spell_display`]:display
            });

        });
    }

    const updateSpellStrings = () => {
        const spellAttr = (id, attr) => `repeating_spells_${id}_${attr}`

        getSectionIDs(`spells`, id_array => {
            const attrs = [
                ...wfrp.characteristics_v2.map(c => c.attr),
                ...wfrp.characteristics_v2.map(c => c.bonus_attr),
                ...id_array.flatMap(id => [spellAttr(id, `spell_range`), spellAttr(id, `spell_duration`)])
            ]

            getAttrs(attrs, values => {
                const update = {}
                id_array.forEach(id => {
                    let range_str = values[spellAttr(id, `spell_range`)]
                    let duration_str = values[spellAttr(id, `spell_range`)]

                    wfrp.characteristics_v2.forEach(c => {
                        range_str = range_str.replace(`[${c.short}]`, values[c.attr]).replace(`[${c.bonus_short}]`, values[c.bonus_attr])
                        duration_str = duration_str.replace(`[${c.short}]`, values[c.attr]).replace(`[${c.bonus_short}]`, values[c.bonus_attr])
                    })

                    update[spellAttr(id, `spell_range_str`)] = range_str
                    update[spellAttr(id, `spell_duration_str`)] = duration_str
                })
                setAttrs(update)
            });
        });
    }

    // NPC Functions

    const getAttackValue = (attribute) => {
        const section = "attacks";
        const repeating_id = helperFunctions.extractRepeatingId(attribute, section);

        const request = [
            `${repeating_id}_attack_type`,
            "weapon_skill",
            "ballistic_skill",
            "basic",
            "brawling",
            "cavalry",
            "fencing",
            "flail",
            "parry",
            "polearm",
            "two-handed",
            "blackpowder",
            "bow",
            "crossbow",
            "engineering",
            "entangling",
            "explosives",
            "sling",
            "throwing"
        ];

        getAttrs(request, values => {
            const type = values[`${repeating_id}_attack_type`];

            if (type.toLowerCase() === "custom") {
                setAttrs({[`${repeating_id}_attack_target`]:0});
            } else {
                const type_parsed = (!type.match(/\(/)) ? type.replace(/ /, "_")
                                                              .toLowerCase() :
                                                         type.split("(")[1]
                                                             .replace(/\)/g, "")
                                                             .replace(/ /, "_")
                                                             .toLowerCase();

                const value = values[type_parsed];

                const update = {};

                update[`${repeating_id}_attack_target`] = value;

                setAttrs(update);
            }
        });
    }

    const cascadeNPCAttacks = () => {

        getSectionIDs("attacks", ids => {
            const attrs = [
                "weapon_skill",
                "ballistic_skill",
                "basic",
                "brawling",
                "cavalry",
                "fencing",
                "flail",
                "parry",
                "polearm",
                "two-handed",
                "blackpowder",
                "bow",
                "crossbow",
                "engineering",
                "entangling",
                "explosives",
                "sling",
                "throwing"
            ];

            for (const id of ids) {
                attrs.push(`repeating_attacks_${id}_attack_type`);
            }

            getAttrs(attrs, values => {
                const update = [];

                for (const id of ids) {
                    const type = values[`repeating_attacks_${id}_attack_type`].toLowerCase();
                    const type_parsed = (!type.match(/\(/)) ? type.replace(/ /, "_")
                                                                  .toLowerCase() :
                                                             type.split("(")[1]
                                                                 .replace(/\)/g, "")
                                                                 .replace(/ /, "_")
                                                                 .toLowerCase();
                    const target = `repeating_attacks_${id}_attack_target`;

                    if (type_parsed === "custom") return;
                    else update[target] = values[type_parsed];
                }

                setAttrs(update);

            });
        })
    }

    const updateNPCButtons = () => {

        const attrs = [
            "npc",
            "dodge",
            "endurance",
            "intuition",
            "perception",
            "cool",
            "npc_dodge",
            "npc_endurance",
            "npc_intuition",
            "npc_perception",
            "npc_cool",
            ...wfrp.characteristics
        ];

        getAttrs(attrs, values => {
            if (values[`NPC`] === "0") return;
            const update = {};

            const dodge = (values["dodge"]) ? values["dodge"] :
                            (values["npc_dodge"]) ? values["npc_dodge"] :
                            values["agility"];

            const endurance = (values["endurance"]) ? values["endurance"] :
                            (values["npc_endurance"]) ? values["npc_endurance"] :
                            values["toughness"];

            const intuition = (values["intuition"]) ? values["intuition"] :
                            (values["npc_intuition"]) ? values["npc_intuition"] :
                            values["initiative"];

            const perception = (values["perception"]) ? values["perception"] :
                            (values["npc_perception"]) ? values["npc_perception"] :
                            values["initiative"];

            const cool = (values["cool"]) ? values["cool"] :
                            (values["npc_cool"]) ? values["npc_cool"] :
                            values["willpower"];

            update[`npc_dodge`] = dodge;
            update[`npc_endurance`] = endurance;
            update[`npc_intuition`] = intuition;
            update[`npc_perception`] = perception;
            update[`npc_cool`] = cool;

            setAttrs(update);

        });

    }

    // MODULE INTERFACE

    return {
        // Globals
        wfrp: wfrp,
        getSkillId: getSkillId,
        getSkillLabelById: getSkillLabelById,
        getSkillAttrById: getSkillAttrById,
        getHitLocation: getHitLocation,
        hasQuality: hasQuality,
        makeAttack: makeAttack,
        makeRiposte: makeRiposte,

        // Sheet Functions
        initSheet: initSheet,
        toggleRollDifficulty:toggleRollDifficulty,
        toggleRollBonus:toggleRollBonus,
        toggleRollCrits:toggleRollCrits,
        toggleInitOption:toggleInitOption,
        toggleWhisper:toggleWhisper,
        updateAllCharModifiers:updateAllCharModifiers,

        // Class and Species Controls
        changeSpecies:changeSpecies,
        checkSpeciesAdvances:checkSpeciesAdvances,

        // Characteristic Functions
        rollInitial: rollInitial,
        calculateCharacteristic: calculateCharacteristic,
        cascadeAttributeChange: cascadeAttributeChange,
        updateMovementRates: updateMovementRates,

        // Skill Functions
        calculateSkill: calculateSkill,
        calculateSpecialisation: calculateSpecialisation,
        recalculateRepeatingSkill: recalculateRepeatingSkill,
        cascadeSkillChanges:cascadeSkillChanges,

        // Career Functions
        updateCareerPath: updateCareerPath,
        updateCurrentCareer: updateCurrentCareer,
        updateCurrentCareerLevel: updateCurrentCareerLevel,
        updateCareerNames: updateCareerNames,
        updateFirstCareer: updateFirstCareer,

        // Experience Functions
        calculateCharacteristicAdvances:calculateCharacteristicAdvances,
        calculateSkillAdvances:calculateSkillAdvances,
        calculateTalentAdvances:calculateTalentAdvances,
        calculateTotalAdvances:calculateTotalAdvances,
        calculateInitColumns:calculateInitColumns,
        consolidateXP:consolidateXP,
        recalculateEarnedXP:recalculateEarnedXP,
        recalculateCurrentXP:recalculateCurrentXP,
        recalculateSpentXP:recalculateSpentXP,
        updateAdvances: updateAdvances,

        // Trappings, Weapons & Armor Functions
        calculateArmour:calculateArmour,
        calculateCurrentEncumbrance:calculateCurrentEncumbrance,
        calculateMaxEncumbrance:calculateMaxEncumbrance,
        updateWeaponDamage:updateWeaponDamage,
        updateWeaponTarget:updateWeaponTarget,
        currencyConversion:currencyConversion,
        calculateCurrentWeaponAttrsForOpposedTest: calculateCurrentWeaponAttrsForOpposedTest,
        calculateWeaponQualitiesString: calculateWeaponQualitiesString,
        setWeaponAttrsForOpposedTest: setWeaponAttrsForOpposedTest,
        setAttackWeaponFrom: setAttackWeaponFrom,
        handleWeaponHandSelection:handleWeaponHandSelection,
        handleDefenceSelection:handleDefenceSelection,
        setSelectedWeaponAs: setSelectedWeaponAs,
        setDodgeAs: setDodgeAs,
        calculateCombatTalentAttr: calculateCombatTalentAttr,

        // Combat Functions
        incrementAttribute:incrementAttribute,
        decrementAttribute:decrementAttribute,
        calculateMaxWounds:calculateMaxWounds,
        calculateMaxCorruptionPoints:calculateMaxCorruptionPoints,

        // Spells & Prayers Functions
        calculateSpellValue:calculateSpellValue,
        updateSpellStrings:updateSpellStrings,

        // NPC Functions
        getAttackValue:getAttackValue,
        cascadeNPCAttacks:cascadeNPCAttacks,
        updateNPCButtons:updateNPCButtons,
    };

})();

// ===================== EVENT HANDLERS ====================== //

// SHEET OPENED

on(`sheet:opened`, eventInfo => wfrpModule.initSheet());

// SHEET FUNCTIONS

on(`change:setting_diff_option`, eventInfo => wfrpModule.toggleRollDifficulty(eventInfo.newValue));
on(`change:setting_bonus_option`, eventInfo => wfrpModule.toggleRollBonus(eventInfo.newValue));
on(`change:setting_crit_option`, eventInfo => wfrpModule.toggleRollCrits(eventInfo.newValue));
on(`change:setting_init_option`, eventInfo => wfrpModule.toggleInitOption(eventInfo.newValue));
on(`change:setting_whisper`, eventInfo => wfrpModule.toggleWhisper(eventInfo.newValue));

on([
    ...wfrpModule.wfrp.characteristics_v2.flatMap(c => `change:${c.attr} change:${c.bonus_attr} change:${c.custom_modifier_attr}`),
    ...wfrpModule.wfrp.repeating_sections.map(rs => `change:repeating_${rs.name}:${rs.mods_attr}`),
    `change:repeating_talent:talent_ranks`
].join(" "), () => wfrpModule.updateAllCharModifiers())

// CLASS AND SPECIES CONTROLS

on(`clicked:remove_custom_class`, eventInfo => setAttrs({"class":""}));

on(`clicked:remove_custom_species`, eventInfo => setAttrs({"species":""}));

on(`change:species`, eventInfo => wfrpModule.changeSpecies(eventInfo.newValue));

for (let index = 1; index <= 12; index++) {
    on(`change:species_skill_${index}_advances`, eventInfo => wfrpModule.checkSpeciesAdvances());
}

// CHARACTERISTIC CALCULATIONS

wfrpModule.wfrp.characteristics.forEach(characteristic => {
    on(`change:${characteristic} change:${characteristic}_species change:${characteristic}_initial change:${characteristic}_advances change:${characteristic}_modifier change:${characteristic}_custom_mod change:${characteristic}_bonusmod change:${characteristic}_bonus`, eventInfo => wfrpModule.calculateCharacteristic(characteristic));

    on(`change:${characteristic}`, eventInfo => wfrpModule.cascadeAttributeChange(characteristic));

    on(`change:${characteristic}_noncareer`, eventInfo => wfrpModule.calculateCharacteristicAdvances(characteristic));

    on(`change:repeating_careers:career_${characteristic}_advances`, eventInfo => wfrpModule.calculateCharacteristicAdvances(characteristic))
});

on(`change:movement change:run_mod`, () => wfrpModule.updateMovementRates());
on(`clicked:roll_initial`, eventInfo => wfrpModule.rollInitial());

// SKILL CALCULATIONS

wfrpModule.wfrp.skills.forEach(skill => {
    on(`change:${skill} change:${skill}_advances change:${skill}_modifier change:${skill}_bonus change:${skill}_characteristic`, eventInfo => {wfrpModule.calculateSkill(skill)});
});

wfrpModule.wfrp.specialisations.forEach(specialisation => {
    on(`change:${specialisation} change:${specialisation}_advances change:${specialisation}_bonus change:${specialisation}_characteristic`, eventInfo => {
        wfrpModule.calculateSpecialisation(specialisation);
        wfrpModule.cascadeNPCAttacks();
    });
});

wfrpModule.wfrp.repeating_skills.forEach(section => {
    //on(`change:repeating_${section}`, eventInfo => wfrpModule.updateRepeatingSkillBase(eventInfo.sourceAttribute, section, eventInfo.newValue));

    on(`change:repeating_${section}`, eventInfo => wfrpModule.recalculateRepeatingSkill(eventInfo.sourceAttribute, section));
});

[...wfrpModule.wfrp.specialisations, ...["magick", "pray"]].forEach(skill => on(`change:${skill}`, eventInfo => wfrpModule.cascadeSkillChanges(skill)));

// CAREERS CHANGES

on(`clicked:update_advances`, eventInfo => wfrpModule.updateAdvances());

on(`change:repeating_careers change:_reporder:careers`, eventInfo => {
    if (eventInfo.sourceType === "player" && !eventInfo.sourceAttribute.match(/reporder/g)) wfrpModule.calculateTotalAdvances(eventInfo.sourceAttribute);
    wfrpModule.updateCareerPath();
    wfrpModule.updateFirstCareer();
    wfrpModule.updateCurrentCareer();
});

on(`remove:repeating_careers`, eventInfo => {
    wfrpModule.updateCareerPath();
    wfrpModule.updateFirstCareer();
    wfrpModule.updateCurrentCareer();
});

on(`change:repeating_careers:career_current`, eventInfo => (eventInfo.sourceType === "player") ? wfrpModule.updateCurrentCareer(eventInfo.sourceAttribute) : false);

on(`change:repeating_careers:career_name change:repeating_careers:career_level_current`, eventInfo => wfrpModule.updateCareerNames(eventInfo.sourceAttribute));

[1,2,3,4].forEach(level => {
    on(`change:repeating_careers:career_level${level}_name change:repeating_careers:career_level${level}_status`, eventInfo => wfrpModule.updateCareerNames(eventInfo.sourceAttribute));
    on(`clicked:repeating_careers:newcareerlevel-${level}`, eventInfo => wfrpModule.updateCurrentCareerLevel(eventInfo.sourceAttribute, level));
});

on(`change:repeating_careers:career_level_current`, eventInfo => wfrpModule.updateCurrentCareerLevel(eventInfo.sourceAttribute, eventInfo.newValue));

// EXPERIENCE CHANGES

on(`change:repeating_experience change:repeating_experiencespent change:experience_mod remove:repeating_experiencespent remove:repeating_experience`, eventInfo => wfrpModule.recalculateEarnedXP());

on(`change:current_xp change:spent_xp change:total_xp remove:repeating_experience`, eventInfo => wfrpModule.recalculateCurrentXP());

on(`change:repeating_experience change:repeating_experiencespent change:experience_mod remove:repeating_experiencespent remove:repeating_experience`, eventInfo => wfrpModule.recalculateSpentXP());

const advance_triggers = []

wfrpModule.wfrp.characteristics.forEach(characteristic => {
    advance_triggers.push(`change:repeating_careers:career_${characteristic}_advances change:repeating_careers:career_${characteristic}_init`)
});

[1,2,3,4].forEach(level => {
    [1,2,3,4,5].forEach(talent => {
        advance_triggers.push(`change:repeating_careers:career_talent_${level}_${talent}_name change:repeating_careers:career_talent_${level}_${talent}_init change:repeating_careers:career_talent_${level}_${talent}_advances`)
    });

    [1,2,3,4,5,6,7,8,9,10].forEach(skill => {
        advance_triggers.push(`change:repeating_careers:career_skill_${level}_${skill}_name change:repeating_careers:career_skill_${level}_${skill}_init change:repeating_careers:career_skill_${level}_${skill}_advances`);
    });
});

for (let index = 1; index <= 12; index++) {
    advance_triggers.push(`clicked:remove_skill_${index}`);

    advance_triggers.push(`change:species_skill_${index}_advances`);
}

for (let index = 1; index <= 10; index++) {
    advance_triggers.push(`change:species_talent_${index}_advances`);
};

on(advance_triggers.join(" "), eventInfo => setAttrs({advances_changed:"1"}));

on(`clicked:combinexp`, eventInfo => wfrpModule.consolidateXP());

on(`clicked:advance`, eventInfo => wfrpModule.advanceXP());

on(`clicked:career_incomplete`, eventInfo => wfrpModule.incompleteCareerXP());

on(`clicked:career_complete`, eventInfo => wfrpModule.completeCareerXP());

on(`change:repeating_noncareer-skills delete:repeating_noncareer-skills`, eventInfo => wfrpModule.calculateSkillAdvances());

on(`change:repeating_careers`, eventInfo => wfrpModule.calculateInitColumns(eventInfo.sourceAttribute, eventInfo.newValue));

// TRAPPINGS, WEAPONS & ARMOR FUNCTIONS

on(`change:repeating_armour remove:repeating_armour`, eventInfo => wfrpModule.calculateArmour());

on(`change:repeating_trappings change:repeating_armour:armour_enc change:repeating_armour:armour_worn change:repeating_weapons:weapon_enc`, eventInfo => wfrpModule.calculateCurrentEncumbrance());

on(`change:repeating_weapons:weapon_damage_flat change:repeating_weapons:weapon_damage_bonus`, eventInfo => wfrpModule.updateWeaponDamage(eventInfo.sourceAttribute));

on(`change:repeating_weapons:weapon_group`, eventInfo => wfrpModule.updateWeaponTarget(eventInfo.sourceAttribute, eventInfo.newValue));

on(`change:strength_bonus change:toughness_bonus change:encumbrance_bonus change:encumbrance_mod`, eventInfo => wfrpModule.calculateMaxEncumbrance());

["gold_to_silver", "silver_to_gold", "silver_to_brass", "brass_to_silver"].forEach(conversion => on(`clicked:${conversion}`, eventInfo => wfrpModule.currencyConversion(conversion)));

on(`clicked:main_opposed_attack`, (eventInfo) => {
    wfrpModule.makeAttack(
        "Opposed Test",
        '', 'main_hand', 'target|', 'defence',
        '1d100', '1d100', '1',
        'defender'
    )
    wfrpModule.setAttackWeaponFrom("main_hand")
})

on(`clicked:main_unopposed_attack`, (eventInfo) => {
    wfrpModule.makeAttack("Unopposed Test",
        '', 'main_hand', 'target|', 'defence',
        '1d100', '1d100', '0',
        '0'
    )
    wfrpModule.setAttackWeaponFrom("main_hand")
})

on(`clicked:main_defend`, (eventInfo) => {
    wfrpModule.makeAttack("Opposed Test",
        'target|', 'attack', '', 'main_hand',
        '@{target|last_a_roll}', '1d100', '1',
        '0'
    )
    wfrpModule.handleDefenceSelection("main_hand_defence")
})

on(`clicked:off_defend`, (eventInfo) => {
    wfrpModule.makeAttack("Opposed Test",
        'target|', 'attack', '', 'off_hand',
        '@{target|last_a_roll}', '1d100', '1',
        '0'
    )
    wfrpModule.handleDefenceSelection("off_hand_defence")
})

on(`clicked:dodge_defend`, (eventInfo) => {
    wfrpModule.makeAttack("Opposed Test",
        'target|', 'attack', '', 'dodge',
        '@{target|last_a_roll}', '1d100', '1',
        '0'
    )
    wfrpModule.handleDefenceSelection("dodge_defence")
})

on(`clicked:off_opposed_attack`, (eventInfo) => {
    wfrpModule.makeAttack("Opposed Test",
        '', 'off_hand', 'target|', 'defence',
        '1d100', '1d100', '1',
        'defender'
    )
    wfrpModule.setAttackWeaponFrom("off_hand")
})

on(`clicked:dual_wielder_attack`, (eventInfo) => {
    getAttrs(["last_a_roll"], v => {
        const last_a_roll = parseInt(v.last_a_roll)
        const dual_wielder_roll = helperFunctions.isRollDouble(last_a_roll)
            ? `?{Enter roll from Critical Table|${last_a_roll}`
            : `${helperFunctions.reverseRoll(last_a_roll)}`

        wfrpModule.makeAttack("Dual Wielder",
            '', 'off_hand', 'target|', 'defence',
            dual_wielder_roll, '1d100', '@{last_opposed}',
            'defender'
        )
        wfrpModule.setAttackWeaponFrom("off_hand")
    })
})

on(`clicked:off_unopposed_attack`, (eventInfo) => {
    wfrpModule.makeAttack("Unopposed Test",
        '', 'off_hand', 'target|', 'defence',
        '1d100', '1d100', '0',
        "0"
    )
    wfrpModule.setAttackWeaponFrom("off_hand")
})

on(`clicked:reroll_as_attacker`, (eventInfo) => {
    wfrpModule.makeAttack("Reroll Attacking Test",
        '', 'attack', 'target|', 'defence',
        '1d100', '@{last_d_roll}', '@{last_opposed}',
        "defender"
    )
})

on(`clicked:reroll_as_defender`, (eventInfo) => {
    wfrpModule.makeAttack("Reroll Defending Test",
        'target|', 'attack', '', 'defence',
        'last', '1d100', '1',
        "0"
    )
})

on(`clicked:debug_roll`, (eventInfo) => {
    wfrpModule.makeAttack("Debug Roll",
        '', 'attack', 'target|', 'defence',
        '?{Attacker roll|0}', '?{Defender roll|0}','?{Is opposed|1}',
        '0'
    )
})

on(`clicked:grapple`, (eventInfo) => {
    wfrpModule.makeAttack("Grapple",
        '', 'grapple', 'target|', 'grapple',
        '1d100', '1d100','1',
        '0'
    )
})

on(`clicked:riposte`, (eventInfo) => {
    wfrpModule.makeRiposte()
})

on(`change:repeating_weapons:main_hand`, eventInfo => {wfrpModule.handleWeaponHandSelection(eventInfo, "main_hand", "empty")})

on(`change:repeating_weapons:off_hand`, eventInfo => {wfrpModule.handleWeaponHandSelection(eventInfo, "off_hand", "empty")})
wfrpModule.wfrp.weapon_attrs_for_opposed_test.map(attr => attr.replace("repeating_weapons_", "repeating_weapons:"))
    .forEach(attr => on(`change:${attr}`, eventInfo => {
        wfrpModule.calculateWeaponQualitiesString(eventInfo.sourceAttribute)

        getAttrs(["repeating_weapons_main_hand", "repeating_weapons_off_hand"], v => {
            if (v["repeating_weapons_main_hand"] !== '0') wfrpModule.setSelectedWeaponAs(eventInfo.sourceAttribute, 'main_hand')
            if (v["repeating_weapons_off_hand"] !== '0') wfrpModule.setSelectedWeaponAs(eventInfo.sourceAttribute, 'off_hand')
        })
    }))

on(`change:main_hand_defence change:off_hand_defence change:dodge_defence`, eventInfo => {
    if (eventInfo.sourceType === 'sheetworker') return
    if (eventInfo.newValue === '0') {
        setAttrs({[eventInfo.sourceAttribute]: "1"})
        return
    }
    const update = {}
    update.main_hand_defence = "0"
    update.off_hand_defence = "0"
    update.dodge_defence = "0"
    update[eventInfo.sourceAttribute] = "1"
    setAttrs(update)
    wfrpModule.handleDefenceSelection(eventInfo.sourceAttribute)
})

on(wfrpModule.wfrp.public_weapon_attrs.map(attr => `change:main_hand_${attr} change:off_hand_${attr}`).join(" ").concat(` change:dodge`), (eventInfo) => {
    getAttrs(["main_hand_defence", "off_hand_defence", "dodge_defence"], v => {
        if(v["main_hand_defence"] !== "0") wfrpModule.handleDefenceSelection("main_hand_defence")
        if(v["off_hand_defence"] !== "0") wfrpModule.handleDefenceSelection("off_hand_defence")
        if(v["dodge_defence"] !== "0") wfrpModule.handleDefenceSelection("dodge_defence")
    })
})

// COMBAT FUNCTIONS 

on(`change:strength_bonus change:toughness_bonus change:willpower_bonus change:wound_mod change:size`, eventInfo => wfrpModule.calculateMaxWounds());

on(`change:toughness_bonus change:willpower_bonus change:corruption_points_mod`, eventInfo => wfrpModule.calculateMaxCorruptionPoints());

on(`change:strength_bonus change:toughness_bonus change:encumbrance_mod`, eventInfo => wfrpModule.calculateMaxEncumbrance());

on(`clicked:increment_advantage`, eventInfo => wfrpModule.incrementAttribute("advantage", "advantage_max", false));
on(`clicked:decrement_advantage`, eventInfo => wfrpModule.decrementAttribute("advantage"));
on(`clicked:reset_advantage`, eventInfo => setAttrs({advantage:0}));

on(`clicked:increment_wounds`, eventInfo => wfrpModule.incrementAttribute("wounds", "wounds_max", true));
on(`clicked:decrement_wounds`, eventInfo => wfrpModule.decrementAttribute("wounds"));
on(`clicked:reset_wounds`, eventInfo => {getAttrs(["wounds_max"], v => {setAttrs({wounds: v["wounds_max"]})})})

on(`clicked:increment_cp`, eventInfo => wfrpModule.incrementAttribute("corruption_points", "corruption_points_max", true));
on(`clicked:decrement_cp`, eventInfo => wfrpModule.decrementAttribute("corruption_points"));

on(`clicked:increment_fp`, eventInfo => wfrpModule.incrementAttribute("fortune", "fortune_max", false));
on(`clicked:decrement_fp`, eventInfo => wfrpModule.decrementAttribute("fortune"));
on(`clicked:reset_fp`, eventInfo => {getAttrs(["fortune_max"], v => {setAttrs({fortune: v["fortune_max"]})})})

on(wfrpModule.wfrp.combat_modifiers.map(m => `change:${m.attr}`).join(` `), eventInfo => {
    const calculateModifier = (type, v) => {
        const result = wfrpModule.wfrp.combat_modifiers.filter(m => m.values[type] && v[m.attr] === '1').reduce((s, m) => s + m.values[type], 0);
        return result > 0 ? `+${result}` : result < 0 ? `${result}` : `0`;
    }

    getAttrs(wfrpModule.wfrp.combat_modifiers.map(m => m.attr), v => {
        setAttrs({
            ["cm_melee_sum"]: calculateModifier('melee', v),
            ["cm_ranged_sum"]: calculateModifier('ranged', v),
            ["cm_parry_sum"]: calculateModifier('parry', v),
            ["cm_dodge_sum"]: calculateModifier('dodge', v),
        })
    })

    const triggered_group = wfrpModule.wfrp.combat_modifiers.filter(m => m.attr === eventInfo.sourceAttribute)[0].group
    if (triggered_group && eventInfo.newValue === "1") {
        const attrs_for_unselect = wfrpModule.wfrp.combat_modifiers
            .filter(m => m.attr !== eventInfo.sourceAttribute && m.group === triggered_group)
            .map(m => m.attr)

        const update = {}
        attrs_for_unselect.forEach(attr => {update[attr] = "0"})
        setAttrs(update)
    }
})
// SPELL FUNCTIONS

on(`change:repeating_spells:spell_type change:repeating_spells:spell_lore change:repeating_spells:spell_deity`, eventInfo => wfrpModule.calculateSpellValue(eventInfo.sourceAttribute));
on(`change:repeating_spells:spell_range change:repeating_spells:spell_duration ${wfrpModule.wfrp.characteristics_v2.flatMap(c => [`change:${c.attr}`, `change:${c.bonus_attr}`]).join(" ")}`,
    () => wfrpModule.updateSpellStrings()
);

// NPC FUNCTIONS

on(`change:repeating_attacks:attack_name change:repeating_attacks:attack_type`, eventInfo => wfrpModule.getAttackValue(eventInfo.sourceAttribute));

on(`change:weapon_skill change:ballistic_skill`, eventInfo => wfrpModule.cascadeNPCAttacks());

[...wfrpModule.wfrp.characteristics, "initiative", "dodge", "endurance", "intuition", "perception", "cool"].forEach(characteristic => {
    on(`change:${characteristic} change:${characteristic}_bonus`, eventInfo => wfrpModule.updateNPCButtons())
});

on(`change:npc sheet:opened`, eventInfo => wfrpModule.updateNPCButtons());

// TALENT FUNCTIONS
on(`change:repeating_talent:talent_name change:repeating_talent:talent_ranks change:repeating_talent:use_in_defence ` +
    `change:repeating_talent:use_in_attack change:repeating_talent:ambidextrous`, (eventInfo) => wfrpModule.calculateCombatTalentAttr())