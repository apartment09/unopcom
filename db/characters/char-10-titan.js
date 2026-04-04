/**
 * Character 10: Titan — Nils Johansson
 * The oldest soldier on the roster. 58. Three decades of service.
 * Terrible jokes. Terminal diagnosis. The emotional heart of the squad.
 */

const template = {
  id: 'titan',
  name: 'Nils Johansson',
  callsign: 'Titan',
  nationality: 'Swedish',
  personality: ['brave', 'humorous', 'compassionate', 'idealistic'],
  motivation: 'One last good fight — make it count',
  background: 'Fifty-eight years old. Three decades Swedish Armed Forces, two UN peacekeeping tours, first contact witness in 2019 above the Arctic Circle. Left the service with commendations and a buried incident report. Arrived at UNOPCOM four weeks after a terminal diagnosis he hasn\'t shared with anyone yet. Tells terrible jokes on purpose. The squad\'s center of gravity. He knows exactly how much time he has and intends to use every day of it.',
  portrait_sprite: 'xcom1',
};

// ── 50 Chapters ────────────────────────────────────────────────────

const chapters = [
  // ── SURFACE (1-10) ───────────────────────────────────────────────
  {
    chapter_num: 1,
    tier: 'surface',
    title: 'The Old Man',
    content: `What Nils Johansson carries:

A duffel bag older than half the squad — canvas, worn at the corners, patched twice. Inside: a set of beeswax candles, Swedish-made, wrapped in cloth. A folded flag. Thirty-one years of service records, the paper copies, because he stopped trusting servers. A notebook he is beginning to fill with the kind of things you write when you want to make sure they outlast you. A photograph of a woman named Ingrid, who has been dead nine years, kept in the inside pocket of the bag where it won't bend.

The real list:

He carries thirty-one years — not as a weight but as a tool, the way a carpenter carries his experience of wood. He carries two peacekeeping tours and the moral complexity of keeping peace in places that haven't decided they want it. He carries the valley in northern Sweden in February 2019, above the Arctic Circle, eleven minutes of standing in the snow looking at a craft that didn't belong to any category, and the specific feeling of being the only person in the room who knows the categories are wrong. He carries the report he filed that was buried and the seven years of being the crazy old man who saw something. He carries Ingrid — not the loss of her, which is too large to carry, but the specific quality of her attention, the way she used to look at him like he was the most interesting thing in any room. He carries the diagnosis from the oncologist in Göteborg, delivered four weeks ago, in a parking lot afterward where he sat in his car for twenty minutes and made a decision.

He drops the bag on the last available bunk. He surveys the room with the grin of a man who has done this forty times and knows it only looks easy.

"Fifty-eight years old," Ironside reads. "First contact witness."

From across the room, Viper: "Recruiting from the retirement home now?"

He turns to her. "Young lady, I was clearing buildings before you were clearing acne." He extends his hand. "Call me Titan. Everyone does."

She shakes it. For once, she doesn't have a comeback.

That's the thing about Titan. He disarms you before you know you're armed.

In the parking lot in Göteborg, the decision he made was this: not in a bed. Not at the end of a tube. Here, with these people, making the days count.

Six months to a year. He intends to use every one.`,
    unlock_type: 'missions',
    unlock_value: { min: 0 },
  },
  {
    chapter_num: 2,
    tier: 'surface',
    title: 'First Contact (The Real One)',
    content: `Over drinks, Titan tells the story. Not the classified version — the real one.

"February 2019. Northern Sweden, above the Arctic Circle. My patrol picks up a thermal signature that shouldn't exist. We follow it into a valley. And there it is — a craft. Not a plane, not a drone. Something else."

The squad leans in. Even Ghost, who never leans in.

"We stood there for eleven minutes. Nobody fired. Nobody ran. We just... looked at it. And it looked at us. Then it was gone." He takes a drink. "I filed the report. They buried it. I spent the next seven years being the crazy old man who saw something in the snow."

He grins. "And then UNOPCOM called, and suddenly the crazy old man was the only one with experience."`,
    unlock_type: 'missions',
    unlock_value: { min: 1 },
  },
  {
    chapter_num: 3,
    tier: 'surface',
    title: 'The Joke Protocol',
    content: `Titan tells terrible jokes. Truly awful. He does it on purpose.

Before every mission briefing, he opens with one. "What do you call an alien who lands in Stockholm? An illegal Viking." The squad groans. Raven puts her head in her hands. Blaze laughs because Blaze laughs at everything.

Ironside pulls Titan aside. "The jokes. Are they necessary?"

"Absolutely," Titan says, completely serious. "Fear is a knot in the chest. Laughter loosens it. Even bad laughter. Especially bad laughter. Send them into the field groaning, not clenching."

Ironside considers this. "Carry on, then."

The jokes continue. The squad groans. The squad fights better.`,
    unlock_type: 'missions',
    unlock_value: { min: 2 },
  },
  {
    chapter_num: 4,
    tier: 'surface',
    title: 'Weight Room',
    content: `0500, every morning. Titan spots Storm on the bench press. Neither of them asks for this arrangement — it just happens. Storm lifts heavy. Titan lifts moderate with perfect form.

"You know," Titan says between sets, "in Sweden we have a concept called 'lagom.' It means just the right amount. Not too much, not too little."

Storm racks his bar. Looks at him.

"You, my friend, are not lagom." Titan grins. "But I respect the commitment."

Storm almost smiles. Almost.`,
    unlock_type: 'missions',
    unlock_value: { min: 3 },
  },
  {
    chapter_num: 5,
    tier: 'surface',
    title: 'War Stories',
    content: `Titan and Ironside in the officers' mess, trading stories from different decades of the same wars.

"Kosovo, '99," Ironside says.

"I was in Bosnia in '95," Titan nods. "Different year, same mud."

They talk for three hours. Not about combat — about the people. The translator who saved a village with a well-timed lie. The kid who brought them coffee every morning. The dog that adopted their platoon.

Raven listens from the next table, pretending to read. She's never heard Ironside laugh like that. Titan brings it out of people — the lightness they forgot they had.`,
    unlock_type: 'missions',
    unlock_value: { min: 4 },
  },
  {
    chapter_num: 6,
    tier: 'surface',
    title: 'Potential',
    content: `Titan watches Spark during a field test. She's improvising — rewiring a comms unit with a paperclip and solder from a dead circuit board. It works. It shouldn't, but it does.

After the test, he finds her. "You know what you are?"

Spark braces for a lecture about protocol.

"You're the reason we're going to win this war. Not the soldiers. Not the generals. The ones who look at a broken thing and see what it could be."

Spark blinks. "That's... really nice."

"Don't get used to it. Tomorrow I'm going to tell you a joke about a Swedish engineer and a Finnish sauna, and you're going to wish I'd stayed quiet."

She laughs. Titan files that away — one more person on the squad who remembers how to laugh.`,
    unlock_type: 'rank',
    unlock_value: { min: 2 },
  },
  {
    chapter_num: 7,
    tier: 'surface',
    title: 'Knowing Eyes',
    content: `Ghost operates in the margins. Titan sees it — not because he's watching, but because thirty years of service teaches you to notice the people who don't want to be noticed.

He doesn't confront Ghost. Doesn't ask questions. He just makes sure Ghost has coffee in the mornings and a clear path to the exit at dinner.

Ghost notices. Of course he does. One night he stops by Titan's bunk. "You see too much, old man."

"Occupational hazard of getting old," Titan says. "Your eyes get worse, but you start seeing the things that matter."

Ghost walks away. But the next morning, he's at the coffee station when Titan arrives. Two mugs already poured.`,
    unlock_type: 'time',
    unlock_value: { min_days: 5 },
  },
  {
    chapter_num: 8,
    tier: 'surface',
    title: 'The Field',
    content: `Titan in combat is a surprise. You expect the old man to hang back, play it safe. Instead, he moves with an economy that comes from three decades of practice. No wasted motion. No hesitation. But no recklessness either.

Razor, after the mission: "He's slow."

Blaze: "He's not slow. He's efficient. There's a difference."

Razor: "What's the difference?"

Blaze: "We run. He walks. We get there at the same time. But he's not breathing hard."

Titan, overhearing: "I'm breathing hard. I just hide it better."`,
    unlock_type: 'missions',
    unlock_value: { min: 7 },
  },
  {
    chapter_num: 9,
    tier: 'surface',
    title: 'Viper-Proof',
    content: `Viper tests everyone. It's what she does — probes for weakness, finds the angle, gets under your skin. She tries it on Titan.

"Getting a little stiff there, grandpa? Maybe take a rest day."

Titan doesn't bristle. Doesn't deflect. He looks at her with genuine warmth. "You know what I like about you, Viper? You use sharpness to keep people at a distance. But you only do that with the people you're starting to care about."

Viper opens her mouth. Closes it. Opens it again. Nothing comes out.

Blaze, from across the mess hall: "Oh my God. He broke Viper."

Titan winks at her. Viper walks away, but there's something different in her step. Not defeated. Seen.`,
    unlock_type: 'streak',
    unlock_value: { min: 3 },
  },
  {
    chapter_num: 10,
    tier: 'surface',
    title: 'The Campfire',
    content: `A night between missions. Power's down in the barracks. Titan produces a set of candles from his duffel — actual candles, beeswax, Swedish-made.

"In the field," he says, lighting them, "when the power goes out, you have two choices. Sit in the dark and worry. Or make a fire and talk."

The squad gathers. Not because they're told to. Because the light draws them. Titan tells stories. Ghost listens from the shadows. Storm stands by the door. Frost sits close but doesn't speak. Blaze interrupts constantly. Viper pretends she's only there for the warmth. Spark takes notes. Raven watches faces. Razor leans against the wall and tries not to enjoy himself.

Ironside stands in the doorway and thinks: this is a squad. Not because of training or tactics or equipment. Because of one old Swedish man with a bag of candles and a lifetime of stories.

This is what Titan does. He doesn't build teams. He builds families.`,
    unlock_type: 'missions',
    unlock_value: { min: 10 },
    is_achievement: true,
    achievement_name: "The Campfire",
    achievement_desc: "Unlocked Titan's complete Surface story — the old man lights a fire that draws everyone in.",
  },

  // ── ROOTS (11-20) ───────────────────────────────────────────────
  {
    chapter_num: 11,
    tier: 'roots',
    title: 'Thirty Years',
    content: `Titan's service record is three decades long and reads like a tour of every conflict since the Cold War. Bosnia. Kosovo. Afghanistan. Congo. Three UN tours. Two NATO deployments. A training stint in South Korea.

"You've been everywhere," Spark says, scrolling through the declassified portions.

"Almost everywhere," Titan says. "Never made it to Australia. Too many things that want to kill you there."

"And alien invasions are better?"

He shrugs. "At least the aliens are upfront about it. A funnel-web spider pretends to be a leaf."

But when Spark's not looking, his expression shifts. Thirty years is a long time to carry a rifle. Long enough to know exactly what it costs.`,
    unlock_type: 'missions',
    unlock_value: { min: 12 },
  },
  {
    chapter_num: 12,
    tier: 'roots',
    title: 'The Photo',
    content: `Titan keeps a photo taped inside his locker. A woman and two children — a boy and a girl, maybe eight and ten. Blonde hair, wide smiles, standing in front of a red wooden house surrounded by birch trees.

Raven sees it when the locker swings open during a quake. "Your family?"

"My family," Titan confirms. "Astrid. Erik. Maja. The house is in Dalarna. Red paint, white trim. Very Swedish."

"They're waiting for you?"

Titan closes the locker carefully. "They know where I am. They know why. Astrid and I — we said our goodbyes properly. Not sad goodbyes. Honest ones."

He smiles. "She told me if I die doing something stupid, she'll find a way to bring me back just to yell at me."`,
    unlock_type: 'time',
    unlock_value: { min_days: 10 },
  },
  {
    chapter_num: 13,
    tier: 'roots',
    title: 'Father Figure',
    content: `Titan doesn't try to be the father figure. It just happens. Spark asks him for advice on a technical decision and he talks her through it like a patient teacher. Blaze comes to him after a bad mission and Titan just listens, no judgment, two hours.

Razor, who trusts nobody, catches himself asking Titan's opinion on a gear modification. He stops mid-sentence, irritated with himself. Titan finishes the thought for him and gives a solid answer.

"I'm not looking for a dad," Razor says.

"Nobody is," Titan replies. "That's how you know you've found one."`,
    unlock_type: 'missions',
    unlock_value: { min: 15 },
  },
  {
    chapter_num: 14,
    tier: 'roots',
    title: 'First Contact (The Story He Doesn\'t Tell)',
    content: `The official version: Titan's patrol saw a craft. It left. End of story.

The version he tells Ironside, late at night, after the second drink:

"When the craft was above us, I felt something. Not fear. Recognition. Like meeting someone you've been waiting for without knowing you were waiting. I looked at the thing and I thought: we are not alone, and we never were, and everything we've been fighting about down here — borders, resources, gods — none of it matters anymore."

He takes a drink. "Seven years later, they came back. And they weren't friendly. But that first moment... I've never felt more alive."

Ironside doesn't know what to say. Titan saves him: "Also, Corporal Lindgren wet himself. So there's that."`,
    unlock_type: 'missions',
    unlock_value: { min: 17 },
  },
  {
    chapter_num: 15,
    tier: 'roots',
    title: 'The Knees',
    content: `Titan's knees are bad. Thirty years of jumping out of things and running across things and kneeling behind things. He doesn't complain. He takes anti-inflammatories with his morning coffee and gets on with it.

Storm notices the limp. Says nothing. But after that, he adjusts his pace on patrol so Titan doesn't have to rush. Titan notices Storm noticing. Neither acknowledges it.

Frost notices both of them and files it under "men communicating through tactical choreography."`,
    unlock_type: 'missions',
    unlock_value: { min: 18 },
  },
  {
    chapter_num: 16,
    tier: 'roots',
    title: 'Bedtime Stories',
    content: `On long deployments, when the squad is dug in and waiting, Titan tells stories. Not war stories — actual stories. Norse myths, mostly. Thor and the Midgard Serpent. Odin trading his eye for wisdom. Loki getting a horse pregnant. ("Wait, what?" — Blaze, every time.)

Frost listens with her eyes closed. Ghost listens from wherever Ghost is. Spark asks follow-up questions about the metallurgy of Mjolnir. Viper pretends she's not listening but quotes the stories back weeks later with perfect accuracy.

"You missed your calling," Raven tells him. "You should have been a teacher."

Titan considers this. "I am a teacher. I just teach in a school with terrible hours and a very aggressive student body."`,
    unlock_type: 'streak',
    unlock_value: { min: 4 },
  },
  {
    chapter_num: 17,
    tier: 'roots',
    title: 'Equal Footing',
    content: `Titan and Storm, side by side in the weight room. The conversation that happens without words:

Storm loads the bar heavy. Titan matches it — not because he needs to, but because Storm needs him to. If Titan lifts light, he's the old man being careful. If he matches weight, he's an equal.

It costs Titan his shoulders for two days. Worth it.

"You don't have to prove anything to me," Storm says one morning.

"I'm not proving anything to you," Titan says. "I'm proving something to my rotator cuff. The answer is: it's furious."

Storm's mouth does the almost-smile thing. Titan counts that as a win.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'storm', min_missions: 10 },
  },
  {
    chapter_num: 18,
    tier: 'roots',
    title: 'The Morale Officer',
    content: `Ironside officially designates Titan as morale officer. There's no such rank. Titan accepts it with a salute so crisp it's almost parody.

His first official act: mandatory movie night. His second: a suggestion box outside the mess hall. His third: a wall-mounted scoreboard tracking Blaze's worst jokes versus his own, with the squad voting.

Blaze is furious. "Your jokes are worse! How am I losing?"

"Delivery," Titan says. "Comedy is timing, and I have thirty years of it."

The suggestion box fills up within a week. Most of the suggestions are sincere. One says "more candles." Another says "tell Titan to stop winning at jokes." That one's in Blaze's handwriting.`,
    unlock_type: 'missions',
    unlock_value: { min: 20 },
  },
  {
    chapter_num: 19,
    tier: 'roots',
    title: 'The Quiet Ones',
    content: `Titan takes Raven for a walk around the perimeter. Not for security — for conversation. Raven doesn't open up easily, but Titan asks the right questions. Not "how are you doing" but "what did you see up there today that we missed?"

Raven talks for thirty minutes about flight patterns, wind currents, the way alien craft move differently in humid air. Titan listens like it's the most important briefing he's ever received.

"Why do you care about air currents?" Raven asks.

"Because you care about them. And the things people care about tell you who they are."

Raven looks at him. "You're very sneaky for an old man."

"Thank you. That's the nicest thing anyone's said to me since Viper called me a fossil."`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'raven', min_missions: 8 },
  },
  {
    chapter_num: 20,
    tier: 'roots',
    title: 'Thirty-One Years',
    content: `The anniversary of Titan's first day in uniform passes without fanfare. He doesn't mention it. But Ironside checks the records, does the math, and leaves a bottle of Swedish aquavit on Titan's bunk with a note: "31. Still standing."

That night, Titan opens the bottle and pours for whoever's awake. Storm. Frost. Blaze. Spark, who takes one sip and nearly coughs up a lung. Ghost appears, drinks silently, and disappears.

Titan raises his glass. "To everyone who served with me and isn't here anymore. To everyone serving with me now. And to whoever's next."

The squad drinks. Viper arrives late, takes the last pour, and says nothing. Just clinks her glass against Titan's.

He smiles at her. She almost smiles back.

Thirty-one years. And the best squad is the last one.`,
    unlock_type: 'missions',
    unlock_value: { min: 24 },
    is_achievement: true,
    achievement_name: "Thirty-One Years",
    achievement_desc: "Unlocked Titan's complete Roots story — the old soldier's history runs deeper than anyone knew.",
  },

  // ── CRACKS (21-30) ──────────────────────────────────────────────
  {
    chapter_num: 21,
    tier: 'cracks',
    title: 'The Cough',
    content: `It starts small. A cough after running. A need to sit down between sets. Titan plays it off — "Old lungs, cold air, you know how it is."

Storm watches. Says nothing. Frost watches. Says nothing. They both file it away.

Titan takes the pills when nobody's looking. Not the anti-inflammatories — the other ones. The ones in the orange bottle with the prescription label he keeps turned inward.`,
    unlock_type: 'missions',
    unlock_value: { min: 26 },
  },
  {
    chapter_num: 22,
    tier: 'cracks',
    title: 'Weight of Command',
    content: `Ironside takes a hit during a mission. Nothing permanent, but he's out for a week. Titan steps into the tactical lead role like he's been doing it for thirty years. Because he has.

The squad responds. Not because Titan gives orders — because Titan gives confidence. "We know what we're doing. We've trained for this. Trust the person next to you and move."

Ghost, over comms: "He sounds different when he's in charge."

Raven: "He sounds the same. We're just listening differently."

When Ironside comes back, he finds the squad running better than when he left. He doesn't say anything about it. He doesn't need to. Titan hands back command with a terrible joke about Swedish middle management, and everything returns to normal.

Almost everything. Ironside starts including Titan in planning sessions after that.`,
    unlock_type: 'rank',
    unlock_value: { min: 5 },
  },
  {
    chapter_num: 23,
    tier: 'cracks',
    title: 'The Call Home',
    content: `Titan calls Astrid on a secured line. The squad gives him privacy, but the walls are thin.

He doesn't talk about the war. He asks about Erik's football match. He asks about Maja's school project. He asks if the birch tree by the kitchen window has budded yet.

"Are you eating?" Astrid asks.

"Like a king."

"You're lying."

"Absolutely. The food here is terrible. But the company is good."

A pause on the line. The kind of pause that contains thirty years of marriage.

"Come home, Nils."

"I will. When it's done."

He hangs up. Sits in the comms room for five minutes. Then walks to the mess hall and tells a joke about a moose and a parking meter. Everyone groans. The knot in his chest loosens.`,
    unlock_type: 'time',
    unlock_value: { min_days: 20 },
  },
  {
    chapter_num: 24,
    tier: 'cracks',
    title: 'The Slow Days',
    content: `Some days are harder than others. The joints. The fatigue. The thing he hasn't told anyone about. Titan manages it with discipline and humor, but Frost — who watches everyone — starts tracking the pattern.

Good days: jokes, stories, training. Bad days: quieter, more sitting, jokes that come a beat late.

She doesn't say anything. Not yet. But she starts making sure there's always a chair available when Titan enters a room.`,
    unlock_type: 'chance',
    unlock_value: { probability: 0.15 },
  },
  {
    chapter_num: 25,
    tier: 'cracks',
    title: 'Legacy Thinking',
    content: `Titan starts writing things down. Not a journal — tactical notes. Lessons from thirty years condensed into short, clear paragraphs. How to read a room. How to keep morale up when everything's falling apart. How to make someone feel seen without invading their space.

Spark finds the notebook. "What's this?"

"Insurance," Titan says. "In case I'm not around to say it in person."

"You planning on going somewhere?"

He takes the notebook back. "We're all going somewhere, Spark. The question is whether we leave directions for the people behind us."

She doesn't understand. Not yet.`,
    unlock_type: 'missions',
    unlock_value: { min: 32 },
  },
  {
    chapter_num: 26,
    tier: 'cracks',
    title: 'The Argument',
    content: `Titan and Ironside have their first real disagreement. Ironside wants to send a depleted squad on a high-risk mission. Titan pushes back — not in front of the team. Behind closed doors.

"You're sending them in short-handed."

"We don't have a choice."

"There's always a choice. The choice is whether we accept the cost before we pay it or pretend we didn't know the price."

The argument lasts twenty minutes. Ironside adjusts the plan. Adds a contingency extraction. Nobody dies.

After, Ironside says: "You were right."

Titan: "I usually am. It's one of the perks of being ancient."`,
    unlock_type: 'missions',
    unlock_value: { min: 35 },
  },
  {
    chapter_num: 27,
    tier: 'cracks',
    title: 'Blaze Watch',
    content: `Titan pulls Blaze aside after a mission where Blaze took unnecessary risks. But he doesn't lecture. He tells a story.

"I knew a soldier in Afghanistan. Bravest man in the platoon. Volunteered for everything. Always first through the door."

"Sounds like a hero."

"He was. He was also using bravery to avoid dealing with something ugly inside him. He thought if he ran fast enough toward danger, the thing chasing him couldn't keep up." Titan pauses. "It kept up."

Blaze is quiet. "What happened to him?"

"He survived. But only because someone told him that courage isn't the same as not caring whether you live."

Blaze looks at his hands. "Is this a lecture?"

"It's a story. What you do with it is up to you."`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'blaze', min_missions: 12 },
  },
  {
    chapter_num: 28,
    tier: 'cracks',
    title: 'The Orange Bottle',
    content: `The orange prescription bottle falls out of Titan's locker during a barracks shake from a nearby impact. Razor picks it up. Reads the label. His face changes.

Titan takes it back. Their eyes meet.

"Not a word," Titan says. No humor. No warmth. Just iron.

Razor nods. He doesn't say a word. But he starts watching Titan the way Storm watches Titan — checking for cracks, measuring the load. Adding another set of eyes to the vigil that Titan doesn't know is forming around him.`,
    unlock_type: 'missions',
    unlock_value: { min: 38 },
  },
  {
    chapter_num: 29,
    tier: 'cracks',
    title: 'The Quiet Toast',
    content: `Another soldier from another squad dies. Not one of theirs, but close enough to feel. Titan gathers whoever's around. No candles this time. Just a quiet moment.

"I didn't know her well," he says. "But I know she chose to be here. Same as all of you. And that choice — the choice to stand up when you could sit down — that's the only thing that matters."

He raises his cup. Water, not aquavit. His hands are steady but his voice is softer than usual.

Ghost raises his cup. Then Frost. Then Storm. Then everyone.

Raven thinks: he's not just mourning. He's rehearsing.`,
    unlock_type: 'event',
    unlock_value: { event_type: 'soldier_kia' },
  },
  {
    chapter_num: 30,
    tier: 'cracks',
    title: 'Borrowed Time',
    content: `Late night. Titan alone in the common room. The notebook is open. He's not writing tactical notes anymore. He's writing names.

Ghost. Ironside. Viper. Spark. Raven. Frost. Blaze. Razor. Storm.

Under each name, a line. Something he wants to tell them. Something specific, personal, earned through months of watching and listening and caring.

He closes the notebook when he hears footsteps. It's Storm, doing his perimeter check.

"Can't sleep?" Storm asks.

"Too much to say," Titan replies. "Not enough time."

Storm looks at him — really looks, the way Storm looks at structures before entering them, measuring the integrity of the thing in front of him.

"There's time," Storm says.

Titan smiles. "There's always less than you think, my friend. So make the words count."`,
    unlock_type: 'missions',
    unlock_value: { min: 42 },
    is_achievement: true,
    achievement_name: "Borrowed Time",
    achievement_desc: "Unlocked Titan's complete Cracks story — the old man's armor starts to show its age.",
  },

  // ── SECRETS (31-40) ─────────────────────────────────────────────
  {
    chapter_num: 31,
    tier: 'secrets',
    title: 'The Diagnosis',
    content: `Six months before UNOPCOM recruited him, Nils Johansson sat in a clinic in Stockholm and heard the word "inoperable."

Pancreatic. Stage IV. Six months to a year, with treatment. He doesn't remember the exact phrasing after that. The doctor was thorough, professional, kind — all the right things. Titan nodded at the appropriate intervals.

Then he walked to his car in the Göteborg parking lot and sat there for an hour.

He wants to tell you he thought something profound during that hour. Something about mortality and legacy and the shape of a life well-lived. He's been trying to reconstruct it for months. What he actually remembers: the parking lot. A red car next to his that needed its rear bumper replaced. The sound of the clinic's ventilation fan through the window he'd left half-open. He sat in the car and he didn't think anything in particular.

What he decided — and there was a decision, he's certain of that — happened sometime in that hour. He sat in the car, and something settled, and when he started the engine he knew what he was going to do with six months to a year.

He drove home. He cooked dinner. He told jokes until Maja fell asleep at the table and Erik carried her to bed and Astrid watched him from the kitchen doorway with the particular attention of someone who already suspects.

He told her that night. She cried. He held her. They didn't sleep. He has since added that night to the list of things he carries — not as a wound but as a truth. The weight of being loved like that is its own kind of carrying.

The next morning, UNOPCOM's recruitment letter arrived. He read it, looked at Astrid, and said: "One more tour."

She understood. He wasn't running from the diagnosis. He was choosing how the story ends — on his feet, doing the one thing he has always done, using every day of the time he has rather than counting down from the number the doctor gave him. He chose UNOPCOM deliberately.

Six months to a year. He's past the first estimate now. He's counting up, not down. That's the only arithmetic he's interested in.`,
    unlock_type: 'missions',
    unlock_value: { min: 46 },
  },
  {
    chapter_num: 32,
    tier: 'secrets',
    title: 'Managing the Clock',
    content: `Titan keeps the treatment schedule in his head. Pills in the morning. Different pills at night. A monthly blood draw he does himself in the medical bay when nobody's looking — he has the training.

The numbers are holding. Not improving. Holding. Which is all he needs.

He calculates time the way soldiers calculate ammunition. How many months. How many missions. How many jokes, stories, training sessions, campfires. He's not counting down — he's counting up. Making every day add to the total instead of subtract from it.

Today's total: one bad joke about a Swedish meatball, one tactical session with Ironside, one conversation with Spark about propulsion physics, one nod from Storm.

Good day.`,
    unlock_type: 'time',
    unlock_value: { min_days: 35 },
  },
  {
    chapter_num: 33,
    tier: 'secrets',
    title: 'Razor Knows',
    content: `Razor doesn't bring it up. He doesn't have to. He just starts doing things — covering Titan's flank a little tighter, making sure there's water at every briefing, adjusting patrol routes so the longest stretches aren't on Titan's legs.

One night, Titan finds a bottle of Swedish anti-inflammatory gel on his bunk. No note. He knows who it's from.

He finds Razor cleaning his gear. Sits down next to him. Neither speaks for a full minute.

"How long?" Razor finally asks.

"Long enough."

"Does anyone else—"

"No. And it stays that way."

Razor nods. The conversation is over. But from that point on, Razor is Titan's shadow on missions — not protecting him, exactly. Giving him room to protect everyone else.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'razor', min_missions: 15 },
  },
  {
    chapter_num: 34,
    tier: 'secrets',
    title: 'The Letter (First Draft)',
    content: `Titan starts the letters. One for each squad member. He writes them in Swedish first — his thinking language — then translates.

The first one is for Ironside. It's the easiest because Ironside is a soldier and soldiers understand brevity.

"James — You're the best commanding officer I've served under, and I've served under seventeen. Not because of your tactics. Because you care about the people behind the tactics. Don't stop. They need it. — Nils"

He puts it in an envelope. Writes "Ironside" on the front. Puts it in his footlocker.

Nine more to go.`,
    unlock_type: 'missions',
    unlock_value: { min: 50 },
  },
  {
    chapter_num: 35,
    tier: 'secrets',
    title: 'Bad Day',
    content: `A bad day. The worst since arriving. Titan can barely get out of bed. The pain is in his back, his abdomen, his everywhere. He takes double the dosage and waits for it to work.

Storm knocks on the barracks door at 0500. Weight room time.

"Not today," Titan says. Voice level. Smile in place.

Storm pauses. He's never heard those words from Titan. He stands in the doorway for five seconds, reading the situation with the instinct of a man who's trained to assess structural damage.

"I'll bring coffee," Storm says.

He does. They sit in the barracks in silence. Titan's hands wrapped around the mug, drawing warmth. Storm watching the door.

By noon, the pills work. Titan's at the mess hall telling a joke about an alien and a tax collector. Nobody knows about the morning. Except Storm, who doesn't say a word.`,
    unlock_type: 'chance',
    unlock_value: { probability: 0.15 },
  },
  {
    chapter_num: 36,
    tier: 'secrets',
    title: 'Call to Astrid',
    content: `"The numbers are the same," Titan tells her on the secure line.

"Same isn't better."

"Same isn't worse."

She's quiet. He can hear her thinking — thirty years of marriage, he can hear her thinking across a satellite link.

"Erik made the school team," she says.

"Captain?"

"Wing."

"He gets that from me. I was always better on the flank."

"You were always better at making me laugh when I want to cry."

Titan closes his eyes. "That's the same skill, Astrid. Same muscle."

When he hangs up, he sits in the comms room for ten minutes. Then he opens the notebook and writes Astrid's letter. It's the longest one. Three pages. He doesn't translate it from Swedish.`,
    unlock_type: 'time',
    unlock_value: { min_days: 42 },
  },
  {
    chapter_num: 37,
    tier: 'secrets',
    title: 'Teaching the Teachers',
    content: `Titan starts training Storm and Frost — not combat skills. Leadership skills. How to hold a squad together when things fall apart. How to read a room. How to make someone laugh when they need it most.

Storm is terrible at the humor part. Frost is better but refuses to admit it.

"Why us?" Frost asks.

"Because you're the ones who'll be here longest," Titan says. It sounds like a compliment. It's also the truth in a way Frost doesn't understand yet.

"The squad will need what you two have. Storm's strength. Your clarity. Together, you cover everything."

He doesn't say: "when I'm gone." He doesn't have to. Something in his tone plants the seed.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'frost', min_missions: 18 },
  },
  {
    chapter_num: 38,
    tier: 'secrets',
    title: 'The Notebook',
    content: `The tactical notebook is complete. Forty pages of distilled wisdom. How to lead, how to listen, how to lose someone and keep moving. How to tell a joke that breaks tension. How to sit in silence with someone who needs it.

Titan reads through it one last time. Makes corrections. Adds a page at the back:

"If you're reading this, I've either given it to you or someone found it in my footlocker. Either way — these are the things I wish someone had told me thirty years ago. Use them. Add your own. Pass it on."

He puts it in the footlocker with the letters.`,
    unlock_type: 'missions',
    unlock_value: { min: 58 },
  },
  {
    chapter_num: 39,
    tier: 'secrets',
    title: 'Frost Suspects',
    content: `Frost doesn't confront him. She's too smart for that. Instead, she watches. The pills. The bad mornings. The way he measures time.

One evening, she sits next to him on the bench outside the barracks. "You're running a countdown."

Titan doesn't deny it. "Everyone is. I just know my number."

"How long?"

"Long enough to finish what I started."

Frost looks at the stars. "Is that why you're writing letters?"

Titan's smile is real — surprised, almost. "You noticed."

"I notice everything. It's my worst quality."

"It's your best quality. Don't let anyone tell you otherwise."

They sit until the stars shift. Frost doesn't press. She's learned from Titan that some truths are better held than spoken.`,
    unlock_type: 'missions',
    unlock_value: { min: 62 },
  },
  {
    chapter_num: 40,
    tier: 'secrets',
    title: 'The Reason',
    content: `Titan tells Storm. Late at night, weight room, bar racked. No warm-up. Just the truth.

"I'm dying, Jean. Pancreatic cancer. Six months to a year — that was the estimate nine months ago."

Storm doesn't move. Doesn't blink. The mask holds. But his hands grip the bench and the knuckles go white.

"I chose to be here," Titan continues. "Not because I want to die in combat. Because I want my last days to mean something. I want to protect people. I want to teach people. I want to leave something better than a hospital bill and a box of medals."

Storm is quiet for a long time. Then he says: "You're the strongest man I know."

Titan shakes his head. "No. You are. I'm just the one who knows when to stop lifting."

Storm stands. Walks to the door. Stops. Without turning around: "You tell me if you need anything. Anything."

"I need you to be okay, Jean. That's what I need."

Storm leaves. The weight room is empty. Titan sits on the bench and breathes. The secret is lighter now. Not gone — lighter. Shared.`,
    unlock_type: 'missions',
    unlock_value: { min: 68 },
    is_achievement: true,
    achievement_name: "Terminal Velocity",
    achievement_desc: "Unlocked Titan's complete Secrets story — the truth behind the old man's final tour.",
  },

  // ── LEGACY (41-50) ──────────────────────────────────────────────
  {
    chapter_num: 41,
    tier: 'legacy',
    title: 'Good Days',
    content: `Titan starts collecting them. Good days. He keeps a tally in the back of the notebook, separate from the tactical notes.

"Day 247: Told a joke about a Swedish elk. Spark laughed. Storm didn't. (Storm never does. One day.)"

"Day 251: Blaze beat me at arm wrestling. Let him win. (Okay, he actually won. My arm is still sore.)"

"Day 258: Ghost brought me coffee without being asked. Significant."

"Day 264: Watched Viper defend Raven in an argument with logistics. Nobody saw it but me. She's better than she pretends to be."

The tally grows. Every day is a good day if you're paying attention.`,
    unlock_type: 'missions',
    unlock_value: { min: 72 },
  },
  {
    chapter_num: 42,
    tier: 'legacy',
    title: 'The Letters (Final Drafts)',
    content: `Ten letters. Sealed, addressed, stacked in order.

Ironside. Ghost. Viper. Spark. Raven. Frost. Blaze. Razor. Storm. Astrid.

Each one different. Each one specific. Not goodbyes — thank-yous. "Thank you for being the person I got to serve with."

He rewrites Viper's three times because the first two are too sentimental and she'd hate that. The final version is sharp, funny, and honest. She'll pretend it didn't affect her. It will.

He rewrites Storm's once. The first draft was perfect. The rewrite just adds one line at the end: "You're going to be fine, Jean. I promise."`,
    unlock_type: 'missions',
    unlock_value: { min: 76 },
  },
  {
    chapter_num: 43,
    tier: 'legacy',
    title: 'Teaching Blaze',
    content: `Titan's final project: Blaze.

Not training — unlocking. Blaze has every skill he needs. What he doesn't have is the belief that he's worth saving. So Titan tells him, directly, no jokes, no stories.

"You're one of the best soldiers I've ever served with. And I've served with hundreds. You're fast, brave, instinctive, and you make people laugh in the dark. Stop trying to prove you deserve to be here. You proved it the day you showed up."

Blaze doesn't know what to do with that. He makes a joke. Titan waits it out.

"Did you hear me?" Titan asks.

"Yeah."

"Say it back."

"What?"

"Say: I deserve to be here."

Blaze rolls his eyes. Then he says it. Quietly, like testing whether the words fit in his mouth. "I deserve to be here."

"Good. Now believe it."`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'blaze', min_missions: 20 },
  },
  {
    chapter_num: 44,
    tier: 'legacy',
    title: 'One More Story',
    content: `Power goes out again. Or maybe Titan flips the breaker himself — nobody can prove it.

Out come the candles. Out come the stories. But tonight's story is different. Tonight, Titan tells the story of his squad.

"Once, there was a team of ten soldiers. A commander who cared too much and showed it too little. A ghost who walked between worlds. A viper who used venom to hide her kindness. A spark who could build the future from scraps. A raven who saw everything from above. A frost who understood people better than they understood themselves. A blaze who burned so bright he forgot to notice his own warmth. A razor who cut through lies including his own. A storm who carried the world on his shoulders. And an old man who told terrible jokes."

He pauses. Everyone is listening. Even Viper.

"They were the best people he ever knew. And he wanted them to know that. Before it was too late."

Silence. Blaze opens his mouth to make a joke, then closes it. Even he knows this isn't the moment.

Titan blows out the candles. "Bedtime."

Nobody moves for a long time.`,
    unlock_type: 'missions',
    unlock_value: { min: 80 },
  },
  {
    chapter_num: 45,
    tier: 'legacy',
    title: 'The Body Slows',
    content: `It's getting harder to hide. Titan's lost weight. The jokes come a half-beat slower. He sits when he used to stand. Ghost brings him a chair without being asked. Frost adjusts briefing schedules so the long ones happen in the morning, when Titan's energy is highest.

The squad knows something. Not the diagnosis — just the shape of it. The absence where his usual vitality used to be. They adjust around him like water around stone, without discussing it, without acknowledging it.

Titan notices. Of course he does. And it breaks his heart in the best possible way — because it means they've become the squad he wanted them to be. The kind that takes care of each other without being told.`,
    unlock_type: 'time',
    unlock_value: { min_days: 55 },
  },
  {
    chapter_num: 46,
    tier: 'legacy',
    title: 'Viking Funeral',
    content: `Titan tells Storm about Norse funeral rites. The ship. The fire. The idea that the dead travel to the next world on a vessel built by the living.

"When I go," Titan says, "no ship. No fire. Just the squad, a bottle of aquavit, and one last terrible joke."

Storm doesn't answer for a long time. Then: "What's the joke?"

Titan grins. "I haven't written it yet. It has to be the worst one. The absolute worst. The kind that makes Viper walk out of the room and Blaze laugh until he cries."

"That's a high bar."

"I've got time." A pause. "Some."

Storm puts a hand on Titan's shoulder. Doesn't say anything. Doesn't need to.`,
    unlock_type: 'missions',
    unlock_value: { min: 84 },
  },
  {
    chapter_num: 47,
    tier: 'legacy',
    title: 'Ghost Knows',
    content: `Ghost sits down across from Titan in the empty mess hall. 0200. No one else around.

"How long have you known?" Ghost asks.

"That I'm dying, or that you figured it out?"

"Both."

"About a year for the first. About a week for the second."

Ghost is quiet. Then: "You could have gone home."

"I am home," Titan says. "Home is where the people are. Home is this mess hall and that terrible coffee and Storm's 0500 bench press and your 0200 conversations." He takes a drink. "Home is wherever the people I love are willing to sit with me."

Ghost looks at his coffee. "I don't do sentiment."

"You showed up at 0200 with two cups. You do sentiment fine. You just call it something else."`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'ghost', min_missions: 22 },
  },
  {
    chapter_num: 48,
    tier: 'legacy',
    title: 'The Squad Knows',
    content: `He tells them. All of them. Together. In the common room, candles lit, the whole squad present.

He keeps it simple. He keeps it warm. He doesn't want tears — he wants them to understand.

"I came here to do one last good thing with the time I have. And I found something better than a good fight. I found the best people I've ever known."

Viper leaves the room. Comes back two minutes later. Her eyes are red. She sits down and says: "Finish the story, old man."

He finishes the story. The diagnosis. The choice. The letters — though he doesn't give them out yet.

"I'm not dying today," he says. "Probably not tomorrow. So there's still time for bad jokes and good fights. Deal?"

Blaze, voice cracking: "Deal."

Storm, from the doorway: "Deal."

One by one, the squad says it. Deal. Deal. Deal.

Titan smiles. This is the moment he'll remember at the end. This room. These faces. This word.`,
    unlock_type: 'missions',
    unlock_value: { min: 90 },
  },
  {
    chapter_num: 49,
    tier: 'legacy',
    title: 'Last Joke',
    content: `He finds it. The perfect worst joke.

At the next morning briefing, Titan stands up. The squad braces — they always brace.

"A Swedish soldier, an alien, and a pancreas walk into a bar. The bartender says, 'What'll it be?' The alien says, 'Conquest.' The pancreas says, 'Time.' The Swedish soldier says, 'One more round.'"

Silence.

Then Blaze laughs. Not the polite laugh — the real one, the one that hurts. Spark covers her mouth. Ironside pinches the bridge of his nose. Viper walks out, walks back in, and says: "That's the worst one. Congratulations."

Storm, from the back of the room, does something nobody has ever seen.

He smiles.

Titan points at him. "There it is! Eleven months! I've been working on that for eleven months!"

The squad loses it. Everyone. Even Ghost, who covers his mouth to hide it. Even Frost, who laughs softly, eyes bright.

Titan stands in the middle of it, surrounded by laughter, and thinks: this is it. This is the sound. The one I want to take with me.`,
    unlock_type: 'missions',
    unlock_value: { min: 95 },
  },
  {
    chapter_num: 50,
    tier: 'legacy',
    title: 'The Letters',
    content: `He doesn't wait. That's the point — the whole point. Don't wait until it's too late. Don't let the words stay in the footlocker.

Titan distributes the letters himself. Personally. One by one.

He gives Ironside his over coffee. Ironside reads it, folds it, puts it in his breast pocket, and says nothing. But he claps Titan on the shoulder hard enough to say everything.

He gives Ghost his by leaving it on the coffee station at 0200. Ghost reads it standing up. Then he sits down and reads it again.

He gives Viper hers directly, because she'd be furious if he did it any other way. She reads it, says "This is manipulative and I hate you," and hugs him for the first and only time.

He gives Spark hers with a prototype blueprint he sketched — a memorial candle holder for the common room. She builds it that week.

He gives Raven hers on the roof, with a view of the flight line. She reads it and says: "You see more from the ground than I do from the air."

He gives Frost hers without a word. She reads it and nods. They sit in silence. It says everything.

He gives Blaze his with a note taped to the front: "Read this on a good day. You deserve good days." Blaze reads it on the spot, because he doesn't listen. Then he reads it again on a good day, because Titan was right.

He gives Razor his in the armory. Razor reads it, folds it into a precise square, and puts it in his vest pocket. "I'll keep it sharp," he says. Titan knows what he means.

He gives Storm his last. In the weight room. 0500. No one else around.

Storm reads it. His jaw tightens. He folds the letter carefully and puts it in his vest pocket, next to the patch from Caserne 27.

"You don't have to carry this alone, Jean," the letter says. "You never did. The wall doesn't hold the building up by itself. It holds it up because someone built it into something larger. You were built for something larger. Trust it."

Storm looks at Titan. Nods.

Titan nods back.

Then he racks the bar, adds five kilos, and says: "Spot me."

Storm spots him. The weight goes up. The weight comes down. The morning continues.

Not a goodbye. Not yet. Just a man making sure the people he loves know it — not because he's dying, but because he wants them to know before it's too late. Before the words get stuck in a footlocker. Before the letters become artifacts instead of conversations.

Here is what I want you to understand:

Every soldier on this base is carrying something. Ji-Yeon Kim carries a watch stopped at 14:07 and seventeen kilometers and the word han. Erik Hansen carries three names pressed three pages deep in pencil. Valentina Reyes carries a voicemail and a yellow door. Kenji Nakamura carries four meters of copper wire and the gap between his father's words and his sensei's. Adaeze Okafor carries a paper with thirty-seven names and one name she hasn't added yet. Alexei Petrov carries a notebook in five scripts and a wooden rabbit. Lucas Santos carries six hours and a phone that doesn't ring. Lena Weber carries a wrong step and two degrees Celsius. Jean Dubois carries a name in his wallet and three years of a wall no one else was meant to see behind.

They carry these things. That is what soldiers do. That is what all people do.

Titan's contribution — and I want to be clear that this is Titan's contribution, not anyone else's — is that he looked at all of them carrying all of it, and he said: that is beautiful. The weight is beautiful. The carrying is beautiful. You are not broken. You are exactly what it means to be alive.

He said this in letters because he didn't trust himself to say it out loud without crying, and Nils Johansson has a reputation to maintain.

Still standing. Still laughing. Still here.

For now, that's enough.

It was always enough.`,
    unlock_type: 'missions',
    unlock_value: { min: 100 },
    is_achievement: true,
    achievement_name: "One Last Good Fight",
    achievement_desc: "Completed Titan's full story — the old man's letters find their way home.",
  },
];

