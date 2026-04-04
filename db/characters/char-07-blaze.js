/**
 * Character 07 — Blaze (Lucas Santos)
 * Former demolitions specialist, São Paulo military police.
 * Running from grief at full speed.
 */

const template = {
  id: 'blaze',
  name: 'Lucas Santos',
  callsign: 'Blaze',
  nationality: 'Brazilian',
  personality: ['reckless', 'loud', 'loyal', 'emotional'],
  motivation: 'If I stop moving, the past catches up',
  portrait_sprite: 'xcom1',
  background: 'Former demolitions specialist from São Paulo military police. Adrenaline junkie with a death wish — or so everyone thinks. His younger sister died in a building collapse he was supposed to prevent. Loudest person in any room, quietest person at 3am.'
};

// ── Chapters (50) ───────────────────────────────────────────────────

const chapters = [
  // ── SURFACE (1-10) ──────────────────────────────────────────────
  {
    chapter_num: 1,
    tier: 'surface',
    title: 'Arrival',
    unlock_type: 'missions',
    unlock_value: { min: 0 },
    content: `What Lucas Santos carries:

A bag slung over one shoulder. A cheap plastic lighter — his father's, the kind you buy at a gas station. He doesn't smoke. He carries it to watch the flame. Inside the bag, beyond the clothes: a mobile phone, prepaid, registered to a name that isn't his. He sends a message on it every Sunday. The number hasn't been active in two years. He knows this.

The real list:

He carries São Paulo, and a specific building in São Paulo, and a detonation timer in that building that he was supposed to inspect and didn't, because it was a Saturday, and there was a party, and he was twenty-six years old and the party seemed important at the time. He carries six hours — the gap between the timer and himself. He carries fourteen names. He carries Ana Santos, twenty-three years old, his younger sister, who was on the third floor when the building came down. He carries the specific arithmetic of six hours: if he had gone at hour one, he would have found the fault. If he had gone at hour three. At hour five. At any hour that was not the one he chose. He carries the grin as armor — wide, automatic, deployed before anyone can look at his eyes closely enough to see what's underneath. He carries the principle that if you never stop, the past can't catch you, and he has been testing this principle at high speed for five years.

He comes off the transport talking. Before anyone asks, he's already introduced himself.

"Santos, Lucas. Callsign Blaze. Demo specialist. Don't put me near anything you want to keep standing."

Nobody laughs. He grins anyway. That's the trick.

He sends the message Sunday: "Still here. Still loud. You'd hate it."

The number is inactive. The phone doesn't tell him this. He already knows. He sends it anyway, because the alternative — the silence, the not-sending, the acknowledgment that nobody is on the other end — is a thing he is not ready to survive yet.

He's moving. As long as he's moving, the arithmetic can't catch him.

He has been wrong about this before. He'll be wrong about it again.

That's later. For now: still moving.`
  },
  {
    chapter_num: 2,
    tier: 'surface',
    title: 'Volume',
    unlock_type: 'missions',
    unlock_value: { min: 1 },
    content: `He's loud in the mess hall, loud in the corridors, loud on the range. Tells jokes that are slightly too long. Laughs at his own punchlines when nobody else does. Slaps backs too hard. Takes up space like he's afraid of what fills the silence.

The barracks figured him out in about two days: harmless, annoying, probably compensating for something. They're half right.`
  },
  {
    chapter_num: 3,
    tier: 'surface',
    title: 'Demo Day',
    unlock_type: 'missions',
    unlock_value: { min: 2 },
    content: `First field op. Breach and clear on a reinforced structure. Everyone else was calculating angles, checking corners. Blaze was already rigging the charge.

"Stand back. No — further. Further than that."

The wall came down clean. Perfect detonation, shaped charge, zero collateral. For exactly three seconds after the blast, he was perfectly still. Eyes closed. Breathing slow. Like a man listening to music only he could hear.

Then the grin snapped back. "Who's next?"`
  },
  {
    chapter_num: 4,
    tier: 'surface',
    title: 'Night Shift',
    unlock_type: 'time',
    unlock_value: { min_days: 3 },
    content: `Three AM. The barracks quiet. Someone — Frost, probably — noticed him sitting on the roof of the supply shed, legs dangling, staring at his phone. No music. No scrolling. Just the lock screen. A photo nobody's been close enough to see.

He didn't notice being watched. That's the thing. During the day he notices everything — every entrance, every exit, every person. At night, whatever's holding him together goes slack.`
  },
  {
    chapter_num: 5,
    tier: 'surface',
    title: 'Kindred Spirit',
    unlock_type: 'missions',
    unlock_value: { min: 4 },
    content: `Viper showed up and within forty-eight hours they'd nearly set fire to the motor pool. Not on purpose — mostly not on purpose. Some argument about whether diesel fumes were flammable at ambient temperature turned into an experiment that turned into the fire suppression system going off.

They were both laughing as the foam hit. Two people who move too fast for the same reasons, recognizing each other instantly. The kind of friendship that forms like a chemical reaction — fast, hot, and impossible to control.

Ironside made them clean the entire bay. They were still laughing.`
  },
  {
    chapter_num: 6,
    tier: 'surface',
    title: 'Forward, Always Forward',
    unlock_type: 'missions',
    unlock_value: { min: 6 },
    content: `Three ops in five days. He volunteered for all of them. Nobody asked him to. When command suggested a rest rotation, he waved it off.

"Sleep when I'm dead, yeah? Plenty of time for that."

He said it like a joke. Viper laughed. Frost didn't.`
  },
  {
    chapter_num: 7,
    tier: 'surface',
    title: 'The Flinch',
    unlock_type: 'missions',
    unlock_value: { min: 7 },
    content: `Building collapse during an op. Not their doing — structural failure from prior damage. The sound hit first. That grinding, splintering crack of concrete giving way.

Everyone moved. Training kicked in, people ran for exits. Blaze froze. Three full seconds of nothing. Eyes wide, hands locked at his sides, a man watching a ghost walk through the wall.

Then he was moving again, faster than anyone, hauling a teammate clear. Nobody mentioned the freeze afterward. He was grateful for that.`
  },
  {
    chapter_num: 8,
    tier: 'surface',
    title: 'The Bet',
    unlock_type: 'streak',
    unlock_value: { min: 3 },
    content: `Ongoing bet with half the squad: Blaze claims he can breach any door in under four seconds. The record so far is 2.7. He's got a tally scratched into the stock of his shotgun — seventeen breaches, seventeen clean entries.

"You know what's on the other side of every locked door? The future. And the future's on my schedule."

It's bravado. Everyone knows it's bravado. But it's infectious bravado, and in this line of work, infectious bravado keeps people moving.`
  },
  {
    chapter_num: 9,
    tier: 'surface',
    title: 'The Scar',
    unlock_type: 'missions',
    unlock_value: { min: 9 },
    content: `Someone asked about the burn scar on his left forearm. Long, smooth, old. He told three different stories in one afternoon — bar fight in Guarulhos, training accident in the academy, "a really aggressive barbecue."

He keeps the truth folded up and stuffed somewhere behind his sternum. The scar is from the night the building came down. He was close enough to feel the heat of the fire that followed. Close enough that his skin remembers what his mind won't let him forget.`
  },
  {
    chapter_num: 10,
    tier: 'surface',
    title: 'First Light',
    unlock_type: 'missions',
    unlock_value: { min: 10 },
    is_achievement: true,
    achievement_name: 'The Loudest Quiet',
    achievement_desc: 'Complete Blaze\'s Surface arc — the man behind the noise.',
    content: `He sent a message home. Didn't say where he was or what he was doing. Just: "Still here. Still loud. You'd hate it."

The number hasn't been active in two years. He knows that. Sends the messages anyway, every Sunday, to a phone that was in his sister's pocket when the building came down.

The messages go nowhere. That's the point. They're not for her. They're for the version of himself that needs to believe she might still read them.`
  },

  // ── ROOTS (11-20) ──────────────────────────────────────────────
  {
    chapter_num: 11,
    tier: 'roots',
    title: 'São Paulo',
    unlock_type: 'missions',
    unlock_value: { min: 12 },
    content: `He grew up in Heliópolis, São Paulo's largest favela. Not the worst childhood — his mother worked two jobs, his father was around more often than not. But the neighborhood taught him early: be loud or be invisible.

He chose loud. Class clown, street performer, the kid who'd climb anything for a dare. His sister Ana was the quiet one. The smart one. The one who was going to get out.

She was sixteen when she got the university acceptance letter. He was twenty-two, already in the police academy. He remembers her face when she read it — disbelief rearranging into joy, then tears. The last truly clean memory he has.`
  },
  {
    chapter_num: 12,
    tier: 'roots',
    title: 'The Badge',
    unlock_type: 'rank',
    unlock_value: { min: 3 },
    content: `Military police in São Paulo isn't peacekeeping. It's warfare with paperwork. He chose demolitions because it was the loudest, most dangerous specialty available. His commanding officer said he had either a gift or a death wish.

"Why not both?" he'd replied.

He was good. Genuinely, terrifyingly good. Could read a building's stress points by looking at it, feel the resonance of a structure through his palms. Charges placed like a surgeon's incisions. He could make a building fall exactly where he wanted it to fall.

Every single time except once.`
  },
  {
    chapter_num: 13,
    tier: 'roots',
    title: 'What Viper Sees',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'viper', min_missions: 5 },
    content: `Viper called him out on it first. Three weeks in, sitting on ammunition crates behind the armory, passing a flask back and forth.

"You're not actually having fun, are you?"

"Course I am. Look at this face. This is a fun face."

"That's a performing face. I know because I've got one too."

Silence. The kind that only happens between people who recognize the same wound in each other. Viper didn't push. Didn't need to. The acknowledgment was enough.`
  },
  {
    chapter_num: 14,
    tier: 'roots',
    title: 'Ironside\'s Verdict',
    unlock_type: 'missions',
    unlock_value: { min: 15 },
    content: `He expected Ironside to hate him. Chaos and discipline don't mix. But after a particularly ugly breach — three hostiles, zero margin, Blaze going through first without hesitation — Ironside pulled him aside.

"You're either the bravest operator I've served with or the most suicidal. I haven't decided which."

"I'll let you know when I figure it out."

Ironside didn't laugh. But he nodded. That nod meant more than any commendation.`
  },
  {
    chapter_num: 15,
    tier: 'roots',
    title: 'Frost\'s Question',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'frost', min_missions: 3 },
    content: `Frost cornered him after a mission where he'd taken a completely unnecessary risk — sprinting across open ground to reach a breach point instead of waiting for smoke cover.

"Why do you do that?"

"Do what?"

"Treat your life like it's disposable."

He didn't have an answer. Not one he could say out loud. Frost waited, patient in that way that's worse than anger, and eventually walked away. The question stuck to him like shrapnel. He could feel it in his chest for days.`
  },
  {
    chapter_num: 16,
    tier: 'roots',
    title: 'Carnival',
    unlock_type: 'time',
    unlock_value: { min_days: 25 },
    content: `February. Carnival back home. He found a speaker, connected his phone, and filled the rec room with samba until the walls were vibrating. Dragged people off bunks and out of chairs. Even got Storm tapping a foot, which might be the greatest achievement of his military career.

For two hours the base felt like Heliópolis on a Saturday night. He danced like his sister used to dance — arms wide, head back, taking up every inch of space the world would give.

He cried in the shower afterward. Quick. Efficient. A skill he's perfected.`
  },
  {
    chapter_num: 17,
    tier: 'roots',
    title: 'The Wrong Door',
    unlock_type: 'missions',
    unlock_value: { min: 18 },
    content: `Op went sideways. Intel was bad, the building was occupied by civilians, and Blaze had already rigged the ground floor when the abort call came.

Disarming his own charges. Hands steady, mind screaming. One wrong move and the whole thing comes down on forty people who just live here, who just went to bed in the wrong building on the wrong night.

He got them all. Every charge, clean disarm. Walked outside, sat on the curb, and threw up. Viper sat next to him without a word. Sometimes company is the only medicine that works.`
  },
  {
    chapter_num: 18,
    tier: 'roots',
    title: 'The Playlist',
    unlock_type: 'streak',
    unlock_value: { min: 5 },
    content: `His pre-mission playlist leaked to the squad. Forty-seven songs, zero chill. Speed metal, Brazilian funk, drum and bass, one inexplicable Enya track buried at number thirty-one.

When asked about Enya, he shrugged. "Ana loved that song. I keep it in there so she's on every op with me."

It was the first time he'd said her name to anyone on base. He changed the subject so fast nobody had time to respond.`
  },
  {
    chapter_num: 19,
    tier: 'roots',
    title: 'Storm\'s Watch',
    unlock_type: 'missions',
    unlock_value: { min: 20 },
    content: `He's noticed Storm watching him. Not surveillance — something quieter, more patient. Like someone reading a book they already know the ending to.

It should unnerve him. It doesn't. There's something almost comforting about being seen by someone who doesn't need you to explain yourself. Storm doesn't ask questions. Doesn't offer advice. Just watches, like a lighthouse watches the sea — not to judge the waves, but to mark where the rocks are.`
  },
  {
    chapter_num: 20,
    tier: 'roots',
    title: 'What Burns',
    unlock_type: 'missions',
    unlock_value: { min: 22 },
    is_achievement: true,
    achievement_name: 'Still Running',
    achievement_desc: 'Complete Blaze\'s Roots arc — the grief beneath the speed.',
    content: `He keeps a lighter in his pocket. Doesn't smoke, never has. It was his father's — cheap plastic, nothing special, the kind you buy at a gas station. His father gave it to him the day he graduated from the academy.

"For when you need to start something," his father said. Practical man. Simple words.

He flicks it sometimes when nobody's looking. Watches the flame. Fire is the only honest thing in the world — it doesn't pretend to be anything other than what it is. It burns, it consumes, it moves on.

He wants to be like that. He's terrified that he already is.`
  },

  // ── CRACKS (21-30) ─────────────────────────────────────────────
  {
    chapter_num: 21,
    tier: 'cracks',
    title: 'The Nightmare Shift',
    unlock_type: 'missions',
    unlock_value: { min: 26 },
    content: `The dreams started coming more often. Always the same: the building, the timer, the sound. Concrete folding like paper. Dust that tastes like the end of the world.

He wakes up swinging. Twice this month he's nearly hit whoever's on the adjacent bunk. The squad's learned to keep distance. He plays it off — "Just dreaming about your mother, relax" — but the circles under his eyes are getting darker and the jokes are getting thinner.`
  },
  {
    chapter_num: 22,
    tier: 'cracks',
    title: 'The Close Call',
    unlock_type: 'missions',
    unlock_value: { min: 28 },
    content: `He nearly died. Objectively, mathematically nearly died. An IED in a corridor that he walked past — walked past, not checked — because he was moving too fast. The blast missed him by two meters.

In the debrief, Ironside was ice. "You skipped protocol. You didn't check. You were moving like a man who doesn't care if he comes back."

He wanted to argue. Couldn't. The truth sat in the room like smoke.`
  },
  {
    chapter_num: 23,
    tier: 'cracks',
    title: 'Viper\'s Mirror',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'viper', min_missions: 10 },
    content: `"You know what the difference is between us?" Viper said, cleaning a rifle at two in the morning. Neither of them could sleep.

"You're uglier?"

"I'm running too. But I know I'm running. You've convinced yourself it's just how you walk."

That hit somewhere below the ribs. He laughed it off — had to — but Viper's words sat in his chest like a bullet that didn't exit. The mirror Viper held up showed something he'd been avoiding for years: the speed wasn't strategy. It was escape.`
  },
  {
    chapter_num: 24,
    tier: 'cracks',
    title: 'Ana\'s Birthday',
    unlock_type: 'time',
    unlock_value: { min_days: 40 },
    content: `March 15th. She would have been twenty-four.

He spent the day in controlled demolitions training. Set charges for eight hours straight. Precise, methodical, mechanical. Didn't speak to anyone. Didn't eat.

At midnight he sat on the roof and drank half a bottle of cachaça. Viper found him, took the bottle, drank the other half. They sat in silence until dawn.

It was the most honest thing he'd done since she died.`
  },
  {
    chapter_num: 25,
    tier: 'cracks',
    title: 'Collateral',
    unlock_type: 'event',
    unlock_value: { event_type: 'territory_lost' },
    content: `A district fell. Buildings destroyed. Civilian casualties. The reports came in with numbers attached to them, like that makes it easier. Forty-three dead. Twelve structures collapsed.

He read the report three times, hands shaking. Twelve structures. Forty-three people. Numbers that rhyme with other numbers, from another collapse, in another city, in a life he can't outrun no matter how fast he moves.

He put his fist through the barracks wall. Frost bandaged his hand without asking what happened.`
  },
  {
    chapter_num: 26,
    tier: 'cracks',
    title: 'The Deal',
    unlock_type: 'missions',
    unlock_value: { min: 32 },
    content: `Ironside offered him a choice: mandatory psych eval or reduced mission rotation. No third option.

"I'm fine."

"That's not what I asked."

He took the eval. Said all the right things, performed all the right responses. The psych officer cleared him with a note in the file that said "guarded but functional."

Functional. His new favorite word. The minimum viable version of alive.`
  },
  {
    chapter_num: 27,
    tier: 'cracks',
    title: 'Teaching',
    unlock_type: 'rank',
    unlock_value: { min: 5 },
    content: `They asked him to train new recruits on demolitions. He said no three times before Ironside made it an order.

Turns out he's a good teacher. Patient in a way nobody expected. Something about watching someone else handle explosives — the care required, the precision, the respect for the blast — it grounds him. Forces him to slow down.

"Slow is smooth," he told a recruit. "Smooth is fast."

He heard the words come out of his mouth and realized he'd never once applied them to himself.`
  },
  {
    chapter_num: 28,
    tier: 'cracks',
    title: 'The Photo',
    unlock_type: 'missions',
    unlock_value: { min: 35 },
    content: `His phone died. Old battery, finally gave up. He sat staring at the blank screen for ten minutes before anyone noticed.

"Just order a new one," someone said.

He couldn't explain that the phone had photos on it that existed nowhere else. Ana at her graduation party. Ana on the beach at Guarujá. Ana making a face at the camera that was equal parts annoyed and adoring.

Viper helped him pull the storage. The photos survived. He backed them up to three different places and held the old phone like a relic.`
  },
  {
    chapter_num: 29,
    tier: 'cracks',
    title: 'What Frost Said',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'frost', min_missions: 8 },
    content: `Frost found him before an op. Just stood in the doorway, quiet, until he looked up.

"I need you to come back from this one."

"I always come back."

"No. You always survive. There's a difference. I need you to come back."

Nobody had ever asked him that before. Not like that — not with the quiet ferocity of someone who means it down to the marrow. He went on the op. For the first time in years, he checked his corners. Waited for smoke. Moved with the team instead of ahead of it.

He came back.`
  },
  {
    chapter_num: 30,
    tier: 'cracks',
    title: 'The Crack',
    unlock_type: 'missions',
    unlock_value: { min: 38 },
    is_achievement: true,
    achievement_name: 'Deceleration',
    achievement_desc: 'Complete Blaze\'s Cracks arc — the speed drops, the truth rises.',
    content: `He sat in the chapel. Didn't pray — doesn't know how, never learned. Just sat in the quiet.

The building was old. Stone and wood. The kind of structure he'd normally assess for weak points, load-bearing walls, demolition angles. Instead he just looked at it. Felt its solidity. A thing built to stand, not to fall.

He put his head in his hands and breathed. In the silence, without the noise he uses as armor, the grief finally had room to stand up straight. It was enormous. It had always been enormous. He'd just been moving too fast to see it.

He didn't cry. But he stopped running. Just for a minute. Just long enough to feel the ground under his feet.`
  },

  // ── SECRETS (31-40) ────────────────────────────────────────────
  {
    chapter_num: 31,
    tier: 'secrets',
    title: 'The Night Of',
    unlock_type: 'missions',
    unlock_value: { min: 45 },
    content: `March 2021. São Paulo. He has replayed this so many times he can no longer be certain which details are memory and which are reconstruction. What doesn't vary: the building. The night. The six hours.

A condemned residential building, scheduled for controlled demolition at 10 AM. His team had spent three days prepping charges — standard layout, textbook sequencing. That evening was Marco's birthday. Lucas Santos, twenty-four years old and invincible, went to the party.

He came back at 11 PM to finish the timer. He tells it that way: "came back." The truth is he didn't have to come back — the morning was time enough. He came back because he'd told his team he'd handle the timers, and Lucas Santos doesn't leave things unfinished. That's the thing that still moves in him when he thinks about it. Not the drinking. The pride.

He sat in front of the sequencer and programmed the detonation timer. His hands were steady. They always are — even drunk, even now, they are always steady. That's the cruelest part. If his hands had shaken, the work would have looked wrong. He might have noticed.

The timer read 4:00:00 AM. He looked at it. He thought it was right. He drove back to the party. He fell asleep in Marco's spare room with the window open and the sound of São Paulo coming in, and he didn't wake up until he heard the sirens.

Six hours. He carried six hours. He still carries six hours. The charges blew at 4 AM. The building was supposed to be empty. It wasn't.

He has been trying to understand how he programmed the wrong time. He was drunk — he knows that. He was tired. He was twenty-four and invincible and in a hurry to get back. He has run through it a thousand times and what he cannot reconstruct is the specific moment his hands typed 4 instead of 10. That moment is gone. The math that followed it is not.`,
  },
  {
    chapter_num: 32,
    tier: 'secrets',
    title: 'Fourteen',
    unlock_type: 'missions',
    unlock_value: { min: 48 },
    content: `Fourteen people died. He knows all their names. Carries the list in his wallet, written on a piece of paper that's been folded and unfolded so many times the creases are transparent.

Ana wasn't supposed to be there. She was visiting a friend in the adjacent building — a building that collapsed from the shockwave of his charges. One wall. One wall between safe and dead, and he's the one who brought it down.

The investigation ruled it a timer malfunction. Faulty equipment. He let them believe that. He's been letting everyone believe that for five years.`
  },
  {
    chapter_num: 33,
    tier: 'secrets',
    title: 'The List',
    unlock_type: 'time',
    unlock_value: { min_days: 55 },
    content: `Maria Oliveira, 67. João Ferreira, 41. Sandra Costa, 29 and her daughter Beatriz, 3. Rodrigo Lima, 52. Fernanda Alves, 19. Paulo Gomes, 38. Isabel Rocha, 44. Miguel Santos, 77. Carla Mendes, 31. Tiago Barbosa, 25. Cláudia Ribeiro, 58. Antônio Fonseca, 63. Ana Santos, 23.

Fourteen names. He recites them every morning. Not for them — they can't hear him. For himself, so that he can't forget that they were people and not a number. Maria Oliveira had a cat. He doesn't know that for certain. He told himself that once and has been telling himself ever since because it makes her specific.

He doesn't drink. Hasn't touched alcohol since that night. When Viper offers the flask he takes it, holds it, hands it back. Nobody has noticed he never swallows. He has been waiting for someone to notice for five years. He's not sure what he's waiting to do when they do.

It is not virtue. He wants to be clear about that. Sobriety is not a moral achievement in this case. Sobriety is what he owed those fourteen people from the moment his hands programmed the wrong number. You don't get credit for owing a debt and paying it.

He pays it every morning. He'll keep paying it. The list in his wallet is so worn the creases are transparent. When this one finally falls apart, he'll write another. He's already thought about this. He's already decided.`,
  },
  {
    chapter_num: 34,
    tier: 'secrets',
    title: 'What Viper Knows',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'viper', min_missions: 15 },
    content: `He told Viper. Not all of it — couldn't get all of it out — but enough. The drinking. The timer. The six hours. Ana.

Viper listened without moving. No jokes, no deflection, none of the armor they both usually wear. When Blaze finished, Viper was quiet for a long time.

"You carrying this alone?"

"Who else would carry it?"

"Me. Right now. I'm carrying it with you."

It didn't fix anything. Nothing fixes anything. But for the first time the weight was distributed between two sets of shoulders, and he could breathe a little deeper.`
  },
  {
    chapter_num: 35,
    tier: 'secrets',
    title: 'The Bottle',
    unlock_type: 'missions',
    unlock_value: { min: 52 },
    content: `After a catastrophic op — casualties, structural collapse, the works — someone left a bottle of whiskey in the common area. Celebration for surviving, mourning for those who didn't. Standard coping.

He picked it up. Held it for thirty seconds. The amber caught the light and for a moment he was twenty-four again, standing in Marco's kitchen, pouring another, telling himself one more wouldn't matter.

He put it down. Walked to the gym. Hit the bag until his knuckles split. Came back, cleaned up the blood, went to bed.

Frost noticed the bandaged hands the next morning. Didn't ask. Just brought him coffee.`
  },
  {
    chapter_num: 36,
    tier: 'secrets',
    title: 'His Mother\'s Voice',
    unlock_type: 'time',
    unlock_value: { min_days: 60 },
    content: `He called home. His mother answered on the first ring, like she always does, like she's been holding the phone waiting since the last time.

They talked about the weather in São Paulo. About his father's knee. About the neighbor's dog that won't stop barking. Normal things. Safe things.

She didn't mention Ana. She never does anymore. There's a shape in every conversation where Ana should be — a space they both walk around carefully, like a hole in the floor of a house they still live in.

"Be safe, my love," she said before hanging up. He almost told her. Almost. The word formed and he swallowed it like glass.`
  },
  {
    chapter_num: 37,
    tier: 'secrets',
    title: 'The Hands',
    unlock_type: 'missions',
    unlock_value: { min: 58 },
    content: `His hands. Everyone talks about his hands — steady under fire, precise with charges, the hands of a surgeon or a safecracker.

He looks at them and sees the hands that programmed a timer drunk. Hands that were too steady for their own good. If they'd shaken — if he'd fumbled, dropped a wire, botched the sequence entirely — the charges wouldn't have fired. Fourteen people would be alive. Ana would be alive.

His greatest skill is the thing that killed his sister. He uses it every day. That's either penance or self-destruction, and he's stopped trying to tell the difference.`
  },
  {
    chapter_num: 38,
    tier: 'secrets',
    title: 'The Question',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'frost', min_missions: 12 },
    content: `Frost asked again. Different question this time. Not "why do you do that" but "what are you punishing yourself for?"

The directness of it cracked him open. Not all the way — he's still Lucas Santos, he's still Blaze, the armor doesn't come off that easy. But enough that Frost saw the shape of something enormous underneath.

"Something I can't undo."

"Nobody's asking you to undo it."

"Then what?"

"Live with it. Actually live with it, instead of whatever this is."

He wanted to argue that he was living. But the word felt hollow in his mouth.`
  },
  {
    chapter_num: 39,
    tier: 'secrets',
    title: 'Fourteen Plus One',
    unlock_type: 'event',
    unlock_value: { event_type: 'soldier_kia' },
    content: `Someone died. On his watch, in his squad, in a building that came down. The geometry of it was so close to São Paulo that he couldn't tell for a moment which collapse he was standing in.

Fifteen names now. The list in his wallet grows by one. He writes it carefully, small letters, neat hand. The neatness matters. These are people, not casualties. They deserve careful handwriting.

He sat with the body until extraction came. Talked to them the whole time. He doesn't remember what he said. He remembers the weight of the silence when he stopped.`
  },
  {
    chapter_num: 40,
    tier: 'secrets',
    title: 'Confession',
    unlock_type: 'missions',
    unlock_value: { min: 65 },
    is_achievement: true,
    achievement_name: 'The Weight of Six Hours',
    achievement_desc: 'Complete Blaze\'s Secrets arc — the truth about the timer.',
    content: `He told Frost. Everything. The party, the drinking, the timer, the six hours, the fourteen names, Ana. All of it, start to finish, in a voice that didn't sound like his own.

Frost listened. When he finished, the silence was so complete he could hear his own pulse.

"You should hate me," he said.

"I don't get to decide that for you. And you don't get to decide it for me."

"It was my fault."

"Yes. And you're still here. And that has to mean something, Lucas. Otherwise what was the point of surviving?"

Nobody had called him Lucas in years. The name hit like a defibrillator — a shock that doesn't heal, but restarts.`
  },

  // ── LEGACY (41-50) ─────────────────────────────────────────────
  {
    chapter_num: 41,
    tier: 'legacy',
    title: 'Slower',
    unlock_type: 'missions',
    unlock_value: { min: 70 },
    content: `He's slower now. Not in a bad way — in a careful way. He checks corners. Waits for smoke. Moves with the team instead of ahead of it.

The squad noticed. Nobody said anything directly, but Ironside gave him a nod after an op — the same nod from months ago, but warmer. Like the question had finally been answered: not suicidal. Just wounded. And healing.`
  },
  {
    chapter_num: 42,
    tier: 'legacy',
    title: 'The Mentor',
    unlock_type: 'rank',
    unlock_value: { min: 7 },
    content: `He took on a demolitions apprentice. A kid — twenty, maybe twenty-one — with steady hands and a reckless streak. Mirror image.

"Slow down."

"I'm fine, I can—"

"Slow. Down. Slow is smooth. Smooth is fast. And if you touch that detonator before I clear you, I will personally disassemble your career."

Teaching someone else to be careful is teaching himself. He knows that. It doesn't make it less real.`
  },
  {
    chapter_num: 43,
    tier: 'legacy',
    title: 'The Return',
    unlock_type: 'time',
    unlock_value: { min_days: 75 },
    content: `He went back to São Paulo. Leave time, forty-eight hours. Stood on the street where the building used to be. There's a park there now. Grass and benches and a small plaque with fourteen names.

He sat on a bench and read each name aloud. Slowly, like a man who's no longer in a hurry. When he finished, he sat with the silence. Not running from it. Not filling it with noise. Just sitting in it, like sitting in a room that belongs to him.

He left flowers. Blue ones. Ana's favorite.`
  },
  {
    chapter_num: 44,
    tier: 'legacy',
    title: 'His Father\'s Lighter',
    unlock_type: 'missions',
    unlock_value: { min: 76 },
    content: `He gave the lighter to the demolitions apprentice. The kid looked at it like it was made of gold.

"For when you need to start something."

Same words his father used. This time, passing them on felt less like carrying a burden and more like planting a seed. Fire can destroy. Fire can also warm. The difference is always the hands that hold it.`
  },
  {
    chapter_num: 45,
    tier: 'legacy',
    title: 'The Conversation',
    unlock_type: 'missions',
    unlock_value: { min: 80 },
    content: `He called his mother and told her. Not everything — some truths are too heavy for a phone line. But he told her about the drinking. About the guilt. About the years of running.

She was quiet for a long time. He could hear her breathing. When she spoke, her voice was the same voice that used to sing him to sleep in Heliópolis.

"I know, Lucas. I've always known."

The world tilted. All those years of hiding, and she'd seen through him the way mothers do — completely, mercilessly, with a love that doesn't flinch.

"Come home when you can," she said. "We'll go see Ana together."

He said yes. First time he'd said yes to standing still.`
  },
  {
    chapter_num: 46,
    tier: 'legacy',
    title: 'Viper\'s Toast',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'viper', min_missions: 20 },
    content: `Viper raised a glass. Blaze raised a water. It had taken months, but Viper had stopped offering the flask. Not out of pity — out of understanding.

"To the ones who run," Viper said.

"And the ones who stop," Blaze finished.

They clinked. Two people who found each other in the chaos and somehow, against all logic, helped each other slow down. Not all the way. But enough.`
  },
  {
    chapter_num: 47,
    tier: 'legacy',
    title: 'Reconstruction',
    unlock_type: 'missions',
    unlock_value: { min: 88 },
    content: `He volunteered for reconstruction work. Not demolition — construction. Rebuilding structures in recovered territory. The irony wasn't lost on him.

The first wall he raised was crooked. The second was better. By the tenth, his hands — those terrible, precise hands — had learned something new. How to stack instead of scatter. How to build instead of bring down.

He's not a different person. He's the same person, holding a different tool.`
  },
  {
    chapter_num: 48,
    tier: 'legacy',
    title: 'The Noise and the Quiet',
    unlock_type: 'streak',
    unlock_value: { min: 10 },
    content: `He's still loud. Still tells jokes that go on too long. Still slaps backs too hard and takes up too much space. That part isn't armor anymore — it's just him. Some people are loud. That's fine. That's allowed.

But now there's quiet too. Real quiet, not the 3 AM kind. He can sit in a room without filling it. Can let a silence stretch without panicking. Can look at the space where noise used to be and find it doesn't need filling.

The loudest person in the room, by choice now. Not by necessity.`
  },
  {
    chapter_num: 49,
    tier: 'legacy',
    title: 'For Ana',
    unlock_type: 'missions',
    unlock_value: { min: 95 },
    content: `He stopped sending messages to her phone. Didn't need to anymore. The conversation moved somewhere internal — not forgotten, but changed. Instead of texting a dead number, he carries her with him differently now.

When he teaches a recruit to be patient with explosives. When he checks his corners. When he chooses water over whiskey, life over speed, staying over running.

Ana is in the careful moments. She always was. He just couldn't hear her over the noise he was making.`
  },
  {
    chapter_num: 50,
    tier: 'legacy',
    title: 'Still Here, Still Loud',
    unlock_type: 'missions',
    unlock_value: { min: 100 },
    is_achievement: true,
    achievement_name: 'Controlled Detonation',
    achievement_desc: 'Complete Blaze\'s full story — from running to standing still.',
    content: `He wakes up before dawn. Old habit. But instead of reaching for his phone, instead of checking the exits, instead of calculating how fast he can move, he lies still.

The building is solid around him. Stone and steel, built to stand. He can feel its weight, its permanence, and for the first time it doesn't remind him of what falls. It reminds him of what holds.

He gets up. Makes coffee. Sits in the mess hall as people drift in, and when someone asks how he's doing, he doesn't perform the answer.

"Good. Actually good."

Lucas Santos. Callsign Blaze. Demolitions specialist. Loudest person in any room. The man who spent five years sprinting toward the edge and then, impossibly, chose to turn around.

Still here. Still loud. But no longer running.`
  }
];

