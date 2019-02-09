import {TYPES, MOVES} from '../lang';
import {extend} from '../utils';

const CATEGORIES = {PHYSICAL: 'P', SPECIAL: 'S'};
const MOVES_RBY = {
  [MOVES.NO_MOVE]: {
    bp: 0,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL
  },
  [MOVES.ACID]: {
    bp: 40,
    type: TYPES.POISON,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.AGILITY]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.AMNESIA]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.AURORA_BEAM]: {
    bp: 65,
    type: TYPES.ICE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.BARRIER]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.BIND]: {
    bp: 15,
    type: TYPES.NORMAL
  },
  [MOVES.BLIZZARD]: {
    bp: 120,
    type: TYPES.ICE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSpread: true
  },
  [MOVES.BODY_SLAM]: {
    bp: 85,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.BONE_CLUB]: {
    bp: 65,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true
  },
  [MOVES.BUBBLE_BEAM]: {
    bp: 65,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.CLAMP]: {
    bp: 35,
    type: TYPES.WATER
  },
  [MOVES.CRABHAMMER]: {
    bp: 90,
    type: TYPES.WATER,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    alwaysCrit: true
  },
  [MOVES.CONFUSE_RAY]: {
    bp: 0,
    type: TYPES.GHOST
  },
  [MOVES.DEFENSE_CURL]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.DIG]: {
    bp: 100,
    type: TYPES.GROUND,
    makesContact: true
  },
  [MOVES.DISABLE]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.DOUBLE_KICK]: {
    bp: 30,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isTwoHit: true
  },
  [MOVES.DOUBLEEDGE]: {
    bp: 100,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasRecoil: 25
  },
  [MOVES.DOUBLE_TEAM]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.DREAM_EATER]: {
    bp: 100,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL,
    givesHealth: true,
    percentHealed: 0.5
  },
  [MOVES.DRILL_PECK]: {
    bp: 80,
    type: TYPES.FLYING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.EARTHQUAKE]: {
    bp: 100,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL,
    isSpread: true
  },
  [MOVES.EXPLOSION]: {
    bp: 170,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    isSpread: true
  },
  [MOVES.FIRE_BLAST]: {
    bp: 120,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.FIRE_PUNCH]: {
    bp: 75,
    type: TYPES.FIRE,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    isPunch: true
  },
  [MOVES.FIRE_SPIN]: {
    bp: 15,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.FLAMETHROWER]: {
    bp: 95,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.FLY]: {
    bp: 70,
    type: TYPES.FLYING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.FURY_SWIPES]: {
    bp: 18,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isMultiHit: true
  },
  [MOVES.GLARE]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.GUST]: {
    bp: 40,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HAZE]: {
    bp: 0,
    type: TYPES.ICE
  },
  [MOVES.HIGH_JUMP_KICK]: {
    bp: 85,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasRecoil: 'crash'
  },
  [MOVES.HYDRO_PUMP]: {
    bp: 120,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HYPER_BEAM]: {
    bp: 150,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HYPER_FANG]: {
    bp: 80,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    isBite: true
  },
  [MOVES.ICE_BEAM]: {
    bp: 95,
    type: TYPES.ICE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.ICE_PUNCH]: {
    bp: 75,
    type: TYPES.ICE,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    isPunch: true
  },
  [MOVES.JUMP_KICK]: {
    bp: 70,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasRecoil: 'crash'
  },
  [MOVES.LEECH_LIFE]: {
    bp: 20,
    type: TYPES.BUG,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    givesHealth: true,
    percentHealed: 0.5
  },
  [MOVES.LEECH_SEED]: {
    bp: 0,
    type: TYPES.GRASS
  },
  [MOVES.LIGHT_SCREEN]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.LOVELY_KISS]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.MEGA_DRAIN]: {
    bp: 40,
    type: TYPES.GRASS,
    givesHealth: true,
    percentHealed: 0.5
  },
  [MOVES.MIRROR_MOVE]: {
    bp: 0,
    type: TYPES.FLYING
  },
  [MOVES.NIGHT_SHADE]: {
    bp: 100,
    type: TYPES.GHOST,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.PIN_MISSILE]: {
    bp: 14,
    type: TYPES.BUG,
    category: CATEGORIES.PHYSICAL,
    isMultiHit: true
  },
  [MOVES.PSYCHIC]: {
    bp: 90,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.QUICK_ATTACK]: {
    bp: 40,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasPriority: true
  },
  [MOVES.RAZOR_LEAF]: {
    bp: 55,
    type: TYPES.GRASS,
    category: CATEGORIES.PHYSICAL,
    alwaysCrit: true
  },
  [MOVES.RECOVER]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.REFLECT]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.REST]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.ROAR]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.ROCK_SLIDE]: {
    bp: 75,
    type: TYPES.ROCK,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true,
    isSpread: true
  },
  [MOVES.ROCK_THROW]: {
    bp: 50,
    type: TYPES.ROCK,
    category: CATEGORIES.PHYSICAL
  },
  [MOVES.SEISMIC_TOSS]: {
    bp: 100,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.SELFDESTRUCT]: {
    bp: 130,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    isSpread: true
  },
  [MOVES.SING]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.SKY_ATTACK]: {
    bp: 140,
    type: TYPES.FLYING,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true
  },
  [MOVES.SKULL_BASH]: {
    bp: 100,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.SLASH]: {
    bp: 70,
    type: TYPES.NORMAL,
    alwaysCrit: true,
    makesContact: true
  },
  [MOVES.SLUDGE]: {
    bp: 65,
    type: TYPES.POISON,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.SOFTBOILED]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.SPORE]: {
    bp: 0,
    type: TYPES.GRASS
  },
  [MOVES.STRUGGLE]: {
    bp: 50,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    hasRecoil: 50
  },
  [MOVES.SUBMISSION]: {
    bp: 80,
    type: TYPES.FIGHTING,
    makesContact: true,
    hasRecoil: 25
  },
  [MOVES.SUBSTITUTE]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.SUPER_FANG]: {
    bp: 0,
    type: TYPES.NORMAL,
    makesContact: true
  },
  [MOVES.SURF]: {
    bp: 95,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL,
    isSpread: true
  },
  [MOVES.SWIFT]: {
    bp: 60,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL,
    isSpread: true
  },
  [MOVES.SWORDS_DANCE]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.TACKLE]: {
    bp: 35,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.TAKE_DOWN]: {
    bp: 90,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasRecoil: 25
  },
  [MOVES.THRASH]: {
    bp: 90,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.THUNDER]: {
    bp: 120,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.THUNDERBOLT]: {
    bp: 95,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.THUNDER_PUNCH]: {
    bp: 75,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    isPunch: true
  },
  [MOVES.THUNDER_WAVE]: {
    bp: 0,
    type: TYPES.ELECTRIC
  },
  [MOVES.TOXIC]: {
    bp: 0,
    type: TYPES.POISON
  },
  [MOVES.TRI_ATTACK]: {
    bp: 80,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.TWINEEDLE]: {
    bp: 25,
    type: TYPES.BUG,
    isTwoHit: true
  },
  [MOVES.WATERFALL]: {
    bp: 80,
    type: TYPES.WATER,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.WATER_GUN]: {
    bp: 40,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.WING_ATTACK]: {
    bp: 35,
    type: TYPES.FLYING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.WRAP]: {
    bp: 15,
    type: TYPES.NORMAL
  },
  [MOVES.WHIRLWIND]: {
    bp: 0,
    type: TYPES.NORMAL
  }
};

const MOVES_GSC = extend({}, MOVES_RBY, {
  [MOVES.AEROBLAST]: {
    bp: 100,
    type: TYPES.FLYING,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.ANCIENT_POWER]: {
    bp: 60,
    type: TYPES.ROCK,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.BATON_PASS]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.BELLY_DRUM]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.BITE]: {
    bp: 60,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    isBite: true
  },
  [MOVES.BONE_RUSH]: {
    bp: 25,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL,
    isMultiHit: true
  },
  [MOVES.CRABHAMMER]: {alwaysCrit: false},
  [MOVES.CROSS_CHOP]: {
    bp: 100,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.CRUNCH]: {
    bp: 80,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    isBite: true
  },
  [MOVES.CURSE]: {
    bp: 0,
    type: TYPES.GHOST
  },
  [MOVES.DESTINY_BOND]: {
    bp: 0,
    type: TYPES.GHOST
  },
  [MOVES.DIG]: {bp: 60},
  [MOVES.DOUBLEEDGE]: {bp: 120},
  [MOVES.DYNAMIC_PUNCH]: {
    bp: 100,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    isPunch: true
  },
  [MOVES.ENCORE]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.ENDURE]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.EXPLOSION]: {bp: 250},
  [MOVES.EXTREME_SPEED]: {
    bp: 80,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasPriority: true
  },
  [MOVES.FEINT_ATTACK]: {
    bp: 60,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.FLAIL]: {
    bp: 1,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.FLAME_WHEEL]: {
    bp: 60,
    type: TYPES.FIRE,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.FRUSTRATION]: {
    bp: 102,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.FUTURE_SIGHT]: {
    bp: 80,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.GIGA_DRAIN]: {
    bp: 60,
    type: TYPES.GRASS,
    category: CATEGORIES.SPECIAL,
    givesHealth: true,
    percentHealed: 0.5
  },
  [MOVES.GUST]: {type: TYPES.FLYING},
  [MOVES.HEADBUTT]: {
    bp: 70,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.HEAL_BELL]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.HIDDEN_POWER_BUG]: {
    bp: 70,
    type: TYPES.BUG,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_DARK]: {
    bp: 70,
    type: TYPES.DARK,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_DRAGON]: {
    bp: 70,
    type: TYPES.DRAGON,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_ELECTRIC]: {
    bp: 70,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_FIGHTING]: {
    bp: 70,
    type: TYPES.FIGHTING,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_FIRE]: {
    bp: 70,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_FLYING]: {
    bp: 70,
    type: TYPES.FLYING,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_GHOST]: {
    bp: 70,
    type: TYPES.GHOST,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_GRASS]: {
    bp: 70,
    type: TYPES.GRASS,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_GROUND]: {
    bp: 70,
    type: TYPES.GROUND,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_ICE]: {
    bp: 70,
    type: TYPES.ICE,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_POISON]: {
    bp: 70,
    type: TYPES.POISON,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_PSYCHIC]: {
    bp: 70,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_ROCK]: {
    bp: 70,
    type: TYPES.ROCK,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_STEEL]: {
    bp: 70,
    type: TYPES.STEEL,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIDDEN_POWER_WATER]: {
    bp: 70,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.ICY_WIND]: {
    bp: 55,
    type: TYPES.ICE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSpread: true
  },
  [MOVES.IRON_TAIL]: {
    bp: 100,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.MACH_PUNCH]: {
    bp: 40,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isPunch: true,
    hasPriority: true
  },
  [MOVES.MEGAHORN]: {
    bp: 120,
    type: TYPES.BUG,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.METAL_CLAW]: {
    bp: 50,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.MILK_DRINK]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.MOONLIGHT]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.PROTECT]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.PURSUIT]: {
    bp: 40,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.RAPID_SPIN]: {
    bp: 20,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.RAZOR_LEAF]: {alwaysCrit: false},
  [MOVES.RETURN]: {
    bp: 102,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.REVERSAL]: {
    bp: 1,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.ROCK_SMASH]: {
    bp: 20,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.SACRED_FIRE]: {
    bp: 100,
    type: TYPES.FIRE,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true
  },
  [MOVES.SELFDESTRUCT]: {bp: 200},
  [MOVES.SHADOW_BALL]: {
    bp: 80,
    type: TYPES.GHOST,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isBullet: true
  },
  [MOVES.SLASH]: {alwaysCrit: false},
  [MOVES.SLEEP_TALK]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.SLUDGE_BOMB]: {
    bp: 90,
    type: TYPES.POISON,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isBullet: true
  },
  [MOVES.SOLAR_BEAM]: {
    bp: 120,
    type: TYPES.GRASS,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.SPARK]: {
    bp: 65,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.SPIKES]: {
    bp: 0,
    type: TYPES.GROUND
  },
  [MOVES.STEEL_WING]: {
    bp: 70,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.STRUGGLE]: {type: null, hasRecoil: 25},
  [MOVES.SUNNY_DAY]: {
    bp: 0,
    type: TYPES.FIRE
  },
  [MOVES.SWAGGER]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.SYNTHESIS]: {
    bp: 0,
    type: TYPES.GRASS
  },
  [MOVES.THIEF]: {
    bp: 40,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.TRI_ATTACK]: {hasSecondaryEffect: true},
  [MOVES.WHIRLPOOL]: {
    bp: 15,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.WING_ATTACK]: {bp: 60},
  [MOVES.ZAP_CANNON]: {
    bp: 100,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isBullet: true
  }
});

