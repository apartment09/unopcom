/**
 * Character 01: Ghost — Ji-Yeon Kim
 * Former NIS intelligence operative. Lost everything in the first incursion.
 */

const template = {
  id: 'ghost',
  name: 'Ji-Yeon Kim',
  callsign: 'Ghost',
  nationality: 'South Korean',
  personality: ['quiet', 'analytical', 'haunted', 'loyal'],
  motivation: 'Find meaning after losing everything',
  background: 'Former NIS intelligence operative. Lost her family in the first alien incursion. Arrived at UNOPCOM with a single duffel bag and no questions. Speaks four languages fluently — Korean, English, Mandarin, Japanese. Reads the room like a topographic map.',
  portrait_sprite: 'xcom0',
};

// ── Chapters ──────────────────────────────────────────────────────────

const chapters = [
  // ── TIER: SURFACE (1-10) ──────────────────────────────────────────

  {
    chapter_num: 1,
    tier: 'surface',
    title: 'The Duffel Bag',
    unlock_type: 'missions',
    unlock_value: { min: 0 },
    content: `What Ji-Yeon Kim carries:

A black duffel bag, zipped and locked. Inside: three sets of clothes, all black. Running shoes. A rifle cleaning kit, the cloths worn soft with use. A tin of boricha — roasted barley, ordered from Seoul. A book of Korean poetry with a family photograph tucked inside. A child's drawing of a cat with seven legs. A man's wristwatch stopped at 14:07.

That is the literal inventory. The real list is longer.

She carries four thousand names she doesn't know. She carries three names she does. She carries seven minutes — the specific window between the sky tearing open and the order that locked her to her post — and the arithmetic of those minutes, which produces an answer she has been unable to round to a different number no matter how many times she runs it. She carries the Korean word han, which means something like inherited grief, something like refusing to let a wound close because closing it means forgetting the wound's cause. She carries seventeen kilometers. She carries the sound of a line going busy.

She arrives on a Tuesday, which nobody remembers because she makes no effort to be remembered. The intake sergeant says later he isn't sure he actually processed her — just that her name appeared in the system and her bunk was made with hospital corners by the time anyone checked.

The bag sits under her bed, zipped and locked. Someone jokes about it in the mess hall. "What's in the bag, Kim? State secrets?" She looks up from her rice and says, in perfectly flat English, "Socks." Then goes back to eating.

Nobody asks again.

This is a true story. I want you to know that before I tell you the rest of it.`,
  },

  {
    chapter_num: 2,
    tier: 'surface',
    title: 'Four Languages',
    unlock_type: 'missions',
    unlock_value: { min: 1 },
    content: `The first time anyone notices Ghost is during a briefing when the intercepted transmission plays — alien signal layered over a Korean news broadcast about evacuation corridors. The room struggles to parse it. Ghost tilts her head slightly, as if listening to a piece of music she half-remembers, then translates the Korean and identifies three GPS coordinates embedded in the signal overlap.

She does it the way someone might read a grocery list. Raven catches her eye across the table. A flicker of mutual recognition: two professionals sizing each other up and finding nothing to worry about.

"You do that a lot?" someone asks. "Listen," she says. As if that explains everything. It does.`,
  },

  {
    chapter_num: 3,
    tier: 'surface',
    title: 'The Morning Route',
    unlock_type: 'missions',
    unlock_value: { min: 2 },
    content: `Ghost runs at 0430. Every morning, same route: perimeter fence, north watchtower, motor pool, back to barracks. Exactly 5.2 kilometers. She runs in silence — no earbuds, no music, no company. Her footfalls are barely audible on the gravel.

Frost spots her once from the watchtower during a late shift. He watches her round the corner of the motor pool, a shadow among shadows, and thinks she looks like someone practicing being invisible. Later, in the mess, he almost mentions it. But she's already eating alone with a book — Korean text, no cover — and something about the stillness around her makes him leave it.`,
  },

  {
    chapter_num: 4,
    tier: 'surface',
    title: 'Field Notation',
    unlock_type: 'missions',
    unlock_value: { min: 3 },
    content: `After her second mission, someone finds Ghost in the briefing room at 2300 hours, re-drawing the mission map from memory on a blank sheet. Not a rough sketch — an exact reproduction, distances noted in meters, sight lines marked with dotted arcs. She adds small annotations in Korean: positions where she heard movement, where the air tasted different, where the ground was softer than expected.

"Intel would love those," the duty officer says from the doorway.

"Intel can have copies," she says, still drawing. "These are mine."

She keeps them in a plain folder in her footlocker, alongside the locked duffel bag. The folder grows thicker after each deployment.`,
  },

  {
    chapter_num: 5,
    tier: 'surface',
    title: 'Silence as a Weapon',
    unlock_type: 'missions',
    unlock_value: { min: 4 },
    content: `There is a particular quality to Ghost's silence that unsettles new recruits. It is not the silence of someone with nothing to say. It is the silence of someone cataloguing everything — the way you hold your fork, the cadence of your breathing, the micro-expressions you don't know you're making.

Spark asks her once, during a long stakeout in a bombed-out apartment block, whether she ever gets bored. Ghost is watching a doorway three hundred meters away through her scope. "Bored people miss things," she says. Forty minutes later, she spots the movement that saves the squad.

Spark starts watching doorways differently after that.`,
  },

  {
    chapter_num: 6,
    tier: 'surface',
    title: 'Tea Ritual',
    unlock_type: 'missions',
    unlock_value: { min: 6 },
    content: `Ghost keeps a small tin of loose-leaf boricha — roasted barley tea — in her footlocker. She brews it in a dented steel mug using the kettle in the common area, always at the same time: 2100 hours, after the evening briefing, before lights out.

Nobody is invited to join her, but nobody is turned away either. Titan sits down across from her one night without a word, nursing his own coffee. They don't speak for twenty minutes. When he gets up to leave, Ghost says, "Same time tomorrow." It is the closest thing to a social invitation anyone has ever heard from her.

Titan shows up the next night. And the one after that.`,
  },

  {
    chapter_num: 7,
    tier: 'surface',
    title: 'Clean Weapon',
    unlock_type: 'time',
    unlock_value: { min_days: 5 },
    content: `Her rifle is always immaculate. Not just clean — immaculate. The kind of maintenance that goes beyond function into something almost devotional. She strips and reassembles it in the armory after every mission, a ritual that takes exactly forty-seven minutes. Always forty-seven.

The armory chief notices she uses her own cleaning kit, brought from wherever she came from. The cloths are worn soft with use. The oil is a specific brand she orders herself, shipped from Seoul. "That stuff's no better than standard issue," the chief tells her once. Ghost keeps cleaning. "It's not about better," she says.`,
  },

  {
    chapter_num: 8,
    tier: 'surface',
    title: 'The Nod',
    unlock_type: 'missions',
    unlock_value: { min: 8 },
    content: `In the field, Ghost communicates primarily through a vocabulary of small gestures that her squadmates learn to read like weather signs. A slight tilt of the head: movement ahead. Two fingers pressed to her collarbone: hold position. A single nod, barely perceptible: it's clear.

Raven is the first to fully decode the system, which makes sense — she runs her own operations the same way. They develop a shorthand within the shorthand, a layer of communication so compressed that full tactical plans pass between them in a glance.

After one particularly clean extraction, Ironside asks how they coordinated the flanking maneuver. "She nodded," Ghost says. Raven shrugs. "She nodded first."`,
  },

  {
    chapter_num: 9,
    tier: 'surface',
    title: 'The Photograph',
    unlock_type: 'streak',
    unlock_value: { min: 3 },
    content: `Nobody knows about the photograph until the barracks spring a leak. Ghost's bunk is directly under the damaged section, and the maintenance crew needs her to move her things. She does it quickly, efficiently, but not quickly enough — Spark catches a glimpse of it tucked inside the Korean book. A family photograph, creased and handled so often the faces are softening at the edges.

A woman, a man, two small children in school uniforms. Autumn somewhere. Leaves on the ground. Everyone smiling.

Spark looks away immediately, the way you'd look away from an open wound. Ghost closes the book. Neither of them says anything. The leak gets fixed. The photograph goes back inside the book, and the book goes back to its place, and the silence around Ghost grows a degree deeper.`,
  },

  {
    chapter_num: 10,
    tier: 'surface',
    title: 'First Assessment',
    unlock_type: 'missions',
    unlock_value: { min: 10 },
    is_achievement: true,
    achievement_name: 'The Ghost Protocol',
    achievement_desc: 'Completed Ghost\'s Surface tier — you\'ve glimpsed the outline of a shadow.',
    content: `The quarterly review is perfunctory. Ghost's metrics are exemplary across the board — accuracy, mission completion, zero disciplinary incidents. The evaluating officer notes her "exceptional situational awareness" and "minimal social footprint."

She signs the form without reading it. The officer hesitates, then asks the question that's been circling the command staff for weeks: "Kim, why UNOPCOM? With your background, any intelligence agency in the world would—"

"They would," she agrees. Then she picks up her form and leaves.

That night, in the barracks, she takes the photograph out of the book and holds it for a long time. The faces are smiling. The leaves are still falling. She puts it back and turns off her lamp, and the dark swallows her like it always does, completely and without argument.`,
  },

  // ── TIER: ROOTS (11-20) ───────────────────────────────────────────

  {
    chapter_num: 11,
    tier: 'roots',
    title: 'Seoul, Before',
    unlock_type: 'missions',
    unlock_value: { min: 12 },
    content: `Before UNOPCOM, before the duffel bag and the locked footlocker and the morning run that never varies — before all of it — Ji-Yeon Kim had a life that looked, from the outside, remarkably ordinary.

An apartment in Gangnam-gu. Too many shoes by the door — seven pairs, three of them the small bright sneakers that Min-ji and Min-seo treated as interchangeable despite arguing constantly about whose was whose. A husband named Seo-jun who taught topology at Yonsei and couldn't cook anything except ramyeon and eggs and didn't see this as a limitation. Two daughters who were seven years old and had yet to agree on anything except that their mother's job was "boring office work," a description they delivered with enormous satisfaction.

Eleven years of NIS. Signal traffic, network mapping, the patient invisible kind of work that never makes headlines. She was good at it. She was the best at a thing most people didn't know existed.

The apartment smelled like sesame oil and laundry detergent and, in the evenings, like the ramyeon Seo-jun made while pretending the eggs were optional. The girls argued at dinner. One of them — Min-ji, always Min-ji — asked a question about marine biology every single day. Min-seo drew on whatever surface was available. Ji-Yeon read classified documents in the same room as Seo-jun graded papers and neither of them broke the other's silence.

She misses the smell most. Sesame oil and laundry detergent. She has tried to articulate why that's the thing and not the faces or the voices, and the closest she's come is this: the smell meant she was home. The faces and voices she carries with her. The smell she cannot carry. It exists only there, in a place that doesn't exist anymore.

This is what she had before. I want you to know it, because what comes after requires it.`,
  },

  {
    chapter_num: 12,
    tier: 'roots',
    title: 'The Handler\'s Daughter',
    unlock_type: 'missions',
    unlock_value: { min: 14 },
    content: `Her father was NIS before her. Not officially — he'd have denied it until his last breath, and in fact he did, dying of stomach cancer at sixty-two with his cover story intact. Ji-Yeon only learned the truth when her clearance level reached his old files and she saw his name in an operation report from 1989.

She never told her mother. Some covers are kinder than truth.

She joined because of him, though she didn't know it at the time. She thought she joined because of the entrance exam scores, the recruiter's pitch, the salary. But the truth is she'd been training for it since she was six — reading rooms, tracking her father's moods, noticing the calls that came at odd hours, the trips that didn't align with his "sales job."

She learned to read people by reading the first liar she ever loved.`,
  },

  {
    chapter_num: 13,
    tier: 'roots',
    title: 'The Twins',
    unlock_type: 'time',
    unlock_value: { min_days: 14 },
    content: `Min-ji was the loud one. She wanted to be a veterinarian and collected facts about animals the way other children collected cards. "Eomma, did you know octopuses have three hearts?" She said this at breakfast, at dinner, in the car, in the bath. Ji-Yeon learned more marine biology from her seven-year-old than from any briefing.

Min-seo was quiet, like her mother. She drew — endlessly, compulsively, on any surface available. The apartment walls below waist height were a gallery of crayon landscapes, cats with too many legs, and one surprisingly accurate portrait of Seo-jun sleeping with his mouth open.

They fought over who sat where, who got the last mandarin orange, whose turn it was to press the elevator button. They slept in the same bed every night anyway, tangled together like kittens.

Ghost doesn't talk about them. She doesn't have to. Spark sees her pause sometimes when a child's voice carries from the refugee housing across the base, and the pause says everything words would ruin.`,
  },

  {
    chapter_num: 14,
    tier: 'roots',
    title: 'Seo-jun\'s Equation',
    unlock_type: 'missions',
    unlock_value: { min: 16 },
    content: `Seo-jun proposed with a math problem. Left it on the whiteboard in his office where she was waiting for him after a lecture. A topology equation that, when solved, produced coordinates — the rooftop of the building where they'd had their first date, a pojangmacha near Namsan Tower where they'd eaten tteokbokki in the rain.

She solved it in four minutes. He timed her.

"Too slow," he said, grinning.

She married him three months later.

He was the only person who never asked about her work. Not because he wasn't curious but because he understood that some systems are closed for good reason. He made her ramyeon at midnight when she came home with shadows under her eyes. He graded papers while she read classified documents in the same room, and neither of them broke the other's silence.

It was, she thinks now, the most honest relationship she has ever had. Two people being exactly who they were, side by side, without explanation.`,
  },

  {
    chapter_num: 15,
    tier: 'roots',
    title: 'Incursion Day',
    unlock_type: 'missions',
    unlock_value: { min: 18 },
    content: `The first incursion hit Seoul at 14:07 KST. Ji-Yeon knows the exact time because she was looking at a clock when the building shook — a debrief at NIS headquarters in Naegok-dong, seventeen kilometers from the apartment in Gangnam-gu.

The sky tore. That's the only way to describe it. A seam opened above the Han River and things came through — not ships, not in any way the movies had prepared people for. Structures. Geometries that didn't make sense against the skyline. The sound was wrong too, a frequency that sat in the teeth and the chest rather than the ears.

She called home. The line was busy. She called again. Busy. She called Seo-jun's mobile. Three rings, then nothing — not voicemail, not a disconnect. Nothing.

She was already moving toward the door when her station chief grabbed her arm. "Kim. You're needed in the SCIF. Now."

Seventeen kilometers. Twenty minutes by car in normal traffic. There was no normal traffic anymore. There was no normal anything.

She went to the SCIF.`,
  },

  {
    chapter_num: 16,
    tier: 'roots',
    title: 'Seventeen Kilometers',
    unlock_type: 'rank',
    unlock_value: { min: 2 },
    content: `For the next nine hours, she translated intercepted signals while Gangnam burned. She identified three distinct communication patterns in the alien transmissions, cross-referenced them with attack movements, and produced the first actionable intelligence of the incursion.

Her work saved an estimated four thousand lives. The evacuation corridors she mapped from signal analysis were used by the ROK military to pull civilians out of the southern districts.

She did not save her family.

The apartment building in Gangnam-gu was in the direct path of the first wave. There were no survivors on floors eight through fourteen. The Kims lived on the tenth floor.

She learned this at 23:41 KST, when the casualty lists came through. Seo-jun Kim, 38. Min-ji Kim, 7. Min-seo Kim, 7.

She finished her shift. She filed her reports. She walked out of NIS headquarters at 02:15 the next morning and did not come back.`,
  },

  {
    chapter_num: 17,
    tier: 'roots',
    title: 'The Wandering Year',
    unlock_type: 'missions',
    unlock_value: { min: 22 },
    content: `There is a year missing from Ghost's file. Between leaving NIS and arriving at UNOPCOM, twelve months of nothing — no employment records, no travel documents with her real name, no financial trail. She existed in the gaps.

She tells Titan about it once, late at night, over barley tea. Not all of it. Pieces.

She went north first. Walked for a while. Ended up in a fishing village on the east coast that had been mostly spared. Worked on boats for three months. Mended nets. Didn't speak to anyone beyond what the work required.

Then Japan. Then Shanghai. Then somewhere she doesn't name.

"I was looking for a reason," she says.

Titan waits, because he knows how to wait.

"Not to live. I wasn't suicidal. I was looking for a reason to come back. To be a person again instead of a — function."

"Did you find it?"

She looks into her tea. "I found UNOPCOM."

It isn't an answer. Titan lets it stand.`,
  },

  {
    chapter_num: 18,
    tier: 'roots',
    title: 'The Language of Grief',
    unlock_type: 'missions',
    unlock_value: { min: 25 },
    content: `Korean has a word — han — that doesn't translate cleanly. It's a kind of collective grief, an inherited sorrow, a resentment that lives in the bones of a culture shaped by invasion and loss. It is both the wound and the refusal to let the wound close, because closing it would mean forgetting what caused it.

Ghost carries han like a second skeleton. It structures her. It is the reason she runs at 0430 — not discipline, but the inability to stay still when the dreams come. The reason she maps every room she enters: because once, she didn't know the exits, and it cost her everything.

Spark notices that Ghost reads Korean poetry sometimes. Not the modern stuff — the old sijo forms, three lines, tight as a fist. She asks about it once.

"My husband used to read them to the girls at bedtime," Ghost says. "They didn't understand most of it. They liked the sound."

She turns the page. The conversation is over.`,
  },

  {
    chapter_num: 19,
    tier: 'roots',
    title: 'What She Kept',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'spark', min_missions: 5 },
    content: `The duffel bag contains: three changes of clothes, all black. One pair of running shoes. A cleaning kit for her rifle. A tin of boricha. A book of Korean poetry with a family photograph inside. A child's drawing of a cat with too many legs. A man's wristwatch, stopped at 14:07.

That's it. That's what she took from a life that, until the sky opened, had filled a three-bedroom apartment with shoes and crayon drawings and the smell of sesame oil.

She shows Spark the drawing one evening, without context or preamble. Just holds it out like a card she's been dealt. Spark takes it carefully, studies the lopsided cat, the purple sky, the Korean characters at the bottom that she can't read.

"Min-seo," Ghost says. "She was going to be an artist."

Spark hands it back. Ghost returns it to the bag. The zipper closes with a sound like a small, final door.`,
  },

  {
    chapter_num: 20,
    tier: 'roots',
    title: 'The Weight of Intel',
    unlock_type: 'missions',
    unlock_value: { min: 28 },
    is_achievement: true,
    achievement_name: 'Han',
    achievement_desc: 'Completed Ghost\'s Roots tier — you\'ve learned what she carries and why.',
    content: `There is a specific cruelty to being an intelligence operative who lost everything. Ji-Yeon Kim is trained to know things — to intercept, decode, analyze, predict. She is a machine for turning noise into knowledge.

She knew the alien signals were targeting residential districts. She knew the attack pattern was sweeping south-southeast. She knew, in the abstract, clinical way of intelligence work, that Gangnam-gu was in the kill zone.

She also knew that leaving the SCIF would mean losing the signal thread she was following — the one that, an hour later, gave the military the evacuation corridors.

Four thousand strangers, or three people she loved.

She chose. She has lived with the math ever since.

At UNOPCOM, she throws herself into the work with the intensity of someone paying a debt that can never be settled. Every mission is an equation. Every life saved is a number that never quite balances the ledger. She knows this. She runs the numbers anyway, at 0430, alone in the dark, one foot after the other, 5.2 kilometers, and the debt does not get smaller but neither does she stop.`,
  },

  // ── TIER: CRACKS (21-30) ──────────────────────────────────────────

  {
    chapter_num: 21,
    tier: 'cracks',
    title: 'The Flinch',
    unlock_type: 'missions',
    unlock_value: { min: 27 },
    content: `It happens during a routine clearing operation. A doorway, a shadow, a child's shoe on the floor. Ghost freezes. Not for long — two seconds, maybe three — but in a combat zone, three seconds is a geological age.

Ironside sees it. He doesn't say anything in the field, just smoothly covers her sector until she starts moving again. But afterward, in the debrief, he finds her in the corridor.

"How long has that been happening?"

"It doesn't happen." Her voice is flat. Final.

"Kim. I saw it."

She looks at him with those dark, still eyes. "Then you saw nothing. Like everyone else."

She walks away. Ironside lets her go, but he starts watching her more carefully after that, the way you watch a structure for hairline cracks.`,
  },

  {
    chapter_num: 22,
    tier: 'cracks',
    title: 'Overwatch',
    unlock_type: 'missions',
    unlock_value: { min: 30 },
    content: `Ghost volunteers for overwatch more often than rotation requires. High positions. Long scopes. Maximum distance between herself and the action. The command staff calls it tactical preference. Ironside calls it what it is.

"You're putting walls between yourself and the squad."

"I'm putting a scope between the squad and the things trying to kill them. It's called overwatch."

"It's called avoidance, Kim."

She doesn't respond. She doesn't need to. From an overwatch position she can see the whole field — every angle, every approach, every threat. She can protect everyone from up here. She can see everything. She can touch nothing.

And here is what she will not say, what she has never said: up here, no one is in her hands. The squad moves below her, small in the scope, and she watches over them the way you watch over something through glass — close enough to see, far enough that the glass keeps the worst scenarios from being immediate. Ironside is right. She knows he is right. The avoidance is real.

It is also, she has calculated, the only way she can keep doing this without breaking.

At seventeen kilometers she could not save her family. From the overwatch position she can save everyone below. These are not the same thing and she knows they are not the same thing. But the body makes its own math, and her body has decided that height equals control and control equals no more losses and no more losses equals something she can survive.

She stays on overwatch. For now. Ironside watches her, and she watches everyone else, and the glass holds.`,
  },

  {
    chapter_num: 23,
    tier: 'cracks',
    title: 'Cold Calculation',
    unlock_type: 'chance',
    unlock_value: { probability: 0.15 },
    content: `During a mission gone sideways, Ghost makes a call that saves the squad but costs a civilian. A refugee hiding in a building she directs fire toward. She saw him on the thermal. She calculated the angles, the timing, the probability. The math said he was already dead.

The math was right. The refugee had been wounded, immobile, directly in the blast path of an alien charge that would have killed the whole squad. There was no extraction scenario that worked.

Afterward, in the showers, she stands under the water for forty-five minutes. Nobody disturbs her.

Raven finds her later in the mess, staring at untouched food. "You made the right call."

"I know."

"Then why do you look like that?"

"Because knowing the right call and feeling it are different languages, and I've never been fluent in the second one."`,
  },

  {
    chapter_num: 24,
    tier: 'cracks',
    title: 'Spark\'s Question',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'spark', min_missions: 10 },
    content: `Spark is young enough to ask the questions everyone else has learned not to. "Do you ever think about what happens after? When this is over?"

They're cleaning weapons side by side. Ghost's hands don't pause. "After is a luxury."

"That's not an answer."

"It's the only one I have."

Spark pushes, because Spark always pushes. "You could teach. Languages, intelligence work. You could —"

"I could do many things." Ghost sets down the barrel. "I could have done many things. The problem with 'after' is that it requires you to believe there will be one. I operate on what is."

Spark is quiet for a moment. Then: "That sounds lonely."

Ghost picks up the barrel again. "Lonely is a word for people who expected company."

But that night, for the first time, she brews two cups of boricha.`,
  },

  {
    chapter_num: 25,
    tier: 'cracks',
    title: 'The Map Wall',
    unlock_type: 'missions',
    unlock_value: { min: 35 },
    content: `Ghost has been building something in the unused storage room adjacent to the briefing area. Nobody noticed for weeks — she works on it at night, after the tea ritual, after the base settles into its shallow sleep.

Frost discovers it during a late-night walkabout: a wall covered in hand-drawn maps, photographs, intercepted signals, string connecting points like a conspiracy theorist's fever dream. Except it isn't fevered. It is meticulous. It is, Frost realizes, a complete picture of every alien incursion pattern they've encountered, overlaid with her personal mission notes, creating a predictive model that's more detailed than anything the intel division has produced.

"How long have you been doing this?" he asks.

"Since I arrived."

"Does command know?"

"Command has the reports I file. This is..." She touches a string connecting two photographs. "This is how I see it. The shape of it."

Frost looks at the wall and sees something else: a woman who cannot stop working, because working means not thinking, and not thinking means surviving another night.`,
  },

  {
    chapter_num: 26,
    tier: 'cracks',
    title: 'Nightmare Cartography',
    unlock_type: 'time',
    unlock_value: { min_days: 30 },
    content: `She wakes at 0300, an hour before her alarm, gasping. The dream is always the same: she is running through Gangnam-gu, but the streets are wrong — they shift and fold like her mission maps, and the apartment building is always one turn away, one more corner, one more block. She can hear Min-ji calling. "Eomma! Did you know octopuses have three hearts?"

She never reaches the building.

In the bunk below, Spark stirs. Ghost freezes, controls her breathing, waits. Spark settles. Ghost lies still in the dark and counts backward from one thousand in Mandarin until her heart rate normalizes.

At 0430, she runs. The route is exactly 5.2 kilometers. It takes thirty-one minutes. Every step is a step that is not toward Gangnam-gu, not toward the apartment, not toward the door she never opened. Every step is forward, which is the only direction left.`,
  },

  {
    chapter_num: 27,
    tier: 'cracks',
    title: 'The Armor of Competence',
    unlock_type: 'rank',
    unlock_value: { min: 3 },
    content: `Raven confronts her after a briefing where Ghost systematically dismantled another operative's mission plan — not cruelly, but with a clinical precision that left the room silent and the operative red-faced.

"You were right about the approach vectors," Raven says. "You were wrong about how you said it."

"I said it accurately."

"You said it like a scalpel. These people aren't problems to solve, Kim."

Ghost's jaw tightens. "Being liked is not part of my operational parameters."

Raven leans against the wall, arms crossed. "No. But being trusted is. And trust requires people to see you as human, not as a machine that happens to be right all the time."

The silence stretches. Ghost's eyes flicker — the only sign she's processing something that isn't tactical data.

"I will... consider your assessment," she says finally.

Raven nods. It's a start.`,
  },

  {
    chapter_num: 28,
    tier: 'cracks',
    title: 'The Almost Smile',
    unlock_type: 'missions',
    unlock_value: { min: 40 },
    content: `Spark trips over a cable in the armory and sends a rack of magazines clattering across the floor. It's a spectacular disaster — metal on concrete, Spark on her back, magazines rolling in every direction like startled animals.

Ghost looks up from her workbench. Her mouth does something. It's not a smile — not quite. It's the ghost of a smile, the architectural blueprint of one, the load-bearing structure without the facade. It lasts about half a second.

Spark sees it. "Did you just — was that a —"

"No," Ghost says, and goes back to her rifle.

But Spark saw it. She tells Frost, who tells Ironside, who says nothing but files it away as evidence that Ji-Yeon Kim is, beneath the permafrost, still alive.`,
  },

  {
    chapter_num: 29,
    tier: 'cracks',
    title: 'Perimeter Breach',
    unlock_type: 'event',
    unlock_value: { event_type: 'territory_lost' },
    content: `When the base perimeter is breached, Ghost does not go to the armory. She goes to the barracks. She grabs her duffel bag.

It's Titan who finds her there, bag over her shoulder, rifle in hand, eyes scanning the corridor with the flat intensity of someone who has already lost one home and will not lose the contents of that bag.

"Kim. We need you on the south wall."

"I know."

"Then put the bag down."

She looks at him. For the first time, Titan sees something behind the calm — not panic, but a vast and terrible calculus. The same math she ran in the SCIF seventeen kilometers from Gangnam-gu.

"Sixty seconds," she says. She opens her footlocker, puts the bag inside, locks it. Then she is running toward the south wall, and she is Ghost again — fast, silent, lethal.

The perimeter holds. The bag stays in the locker. Titan never mentions it.`,
  },

  {
    chapter_num: 30,
    tier: 'cracks',
    title: 'The Mask Slips',
    unlock_type: 'missions',
    unlock_value: { min: 45 },
    is_achievement: true,
    achievement_name: 'Hairline Fracture',
    achievement_desc: 'Completed Ghost\'s Cracks tier — the stillness is starting to break.',
    content: `It is a small thing that undoes her. Not a mission, not a death, not an alien incursion. A letter. Forwarded through three intelligence agencies, six months delayed, originally addressed to the apartment in Gangnam-gu.

From Min-ji's school. A report card. Her daughter's teacher had written: "Min-ji is a bright and curious student who asks more questions than any child I've taught in twenty years. She will do extraordinary things."

Ghost reads it in the corridor outside the mail room. She reads it again. She folds it carefully, precisely, along the original crease lines.

Then she walks to the storage room with the map wall and closes the door, and the base, for the first time, hears Ji-Yeon Kim cry. It is a sound like something structural giving way — quiet at first, then not. The sound of a woman who has held everything in for years finally finding a crack too wide to seal.

Spark stands outside the door for an hour, not entering, not leaving. Just present. Just there.

When Ghost finally emerges, her eyes are red and her face is composed and she says, "Thank you," without specifying for what.

Spark doesn't ask.`,
  },

  // ── TIER: SECRETS (31-40) ─────────────────────────────────────────

  {
    chapter_num: 31,
    tier: 'secrets',
    title: 'The SCIF Door',
    unlock_type: 'missions',
    unlock_value: { min: 48 },
    content: `The truth is heavier than Ghost has let anyone see.

She didn't just stay in the SCIF because of the signal thread. She stayed because her station chief gave her a direct order, and she obeyed. But the order came seven minutes after the incursion started, and in those first seven minutes — the chaos, the confusion, the sky tearing open — she had a window. Seven minutes where the streets were passable, where the emergency corridors weren't yet jammed, where a car moving fast could have covered seventeen kilometers before the second wave hit.

Seven minutes.

She spent them verifying a signal pattern. Not because she was ordered to — the order came later. Because the analyst in her saw the pattern forming and her training took over. Her hands moved to the console before her heart caught up.

She chose the work. Then the order came. Then the window closed.

Seven minutes. She has counted them every day since.`,
  },

  {
    chapter_num: 32,
    tier: 'secrets',
    title: 'The Call She Didn\'t Make',
    unlock_type: 'missions',
    unlock_value: { min: 50 },
    content: `There is a detail she has never told anyone, not Titan during the tea hours, not Spark during the quiet moments. In those seven minutes, she picked up her phone. She dialed home. The line was busy — Seo-jun was probably calling her, or calling emergency services, or calling his mother.

She hung up. She could have called again. She could have kept trying. She could have sent a text: "Get out. Go north. Now."

Instead, she put the phone down and went back to the signal.

She tells herself she didn't send the text because the network was overloaded, because it might not have gone through, because Seo-jun was smart enough to evacuate on his own.

She knows the truth. She didn't send it because the signal pattern was resolving, and for three critical seconds, the work was more real to her than her family.

Three seconds of prioritization. That is what she cannot forgive.`,
  },

  {
    chapter_num: 33,
    tier: 'secrets',
    title: 'The Evacuation Corridors',
    unlock_type: 'rank',
    unlock_value: { min: 4 },
    content: `The cruelest part is that the evacuation corridors she mapped — the ones that saved four thousand people — ran through Gangnam-gu. If she had been there, on the ground, she might have guided her family into one. The math works. She has run it a thousand times on the map wall, the red string connecting her apartment to the nearest corridor like an artery.

Twelve minutes on foot. Six if running. Seo-jun could have carried the twins.

But Seo-jun didn't know about the corridors. Nobody did, until Ghost found them in the signals. The corridors existed because she stayed. Her family died because she stayed. The same choice made and unmade everything.

She stands in the storage room at 0200, tracing the red string with her finger, and the map shows her what she already knows: there is no version of this story where everyone lives.`,
  },

  {
    chapter_num: 34,
    tier: 'secrets',
    title: 'Frost Figures It Out',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'frost', min_missions: 12 },
    content: `Frost has been reading the map wall. Not the tactical data — that's beyond him. The timeline. He's been piecing together the dates, the locations, the gap between the incursion timestamp and Ghost's first filed report.

He doesn't confront her. That's not his way. He just appears at the evening tea one night, sits across from her, and says, quietly, "You were there. In the building. When it happened."

"The SCIF. Yes."

"And you could have left."

Silence. The tea steams between them.

"Seven minutes," she says. It's the first time she's said the number out loud.

Frost doesn't offer comfort. He doesn't tell her she made the right choice. He sits with her in the silence and lets the number exist in the space between them — heavy, real, shared.

When he leaves, he touches her shoulder. Once. Briefly. She doesn't flinch.`,
  },

  {
    chapter_num: 35,
    tier: 'secrets',
    title: 'Duty and Its Costs',
    unlock_type: 'missions',
    unlock_value: { min: 55 },
    content: `The word she uses, when she finally allows herself to think about it directly, is not "choice." It is "training." She was trained to prioritize the mission. Eleven years of NIS discipline, of operational compartmentalization, of putting the work above the personal. She was the perfect operative.

The perfect operative's family died seventeen kilometers away while she decoded signals.

This is the architecture of her guilt: not that she chose wrong, but that she chose at all. That her training was so thorough it overwrote her instincts as a mother, as a wife. That the machine worked exactly as designed and the cost was everything human in her.

She tells Ironside this on a rooftop during a long stakeout, in the dead hours between midnight and dawn when exhaustion makes honesty easier. He listens without moving.

"You weren't a machine," he says. "Machines don't spend years hating themselves for working."

She considers this. "That's either the most comforting or the most devastating thing anyone has ever said to me."

"It can be both," Ironside says. He would know.`,
  },

  {
    chapter_num: 36,
    tier: 'secrets',
    title: 'Min-seo\'s Cat',
    unlock_type: 'missions',
    unlock_value: { min: 60 },
    content: `She unfolds the drawing and shows it to Spark properly for the first time — not a glimpse, but a full showing, held out in both hands.

"The cat has seven legs," Spark observes.

"Min-seo was working through a phase where more was better. More legs, more colors, more everything." Ghost's voice is steady but thin, like ice over deep water. "I told her cats have four legs. She said her cat was special."

"She was right. That's a very special cat."

Ghost looks at the drawing. Seven-legged cat. Purple sky. The name in Korean at the bottom: Min-seo Kim, age 7.

"I could have saved them." The words come out stripped bare. No context, no explanation. Just the raw fact. "I had seven minutes and I chose the console."

Spark doesn't recoil. Doesn't reassure. She sits next to Ghost on the bunk and puts her hand on top of Ghost's hand, on top of the drawing, and they stay like that while the base hums around them.

"You saved four thousand people," Spark says eventually.

"I know the number."

"Do you know their names?"

Ghost looks at her.

"Because they know yours. Somewhere. Someone is alive because of you."

It is not absolution. But it is something.`,
  },

  {
    chapter_num: 37,
    tier: 'secrets',
    title: 'The Watch',
    unlock_type: 'streak',
    unlock_value: { min: 14 },
    content: `Seo-jun's watch stopped at 14:07. The exact minute the first wave hit. Ghost found it in the recovery site three weeks after the incursion — one of the few personal effects returned to her. The crystal was cracked but the hands were intact, frozen at the moment the world ended.

She has never wound it. Never repaired it. It sits in the duffel bag like a small monument, keeping the time of a world that no longer exists.

Titan asks about it once, having seen it during the perimeter breach. She holds it out to him. He takes it, reads the time, and hands it back.

"My wife's ring does the same thing," he says. "Keeps the time of a different life."

Ghost looks at him — really looks, not the tactical scan she gives everyone. "Do you ever want to let it go?"

"Every day."

"Do you?"

"No." He smiles, just barely. "And neither do you."

She puts the watch back in the bag. 14:07. The hands don't move. The world does.`,
  },

  {
    chapter_num: 38,
    tier: 'secrets',
    title: 'The Confession',
    unlock_type: 'missions',
    unlock_value: { min: 65 },
    content: `She tells Raven everything. Not in pieces, not in implications — the whole thing, start to finish, seven minutes and a phone call and a signal pattern and four thousand strangers.

Raven listens from beginning to end without interrupting. When Ghost finishes, the silence is long enough to feel permanent.

"You want me to judge you," Raven says.

"I want someone to."

"Why?"

"Because I can't stop judging myself, and I'm not sure I'm being fair."

Raven uncrosses her arms. "You made a tactical decision under conditions of total uncertainty with seven minutes of actionable time. Your training responded before your emotions could override it. The outcome was a net positive by any quantitative measure."

"That's the analyst's answer."

"Here's the human one: you will never stop grieving what you lost. And you should never be asked to. But wearing guilt like armor isn't honoring them — it's punishing yourself for being exactly good enough at your job to make the choice that hurt the most."

Ghost's eyes are bright. She blinks once. Twice.

"That's the best anyone's done," she says quietly. "Thank you."`,
  },

  {
    chapter_num: 39,
    tier: 'secrets',
    title: 'The Empty Room',
    unlock_type: 'time',
    unlock_value: { min_days: 60 },
    content: `Ghost takes down the map wall.

It happens over the course of one night — photographs removed, strings cut, notes filed. By morning, the storage room is bare except for the marks where the tape was. The tactical data goes to intel, properly formatted. The personal annotations stay in her folder.

Frost notices first. "What happened to the wall?"

"It was finished."

"The analysis?"

"The project." She pauses. "I was using it to not deal with something. Raven pointed that out. She was right."

The room stays empty for three days. Then Ghost begins using it for a different purpose: she starts teaching Spark signal analysis, using the cleared wall as a whiteboard. Korean characters appear alongside English, alongside tactical symbols.

The room that was a monument becomes a classroom. Ghost isn't sure when the transition happened, but she stands at the wall with chalk in her hand and Spark asking questions and thinks: this is the first new thing I've built in years.`,
  },

  {
    chapter_num: 40,
    tier: 'secrets',
    title: 'Seven Minutes',
    unlock_type: 'missions',
    unlock_value: { min: 70 },
    is_achievement: true,
    achievement_name: 'Seven Minutes',
    achievement_desc: 'Completed Ghost\'s Secrets tier — you know what she chose and what it cost.',
    content: `On the anniversary of the incursion, Ghost runs a different route. Not 5.2 kilometers around the perimeter. She runs until she can't, out into the terrain beyond the base, following no map, until her lungs burn and her legs give and she ends up on a ridge overlooking nothing in particular.

She sits there as the sun comes up and she speaks to them. In Korean, quietly, the way Seo-jun used to read sijo to the twins. She tells Min-ji about the octopus research UNOPCOM's science division is doing. She tells Min-seo that she still has the cat drawing and that everyone who sees it agrees: seven legs is better. She tells Seo-jun about the equation she's been working on in her head — a topology problem she thinks he'd like, something about the shape of loss and how it curves back on itself.

She tells them she's sorry. She tells them she chose wrong. She tells them she'd choose wrong again, because that's what she is — the woman who sees the pattern and follows it, even when following it means losing everything.

Then she runs back. Spark is waiting at the gate with two cups of boricha. Neither of them says anything.

Ghost takes the tea.`,
  },

  // ── TIER: LEGACY (41-50) ──────────────────────────────────────────

  {
    chapter_num: 41,
    tier: 'legacy',
    title: 'The Door Opens',
    unlock_type: 'missions',
    unlock_value: { min: 72 },
    content: `Something shifts. It is not dramatic — Ghost does not become a different person overnight. But the people who know her notice the small changes. She sits in the mess hall where others can join her, not in the corner with her back to the wall. She offers observations in briefings without being asked. She brews boricha for three cups now: herself, Titan, and whoever else appears.

Ironside calls it thawing. Raven calls it healing. Spark calls it "Ghost being less Ghost."

Ghost herself doesn't name it. Naming things gives them weight, and this feels fragile — a new structure built on old foundations, not yet load-tested. But she lets Spark sit next to her during meals. She responds to Frost's dry humor with something that, in the right light, could be called banter. She reviews Ironside's tactical plans and delivers her criticism with what Raven identifies as "tact."

It is, by Ghost's standards, a revolution.`,
  },

  {
    chapter_num: 42,
    tier: 'legacy',
    title: 'The Student',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'spark', min_missions: 20 },
    content: `Spark is good at signal analysis. Really good. Ghost had suspected it — the girl has the patience, the pattern recognition, the willingness to sit with noise until it becomes data. But watching her develop over weeks of training, Ghost feels something she hasn't felt in years: pride.

Not the cold satisfaction of a job done well. The warm, specific pride of a teacher watching a student find their own way through a problem. Min-ji's face flashes through her mind — the way her daughter would light up when she understood something new — and for the first time, the memory doesn't cut. It aches, but it doesn't cut.

"You're ready for live intercepts," Ghost tells Spark.

Spark's eyes go wide. "Seriously?"

"I don't joke about operational readiness."

"You don't joke about anything."

Ghost's mouth does the thing. The almost-smile. "Accurate."`,
  },

  {
    chapter_num: 43,
    tier: 'legacy',
    title: 'Running Together',
    unlock_type: 'time',
    unlock_value: { min_days: 75 },
    content: `Spark starts running with her. Not at 0430 — nobody is that committed — but Ghost adjusts her route to 0500, and Spark is there, bleary-eyed and complaining, matching her stride.

They run in silence for the first week. Then Spark starts talking, because Spark always starts talking, and Ghost doesn't stop her. The words fill the space between footfalls like a second rhythm: stories about Spark's family, her old life, the university she never finished, the dog she misses.

Ghost listens. She learns things about Spark that have nothing to do with signal analysis or combat readiness. She learns that Spark's mother makes the best dalgona, that Spark once wanted to be a marine biologist, that she is terrified of spiders.

One morning, halfway through the route, Ghost says: "Min-ji wanted to be a veterinarian."

Spark doesn't break stride. "She would have been great at it."

"Yes. She would have."

They run the rest in silence, but it is a different kind of silence — not empty but full, the way a room is full after someone has filled it with music.`,
  },

  {
    chapter_num: 44,
    tier: 'legacy',
    title: 'The Frost Bond',
    unlock_type: 'missions',
    unlock_value: { min: 78 },
    content: `Ghost and Frost develop a rapport that confuses everyone because it looks, from the outside, like two people ignoring each other. They share watch shifts in comfortable silence. They sit across from each other at meals without speaking. They coordinate in the field with gestures so subtle that other squad members occasionally ask if they've developed telepathy.

"We just pay attention," Frost says when asked.

Ghost, asked the same question separately, says exactly the same thing.

The truth is simpler and more complicated: they are both people who live in the quiet spaces, who communicate in what isn't said, who understand that presence is its own language. Ghost has spent years building walls. Frost doesn't try to breach them — he just sits on his side and makes it clear the wall isn't necessary.

It is, Ghost thinks, the most restful friendship she has ever had.`,
  },

  {
    chapter_num: 45,
    tier: 'legacy',
    title: 'The New Map',
    unlock_type: 'missions',
    unlock_value: { min: 82 },
    content: `Ghost starts a new map wall. Not in the storage room — in the briefing room, where everyone can see it. This one isn't a monument to loss or a coping mechanism dressed as analysis. It's a tool, a living document, updated daily with fresh intelligence.

She teaches the whole squad to read it. Color codes, symbol keys, probability markers. Raven adds her own notations. Ironside contributes tactical overlays. Spark maintains the signal intercept layer.

It becomes the nerve center of their operations, and Ghost stands at the center of it — not alone, not hidden in a back room at 0200, but surrounded by people who need what she knows and respect how she knows it.

She catches herself, one evening, explaining a pattern to a new recruit with patience she didn't know she still had. The recruit nods, understanding. Ghost feels the warmth again — the teacher's warmth, the specific heat of knowledge passed from one mind to another.

She is building something. Not just a map. A network. A web of people connected by shared understanding.

It looks, she realizes, nothing like the old map. It looks like the future.`,
  },

  {
    chapter_num: 46,
    tier: 'legacy',
    title: 'Letters Unsent',
    unlock_type: 'streak',
    unlock_value: { min: 21 },
    content: `She writes to them. Not letters — she isn't sentimental in that way. Notes. Short, precise, the way she writes mission annotations.

"Min-ji: the science team found a new species today. Aquatic. Six limbs. You would have had questions."

"Min-seo: Spark drew something on the briefing whiteboard. A tactical diagram. It reminded me of your cats. Better proportions, fewer legs."

"Seo-jun: there is a topology to grief. You were right — everything curves back. But I think the curvature is changing."

She doesn't keep them. Writes them, reads them once, destroys them. The act of writing is the point — a way of maintaining the connection without being trapped by it.

One night, she writes: "I am letting people in. You would like them."

She keeps that one.`,
  },

  {
    chapter_num: 47,
    tier: 'legacy',
    title: 'The Bag Unlocked',
    unlock_type: 'missions',
    unlock_value: { min: 88 },
    content: `Ghost unlocks the duffel bag. Not to take anything out — to put something in. A photograph, taken by Spark on a disposable camera she'd scrounged from somewhere: the squad, post-mission, dirty and exhausted and alive. Ghost is in the frame, slightly off-center, not quite smiling but not hiding either. Present.

She puts it next to the family photograph. The old photo and the new one, side by side in a bag that used to contain everything she had left.

Now it contains something else: a before and a possible after.

She zips the bag. She doesn't lock it.`,
  },

  {
    chapter_num: 48,
    tier: 'legacy',
    title: 'The Name',
    unlock_type: 'missions',
    unlock_value: { min: 92 },
    content: `"Call me Ji-Yeon."

Spark blinks. They're in the signal room, mid-analysis, and the words come out of nowhere. "What?"

"My name. You can use it."

"You've been 'Ghost' for —"

"I know. Ghost is what I was. Ji-Yeon is what I am." She pauses. "If you're comfortable with that."

Spark grins. It's the kind of grin that lights up her whole face, and Ghost — Ji-Yeon — absorbs it like sunlight after a long winter.

The name spreads through the squad slowly. Not everyone uses it. Raven switches immediately, as if she'd been waiting. Frost tries it once, nods to himself, but mostly keeps to "Kim" because that's how they are. Ironside uses it in private, "Ghost" in the field. Titan raises his coffee cup to her across the mess hall and says, "Ji-Yeon. Good name."

"I've always thought so," she says. And means it.`,
  },

  {
    chapter_num: 49,
    tier: 'legacy',
    title: 'The Sijo',
    unlock_type: 'rank',
    unlock_value: { min: 6 },
    content: `She reads a sijo aloud in the common room. It's late, and the squad is scattered across chairs and bunks in the comfortable disorder of people who trust each other. Nobody asked her to read it. She just opens the book and begins, first in Korean, then in English.

The river forgets the mountain it came from.
The mountain does not forget the river.
Both go on.

The room is quiet for a moment. Spark is sitting on the floor, leaning against Ghost's bunk. Frost is sharpening a blade. Titan has his eyes closed. Ironside is studying mission reports, pen paused mid-note. Raven looks at Ghost with an expression that might be recognition — one professional acknowledging another's transformation.

"That's beautiful," Spark says.

"Seo-jun read it to the twins the night before—" Ghost stops. Starts again. "He read it to them. They didn't understand. But I do, now."

The mountain does not forget the river. You carry what you've lost. But you go on.`,
  },

  {
    chapter_num: 50,
    tier: 'legacy',
    title: 'Family',
    unlock_type: 'missions',
    unlock_value: { min: 100 },
    is_achievement: true,
    achievement_name: 'Still Here',
    achievement_desc: 'Completed Ghost\'s full story — Ji-Yeon Kim chose to live.',
    content: `The morning after a mission that nearly killed them all, Ghost brews boricha for the whole squad. Not two cups, not three — a full pot, the biggest one she can find in the kitchen, carried to the common room on a tray she borrowed from the mess.

She pours without speaking. Hands a cup to each of them. Spark. Frost. Raven. Ironside. Titan. The new ones too — everyone who is here, alive, present.

Then she sits down among them and takes out the family photograph. She holds it so they can see it. A woman, a man, two small girls in school uniforms. Autumn. Leaves on the ground. Everyone smiling.

"This is Seo-jun," she says. "He taught mathematics and he couldn't cook. This is Min-ji. She wanted to be a veterinarian. This is Min-seo. She drew cats with seven legs."

Her voice is steady. Her eyes are clear.

"They were my family. I lost them. I spent a long time believing that was the end of the story."

She puts the photograph on the table, face up, and looks around the room at the people holding cups of barley tea.

"It wasn't."

The morning light comes through the window. The tea steams. Spark puts her hand on Ghost's shoulder, and Ghost — Ji-Yeon — lets it stay.

She has been a ghost for long enough. The dead deserve their rest. The living deserve their tea.

Here is the part they don't tell you: none of this is fixed. The morning comes again. The war doesn't end because one person decides to rejoin it. The wristwatch in the duffel bag still reads 14:07. Min-ji still wanted to be a veterinarian. Min-seo's cat still has seven legs.

What changes is not what happened. What changes is what she does with it.

She unzips the bag — all the way, for the first time in years — and leaves it open on the bed. Not empty. Full of what she carries. But open.

This is as close to an ending as a true story gets.`,
  },
];