// ── Reactions ───────────────────────────────────────────────────────

const reactions = [
  {
    event_type: 'mission_complete',
    text: '"We\'re still breathing. That\'s a win. Everything else is paperwork."',
    priority: 1
  },
  {
    event_type: 'mission_complete',
    text: '"Another door kicked in, another day earned. Let\'s not waste it."',
    priority: 0
  },
  {
    event_type: 'soldier_kia',
    text: 'Blaze is quiet. That\'s how you know it hit. He writes a name on the list in his wallet and doesn\'t speak for hours.',
    priority: 2
  },
  {
    event_type: 'soldier_kia',
    text: '"I should have been faster. I should have — " He stops. Breathes. Starts again. "What do they need from us now?"',
    priority: 1
  },
  {
    event_type: 'territory_lost',
    text: '"Buildings fall. I know what that costs better than anyone. We go back. We rebuild. That\'s all there is."',
    priority: 2
  },
  {
    event_type: 'territory_defended',
    text: '"Still standing. The building\'s still standing. You have no idea how much that means to me."',
    priority: 1
  },
  {
    event_type: 'streak_milestone',
    text: '"Consistency! Look at us, being consistent! Someone tell Ironside we\'re capable of not being disasters!"',
    priority: 0
  },
  {
    event_type: 'rank_up',
    text: '"Higher rank means I get to yell louder and people have to listen. This is the best day of my life."',
    priority: 0
  }
];

// ── Relationships ───────────────────────────────────────────────────

const relationships = [
  {
    char_a: 'blaze',
    char_b: 'ironside',
    rel_type: 'tension',
    description: 'Grudging respect forged in fire. Ironside sees the discipline buried under the chaos and waits for it to surface. Blaze sees the weight of command and respects it despite himself.'
  },
  {
    char_a: 'blaze',
    char_b: 'storm',
    rel_type: 'bond',
    description: 'Storm watches. Blaze performs. Somewhere between the watching and the performing, an understanding formed — silent, unspoken, like a treaty signed in a language neither speaks aloud.'
  },
  {
    char_a: 'blaze',
    char_b: 'titan',
    rel_type: 'bond',
    description: 'Titan doesn\'t flinch. Blaze has tested this hypothesis more times than he can count, and the result is always the same. There is something extraordinarily calming about a person who cannot be rattled — Blaze gravitates toward it without quite knowing why.'
  }
];

module.exports = { template, chapters, reactions, relationships };