delete MOVES_GSC[[MOVES.ACID]];
delete MOVES_GSC[[MOVES.MEGA_DRAIN]];

const MOVES_ADV = extend({}, MOVES_GSC, {
  [MOVES.AERIAL_ACE]: {
    bp: 60,
    type: TYPES.FLYING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.AIR_CUTTER]: {
    bp: 55,
    type: TYPES.FLYING,
    category: CATEGORIES.SPECIAL,
    isSpread: true
  },
  [MOVES.ASTONISH]: {
    bp: 30,
    type: TYPES.GHOST,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.AROMATHERAPY]: {
    bp: 0,
    type: TYPES.GRASS
  },
  [MOVES.BLAST_BURN]: {
    bp: 150,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.BLAZE_KICK]: {
    bp: 85,
    type: TYPES.FIRE,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.BONEMERANG]: {
    bp: 50,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL,
    isTwoHit: true
  },
  [MOVES.BOUNCE]: {
    bp: 85,
    type: TYPES.FLYING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.BRICK_BREAK]: {
    bp: 75,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.BULK_UP]: {
    bp: 0,
    type: TYPES.FIGHTING
  },
  [MOVES.BULLET_SEED]: {
    bp: 10,
    type: TYPES.GRASS,
    category: CATEGORIES.PHYSICAL,
    isMultiHit: true,
    isBullet: true
  },
  [MOVES.CALM_MIND]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.COVET]: {
    bp: 40,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.CRUSH_CLAW]: {
    bp: 75,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.DIVE]: {
    bp: 60,
    type: TYPES.WATER,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.DOOM_DESIRE]: {
    bp: 120,
    type: TYPES.STEEL,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.DRAGON_CLAW]: {
    bp: 80,
    type: TYPES.DRAGON,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.DOUBLEEDGE]: {hasRecoil: 33},
  [MOVES.ENDEAVOR]: {
    bp: 1,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.ERUPTION]: {
    bp: 150,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    isSpread: true
  },
  [MOVES.EXTRASENSORY]: {
    bp: 80,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.FACADE]: {
    bp: 70,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.FAKE_OUT]: {
    bp: 40,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    hasPriority: true
  },
  [MOVES.FOCUS_PUNCH]: {
    bp: 150,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isPunch: true
  },
  [MOVES.FRENZY_PLANT]: {
    bp: 150,
    type: TYPES.GRASS,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HEAT_WAVE]: {
    bp: 100,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSpread: true
  },
  [MOVES.HELPING_HAND]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.HYDRO_CANNON]: {
    bp: 150,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HYPER_VOICE]: {
    bp: 90,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL,
    isSound: true,
    isSpread: true
  },
  [MOVES.ICICLE_SPEAR]: {
    bp: 10,
    type: TYPES.ICE,
    category: CATEGORIES.PHYSICAL,
    isMultiHit: true
  },
  [MOVES.INGRAIN]: {
    bp: 0,
    type: TYPES.GRASS
  },
  [MOVES.IRON_DEFENSE]: {
    bp: 0,
    type: TYPES.STEEL
  },
  [MOVES.KNOCK_OFF]: {
    bp: 20,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.LEAF_BLADE]: {
    bp: 70,
    type: TYPES.GRASS,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.LUSTER_PURGE]: {
    bp: 70,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.LOW_KICK]: {
    bp: 1,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.MAGICAL_LEAF]: {
    bp: 60,
    type: TYPES.GRASS,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.MAGIC_COAT]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.METEOR_MASH]: {
    bp: 100,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    isPunch: true
  },
  [MOVES.MIST_BALL]: {
    bp: 70,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isBullet: true
  },
  [MOVES.MUD_SHOT]: {
    bp: 55,
    type: TYPES.GROUND,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.MUDDY_WATER]: {
    bp: 95,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSpread: true
  },
  [MOVES.NEEDLE_ARM]: {
    bp: 60,
    type: TYPES.GRASS,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.OVERHEAT]: {
    bp: 140,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    dropsStats: 2
  },
  [MOVES.POISON_FANG]: {
    bp: 50,
    type: TYPES.POISON,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    isBite: true
  },
  [MOVES.POISON_TAIL]: {
    bp: 50,
    type: TYPES.POISON,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.PSYCHO_BOOST]: {
    bp: 140,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL,
    dropsStats: 2
  },
  [MOVES.RECYCLE]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.REFRESH]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.REVENGE]: {
    bp: 120,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.ROCK_BLAST]: {
    bp: 25,
    type: TYPES.ROCK,
    category: CATEGORIES.PHYSICAL,
    isMultiHit: true
  },
  [MOVES.ROCK_TOMB]: {
    bp: 50,
    type: TYPES.ROCK,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true
  },
  [MOVES.SAND_TOMB]: {
    bp: 15,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL
  },
  [MOVES.SECRET_POWER]: {
    bp: 70,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true
  },
  [MOVES.SHADOW_PUNCH]: {
    bp: 60,
    type: TYPES.GHOST,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isPunch: true
  },
  [MOVES.SHEER_COLD]: {
    bp: 1,
    type: TYPES.ICE,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.SHOCK_WAVE]: {
    bp: 60,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.SIGNAL_BEAM]: {
    bp: 75,
    type: TYPES.BUG,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.SILVER_WIND]: {
    bp: 60,
    type: TYPES.BUG,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.SKY_UPPERCUT]: {
    bp: 85,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isPunch: true
  },
  [MOVES.SLACK_OFF]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.STOCKPILE]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.SUPERPOWER]: {
    bp: 120,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    dropsStats: 1
  },
  [MOVES.TAIL_GLOW]: {
    bp: 0,
    type: TYPES.BUG
  },
  [MOVES.TAUNT]: {
    bp: 0,
    type: TYPES.DARK
  },
  [MOVES.TRICK]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.UPROAR]: {
    bp: 50,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.VOLT_TACKLE]: {
    bp: 120,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    hasRecoil: 33
  },
  [MOVES.WATER_PULSE]: {
    bp: 60,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isPulse: true
  },
  [MOVES.WATER_SPOUT]: {
    bp: 150,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL,
    isSpread: true
  },
  [MOVES.WEATHER_BALL]: {
    bp: 50,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL,
    isBullet: true
  },
  [MOVES.WILLOWISP]: {
    bp: 0,
    type: TYPES.FIRE
  },
  [MOVES.WISH]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.YAWN]: {
    bp: 0,
    type: TYPES.NORMAL
  }
});