// ── Reactions ─────────────────────────────────────────────────────────

const reactions = [
  {
    event_type: 'mission_complete',
    text: 'Ghost says nothing, but she marks the mission on her wall map with a small, precise circle. Another data point. Another survival.',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    text: '"They had more to tell." Ghost\'s voice is barely audible. She closes her eyes for three seconds — exactly three — then opens them and returns to the map.',
    priority: 2,
  },
  {
    event_type: 'territory_lost',
    text: 'Ghost studies the territory report with an intensity that makes the paper seem like it should catch fire. "Show me the signal data. All of it."',
    priority: 1,
  },
  {
    event_type: 'territory_defended',
    text: 'A single nod from Ghost. Those who know her understand: that nod is a standing ovation.',
    priority: 1,
  },
  {
    event_type: 'streak_milestone',
    text: 'Ghost brews an extra cup of boricha and leaves it on the common room table. No note. No explanation. The gesture speaks for itself.',
    priority: 1,
  },
  {
    event_type: 'rank_up',
    text: '"Rank is a number. What matters is whether the people beside you trust your count." Ghost pauses. "But... acknowledged."',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    text: 'Ghost is seen in the storage room at 0200, adding a name to a list written in Korean on the back of the door. No one asks what the list is.',
    priority: 1,
  },
  {
    event_type: 'mission_complete',
    text: '"Everyone came back." Ghost says it like a fact, but Spark hears the relief underneath.',
    priority: 0,
  },
];

