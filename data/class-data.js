export default [
    {
        id: 'dada',
        title: 'Defense Against the Dark Arts',
        map: {},
        image: '../assets/dada.jpg',
        description: `Today's lesson with Professor Lupin is about boggarts!

        Boggarts are shape-shifting creatures that take on the form of its observer's worst fear.
        
        To banish a boggart, you must face your worst fear and imagine it as something less-threatening, even comical. If you are able to laugh at the Boggart while casting the Boggart-Banishing Spell, it will retreat.
        
        It's your turn. You face the boggart and see your worst fear: a werewolf!
        
        What do you do?`,
        choices: [{
            id: 'run',
            description: 'Scream and run away',
            result: `You did the exact opposite of the instructions and now as a result will have nightmares for the next few weeks. You take 20 mental health damage and lose 10 house points.`,
            health: -20,
            points: -10,
        }, {
            id: 'wrong-spell',
            description: `Imagine the werewolf as a dog and say the spell: "Glisseo!"`,
            result: `You used the wrong spell and were not able to successfully banish the boggart. Luckily Professor Lupin stepped in to help. You lose 10 house points.`,
            health: 0,
            points: -10,
        }, {
            id: 'right-spell',
            description: `Imagine the werewolf as a small squeaky baby toy and say the spell: "Riddikulus!"`,
            result: `You successfully banished the boggart! You have earned 50 house points. Keep it up!`,
            health: 0,
            points: 50
        }]
    },
    {
        id: 'flying-lesson',
        title: 'Flying Lesson',
        map: {},
        image: '../assets/flying.jpg',
        description: `Welcome to your first flying lesson!

        Madame Hooch has instructed you to mount your broom and gently kick off from the ground. You will hover no more than 10 feet above the ground before touching back down and dismounting.
        
        Ready? What do you do?`,
        choices: [{
            id: 'follow-directions',
            description: `Mount your broom, kick off gently, hover above the ground a little unsteadily, and touch down as directed.`,
            results: `You followed the directions and successfully rode your first broom! Congratulations! You have earned 50 house points!`,
            health: 0,
            points: 50
        }, {
            id: 'show-off',
            description: `Mount your broom, kick off gently, and hover above the ground as directed. Everyone is impressed at your natural flying ability, so to show off you take a lap once around the field and once around Madame Hooch.`,
            results: `You didn't follow the rules and Madame Hooch is furious! You have lost 10 house points. However, she is impressed with your ability. You are now the newest member of the ${house} Quidditch Team!`,
            health: 0,
            points: -10
        }, {
            id: 'crash',
            description: `Mount your broom, fiercely kick off from the ground, and shoot up into the air. You are unable to control your broom but you try your best to turn around and land. You lose control completely and come crashing to the ground.`,
            results: `You wake up the next morning in the Hospital Wing. Better be more careful next time! You take 40 health damage and lose 10 house points.`,
            health: -40,
            points: -10
        }]
    }, {
        id: 'potions',
        title: 'Potions Class',
        map: {},
        image: '../assets/potions.jpg',
        description: `Welcome to Potions with Professor Snape!

            We will be creating a Sleeping Draught that's simple, but powerful. Be careful to only add 4 sprigs of lavender. Any more could knock the drinker out for an entire week. Also be sure to crush the wormwood before adding. If you mince it, severe nausea will ensue.

            Ready? What will you do?`,
        choices: [{
            id: 'wormwood',
            description: `Carefully brew the potion while sort of following the instructions. These pieces of wormwood look a little thick -- you hope you minced them well enough...`,
            result: `You try your potion and immediately have to throw up. The nausea doesn't subside for the rest of the day. You didn't crush your wormwood! You take 30 health damage and lose 10 house points.`,
            health: -30,
            points: -10
        }, {
            id: 'lavender',
            description: `You forgot to take notes during the lecture and you spilled some pumpkin juice all over your potions book this morning. You do the best you can from memory.`,
            result: `You added too much lavender! You wake up a week later in the hospital wing. You take 40 health damage and lose 10 house points.`,
            health: -40,
            points: -10
        }, {
            id: 'perfect',
            description: `Carefully brew the potion while following the instructions as closely as possible. Your potion ends up a beautiful deep purple hue.`,
            result: `It's perfect! You try your potion and sleep for the expected amount of time, waking up feeling refreshed. You gain 20 health and 50 house points! Top of the class!`,
            health: 20,
            points: 50
        }]
    }];