const MOVES_DPP = extend({}, MOVES_ADV, {
  [MOVES.AIR_SLASH]: {
    bp: 75,
    type: TYPES.FLYING,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.AQUA_JET]: {
    bp: 40,
    type: TYPES.WATER,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasPriority: true
  },
  [MOVES.AQUA_TAIL]: {
    bp: 90,
    type: TYPES.WATER,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.AQUA_RING]: {
    bp: 0,
    type: TYPES.WATER
  },
  [MOVES.ASSURANCE]: {
    bp: 50,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.ATTACK_ORDER]: {
    bp: 90,
    type: TYPES.BUG,
    category: CATEGORIES.PHYSICAL
  },
  [MOVES.AURA_SPHERE]: {
    bp: 90,
    type: TYPES.FIGHTING,
    category: CATEGORIES.SPECIAL,
    isBullet: true,
    isPulse: true
  },
  [MOVES.AVALANCHE]: {
    bp: 120,
    type: TYPES.ICE,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.BRAVE_BIRD]: {
    bp: 120,
    type: TYPES.FLYING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasRecoil: 33
  },
  [MOVES.BRINE]: {
    bp: 65,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.BUG_BITE]: {
    bp: 60,
    type: TYPES.BUG,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.BUG_BUZZ]: {
    bp: 90,
    type: TYPES.BUG,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSound: true
  },
  [MOVES.BULLET_PUNCH]: {
    bp: 40,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isPunch: true,
    hasPriority: true
  },
  [MOVES.CHARGE_BEAM]: {
    bp: 50,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.CHATTER]: {
    bp: 60,
    type: TYPES.FLYING,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSound: true
  },
  [MOVES.CLOSE_COMBAT]: {
    bp: 120,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.COVET]: {bp: 60},
  [MOVES.CROSS_POISON]: {
    bp: 70,
    type: TYPES.POISON,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.DARK_PULSE]: {
    bp: 80,
    type: TYPES.DARK,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isPulse: true
  },
  [MOVES.DARK_VOID]: {
    bp: 0,
    type: TYPES.DARK
  },
  [MOVES.DEFEND_ORDER]: {
    bp: 0,
    type: TYPES.BUG
  },
  [MOVES.DEFOG]: {
    bp: 0,
    type: TYPES.FLYING
  },
  [MOVES.DIG]: {bp: 80},
  [MOVES.DISCHARGE]: {
    bp: 80,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSpread: true
  },
  [MOVES.DIVE]: {bp: 80},
  [MOVES.DOUBLE_HIT]: {
    bp: 35,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isTwoHit: true
  },
  [MOVES.DRACO_METEOR]: {
    bp: 140,
    type: TYPES.DRAGON,
    category: CATEGORIES.SPECIAL,
    dropsStats: 2
  },
  [MOVES.DRAGON_PULSE]: {
    bp: 90,
    type: TYPES.DRAGON,
    category: CATEGORIES.SPECIAL,
    isPulse: true
  },
  [MOVES.DRAGON_RUSH]: {
    bp: 100,
    type: TYPES.DRAGON,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.DRAIN_PUNCH]: {
    bp: 60,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isPunch: true,
    givesHealth: true,
    percentHealed: 0.5
  },
  [MOVES.EARTH_POWER]: {
    bp: 90,
    type: TYPES.GROUND,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.ENERGY_BALL]: {
    bp: 80,
    type: TYPES.GRASS,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isBullet: true
  },
  [MOVES.FEINT]: {
    bp: 50,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    bypassesProtect: true
  },
  [MOVES.FIRE_FANG]: {
    bp: 65,
    type: TYPES.FIRE,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    isBite: true
  },
  [MOVES.FLARE_BLITZ]: {
    bp: 120,
    type: TYPES.FIRE,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    hasRecoil: 33
  },
  [MOVES.FLASH_CANNON]: {
    bp: 80,
    type: TYPES.STEEL,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.FLING]: {
    bp: 1,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL
  },
  [MOVES.FLY]: {bp: 90},
  [MOVES.FOCUS_BLAST]: {
    bp: 120,
    type: TYPES.FIGHTING,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isBullet: true
  },
  [MOVES.FORCE_PALM]: {
    bp: 60,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.GIGA_IMPACT]: {
    bp: 150,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.GRASS_KNOT]: {
    bp: 1,
    type: TYPES.GRASS,
    category: CATEGORIES.SPECIAL,
    makesContact: true
  },
  [MOVES.GUNK_SHOT]: {
    bp: 120,
    type: TYPES.POISON,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true
  },
  [MOVES.GYRO_BALL]: {
    bp: 1,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isBullet: true
  },
  [MOVES.HAMMER_ARM]: {
    bp: 100,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isPunch: true
  },
  [MOVES.HEAD_SMASH]: {
    bp: 150,
    type: TYPES.ROCK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasRecoil: 50
  },
  [MOVES.HEAL_ORDER]: {
    bp: 0,
    type: TYPES.BUG
  },
  [MOVES.HEALING_WISH]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.HIGH_JUMP_KICK]: {bp: 100},
  [MOVES.ICE_FANG]: {
    bp: 65,
    type: TYPES.ICE,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    isBite: true
  },
  [MOVES.ICE_SHARD]: {
    bp: 40,
    type: TYPES.ICE,
    category: CATEGORIES.PHYSICAL,
    hasPriority: true
  },
  [MOVES.IRON_HEAD]: {
    bp: 80,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.JUDGMENT]: {
    bp: 100,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.JUMP_KICK]: {bp: 85},
  [MOVES.LAST_RESORT]: {
    bp: 130,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.LAVA_PLUME]: {
    bp: 80,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSpread: true
  },
  [MOVES.LEAF_BLADE]: {bp: 90},
  [MOVES.LEAF_STORM]: {
    bp: 140,
    type: TYPES.GRASS,
    category: CATEGORIES.SPECIAL,
    dropsStats: 2
  },
  [MOVES.LUNAR_DANCE]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.MAGMA_STORM]: {
    bp: 120,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.MAGNET_BOMB]: {
    bp: 60,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    isBullet: true
  },
  [MOVES.MAGNET_RISE]: {
    bp: 0,
    type: TYPES.ELECTRIC
  },
  [MOVES.ME_FIRST]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.MIRROR_SHOT]: {
    bp: 65,
    type: TYPES.STEEL,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.MUD_BOMB]: {
    bp: 65,
    type: TYPES.GROUND,
    category: CATEGORIES.SPECIAL,
    isBullet: true,
    hasSecondaryEffect: true
  },
  [MOVES.NATURAL_GIFT]: {
    bp: 1,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL
  },
  [MOVES.NATURE_POWER]: {
    bp: 80,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.NASTY_PLOT]: {
    bp: 0,
    type: TYPES.DARK
  },
  [MOVES.NIGHT_SLASH]: {
    bp: 70,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.OMINOUS_WIND]: {
    bp: 60,
    type: TYPES.GHOST,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.OUTRAGE]: {
    bp: 120,
    type: TYPES.DRAGON,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.PALEO_WAVE]: {
    bp: 85,
    type: TYPES.ROCK,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.PAYBACK]: {
    bp: 50,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.PLUCK]: {
    bp: 60,
    type: TYPES.FLYING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.POISON_JAB]: {
    bp: 80,
    type: TYPES.POISON,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.POWER_GEM]: {
    bp: 70,
    type: TYPES.ROCK,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.POWER_WHIP]: {
    bp: 120,
    type: TYPES.GRASS,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.PSYCHO_CUT]: {
    bp: 70,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.PHYSICAL
  },
  [MOVES.PSYCHO_SHIFT]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.PUNISHMENT]: {
    bp: 60,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.ROAR_OF_TIME]: {
    bp: 150,
    type: TYPES.DRAGON,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.ROCK_CLIMB]: {
    bp: 90,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.ROCK_SMASH]: {bp: 40},
  [MOVES.ROCK_POLISH]: {
    bp: 0,
    type: TYPES.ROCK
  },
  [MOVES.ROCK_WRECKER]: {
    bp: 150,
    type: TYPES.ROCK,
    category: CATEGORIES.PHYSICAL,
    isBullet: true
  },
  [MOVES.ROOST]: {
    bp: 0,
    type: TYPES.FLYING
  },
  [MOVES.SEED_BOMB]: {
    bp: 80,
    type: TYPES.GRASS,
    category: CATEGORIES.PHYSICAL,
    isBullet: true
  },
  [MOVES.SEED_FLARE]: {
    bp: 120,
    type: TYPES.GRASS,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.SHADOW_CLAW]: {
    bp: 70,
    type: TYPES.GHOST,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.SHADOW_FORCE]: {
    bp: 120,
    type: TYPES.GHOST,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    bypassesProtect: true
  },
  [MOVES.SHADOW_SNEAK]: {
    bp: 40,
    type: TYPES.GHOST,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasPriority: true
  },
  [MOVES.SHADOW_STRIKE]: {
    bp: 80,
    type: TYPES.GHOST,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true,
    makesContact: true
  },
  [MOVES.SPACIAL_REND]: {
    bp: 100,
    type: TYPES.DRAGON,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.STEALTH_ROCK]: {
    bp: 0,
    type: TYPES.ROCK
  },
  [MOVES.STONE_EDGE]: {
    bp: 100,
    type: TYPES.ROCK,
    category: CATEGORIES.PHYSICAL
  },
  [MOVES.STRUGGLE]: {hasRecoil: 'Struggle'},
  [MOVES.SUCKER_PUNCH]: {
    bp: 80,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasPriority: true
  },
  [MOVES.SWITCHEROO]: {
    bp: 0,
    type: TYPES.DARK
  },
  [MOVES.TAILWIND]: {
    bp: 0,
    type: TYPES.FLYING
  },
  [MOVES.THUNDER_FANG]: {
    bp: 65,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    isBite: true
  },
  [MOVES.TOXIC_SPIKES]: {
    bp: 0,
    type: TYPES.POISON
  },
  [MOVES.TRICK_ROOM]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.UTURN]: {
    bp: 70,
    type: TYPES.BUG,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.VACUUM_WAVE]: {
    bp: 40,
    type: TYPES.FIGHTING,
    category: CATEGORIES.SPECIAL,
    hasPriority: true
  },
  [MOVES.WAKEUP_SLAP]: {
    bp: 60,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.WATERFALL]: {hasSecondaryEffect: true},
  [MOVES.WOOD_HAMMER]: {
    bp: 120,
    type: TYPES.GRASS,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasRecoil: 33
  },
  [MOVES.WRING_OUT]: {
    bp: 1,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL,
    makesContact: true
  },
  [MOVES.XSCISSOR]: {
    bp: 80,
    type: TYPES.BUG,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.ZAP_CANNON]: {bp: 120},
  [MOVES.ZEN_HEADBUTT]: {
    bp: 80,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  }
});