// ── Relationships ─────────────────────────────────────────────────────

const relationships = [
  {
    char_a: 'ghost',
    char_b: 'spark',
    rel_type: 'mentor_protege',
    description: 'Ghost sees her younger self in Spark — the curiosity, the refusal to look away. She teaches Spark signal analysis and, without meaning to, how to carry loss without being crushed by it.',
  },
  {
    char_a: 'ghost',
    char_b: 'frost',
    rel_type: 'bond',
    description: 'A silent understanding. Two people who live in quiet spaces and communicate through presence rather than words. Frost never tries to breach Ghost\'s walls — he just makes clear they aren\'t necessary.',
  },
  {
    char_a: 'ghost',
    char_b: 'raven',
    rel_type: 'bond',
    description: 'Professional respect between two operatives who read rooms the same way. Raven is one of the few people who can challenge Ghost directly and be heard.',
  },
  {
    char_a: 'ghost',
    char_b: 'titan',
    rel_type: 'bond',
    description: 'The tea ritual. Two haunted people who sit together in comfortable silence and understand that some losses never fully heal, only change shape.',
  },
  {
    char_a: 'ghost',
    char_b: 'ironside',
    rel_type: 'tension',
    description: 'Ironside watches Ghost for cracks, recognizing the signs of guilt he knows too well. Ghost resents the scrutiny until she realizes it comes from understanding, not judgment.',
  },
  {
    char_a: 'ghost',
    char_b: 'blaze',
    rel_type: 'tension',
    description: 'Ghost finds Blaze\'s noise exhausting in the way a surgeon finds a fire alarm exhausting — not wrong, just wrong for the work. She can\'t argue with results. That\'s what makes it worse.',
  },
  {
    char_a: 'ghost',
    char_b: 'storm',
    rel_type: 'bond',
    description: 'Two people who have learned to compress grief into function. Ghost recognizes in Storm the particular stillness of someone who has stopped flinching. They don\'t need to discuss it.',
  },
];

module.exports = { template, chapters, reactions, relationships };
