console.log("connected")[
  ({
    character: {
      id: "1",
      name: "Jett",
      role: "Duelist",
      description:
        "Jett is an agile and evasive fighter, able to outmaneuver opponents and strike with deadly precision.",
      abilities: [
        {
          name: "Cloudburst",
          description:
            "Throw out a cloud of fog that obscures vision for 4.5 seconds. Left-click to curve the smoke in the direction of your crosshair.",
        },
        {
          name: "Updraft",
          description: "After a brief wind up, propel yourself upwards.",
        },
        {
          name: "Tailwind",
          description: "Dash a short distance in the direction you are moving.",
        },
        {
          name: "Blade Storm",
          description:
            "Equip a set of highly accurate throwing knives that deal moderate damage and kill on headshots. Scoring a kill restores all daggers.",
        },
      ],
      src: "https://example.com/images/jett.png",
    },
  },
  {
    character: {
      id: "2",
      name: "Phoenix",
      role: "Duelist",
      description:
        "Phoenix is a self-sufficient duelist with a versatile toolkit, able to heal himself and control the battlefield with fire.",
      abilities: [
        {
          name: "Curveball",
          description:
            "Throw a flare orb that curves left or right, blinding any player who sees it.",
        },
        {
          name: "Hot Hands",
          description:
            "Throw a fireball that explodes after a delay or upon impact, dealing damage to enemies and healing you.",
        },
        {
          name: "Blaze",
          description:
            "Cast a flame wall that blocks vision and damages anyone passing through it. You can bend the wall when casting by turning while holding fire.",
        },
        {
          name: "Run It Back",
          description:
            "Mark your current location. If you die during this ability's duration, you will be reborn at the marked location with full health.",
        },
      ],
      src: "https://example.com/images/phoenix.png",
    },
  },
  {
    character: {
      id: "3",
      name: "Sage",
      role: "Sentinel",
      description:
        "Sage is a healer and defender, able to revive allies and create barriers to block enemy movement.",
      abilities: [
        {
          name: "Barrier Orb",
          description:
            "Conjure a large solid wall. Right-click to rotate the wall before casting.",
        },
        {
          name: "Slow Orb",
          description:
            "Cast out a radianite orb that breaks into a slowing field upon impact with the ground.",
        },
        {
          name: "Healing Orb",
          description:
            "Heal an ally or yourself to full health over a few seconds.",
        },
        {
          name: "Resurrection",
          description:
            "Target a friendly corpse. After a short delay, revive them with full health.",
        },
      ],
      src: "https://example.com/images/sage.png",
    },
  },
  {
    character: {
      id: "4",
      name: "Sova",
      role: "Initiator",
      description:
        "Sova is a master archer who can reveal enemy positions and eliminate them with deadly precision.",
      abilities: [
        {
          name: "Shock Bolt",
          description:
            "Fire an explosive bolt that emits a damaging pulse of static energy upon impact.",
        },
        {
          name: "Recon Bolt",
          description:
            "Fire a bolt that deploys a sonar emitter, revealing the location of nearby enemies.",
        },
        {
          name: "Owl Drone",
          description:
            "Deploy a pilotable drone that can fire a dart that will reveal enemies who are hit.",
        },
        {
          name: "Hunter's Fury",
          description:
            "Fire up to three deadly energy blasts that spear across the entire map. Each hit enemy takes heavy damage and is marked.",
        },
      ],
      src: "https://example.com/images/sova.png",
    },
  },
  {
    character: {
      id: "5",
      name: "Viper",
      role: "Controller",
      description:
        "Viper uses poisonous gas to control the battlefield, making it difficult for enemies to navigate and fight.",
      abilities: [
        {
          name: "Snake Bite",
          description:
            "Fire a projectile that explodes into a pool of damaging acid.",
        },
        {
          name: "Poison Cloud",
          description:
            "Throw a gas emitter that you can reactivate to create a toxic cloud at the cost of fuel.",
        },
        {
          name: "Toxic Screen",
          description:
            "Deploy a long line of gas emitters that you can reactivate to create a tall wall of toxic gas at the cost of fuel.",
        },
        {
          name: "Viper's Pit",
          description:
            "Create a large toxic cloud in a big area that lasts as long as Viper stays inside the cloud.",
        },
      ],
      src: "https://example.com/images/viper.png",
    },
  })
];