const MOVES_BW = extend({}, MOVES_DPP, {
  [MOVES.ACID_SPRAY]: {
    bp: 40,
    type: TYPES.POISON,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isBullet: true
  },
  [MOVES.ACROBATICS]: {
    bp: 55,
    type: TYPES.FLYING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.AUTOTOMIZE]: {
    bp: 0,
    type: TYPES.STEEL
  },
  [MOVES.BLUE_FLARE]: {
    bp: 130,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.BOLT_STRIKE]: {
    bp: 130,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.BULLDOZE]: {
    bp: 60,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true,
    isSpread: true
  },
  [MOVES.BULLET_SEED]: {bp: 25},
  [MOVES.CHIP_AWAY]: {
    bp: 70,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    ignoresDefenseBoosts: true
  },
  [MOVES.CIRCLE_THROW]: {
    bp: 60,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.CLEAR_SMOG]: {
    bp: 50,
    type: TYPES.POISON,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.COIL]: {
    bp: 0,
    type: TYPES.POISON
  },
  [MOVES.COTTON_GUARD]: {
    bp: 0,
    type: TYPES.GRASS
  },
  [MOVES.DOOM_DESIRE]: {bp: 140},
  [MOVES.DRAGON_TAIL]: {
    bp: 60,
    type: TYPES.DRAGON,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.DRAIN_PUNCH]: {bp: 75},
  [MOVES.DRILL_RUN]: {
    bp: 80,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.DUAL_CHOP]: {
    bp: 40,
    type: TYPES.DRAGON,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isTwoHit: true
  },
  [MOVES.ELECTRO_BALL]: {
    bp: 1,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.SPECIAL,
    isBullet: true
  },
  [MOVES.ELECTROWEB]: {
    bp: 55,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSpread: true
  },
  [MOVES.FEINT]: {bp: 30},
  [MOVES.FIERY_DANCE]: {
    bp: 80,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.FINAL_GAMBIT]: {
    bp: 1,
    type: TYPES.FIGHTING,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.FIRE_PLEDGE]: {
    bp: 50,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL
  },
  // [MOVES.FIRE_PLEDGE_(GRASS_PLEDGE_BOOSTED)]: {
  //   bp: 150,
  //   type: TYPES.FIRE,
  //   category: CATEGORIES.SPECIAL
  // },
  // [MOVES.FIRE_PLEDGE_(WATER_PLEDGE_BOOSTED)]: {
  //   bp: 150,
  //   type: TYPES.FIRE,
  //   category: CATEGORIES.SPECIAL
  // },
  [MOVES.FLAME_BURST]: {
    bp: 70,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.FLAME_CHARGE]: {
    bp: 50,
    type: TYPES.FIRE,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.FOUL_PLAY]: {
    bp: 95,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.FREEZE_SHOCK]: {
    bp: 140,
    type: TYPES.ICE,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true
  },
  [MOVES.FROST_BREATH]: {
    bp: 40,
    type: TYPES.ICE,
    category: CATEGORIES.SPECIAL,
    alwaysCrit: true
  },
  [MOVES.FUSION_BOLT]: {
    bp: 100,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.PHYSICAL
  },
  [MOVES.FUSION_FLARE]: {
    bp: 100,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.FUTURE_SIGHT]: {bp: 100},
  [MOVES.GEAR_GRIND]: {
    bp: 50,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    isTwoHit: true,
    makesContact: true
  },
  [MOVES.GIGA_DRAIN]: {bp: 75},
  [MOVES.GLACIATE]: {
    bp: 65,
    type: TYPES.ICE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSpread: true
  },
  [MOVES.GRASS_PLEDGE]: {
    bp: 50,
    type: TYPES.GRASS,
    category: CATEGORIES.SPECIAL
  },
  // [MOVES.GRASS_PLEDGE_(FIRE_PLEDGE_BOOSTED)]: {
  //   bp: 150,
  //   type: TYPES.GRASS,
  //   category: CATEGORIES.SPECIAL
  // },
  // [MOVES.GRASS_PLEDGE_(WATER_PLEDGE_BOOSTED)]: {
  //   bp: 150,
  //   type: TYPES.GRASS,
  //   category: CATEGORIES.SPECIAL
  // },
  [MOVES.HEAL_PULSE]: {
    bp: 0,
    type: TYPES.PSYCHIC
  },
  [MOVES.HEART_STAMP]: {
    bp: 60,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true,
    makesContact: true
  },
  [MOVES.HEAD_CHARGE]: {
    bp: 120,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasRecoil: 25
  },
  [MOVES.HEAT_CRASH]: {
    bp: 1,
    type: TYPES.FIRE,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.HEAVY_SLAM]: {
    bp: 1,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.HEX]: {
    bp: 50,
    type: TYPES.GHOST,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.HIGH_JUMP_KICK]: {bp: 130},
  [MOVES.HONE_CLAWS]: {
    bp: 0,
    type: TYPES.DARK
  },
  [MOVES.HORN_LEECH]: {
    bp: 75,
    type: TYPES.GRASS,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    givesHealth: true,
    percentHealed: 0.5
  },
  [MOVES.HURRICANE]: {
    bp: 120,
    type: TYPES.FLYING,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.ICE_BURN]: {
    bp: 140,
    type: TYPES.ICE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.ICICLE_CRASH]: {
    bp: 85,
    type: TYPES.ICE,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true
  },
  [MOVES.ICICLE_SPEAR]: {bp: 25},
  [MOVES.INCINERATE]: {
    bp: 30,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    isSpread: true
  },
  [MOVES.INFERNO]: {
    bp: 100,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.JUMP_KICK]: {bp: 100},
  [MOVES.LAST_RESORT]: {bp: 140},
  [MOVES.LEAF_TORNADO]: {
    bp: 65,
    type: TYPES.GRASS,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.LOW_SWEEP]: {
    bp: 60,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.NIGHT_DAZE]: {
    bp: 85,
    type: TYPES.DARK,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.PETAL_DANCE]: {
    bp: 120,
    type: TYPES.GRASS,
    category: CATEGORIES.SPECIAL,
    makesContact: true
  },
  [MOVES.PSYSHOCK]: {
    bp: 80,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL,
    dealsPhysicalDamage: true
  },
  [MOVES.PSYSTRIKE]: {
    bp: 100,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL,
    dealsPhysicalDamage: true
  },
  [MOVES.QUICK_GUARD]: {
    bp: 0,
    type: TYPES.FIGHTING
  },
  [MOVES.QUIVER_DANCE]: {
    bp: 0,
    type: TYPES.BUG
  },
  [MOVES.RAGE_POWDER]: {
    bp: 0,
    type: TYPES.BUG
  },
  [MOVES.RAZOR_SHELL]: {
    bp: 75,
    type: TYPES.WATER,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.RELIC_SONG]: {
    bp: 75,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSound: true,
    isSpread: true
  },
  [MOVES.RETALIATE]: {
    bp: 70,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.ROUND]: {
    bp: 60,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.SACRED_SWORD]: {
    bp: 90,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    ignoresDefenseBoosts: true
  },
  [MOVES.SAND_TOMB]: {bp: 35},
  [MOVES.SCALD]: {
    bp: 80,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.SEARING_SHOT]: {
    bp: 100,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSpread: true,
    isBullet: true
  },
  [MOVES.SECRET_SWORD]: {
    bp: 85,
    type: TYPES.FIGHTING,
    category: CATEGORIES.SPECIAL,
    dealsPhysicalDamage: true
  },
  [MOVES.SHELL_SMASH]: {
    bp: 0,
    type: TYPES.NORMAL
  },
  [MOVES.SHIFT_GEAR]: {
    bp: 0,
    type: TYPES.STEEL
  },
  [MOVES.SKY_DROP]: {
    bp: 60,
    type: TYPES.FLYING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.SLUDGE_WAVE]: {
    bp: 95,
    type: TYPES.POISON,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSpread: true
  },
  [MOVES.SMACK_DOWN]: {
    bp: 50,
    type: TYPES.ROCK,
    category: CATEGORIES.PHYSICAL
  },
  [MOVES.SNARL]: {
    bp: 55,
    type: TYPES.DARK,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    isSound: true,
    isSpread: true
  },
  [MOVES.STEAMROLLER]: {
    bp: 65,
    type: TYPES.BUG,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.STORED_POWER]: {
    bp: 20,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.STORM_THROW]: {
    bp: 40,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    alwaysCrit: true
  },
  [MOVES.STRUGGLE_BUG]: {
    bp: 30,
    type: TYPES.BUG,
    category: CATEGORIES.SPECIAL,
    isSpread: true
  },
  [MOVES.SYNCHRONOISE]: {
    bp: 70,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.TACKLE]: {bp: 50},
  [MOVES.TAIL_SLAP]: {
    bp: 25,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isMultiHit: true
  },
  [MOVES.TECHNO_BLAST]: {
    bp: 85,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.THRASH]: {bp: 120},
  [MOVES.UPROAR]: {bp: 90},
  [MOVES.VCREATE]: {
    bp: 180,
    type: TYPES.FIRE,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.VENOSHOCK]: {
    bp: 65,
    type: TYPES.POISON,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.VOLT_SWITCH]: {
    bp: 70,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.WATER_PLEDGE]: {
    bp: 50,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL
  },
  // [MOVES.WATER_PLEDGE_FIRE_PLEDGE_BOOSTED]: {
  //   bp: 150,
  //   type: TYPES.WATER,
  //   category: CATEGORIES.SPECIAL
  // },
  // [MOVES.WATER_PLEDGE_GRASS_PLEDGE_BOOSTED]: {
  //   bp: 150,
  //   type: TYPES.WATER,
  //   category: CATEGORIES.SPECIAL
  // },
  [MOVES.WHIRLPOOL]: {bp: 35},
  [MOVES.WIDE_GUARD]: {
    bp: 0,
    type: TYPES.ROCK
  },
  [MOVES.WILD_CHARGE]: {
    bp: 90,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasRecoil: 25
  }
});