// ── Reactions ──────────────────────────────────────────────────────

const reactions = [
  {
    event_type: 'mission_complete',
    text: '"Every mission you walk away from is a good mission. I should know — I\'ve walked away from a few hundred." — {soldier}',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    text: '"We don\'t forget. We carry them forward. That\'s the deal." — {soldier}, standing at the memorial wall.',
    priority: 2,
  },
  {
    event_type: 'territory_lost',
    text: '"Ground can be retaken. People can\'t. Focus on the people." — {soldier}, calm as ever.',
    priority: 1,
  },
  {
    event_type: 'territory_defended',
    text: '"The line held today. Not because of the walls. Because of the people standing on them." — {soldier}',
    priority: 1,
  },
  {
    event_type: 'streak_milestone',
    text: '"Consistency is the only superpower. Ask any Swede who survives winter — you just keep showing up." — {soldier}',
    priority: 1,
  },
  {
    event_type: 'rank_up',
    text: '"A rank is just a word. What matters is whether the people under it trust you. Congratulations — they do." — {soldier}',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    condition: { involves_template: 'storm' },
    text: '"The wall fell." {soldier} sits in the weight room alone. The bar stays empty. He writes one final letter — to Jean — and puts it in the footlocker with the others.',
    priority: 5,
  },
  {
    event_type: 'mission_complete',
    text: '{soldier} gathers the squad after debrief. "Quick one: Why did the alien cross the road? Because the human said don\'t. And aliens are terrible at following directions." Nobody laughs. Everyone feels better.',
    priority: 0,
  },
];

// ── Relationships ──────────────────────────────────────────────────

const relationships = [
  {
    char_a: 'titan',
    char_b: 'viper',
    rel_type: 'bond',
    description: 'The one person Viper can\'t get under the skin of. Titan sees through her armor with warmth instead of force. It infuriates her. It also saves her.',
  },
];

module.exports = { template, chapters, reactions, relationships };