const MOVES_XY = extend({}, MOVES_BW, {
  [MOVES.AIR_CUTTER]: {bp: 60},
  [MOVES.ARM_THRUST]: {
    bp: 15,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isMultiHit: true
  },
  [MOVES.ASSURANCE]: {bp: 60},
  [MOVES.AURA_SPHERE]: {bp: 80},
  [MOVES.BELCH]: {
    bp: 120,
    type: TYPES.POISON,
    category: CATEGORIES.SPECIAL
  },
  [MOVES.BLIZZARD]: {bp: 110},
  [MOVES.BOOMBURST]: {
    bp: 140,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL,
    isSound: true,
    isSpread: true
  },
  [MOVES.CHATTER]: {bp: 65},
  [MOVES.CRABHAMMER]: {bp: 100},
  [MOVES.DAZZLING_GLEAM]: {
    bp: 80,
    type: TYPES.FAIRY,
    category: CATEGORIES.SPECIAL,
    isSpread: true
  },
  [MOVES.DIAMOND_STORM]: {
    bp: 100,
    type: TYPES.ROCK,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true,
    isSpread: true
  },
  [MOVES.DISARMING_VOICE]: {
    bp: 40,
    type: TYPES.FAIRY,
    category: CATEGORIES.SPECIAL,
    isSound: true
  },
  [MOVES.DRACO_METEOR]: {bp: 130},
  [MOVES.DRAGON_ASCENT]: {
    bp: 120,
    type: TYPES.FLYING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.DRAGON_PULSE]: {bp: 85},
  [MOVES.DRAINING_KISS]: {
    bp: 50,
    type: TYPES.FAIRY,
    category: CATEGORIES.SPECIAL,
    makesContact: true,
    givesHealth: true,
    percentHealed: 0.75
  },
  [MOVES.ENERGY_BALL]: {bp: 90},
  [MOVES.FACADE]: {ignoresBurn: true},
  [MOVES.FELL_STINGER]: {
    bp: 30,
    type: TYPES.BUG,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.FIRE_BLAST]: {bp: 110},
  [MOVES.FIRE_PLEDGE]: {bp: 80},
  [MOVES.FLAMETHROWER]: {bp: 90},
  [MOVES.FLYING_PRESS]: {
    bp: 80,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true
  },
  [MOVES.FREEZEDRY]: {
    bp: 70,
    type: TYPES.ICE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.FROST_BREATH]: {bp: 60},
  [MOVES.FUTURE_SIGHT]: {bp: 120},
  [MOVES.GEOMANCY]: {
    bp: 0,
    type: TYPES.FAIRY
  },
  [MOVES.GRASS_PLEDGE]: {bp: 80},
  [MOVES.HEAT_WAVE]: {bp: 95},
  [MOVES.HEX]: {bp: 65},
  [MOVES.HIDDEN_POWER_BUG]: {bp: 60},
  [MOVES.HIDDEN_POWER_DARK]: {bp: 60},
  [MOVES.HIDDEN_POWER_DRAGON]: {bp: 60},
  [MOVES.HIDDEN_POWER_ELECTRIC]: {bp: 60},
  [MOVES.HIDDEN_POWER_FIGHTING]: {bp: 60},
  [MOVES.HIDDEN_POWER_FIRE]: {bp: 60},
  [MOVES.HIDDEN_POWER_FLYING]: {bp: 60},
  [MOVES.HIDDEN_POWER_GHOST]: {bp: 60},
  [MOVES.HIDDEN_POWER_GRASS]: {bp: 60},
  [MOVES.HIDDEN_POWER_GROUND]: {bp: 60},
  [MOVES.HIDDEN_POWER_ICE]: {bp: 60},
  [MOVES.HIDDEN_POWER_POISON]: {bp: 60},
  [MOVES.HIDDEN_POWER_PSYCHIC]: {bp: 60},
  [MOVES.HIDDEN_POWER_ROCK]: {bp: 60},
  [MOVES.HIDDEN_POWER_STEEL]: {bp: 60},
  [MOVES.HIDDEN_POWER_WATER]: {bp: 60},
  [MOVES.HURRICANE]: {bp: 110},
  [MOVES.HYDRO_PUMP]: {bp: 110},
  [MOVES.HYPERSPACE_FURY]: {
    bp: 100,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    bypassesProtect: true
  },
  [MOVES.HYPERSPACE_HOLE]: {
    bp: 80,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL,
    bypassesProtect: true
  },
  [MOVES.ICE_BEAM]: {bp: 90},
  [MOVES.INCINERATE]: {bp: 60},
  [MOVES.INFESTATION]: {
    bp: 20,
    type: TYPES.BUG,
    category: CATEGORIES.SPECIAL,
    makesContact: true
  },
  [MOVES.KINGS_SHIELD]: {
    bp: 0,
    type: TYPES.STEEL
  },
  [MOVES.KNOCK_OFF]: {bp: 65},
  [MOVES.LANDS_WRATH]: {
    bp: 90,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL,
    isSpread: true
  },
  [MOVES.LEAF_STORM]: {bp: 130},
  [MOVES.LIGHT_OF_RUIN]: {
    bp: 140,
    type: TYPES.FAIRY,
    category: CATEGORIES.SPECIAL,
    hasRecoil: 50
  },
  [MOVES.LOW_SWEEP]: {bp: 65},
  [MOVES.MAGMA_STORM]: {bp: 100},
  [MOVES.METEOR_MASH]: {bp: 90},
  [MOVES.MOONBLAST]: {
    bp: 95,
    type: TYPES.FAIRY,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.MOONLIGHT]: {type: TYPES.FAIRY},
  [MOVES.MUDDY_WATER]: {bp: 90},
  [MOVES.MYSTICAL_FIRE]: {
    bp: 65,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.NUZZLE]: {
    bp: 20,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true,
    makesContact: true
  },
  [MOVES.OBLIVION_WING]: {
    bp: 80,
    type: TYPES.FLYING,
    category: CATEGORIES.SPECIAL,
    givesHealth: true,
    percentHealed: 0.75
  },
  [MOVES.ORIGIN_PULSE]: {
    bp: 110,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL,
    isSpread: true,
    isPulse: true
  },
  [MOVES.OVERHEAT]: {bp: 130},
  [MOVES.PARABOLIC_CHARGE]: {
    bp: 50,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.SPECIAL,
    givesHealth: true,
    percentHealed: 0.5
  },
  [MOVES.PHANTOM_FORCE]: {
    bp: 90,
    type: TYPES.GHOST,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    bypassesProtect: true
  },
  [MOVES.PIN_MISSILE]: {bp: 25},
  [MOVES.PLAY_ROUGH]: {
    bp: 90,
    type: TYPES.FAIRY,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true
  },
  [MOVES.POWER_GEM]: {bp: 80},
  [MOVES.POWERUP_PUNCH]: {
    bp: 40,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    isPunch: true
  },
  [MOVES.PRECIPICE_BLADES]: {
    bp: 120,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL,
    isSpread: true
  },
  [MOVES.ROCK_TOMB]: {bp: 60},
  [MOVES.SKULL_BASH]: {bp: 130},
  [MOVES.SPIKY_SHIELD]: {
    bp: 0,
    type: TYPES.GRASS
  },
  [MOVES.STEAM_ERUPTION]: {
    bp: 110,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true
  },
  [MOVES.STICKY_WEB]: {
    bp: 0,
    type: TYPES.BUG
  },
  [MOVES.STORM_THROW]: {bp: 60},
  [MOVES.STRUGGLE_BUG]: {bp: 50},
  [MOVES.SURF]: {bp: 90},
  [MOVES.SYNCHRONOISE]: {bp: 120},
  [MOVES.TECHNO_BLAST]: {bp: 120},
  [MOVES.THIEF]: {bp: 60},
  [MOVES.THOUSAND_ARROWS]: {
    bp: 90,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL,
    isSpread: true
  },
  [MOVES.THOUSAND_WAVES]: {
    bp: 90,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL,
    isSpread: true
  },
  [MOVES.THUNDER]: {bp: 110},
  [MOVES.THUNDERBOLT]: {bp: 90},
  [MOVES.WAKEUP_SLAP]: {bp: 70},
  [MOVES.WATER_PLEDGE]: {bp: 80},
  [MOVES.WATER_SHURIKEN]: {
    bp: 15,
    type: TYPES.WATER,
    category: CATEGORIES.PHYSICAL,
    isMultiHit: true
  }
});

const ZMOVES_TYPING = {
  [TYPES.BUG]: [MOVES.SAVAGE_SPINOUT],
  [TYPES.DARK]: [MOVES.BLACK_HOLE_ECLIPSE],
  [TYPES.DRAGON]: [MOVES.DEVASTATING_DRAKE],
  [TYPES.ELECTRIC]: [MOVES.GIGAVOLT_HAVOC],
  [TYPES.FAIRY]: [MOVES.TWINKLE_TACKLE],
  [TYPES.FIGHTING]: [MOVES.ALLOUT_PUMMELING],
  [TYPES.FIRE]: [MOVES.INFERNO_OVERDRIVE],
  [TYPES.FLYING]: [MOVES.SUPERSONIC_SKYSTRIKE],
  [TYPES.GHOST]: [MOVES.NEVERENDING_NIGHTMARE],
  [TYPES.GRASS]: [MOVES.BLOOM_DOOM],
  [TYPES.GROUND]: [MOVES.TECTONIC_RAGE],
  [TYPES.ICE]: [MOVES.SUBZERO_SLAMMER],
  [TYPES.NORMAL]: [MOVES.BREAKNECK_BLITZ],
  [TYPES.POISON]: [MOVES.ACID_DOWNPOUR],
  [TYPES.PSYCHIC]: [MOVES.SHATTERED_PSYCHE],
  [TYPES.ROCK]: [MOVES.CONTINENTAL_CRUSH],
  [TYPES.STEEL]: [MOVES.CORKSCREW_CRASH],
  [TYPES.WATER]: [MOVES.HYDRO_VORTEX]
};

const MOVES_SM = extend({}, MOVES_XY, {
  [MOVES['10000000_VOLT_THUNDERBOLT']]: {
    bp: 195,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.SPECIAL,
    isZ: true
  },
  [MOVES.ACID_DOWNPOUR]: {
    bp: 1,
    type: TYPES.POISON,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.ACID_SPRAY]: {zp: 100},
  [MOVES.ACCELEROCK]: {
    bp: 40,
    type: TYPES.ROCK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasPriority: true,
    zp: 100
  },
  [MOVES.ACROBATICS]: {zp: 100},
  [MOVES.AERIAL_ACE]: {zp: 120},
  [MOVES.AEROBLAST]: {zp: 180},
  [MOVES.AIR_CUTTER]: {zp: 120},
  [MOVES.AIR_SLASH]: {zp: 140},
  [MOVES.ALLOUT_PUMMELING]: {
    bp: 1,
    type: TYPES.FIGHTING,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.ANCHOR_SHOT]: {
    bp: 80,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasSecondaryEffect: true,
    zp: 160
  },
  [MOVES.ANCIENT_POWER]: {zp: 120},
  [MOVES.AQUA_JET]: {zp: 100},
  [MOVES.AQUA_TAIL]: {zp: 175},
  [MOVES.ARM_THRUST]: {zp: 100},
  [MOVES.ASSURANCE]: {zp: 120},
  [MOVES.ASTONISH]: {zp: 100},
  [MOVES.ATTACK_ORDER]: {zp: 175},
  [MOVES.AURA_SPHERE]: {zp: 160},
  [MOVES.AURORA_BEAM]: {zp: 120},
  [MOVES.AVALANCHE]: {zp: 120},
  [MOVES.BEAK_BLAST]: {
    bp: 100,
    type: TYPES.FLYING,
    category: CATEGORIES.PHYSICAL,
    zp: 180,
    isBullet: true
  },
  [MOVES.BELCH]: {zp: 190},
  [MOVES.BITE]: {zp: 120},
  [MOVES.BLACK_HOLE_ECLIPSE]: {
    bp: 1,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.BLAST_BURN]: {zp: 200},
  [MOVES.BLAZE_KICK]: {zp: 160},
  [MOVES.BLIZZARD]: {zp: 185},
  [MOVES.BLOOM_DOOM]: {
    bp: 1,
    type: TYPES.GRASS,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.BLUE_FLARE]: {zp: 195},
  [MOVES.BRAVE_BIRD]: {zp: 190},
  [MOVES.BREAKNECK_BLITZ]: {
    bp: 1,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.BRINE]: {zp: 120},
  [MOVES.BODY_SLAM]: {zp: 160},
  [MOVES.BOLT_STRIKE]: {zp: 195},
  [MOVES.BONE_CLUB]: {zp: 120},
  [MOVES.BONE_RUSH]: {zp: 140},
  [MOVES.BONEMERANG]: {zp: 100},
  [MOVES.BOOMBURST]: {zp: 200},
  [MOVES.BOUNCE]: {zp: 160},
  [MOVES.BRICK_BREAK]: {zp: 140},
  [MOVES.BRUTAL_SWING]: {
    bp: 60,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isSpread: true,
    zp: 120
  },
  [MOVES.BUBBLE_BEAM]: {zp: 120},
  [MOVES.BUG_BITE]: {zp: 120},
  [MOVES.BUG_BUZZ]: {zp: 175},
  [MOVES.BULLDOZE]: {zp: 120},
  [MOVES.BULLET_PUNCH]: {zp: 100},
  [MOVES.BULLET_SEED]: {zp: 140},
  [MOVES.BURN_UP]: {
    bp: 130,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    zp: 195
  },
  [MOVES.CATASTROPIKA]: {
    bp: 210,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.PHYSICAL,
    isZ: true,
    makesContact: true
  },
  [MOVES.CHARGE_BEAM]: {zp: 100},
  [MOVES.CHATTER]: {zp: 120},
  [MOVES.CHIP_AWAY]: {zp: 140},
  [MOVES.CIRCLE_THROW]: {zp: 120},
  [MOVES.CLANGING_SCALES]: {
    bp: 110,
    type: TYPES.DRAGON,
    category: CATEGORIES.SPECIAL,
    isSound: true,
    isSpread: true,
    zp: 185
  },
  [MOVES.CLANGOROUS_SOULBLAZE]: {
    bp: 185,
    type: TYPES.DRAGON,
    category: CATEGORIES.SPECIAL,
    isSound: true,
    isSpread: true,
    isZ: true
  },
  [MOVES.CLEAR_SMOG]: {zp: 100},
  [MOVES.CLOSE_COMBAT]: {zp: 190},
  [MOVES.CONTINENTAL_CRUSH]: {
    bp: 1,
    type: TYPES.ROCK,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.CORE_ENFORCER]: {
    bp: 100,
    type: TYPES.DRAGON,
    category: CATEGORIES.SPECIAL,
    isSpread: true,
    zp: 140
  },
  [MOVES.CORKSCREW_CRASH]: {
    bp: 1,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.COVET]: {zp: 120},
  [MOVES.CRABHAMMER]: {zp: 180},
  [MOVES.CROSS_CHOP]: {zp: 180},
  [MOVES.CROSS_POISON]: {zp: 140},
  [MOVES.CRUNCH]: {zp: 160},
  [MOVES.CRUSH_CLAW]: {zp: 140},
  [MOVES.DARK_PULSE]: {zp: 160},
  [MOVES.DARKEST_LARIAT]: {
    bp: 85,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    zp: 160
  },
  [MOVES.DAZZLING_GLEAM]: {zp: 160},
  [MOVES.DIAMOND_STORM]: {zp: 180},
  [MOVES.DIG]: {zp: 160},
  [MOVES.DISCHARGE]: {zp: 160},
  [MOVES.DIVE]: {zp: 160},
  [MOVES.DRAGON_HAMMER]: {
    bp: 90,
    type: TYPES.DRAGON,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    zp: 175
  },
  [MOVES.DRAINING_KISS]: {zp: 100},
  [MOVES.DRILL_PECK]: {zp: 160},
  [MOVES.DEVASTATING_DRAKE]: {
    bp: 1,
    type: TYPES.DRAGON,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.DOOM_DESIRE]: {zp: 200},
  [MOVES.DOUBLEEDGE]: {zp: 190},
  [MOVES.DOUBLE_HIT]: {zp: 140},
  [MOVES.DOUBLE_KICK]: {zp: 100},
  [MOVES.DRACO_METEOR]: {zp: 195},
  [MOVES.DRAGON_ASCENT]: {zp: 190},
  [MOVES.DRAGON_CLAW]: {zp: 160},
  [MOVES.DRAGON_PULSE]: {zp: 160},
  [MOVES.DRAGON_RUSH]: {zp: 180},
  [MOVES.DRAGON_TAIL]: {zp: 120},
  [MOVES.DRAIN_PUNCH]: {zp: 140},
  [MOVES.DREAM_EATER]: {zp: 180},
  [MOVES.DRILL_RUN]: {zp: 160},
  [MOVES.DUAL_CHOP]: {zp: 100},
  [MOVES.DYNAMIC_PUNCH]: {zp: 180},
  [MOVES.EARTH_POWER]: {zp: 175},
  [MOVES.EARTHQUAKE]: {zp: 180},
  [MOVES.ELECTRO_BALL]: {zp: 160},
  [MOVES.ELECTROWEB]: {zp: 100},
  [MOVES.ENDEAVOR]: {zp: 160},
  [MOVES.ENERGY_BALL]: {zp: 175},
  [MOVES.ERUPTION]: {zp: 200},
  [MOVES.EXPLOSION]: {zp: 200},
  [MOVES.EXTRASENSORY]: {zp: 160},
  [MOVES.EXTREME_SPEED]: {zp: 160},
  [MOVES.FAKE_OUT]: {zp: 100},
  [MOVES.FACADE]: {zp: 140},
  [MOVES.FEINT]: {zp: 100},
  [MOVES.FEINT_ATTACK]: {zp: 120},
  [MOVES.FELL_STINGER]: {bp: 50, zp: 100},
  [MOVES.FIERY_DANCE]: {zp: 160},
  [MOVES.FINAL_GAMBIT]: {zp: 180},
  [MOVES.FIRE_BLAST]: {zp: 185},
  [MOVES.FIRE_FANG]: {zp: 120},
  [MOVES.FIRE_LASH]: {
    bp: 80,
    type: TYPES.FIRE,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true,
    makesContact: true,
    zp: 160
  },
  [MOVES.FIRE_PLEDGE]: {zp: 160},
  [MOVES.FIRE_PUNCH]: {zp: 140},
  [MOVES.FIRE_SPIN]: {zp: 100},
  [MOVES.FIRST_IMPRESSION]: {
    bp: 90,
    type: TYPES.BUG,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    hasPriority: true,
    zp: 175
  },
  [MOVES.FLAIL]: {zp: 160},
  [MOVES.FLAMETHROWER]: {zp: 175},
  [MOVES.FLAME_BURST]: {zp: 140},
  [MOVES.FLAME_CHARGE]: {zp: 100},
  [MOVES.FLAME_WHEEL]: {zp: 120},
  [MOVES.FLARE_BLITZ]: {zp: 190},
  [MOVES.FLASH_CANNON]: {zp: 160},
  [MOVES.FLEUR_CANNON]: {
    bp: 130,
    type: TYPES.FAIRY,
    category: CATEGORIES.SPECIAL,
    hasSecondaryEffect: true,
    zp: 195,
    dropsStats: 2
  },
  [MOVES.FLING]: {zp: 100},
  [MOVES.FLY]: {zp: 175},
  [MOVES.FLYING_PRESS]: {bp: 100, zp: 170},
  [MOVES.FOCUS_BLAST]: {zp: 190},
  [MOVES.FOCUS_PUNCH]: {zp: 200},
  [MOVES.FORCE_PALM]: {zp: 120},
  [MOVES.FOUL_PLAY]: {zp: 175},
  [MOVES.FREEZE_SHOCK]: {zp: 200},
  [MOVES.FREEZEDRY]: {zp: 140},
  [MOVES.FRENZY_PLANT]: {zp: 200},
  [MOVES.FROST_BREATH]: {zp: 120},
  [MOVES.FRUSTRATION]: {zp: 160},
  [MOVES.FURY_SWIPES]: {zp: 100},
  [MOVES.FUSION_BOLT]: {zp: 180},
  [MOVES.FUSION_FLARE]: {zp: 180},
  [MOVES.FUTURE_SIGHT]: {zp: 190},
  [MOVES.GEAR_GRIND]: {zp: 180},
  [MOVES.GENESIS_SUPERNOVA]: {
    bp: 185,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL,
    isZ: true
  },
  [MOVES.GIGA_DRAIN]: {zp: 140},
  [MOVES.GIGA_IMPACT]: {zp: 200},
  [MOVES.GIGAVOLT_HAVOC]: {
    bp: 1,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.GLACIATE]: {zp: 120},
  [MOVES.GRASS_KNOT]: {zp: 160},
  [MOVES.GRASS_PLEDGE]: {zp: 160},
  [MOVES.GUNK_SHOT]: {zp: 190},
  [MOVES.GUST]: {zp: 100},
  [MOVES.GUARDIAN_OF_ALOLA]: {
    bp: 1,
    type: TYPES.FAIRY,
    category: CATEGORIES.SPECIAL,
    isZ: true
  },
  [MOVES.GYRO_BALL]: {zp: 160},
  [MOVES.HAMMER_ARM]: {zp: 180},
  [MOVES.HEADBUTT]: {zp: 140},
  [MOVES.HEAD_CHARGE]: {zp: 190},
  [MOVES.HEAD_SMASH]: {zp: 200},
  [MOVES.HEART_STAMP]: {zp: 120},
  [MOVES.HEAT_WAVE]: {zp: 175},
  [MOVES.HEAVY_SLAM]: {zp: 160},
  [MOVES.HEX]: {zp: 160},
  [MOVES.HIDDEN_POWER_BUG]: {zp: 120},
  [MOVES.HIDDEN_POWER_DARK]: {zp: 120},
  [MOVES.HIDDEN_POWER_DRAGON]: {zp: 120},
  [MOVES.HIDDEN_POWER_ELECTRIC]: {zp: 120},
  [MOVES.HIDDEN_POWER_FIGHTING]: {zp: 120},
  [MOVES.HIDDEN_POWER_FIRE]: {zp: 120},
  [MOVES.HIDDEN_POWER_FLYING]: {zp: 120},
  [MOVES.HIDDEN_POWER_GHOST]: {zp: 120},
  [MOVES.HIDDEN_POWER_GRASS]: {zp: 120},
  [MOVES.HIDDEN_POWER_GROUND]: {zp: 120},
  [MOVES.HIDDEN_POWER_ICE]: {zp: 120},
  [MOVES.HIDDEN_POWER_POISON]: {zp: 120},
  [MOVES.HIDDEN_POWER_PSYCHIC]: {zp: 120},
  [MOVES.HIDDEN_POWER_ROCK]: {zp: 120},
  [MOVES.HIDDEN_POWER_STEEL]: {zp: 120},
  [MOVES.HIDDEN_POWER_WATER]: {zp: 120},
  [MOVES.HIGH_HORSEPOWER]: {
    bp: 95,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    zp: 175
  },
  [MOVES.HIGH_JUMP_KICK]: {zp: 195},
  [MOVES.HORN_LEECH]: {zp: 140},
  [MOVES.HURRICANE]: {zp: 185},
  [MOVES.HYDRO_CANNON]: {zp: 200},
  [MOVES.HYDRO_PUMP]: {zp: 185},
  [MOVES.HYDRO_VORTEX]: {
    bp: 1,
    type: TYPES.WATER,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.HYPER_BEAM]: {zp: 200},
  [MOVES.HYPER_VOICE]: {zp: 175},
  [MOVES.HYPERSPACE_FURY]: {zp: 180},
  [MOVES.HYPERSPACE_HOLE]: {zp: 160},
  [MOVES.ICE_BEAM]: {zp: 175},
  [MOVES.ICE_BURN]: {zp: 200},
  [MOVES.ICE_FANG]: {zp: 120},
  [MOVES.ICE_HAMMER]: {
    bp: 100,
    type: TYPES.ICE,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isPunch: true,
    zp: 180
  },
  [MOVES.ICE_PUNCH]: {zp: 140},
  [MOVES.ICE_SHARD]: {zp: 100},
  [MOVES.ICICLE_CRASH]: {zp: 160},
  [MOVES.ICICLE_SPEAR]: {zp: 140},
  [MOVES.ICY_WIND]: {zp: 100},
  [MOVES.INCINERATE]: {zp: 120},
  [MOVES.INFERNO]: {zp: 180},
  [MOVES.INFERNO_OVERDRIVE]: {
    bp: 1,
    type: TYPES.FIRE,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.INFESTATION]: {zp: 100},
  [MOVES.IRON_HEAD]: {zp: 160},
  [MOVES.IRON_TAIL]: {zp: 180},
  [MOVES.JUDGMENT]: {zp: 180},
  [MOVES.JUMP_KICK]: {zp: 180},
  [MOVES.KNOCK_OFF]: {zp: 120},
  [MOVES.LANDS_WRATH]: {zp: 185},
  [MOVES.LAST_RESORT]: {zp: 200},
  [MOVES.LAVA_PLUME]: {zp: 160},
  [MOVES.LEAFAGE]: {
    bp: 40,
    type: TYPES.GRASS,
    category: CATEGORIES.PHYSICAL,
    zp: 100
  },
  [MOVES.LEAF_BLADE]: {zp: 175},
  [MOVES.LEAF_STORM]: {zp: 195},
  [MOVES.LEAF_TORNADO]: {zp: 120},
  [MOVES.LEECH_LIFE]: {bp: 80, zp: 160},
  [MOVES.LETS_SNUGGLE_FOREVER]: {
    bp: 190,
    type: TYPES.FAIRY,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isZ: true
  },
  [MOVES.LIGHT_OF_RUIN]: {zp: 200},
  [MOVES.LIGHT_THAT_BURNS_THE_SKY]: {
    bp: 200,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL,
    usesHighestAttackStat: true,
    isZ: true
  },
  [MOVES.LIQUIDATION]: {
    bp: 85,
    type: TYPES.WATER,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true,
    makesContact: true,
    zp: 160
  },
  [MOVES.LOW_KICK]: {zp: 160},
  [MOVES.LOW_SWEEP]: {zp: 120},
  [MOVES.LUNGE]: {
    bp: 80,
    type: TYPES.BUG,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true,
    makesContact: true,
    zp: 160
  },
  [MOVES.LUSTER_PURGE]: {zp: 140},
  [MOVES.MACH_PUNCH]: {zp: 100},
  [MOVES.MAGICAL_LEAF]: {zp: 120},
  [MOVES.MAGMA_STORM]: {zp: 180},
  [MOVES.MAGNET_BOMB]: {zp: 120},
  [MOVES.MALICIOUS_MOONSAULT]: {
    bp: 180,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isZ: true
  },
  [MOVES.MEGAHORN]: {zp: 190},
  [MOVES.MENACING_MOONRAZE_MAELSTROM]: {
    bp: 200,
    type: TYPES.GHOST,
    category: CATEGORIES.SPECIAL,
    isZ: true
  },
  [MOVES.METAL_CLAW]: {zp: 100},
  [MOVES.METEOR_MASH]: {zp: 175},
  [MOVES.MIND_BLOWN]: {
    bp: 150,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    isSpread: true,
    hasRecoil: true,
    zp: 200
  },
  [MOVES.MIRROR_SHOT]: {zp: 120},
  [MOVES.MIST_BALL]: {zp: 140},
  [MOVES.MOONBLAST]: {zp: 175},
  [MOVES.MOONGEIST_BEAM]: {
    bp: 100,
    type: TYPES.GHOST,
    category: CATEGORIES.SPECIAL,
    zp: 180
  },
  [MOVES.MUDDY_WATER]: {zp: 175},
  [MOVES.MUD_BOMB]: {zp: 120},
  [MOVES.MUD_SHOT]: {zp: 100},
  [MOVES.MULTIATTACK]: {
    bp: 90,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    zp: 185
  },
  [MOVES.MYSTICAL_FIRE]: {bp: 75, zp: 140},
  [MOVES.NATURAL_GIFT]: {zp: 160},
  [MOVES.NATURES_MADNESS]: {
    bp: 1,
    type: TYPES.FAIRY,
    category: CATEGORIES.SPECIAL,
    zp: 100
  },
  [MOVES.NEEDLE_ARM]: {zp: 120},
  [MOVES.NEVERENDING_NIGHTMARE]: {
    bp: 1,
    type: TYPES.GHOST,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.NIGHT_DAZE]: {zp: 160},
  [MOVES.NIGHT_SHADE]: {zp: 100},
  [MOVES.NIGHT_SLASH]: {zp: 140},
  [MOVES.NUZZLE]: {zp: 100},
  [MOVES.OBLIVION_WING]: {zp: 160},
  [MOVES.OCEANIC_OPERETTA]: {
    bp: 195,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL,
    isZ: true
  },
  [MOVES.OMINOUS_WIND]: {zp: 120},
  [MOVES.ORIGIN_PULSE]: {zp: 185},
  [MOVES.OUTRAGE]: {zp: 190},
  [MOVES.OVERHEAT]: {zp: 195},
  [MOVES.PALEO_WAVE]: {zp: 160},
  [MOVES.PARABOLIC_CHARGE]: {bp: 65, zp: 120},
  [MOVES.PAYBACK]: {zp: 100},
  [MOVES.PETAL_DANCE]: {zp: 190},
  [MOVES.PHANTOM_FORCE]: {zp: 175},
  [MOVES.PHOTON_GEYSER]: {
    bp: 100,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL,
    usesHighestAttackStat: true,
    zp: 180
  },
  [MOVES.PIN_MISSILE]: {zp: 140},
  [MOVES.PLASMA_FISTS]: {
    bp: 100,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isPunch: true,
    zp: 180
  },
  [MOVES.PLAY_ROUGH]: {zp: 175},
  [MOVES.PLUCK]: {zp: 120},
  [MOVES.POISON_FANG]: {zp: 100},
  [MOVES.POISON_JAB]: {zp: 160},
  [MOVES.POISON_TAIL]: {zp: 100},
  [MOVES.POLLEN_PUFF]: {
    bp: 90,
    type: TYPES.BUG,
    category: CATEGORIES.SPECIAL,
    isBullet: true,
    zp: 175
  },
  [MOVES.POWER_GEM]: {zp: 160},
  [MOVES.POWER_TRIP]: {
    bp: 20,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    zp: 160
  },
  [MOVES.POWER_WHIP]: {zp: 190},
  [MOVES.POWERUP_PUNCH]: {zp: 100},
  [MOVES.PRISMATIC_LASER]: {
    bp: 160,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.SPECIAL,
    zp: 200
  },
  [MOVES.PRECIPICE_BLADES]: {zp: 190},
  [MOVES.PSYCHIC]: {zp: 175},
  [MOVES.PSYCHIC_FANGS]: {
    bp: 85,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isBite: true,
    zp: 160
  },
  [MOVES.PSYCHO_BOOST]: {zp: 200},
  [MOVES.PSYCHO_CUT]: {zp: 140},
  [MOVES.PSYSHOCK]: {zp: 160},
  [MOVES.PSYSTRIKE]: {zp: 180},
  [MOVES.PULVERIZING_PANCAKE]: {
    bp: 210,
    type: TYPES.NORMAL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isZ: true
  },
  [MOVES.PUNISHMENT]: {zp: 160},
  [MOVES.PURSUIT]: {zp: 100},
  [MOVES.QUICK_ATTACK]: {zp: 100},
  [MOVES.RAPID_SPIN]: {zp: 100},
  [MOVES.RAZOR_LEAF]: {zp: 120},
  [MOVES.RAZOR_SHELL]: {zp: 140},
  [MOVES.RELIC_SONG]: {zp: 140},
  [MOVES.RETALIATE]: {zp: 140},
  [MOVES.RETURN]: {zp: 160},
  [MOVES.REVELATION_DANCE]: {
    bp: 90,
    type: TYPES.NORMAL,
    category: CATEGORIES.SPECIAL,
    zp: 175
  },
  [MOVES.REVENGE]: {zp: 120},
  [MOVES.REVERSAL]: {zp: 160},
  [MOVES.ROAR_OF_TIME]: {zp: 200},
  [MOVES.ROCK_BLAST]: {isBullet: true, zp: 140},
  [MOVES.ROCK_CLIMB]: {zp: 175},
  [MOVES.ROCK_SLIDE]: {zp: 140},
  [MOVES.ROCK_SMASH]: {zp: 100},
  [MOVES.ROCK_THROW]: {zp: 100},
  [MOVES.ROCK_TOMB]: {zp: 140},
  [MOVES.ROCK_WRECKER]: {zp: 200},
  [MOVES.ROUND]: {zp: 120},
  [MOVES.SACRED_FIRE]: {zp: 180},
  [MOVES.SACRED_SWORD]: {zp: 175},
  [MOVES.SAND_TOMB]: {zp: 100},
  [MOVES.SAVAGE_SPINOUT]: {
    bp: 1,
    type: TYPES.BUG,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.SCALD]: {zp: 160},
  [MOVES.SEARING_SHOT]: {zp: 180},
  [MOVES.SEARING_SUNRAZE_SMASH]: {
    bp: 200,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    isZ: true
  },
  [MOVES.SECRET_POWER]: {zp: 140},
  [MOVES.SECRET_SWORD]: {zp: 160},
  [MOVES.SEED_BOMB]: {zp: 160},
  [MOVES.SEED_FLARE]: {zp: 190},
  [MOVES.SEISMIC_TOSS]: {zp: 100},
  [MOVES.SELFDESTRUCT]: {zp: 200},
  [MOVES.SHADOW_CLAW]: {zp: 140},
  [MOVES.SHADOW_FORCE]: {zp: 190},
  [MOVES.SHADOW_SNEAK]: {zp: 100},
  [MOVES.SHADOW_STRIKE]: {zp: 160},
  [MOVES.SHATTERED_PSYCHE]: {
    bp: 1,
    type: TYPES.PSYCHIC,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.SHADOW_BALL]: {zp: 160},
  [MOVES.SHADOW_BONE]: {
    bp: 85,
    type: TYPES.GHOST,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true,
    zp: 160
  },
  [MOVES.SHADOW_PUNCH]: {zp: 120},
  [MOVES.SHEER_COLD]: {zp: 180},
  [MOVES.SHELL_TRAP]: {
    bp: 150,
    type: TYPES.FIRE,
    category: CATEGORIES.SPECIAL,
    isSpread: true,
    zp: 200
  },
  [MOVES.SHOCK_WAVE]: {zp: 120},
  [MOVES.SIGNAL_BEAM]: {zp: 140},
  [MOVES.SILVER_WIND]: {zp: 120},
  [MOVES.SINISTER_ARROW_RAID]: {
    bp: 180,
    type: TYPES.GHOST,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.SKULL_BASH]: {zp: 195},
  [MOVES.SKY_ATTACK]: {zp: 200},
  [MOVES.SKY_DROP]: {zp: 120},
  [MOVES.SKY_UPPERCUT]: {zp: 160},
  [MOVES.SLASH]: {zp: 140},
  [MOVES.SLUDGE]: {zp: 120},
  [MOVES.SLUDGE_BOMB]: {zp: 175},
  [MOVES.SLUDGE_WAVE]: {zp: 175},
  [MOVES.SMACK_DOWN]: {zp: 100},
  [MOVES.SMART_STRIKE]: {
    bp: 70,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    zp: 140
  },
  [MOVES.SNARL]: {zp: 100},
  [MOVES.SOLAR_BEAM]: {zp: 190},
  [MOVES.SOLAR_BLADE]: {
    bp: 125,
    type: TYPES.GRASS,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    zp: 190
  },
  [MOVES.SOULSTEALING_7STAR_STRIKE]: {
    bp: 195,
    type: TYPES.GHOST,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.SPACIAL_REND]: {zp: 180},
  [MOVES.SPARK]: {zp: 120},
  [MOVES.SPARKLING_ARIA]: {
    bp: 90,
    type: TYPES.WATER,
    category: CATEGORIES.SPECIAL,
    isSound: true,
    isSpread: true,
    zp: 175
  },
  [MOVES.SPECTRAL_THIEF]: {
    bp: 90,
    type: TYPES.GHOST,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    zp: 175
  },
  [MOVES.SPIRIT_SHACKLE]: {
    bp: 80,
    type: TYPES.GHOST,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true,
    zp: 160
  },
  [MOVES.SPLINTERED_STORMSHARDS]: {
    bp: 190,
    type: TYPES.ROCK,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.STEAM_ERUPTION]: {zp: 185},
  [MOVES.STEAMROLLER]: {zp: 120},
  [MOVES.STEEL_WING]: {zp: 140},
  [MOVES.STOKED_SPARKSURFER]: {
    bp: 175,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.SPECIAL,
    isZ: true
  },
  [MOVES.STOMPING_TANTRUM]: {
    bp: 75,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    zp: 140
  },
  [MOVES.STONE_EDGE]: {zp: 180},
  [MOVES.STORED_POWER]: {zp: 160},
  [MOVES.STORM_THROW]: {zp: 120},
  [MOVES.STRUGGLE_BUG]: {zp: 100},
  [MOVES.SUBMISSION]: {zp: 160},
  [MOVES.SUBZERO_SLAMMER]: {
    bp: 1,
    type: TYPES.ICE,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.SUCKER_PUNCH]: {bp: 70, zp: 140},
  [MOVES.SUNSTEEL_STRIKE]: {
    bp: 100,
    type: TYPES.STEEL,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    zp: 180
  },
  [MOVES.SUPER_FANG]: {zp: 100},
  [MOVES.SUPERPOWER]: {zp: 190},
  [MOVES.SUPERSONIC_SKYSTRIKE]: {
    bp: 1,
    type: TYPES.FLYING,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.SURF]: {zp: 175},
  [MOVES.SWIFT]: {zp: 120},
  [MOVES.SYNCHRONOISE]: {zp: 190},
  [MOVES.TACKLE]: {bp: 40, zp: 100},
  [MOVES.TAKE_DOWN]: {zp: 160},
  [MOVES.TAIL_SLAP]: {zp: 140},
  [MOVES.TECHNO_BLAST]: {zp: 190},
  [MOVES.TECTONIC_RAGE]: {
    bp: 1,
    type: TYPES.GROUND,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.THIEF]: {zp: 120},
  [MOVES.THOUSAND_ARROWS]: {zp: 180},
  [MOVES.THOUSAND_WAVES]: {zp: 175},
  [MOVES.THRASH]: {zp: 190},
  [MOVES.THROAT_CHOP]: {
    bp: 80,
    type: TYPES.DARK,
    category: CATEGORIES.PHYSICAL,
    makesContact: true,
    zp: 160
  },
  [MOVES.THUNDER]: {zp: 185},
  [MOVES.THUNDERBOLT]: {zp: 175},
  [MOVES.THUNDER_FANG]: {zp: 120},
  [MOVES.THUNDER_PUNCH]: {zp: 140},
  [MOVES.TRI_ATTACK]: {zp: 160},
  [MOVES.TROP_KICK]: {
    bp: 70,
    type: TYPES.GRASS,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true,
    makesContact: true,
    zp: 140
  },
  [MOVES.TWINEEDLE]: {zp: 100},
  [MOVES.TWINKLE_TACKLE]: {
    bp: 1,
    type: TYPES.FAIRY,
    category: CATEGORIES.PHYSICAL,
    isZ: true
  },
  [MOVES.UTURN]: {zp: 140},
  [MOVES.UPROAR]: {zp: 175},
  [MOVES.VCREATE]: {zp: 220},
  [MOVES.VACUUM_WAVE]: {zp: 100},
  [MOVES.VENOSHOCK]: {zp: 120},
  [MOVES.VOLT_SWITCH]: {zp: 140},
  [MOVES.VOLT_TACKLE]: {zp: 190},
  [MOVES.WAKEUP_SLAP]: {zp: 140},
  [MOVES.WATERFALL]: {zp: 160},
  [MOVES.WATER_PLEDGE]: {zp: 160},
  [MOVES.WATER_PULSE]: {zp: 120},
  [MOVES.WATER_SHURIKEN]: {category: CATEGORIES.SPECIAL, zp: 100},
  [MOVES.WATER_SPOUT]: {zp: 200},
  [MOVES.WEATHER_BALL]: {zp: 160},
  [MOVES.WHIRLPOOL]: {zp: 100},
  [MOVES.WILD_CHARGE]: {zp: 175},
  [MOVES.WING_ATTACK]: {zp: 120},
  [MOVES.WOOD_HAMMER]: {zp: 190},
  [MOVES.WRING_OUT]: {zp: 190},
  [MOVES.XSCISSOR]: {zp: 160},
  [MOVES.ZAP_CANNON]: {zp: 190},
  [MOVES.ZEN_HEADBUTT]: {zp: 160},
  [MOVES.ZING_ZAP]: {
    bp: 80,
    type: TYPES.ELECTRIC,
    category: CATEGORIES.PHYSICAL,
    hasSecondaryEffect: true,
    makesContact: true,
    zp: 160
  }
});

export {CATEGORIES, ZMOVES_TYPING, MOVES_RBY, MOVES_GSC, MOVES_ADV, MOVES_DPP, MOVES_BW, MOVES_XY, MOVES_SM};
