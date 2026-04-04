/**
 * Character 08 — Razor (Lena Weber)
 * Former Olympic biathlete. Precision as armor.
 * Terrified of mediocrity.
 */

const template = {
  id: 'razor',
  name: 'Lena Weber',
  callsign: 'Razor',
  nationality: 'German',
  personality: ['disciplined', 'competitive', 'serious', 'independent'],
  motivation: 'Prove she\'s still the best — at anything',
  portrait_sprite: 'xcom2',
  background: 'Former Olympic biathlon athlete. Career ended when her knee shattered during training — not competition, not heroically, just a wrong step on ice. Channeled her precision into marksmanship. Perfect scores, cold demeanor.'
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
    content: `What Lena Weber carries:

A single bag, packed with geometric precision. Every item folded, every ounce accounted for. A rifle case, padded and locked, placed against the wall before anything else. A training log, current volume, entries going back eight months. A photograph she's kept but doesn't look at often — Ruhpolding, 2019, her name on the scoreboard, the podium, before.

The real list:

She carries a wrong step on ice. Not a dramatic injury — no collision, no story with a villain, no moment worth telling. Just a step on a trail in January and then a sound and then the ground coming up very fast. Two degrees Celsius: that is the temperature below which the trail crew would have salted the path. Two degrees. She has looked up the weather data from that morning forty-three times. The number doesn't change. She carries the mundanity of it — a life's trajectory bent by physics rather than narrative. If there were a villain she could fight him. If there were a reason she could argue with it. There is only two degrees, and two degrees is not something you can fight. She carries four years of silence with her father, Erik Weber, who trained her from the time she could hold a rifle and who looked at her after the injury as though she had failed at something they both knew she hadn't failed at. She carries the question she has never been able to answer: what am I if I am not the best? She is terrified of finding out.

She shakes the quartermaster's hand. Once. Firm.

"Weber, Lena. Callsign Razor. Designated marksman. Where do I qualify?"

No small talk. No wasted syllables. She is here to perform, not to belong.

She doesn't know yet that those are not opposites. She'll learn. It will take a while. It will cost her something.

She puts the rifle case against the wall, and the sound it makes is the sound of someone who has decided that being the best is the only architecture available for holding themselves together.

She's right. For now, she's right.

That's not the same as being okay.`
  },
  {
    chapter_num: 2,
    tier: 'surface',
    title: 'The Range',
    unlock_type: 'missions',
    unlock_value: { min: 1 },
    content: `Her qualification scores were perfect. Not excellent — perfect. Every round through the same hole, breathing controlled to the microsecond, trigger pull so consistent the range master ran the targets twice to be sure.

"You've done this before," he said.

"I've done everything before. That's the problem."

She said it without irony. The range master wasn't sure how to respond. She was already cleaning her weapon.`
  },
  {
    chapter_num: 3,
    tier: 'surface',
    title: 'Measured Distance',
    unlock_type: 'missions',
    unlock_value: { min: 2 },
    content: `She eats alone. Not conspicuously — she doesn't make a show of it. She simply arrives early, sits at the end of a table, finishes efficiently, and leaves. If someone sits nearby, she's polite. Cordial, even. But the space around her has edges. People sense them and maintain distance.

It's not coldness. It's calibration. She knows exactly how close to let people get. The number is: not very.`
  },
  {
    chapter_num: 4,
    tier: 'surface',
    title: 'First Op',
    unlock_type: 'missions',
    unlock_value: { min: 3 },
    content: `Overwatch position, 400 meters out. Three targets, three rounds, three clean kills. The squad advanced without taking fire.

In the debrief, someone called it impressive. She corrected them: "It was adequate. Windage compensation on the second shot was off by a quarter mil. I need to recalibrate."

The quarter mil made zero functional difference. She knew that. The point wasn't the quarter mil. The point was that perfection has no finish line, and she refuses to stop running toward it.`
  },
  {
    chapter_num: 5,
    tier: 'surface',
    title: 'The Rival',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'spark', min_missions: 2 },
    content: `Spark challenged her to a shooting contest. She accepted with the kind of controlled neutrality that barely conceals absolute fury at the idea that someone might be better.

They tied. Identical scores, identical groupings. A statistical impossibility that neither was willing to accept.

"Rematch," Spark said, grinning.

"Obviously," she replied, not grinning. But the competitive fire behind her eyes could have melted the range targets.

It became a thing. Weekly. The base started taking bets. The scores remain tied.`
  },
  {
    chapter_num: 6,
    tier: 'surface',
    title: 'The Knee',
    unlock_type: 'time',
    unlock_value: { min_days: 5 },
    content: `She ices her right knee every evening. Twenty minutes, compression wrap, elevation. The routine of a professional athlete applied to a joint that will never compete again.

Nobody asks about it. The limp is barely visible — she's trained it away, redistributed her weight so precisely that only someone who knows what to look for would notice. But after a long day, or a cold night, the body remembers what the mind tries to overwrite.`
  },
  {
    chapter_num: 7,
    tier: 'surface',
    title: 'Noise',
    unlock_type: 'missions',
    unlock_value: { min: 7 },
    content: `Blaze arrived on base like a weather event. She watched from a distance as he knocked over a supply rack, told four jokes in ninety seconds, and nearly started a fire with Viper.

"Unbelievable," she said to nobody.

She means it as an insult. But there's a note underneath — something close to fascination. She's spent her entire life in control. The idea of someone who operates in total chaos, and survives, is theoretically impossible. And yet there he is. Loud, messy, alive.`
  },
  {
    chapter_num: 8,
    tier: 'surface',
    title: 'Ghost',
    unlock_type: 'missions',
    unlock_value: { min: 8 },
    content: `She watches Ghost the way an architecture student watches a cathedral. That level of composure — total, seamless, without visible effort — is what she's been trying to build her entire life.

Ghost moves through a room and leaves no trace. Razor moves through a room and leaves a score card. She knows which one she'd rather be. She also knows she'll never get there. The trying is the point.`
  },
  {
    chapter_num: 9,
    tier: 'surface',
    title: 'The Log',
    unlock_type: 'streak',
    unlock_value: { min: 3 },
    content: `She keeps a training log. Not digital — handwritten, in a small black notebook with graph paper pages. Every session recorded: distance, wind, temperature, grouping diameter, heart rate, breathing pattern. Years of data in precise German handwriting.

The log goes back to before. The early entries are labeled with competition names. Oberhof. Ruhpolding. Pyeongchang. Then a gap — three blank months — and the entries resume with range designations instead.

She never looks at the old pages. But she hasn't torn them out either.`
  },
  {
    chapter_num: 10,
    tier: 'surface',
    title: 'Standard',
    unlock_type: 'missions',
    unlock_value: { min: 10 },
    is_achievement: true,
    achievement_name: 'Perfect Grouping',
    achievement_desc: 'Complete Razor\'s Surface arc — precision as identity.',
    content: `She set a base record on the long-range qualification. Then set it again the next week. Then again.

The third time, the range master asked if she was going to keep going. She looked at him like he'd asked if she was going to keep breathing.

"The standard isn't the record. The standard is what I did last time. If I can't beat myself, I'm getting worse."

The scoreboard tells one story: dominance. The notebook tells another: a woman who can never, ever be enough. Not for the world. Not for herself. The distance between those two stories is where Lena Weber lives.`
  },

  // ── ROOTS (11-20) ──────────────────────────────────────────────
  {
    chapter_num: 11,
    tier: 'roots',
    title: 'Ruhpolding',
    unlock_type: 'missions',
    unlock_value: { min: 12 },
    content: `She grew up in Ruhpolding, Bavaria. A biathlon town — population four thousand, world-class training facilities, a culture where children learn to ski before they learn to ride a bicycle.

Her father was a coach. Her mother was a former athlete. The house smelled like gun oil and ski wax. Achievement wasn't expected — it was atmospheric. Like oxygen. You didn't question it; you breathed it.

She was on skis at three, shooting at eight, winning regional titles at twelve. National team at sixteen. Olympic team at nineteen. It wasn't talent. It was architecture. Every hour of every day engineered toward a single outcome.`
  },
  {
    chapter_num: 12,
    tier: 'roots',
    title: 'The Ice',
    unlock_type: 'rank',
    unlock_value: { min: 3 },
    content: `It wasn't dramatic. That's the part that haunts her.

November training session. Morning run, icy trail, a route she'd done a thousand times. Her right foot landed on black ice at the wrong angle. She felt the knee go — not a pop but a grinding, tectonic shift, cartilage and ligament and twenty years of work all rearranging in a quarter second.

She didn't scream. Didn't fall dramatically. Just went down to one knee like someone proposing to the frozen ground. Sat there, very still, understanding with mathematical precision that everything she'd built had just ended.

Not in competition. Not heroically. Just a wrong step on ice.`
  },
  {
    chapter_num: 13,
    tier: 'roots',
    title: 'The Recovery',
    unlock_type: 'time',
    unlock_value: { min_days: 18 },
    content: `Three surgeries. Fourteen months of rehabilitation. She did everything perfectly — every exercise, every protocol, every benchmark ahead of schedule. The doctors said she was the most disciplined patient they'd ever treated.

The knee recovered to 87% function. More than enough for normal life. Not enough for Olympic biathlon, where the difference between gold and nothing is measured in fractions of a second over twenty kilometers.

87%. She stared at the number on the assessment form and felt something inside her go quiet. Not break — go quiet. Like a radio changing to a frequency she couldn't receive.`
  },
  {
    chapter_num: 14,
    tier: 'roots',
    title: 'The Pivot',
    unlock_type: 'missions',
    unlock_value: { min: 15 },
    content: `She pivoted to pure marksmanship within a week of the final assessment. If the legs couldn't compete, the hands still could. Military application was logical — the precision was transferable, the discipline was native, and nobody in the Bundeswehr needed you to ski.

She qualified for special operations marksmanship in record time. Top of every class. Perfect scores on every evaluation. The instructors wrote "exceptional" on her file so many times the word lost meaning.

She didn't feel exceptional. She felt like a building that had lost a floor and was pretending the architecture still made sense.`
  },
  {
    chapter_num: 15,
    tier: 'roots',
    title: 'Spark\'s Game',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'spark', min_missions: 5 },
    content: `The rivalry with Spark evolved. It was no longer just shooting — it spread to everything. Fastest kit assembly. Cleanest room inspection. Best mission stats. An endless, escalating competition that Spark treated as entertainment and Razor treated as survival.

"You know this is supposed to be fun, right?" Spark said after a particularly intense range session.

"Winning is fun."

"What about the part where you're not winning? Is that fun too?"

She didn't answer. The question implied a universe where not-winning was acceptable, and she refused to inhabit that universe even hypothetically.`
  },
  {
    chapter_num: 16,
    tier: 'roots',
    title: 'Titan',
    unlock_type: 'missions',
    unlock_value: { min: 17 },
    content: `Titan saw through her. She doesn't know how — the man is built like a wall and speaks like a fortune cookie, but somehow, between the simplicity and the silence, he identified the thing she hides.

"You don't have to be the best at everything," he said, apropos of nothing, passing her in a corridor.

"I don't have to breathe either. But it helps."

He laughed. A deep, genuine sound that made her feel, briefly, like she'd been caught doing something embarrassing. Not the perfection. The desperation behind it.`
  },
  {
    chapter_num: 17,
    tier: 'roots',
    title: 'The Replay',
    unlock_type: 'missions',
    unlock_value: { min: 20 },
    content: `She replays it. Not the fall itself — not the grinding, tectonic quarter second of cartilage and ligament rearranging. The moment before. The last step she took as an Olympic athlete.

Right foot. Pushing off. The weight transferring cleanly. The trail she'd run a thousand times, the one she knew every rock and root of. The specific quality of the cold that morning — minus six, the kind that crystallizes the air in your lungs and makes every exhale visible. She was thinking about her stride rate. She was thinking about nothing. Both are possible. Memory edits.

The proprioception remembers it differently than the mind does. The body holds the last second before the fall in a specific way: the transfer of weight, the infinitesimal loss of purchase, the fraction of a moment where everything was still the career and the next Games and the gold that bronze was always supposed to be a prologue to.

Then the ice. Then the knee. Then one knee on the frozen ground like someone proposing.

She has replayed this fraction of a second more times than she can count and she is no longer certain she's replaying a memory or a construction. She has told herself the story so many times that the story may have replaced the thing it was about. The mind edits. The mind protects. What doesn't vary: the trail, the ice, the wrong angle, the grinding. The moment before. The last step.

She still lives in that fraction. She has built a whole life in the space after it. Both are true.`,
  },
  {
    chapter_num: 18,
    tier: 'roots',
    title: 'The Medal',
    unlock_type: 'streak',
    unlock_value: { min: 5 },
    content: `She has one Olympic medal. Bronze, from a relay event two years before the injury. It's in a drawer in her parents' house in Ruhpolding, underneath a stack of old training logs.

Not displayed. Not discarded. Just stored, like evidence from a case that's been closed but not solved.

Bronze. Third place. She remembers standing on the podium watching the gold medalist cry with joy and thinking: next time. There was supposed to be a next time. The next time was supposed to be the real story. Bronze was the prologue.

The prologue became the whole book.`
  },
  {
    chapter_num: 19,
    tier: 'roots',
    title: 'Cold Precision',
    unlock_type: 'missions',
    unlock_value: { min: 22 },
    content: `Night op. Freezing conditions. The kind of cold that reminds her body of training mornings in Bavaria, prone in the snow, heart rate at 180 from the ski and needing to drop it to 60 for the shot.

She controlled her breathing the way she used to. Counted heartbeats. Found the space between them. Squeezed.

Three shots, three targets, 600 meters, sub-zero temperatures. The squad didn't take a single round.

For exactly one second, she felt it again — that crystalline focus, that total alignment of body and purpose. Then the knee throbbed in the cold, and the feeling shattered.`
  },
  {
    chapter_num: 20,
    tier: 'roots',
    title: 'The Margin',
    unlock_type: 'missions',
    unlock_value: { min: 25 },
    is_achievement: true,
    achievement_name: 'Marginal Gains',
    achievement_desc: 'Complete Razor\'s Roots arc — the athlete beneath the soldier.',
    content: `She calculated it once. The margin between the career and the ice.

The angle of her foot: seven degrees off center. The thickness of the ice: three millimeters — enough to look like compacted snow, not enough to hold. The temperature that morning: minus six Celsius, which is two degrees below the threshold where the trail crew's protocol required salting the path.

Two degrees. Her entire life turned on two degrees Celsius.

She wants you to understand something about this calculation: she didn't do it out of blame. She's not looking for a defendant. She did it because she is someone who needs to know the exact weight of things, and this is the exact weight. Two degrees Celsius. Seven degrees off center. Three millimeters of ice.

If it had been something grand — an avalanche, a car crash, a diagnosis — she could have filed it under something. Fate. Bad luck. The universe. But a wrong step on a trail she'd run a thousand times, on a morning that was almost warm enough? That's just arithmetic. That's weather.

She has trained herself not to think about what two additional degrees would have meant. Some days she succeeds. The training log has many entries from those days. Other days the calculation runs itself while she's prone on the range, crosshairs on target, breathing controlled, and she has to let it run to the end before her finger will move.

Two degrees. She carries it. It's very light. That's the problem.`,
  },

  // ── CRACKS (21-30) ─────────────────────────────────────────────
  {
    chapter_num: 21,
    tier: 'cracks',
    title: 'The Mirror',
    unlock_type: 'missions',
    unlock_value: { min: 28 },
    content: `She saw herself in a base mirror after a long op. Full gear, sweat-streaked face, eyes ringed with exhaustion. For a second she didn't recognize the woman looking back.

The athlete was gone. The clean lines, the sponsored gear, the body that was a machine built for one purpose. In her place stood a soldier. Functional. Competent. Ordinary.

She turned away from the mirror. Then turned back. Made herself look. This is who you are now, she told the reflection. The reflection didn't argue.`
  },
  {
    chapter_num: 22,
    tier: 'cracks',
    title: 'The Miss',
    unlock_type: 'missions',
    unlock_value: { min: 30 },
    content: `She missed a shot. Not by much — six centimeters at 500 meters, a margin most shooters would call excellent. Target wounded, not neutralized. The squad had to adjust.

Nobody blamed her. Six centimeters at 500 meters in combat conditions is not a miss by any reasonable standard. But her standards aren't reasonable. They never have been.

She spent four hours on the range that evening. Fired until her shoulder was numb. The groupings got tighter and tighter until they were back to perfect, and still she didn't stop. Perfect wasn't enough anymore. Perfect was what she owed.`
  },
  {
    chapter_num: 23,
    tier: 'cracks',
    title: 'The Argument',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'spark', min_missions: 10 },
    content: `The rivalry with Spark turned ugly for one hour. A contested score, a disagreement about wind compensation, and suddenly they were standing inches apart with voices raised.

"You don't even care if you win!" she snapped. "It's all a game to you!"

"And it's all life and death to you! That's not discipline, that's fear!"

Silence. The word hung in the air. Fear. She wanted to deny it. Couldn't. Spark saw the denial die on her face and stepped back, surprised at their own accuracy.

They didn't speak for two days. On the third day, Spark left a coffee on her desk. Black, no sugar. She drank it. The ceasefire held.`
  },
  {
    chapter_num: 24,
    tier: 'cracks',
    title: 'The Interview',
    unlock_type: 'time',
    unlock_value: { min_days: 38 },
    content: `An old interview surfaced — someone found it online and passed it around. Lena Weber, age twenty, Olympic hopeful, talking about her training regimen. Bright-eyed, confident, smiling.

"I want to be the best in the world. Not one of the best — the best. I know exactly what it takes and I'm willing to pay the price."

She watched it once, in private, on a cracked phone screen. Watched the girl she used to be make promises the woman she became couldn't keep. The smile was the worst part. She doesn't smile like that anymore. She's not sure she remembers how.`
  },
  {
    chapter_num: 25,
    tier: 'cracks',
    title: 'Blaze\'s Question',
    unlock_type: 'missions',
    unlock_value: { min: 33 },
    content: `Blaze, of all people, asked the question she'd been avoiding. Not with subtlety — Blaze doesn't do subtlety — but with the blunt force of someone who's never learned to be afraid of directness.

"What happens if you lose? Like, actually lose. Worst case."

"I don't lose."

"Everybody loses. What happens when you do?"

She opened her mouth. Closed it. The answer was so large and so formless that no words could contain it. What happens when she loses is that she stops existing. Not literally — but the version of herself that matters, the one built on excellence, the one that justifies the hours and the pain and the loneliness. That version evaporates. And what's left?

She doesn't know what's left. That's the terror.`
  },
  {
    chapter_num: 26,
    tier: 'cracks',
    title: 'The Knee, Again',
    unlock_type: 'event',
    unlock_value: { event_type: 'territory_lost' },
    content: `Long op, bad terrain, too many stairs. The knee gave out on the descent. Not catastrophically — just a grinding, clicking surrender that turned her gait into a limp she couldn't hide.

She finished the op. Didn't mention it in the debrief. Went to her bunk, iced it for an hour, and lay in the dark contemplating the betrayal of a body that won't let her forget what she lost.

87%. That number again. The ceiling of her capability. The glass she presses her face against every single day.`
  },
  {
    chapter_num: 27,
    tier: 'cracks',
    title: 'Ghost\'s Lesson',
    unlock_type: 'missions',
    unlock_value: { min: 36 },
    content: `She finally asked Ghost how they do it. The composure. The effortlessness.

Ghost considered the question. "I'm not composed. I just stopped fighting myself."

"What does that mean?"

"You're at war with the gap between who you are and who you think you should be. I stopped fighting that war. Not because I won — because it can't be won."

She turned the words over for days. They sounded like surrender. She doesn't do surrender. But the idea lodged somewhere behind her ribs and refused to dissolve.`
  },
  {
    chapter_num: 28,
    tier: 'cracks',
    title: 'The Call Home',
    unlock_type: 'time',
    unlock_value: { min_days: 45 },
    content: `Her father called. He still talks about biathlon — results, standings, who's winning what. He doesn't mean to be cruel. It's his world, same as it was hers.

"Mueller won the sprint in Ruhpolding," he said. "Remember her? She trained at the same facility. Good technique but no killer instinct. Not like you."

"That's great, Papa."

"You should have been there, Lena. You would have—"

"I have to go."

She hung up. Stared at the wall. The conversation lasted four minutes and left a bruise that lasted four days.`
  },
  {
    chapter_num: 29,
    tier: 'cracks',
    title: 'Titan\'s Patience',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'titan', min_missions: 8 },
    content: `Titan found her on the range at midnight. Alone, firing at paper targets that were already shredded.

"Who are you shooting at?"

"Targets."

"No. Who are you shooting at?"

She lowered the rifle. Thought about it honestly for the first time. The targets weren't targets. They were the gap. The distance between bronze and gold, between 87% and 100%, between the girl in the interview and the woman at the range at midnight.

"Myself," she said. "Mostly myself."

Titan nodded like this was obvious. "You should probably stop. She hasn't done anything wrong."

She didn't fire another round that night. Sat on the range bench with Titan in silence until the cold drove them inside.`
  },
  {
    chapter_num: 30,
    tier: 'cracks',
    title: 'The Crack in the Glass',
    unlock_type: 'missions',
    unlock_value: { min: 40 },
    is_achievement: true,
    achievement_name: 'Six Centimeters',
    achievement_desc: 'Complete Razor\'s Cracks arc — perfection shows its seams.',
    content: `She broke her training log. Didn't burn it, didn't throw it away — just stopped writing. Three days without an entry. Then four. Then a week.

The absence terrified her. Without the log, who was tracking her progress? Without the numbers, how would she know if she was getting better or worse? Without the metric, what was she?

On the eighth day she picked it up again. But something had shifted. The entries were shorter. Less obsessive. She recorded the session and left space at the bottom of the page — blank space, where she used to cram every possible data point.

The blank space felt like a window in a room that had never had one.`
  },

  // ── SECRETS (31-40) ────────────────────────────────────────────
  {
    chapter_num: 31,
    tier: 'secrets',
    title: 'Erik',
    unlock_type: 'missions',
    unlock_value: { min: 46 },
    content: `His name was Erik Holzner. Her coach. Then her partner. The line between the two was never clear — he slid from one role to the other so gradually that by the time she noticed, she was already in love with the person who controlled her entire athletic life.

Twelve years older. Brilliant coach. The kind of man who could look at her form and identify a flaw invisible to anyone else. He made her an Olympic athlete. She made him a successful coach. The symbiosis was total.

She hasn't said his name aloud in four years. The syllables feel like a combination lock to something she sealed shut.`
  },
  {
    chapter_num: 32,
    tier: 'secrets',
    title: 'The Day After',
    unlock_type: 'missions',
    unlock_value: { min: 48 },
    content: `He left the day after the final assessment. Not the injury — she could have forgiven the injury. The day after the doctor said 87%. The day after her career became past tense.

She was still in the clinic. Still processing. He came to her room with a bag packed and an expression she'd never seen — the look of someone running cost-benefit analysis and finding the numbers unfavorable.

"I can't do this, Lena. I'm a coach. If you can't compete, I don't know what we are."

He left. Clean exit. No tears, no argument. Just the quiet click of a door and the absence of the only person she'd let inside in a decade.

She didn't cry. She hasn't cried about it since. The wound is too precise for tears — a surgical cut, bloodless and total.`
  },
  {
    chapter_num: 33,
    tier: 'secrets',
    title: 'The Architecture of Trust',
    unlock_type: 'time',
    unlock_value: { min_days: 52 },
    content: `She analyzed it afterward. Like reviewing race footage, like studying shot groupings. Broke the relationship down into components and examined each one for structural flaws.

The flaw was simple: she had been a function, not a person. Her value to Erik was her performance. When the performance ended, so did the value, and so did the love — if it was ever love to begin with.

She rebuilt herself with this knowledge as a load-bearing wall: never again be a function. Never again let someone's affection depend on what you can do. The wall works perfectly. It keeps everything out. It also keeps everything in.`
  },
  {
    chapter_num: 34,
    tier: 'secrets',
    title: 'What She Won\'t Say',
    unlock_type: 'missions',
    unlock_value: { min: 52 },
    content: `The coldness isn't cold. That's the secret everyone gets wrong. She feels everything — every slight, every compliment, every moment of connection. She feels them so intensely that the only safe response is to ration contact.

When Spark leaves coffee on her desk, something lights up that she immediately dimms. When Titan tells her to be kinder to herself, the tenderness of it almost undoes her. When Ghost nods in approval after a clean op, the validation hits like a drug she's been off for years.

She catalogues these moments like data points. Privately. Without response. To respond would be to open a channel she sealed shut in a clinic room when a man walked out with a packed bag.`
  },
  {
    chapter_num: 35,
    tier: 'secrets',
    title: 'The Photograph',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'spark', min_missions: 15 },
    content: `Spark found the photograph. Not snooping — it fell out of the training log during one of their competitions. A young woman on a podium, bronze medal, beaming. Next to her, an older man with his arm around her shoulder, pride radiating off him like heat.

"Who's that?"

She took the photo back with a hand that was steady but fast. Too fast.

"Nobody."

"He doesn't look like nobody."

"He looked like somebody once. People change."

Spark didn't push. But the look they gave her was different after that — less rival, more human. She wasn't sure which was worse.`
  },
  {
    chapter_num: 36,
    tier: 'secrets',
    title: 'The Other Athletes',
    unlock_type: 'time',
    unlock_value: { min_days: 58 },
    content: `She tracks the biathlon circuit. Not obsessively — she's weaned herself down to checking results once a week, then once a month. But she tracks it. She knows who's winning, who's injured, who's retiring.

The girls she trained with are in their prime now. World Cup podiums, Olympic teams, endorsement deals. Lives she was supposed to be living, playing out on screens she watches in private.

She doesn't feel envy. She feels something worse: the ghost pain of a limb that's been amputated. The career is gone but the nerves still fire. She can feel the cold of the range, the burn of the ski, the gunshot crack of the start signal. All of it, vivid and useless.`
  },
  {
    chapter_num: 37,
    tier: 'secrets',
    title: 'The Letter',
    unlock_type: 'missions',
    unlock_value: { min: 58 },
    content: `She wrote Erik a letter. Never sent it. It lives in the back of the training log, folded into a square no bigger than a stamp.

It's not angry. She wishes it were angry — anger would be simpler. It's precise. Clinical. A damage assessment written in the language of someone who learned to process loss the way she processes ballistics: measure the impact, calculate the trajectory, file the data.

The last line reads: "You taught me that performance is everything. I believed you. I shouldn't have. But I did, and the lesson is permanent."

She unfolds it sometimes. Reads it. Folds it back. A ritual that means nothing and everything.`
  },
  {
    chapter_num: 38,
    tier: 'secrets',
    title: 'Why She Stays Away',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'titan', min_missions: 12 },
    content: `Titan asked her, gently, why she keeps everyone at arm's length. Not the surface reason — the real one.

She told him. Not all of it, but the shape of it. A man who loved her performance and left when it ended. The logical conclusion: proximity equals vulnerability, vulnerability equals abandonment.

"That's one conclusion," Titan said. "There are others."

"Such as?"

"He was wrong. And you're punishing everyone else for his mistake."

She wanted to argue. Opened her mouth. Closed it. The counterargument dissolved before it reached her lips. Because he wasn't wrong. He was exactly right, and she hated him a little for it.`
  },
  {
    chapter_num: 39,
    tier: 'secrets',
    title: 'The Scoreboard',
    unlock_type: 'event',
    unlock_value: { event_type: 'soldier_kia' },
    content: `Someone died. Good soldier, clean record, excellent scores. The kind of operator she would have respected — and now would never get to.

She sat with the records afterward. Read their file, their scores, their operational history. Perfect on paper. Dead in practice. All that precision, all that skill, meaningless against a moment of bad luck.

She closed the file and stared at nothing. If excellence doesn't save you, what's the point of it? The question opened a door she'd spent her whole life bricking shut. She didn't have an answer. For the first time, the absence of an answer didn't feel like failure. It felt like honesty.`
  },
  {
    chapter_num: 40,
    tier: 'secrets',
    title: 'The Thaw',
    unlock_type: 'missions',
    unlock_value: { min: 65 },
    is_achievement: true,
    achievement_name: 'The Day After the Ice',
    achievement_desc: 'Complete Razor\'s Secrets arc — the wound beneath the armor.',
    content: `She told Spark. All of it. Erik, the injury, the leaving, the years of distance. They were sitting on ammunition crates after a night shoot, and it came out — not in a rush, but in measured sentences, like someone reading a report about a disaster that happened to someone else.

Spark listened without competing. Without deflecting. Without doing any of the things that make them Spark. Just listened.

"So the rivalry," Spark said when she finished. "That's not about beating me."

"No."

"It's about proving you're still worth something."

She didn't confirm it. Didn't need to. The truth sat between them, exposed and undeniable.

"For what it's worth," Spark said, "you don't have to prove that to me."

Something shifted. Not dramatically — Razor doesn't do dramatically. But the wall she'd built developed a door. Small. Possibly temporary. But there.`
  },

  // ── LEGACY (41-50) ─────────────────────────────────────────────
  {
    chapter_num: 41,
    tier: 'legacy',
    title: 'The New Log',
    unlock_type: 'missions',
    unlock_value: { min: 70 },
    content: `She started a new training log. Same format, same precision, same graph paper. But this one has a section at the bottom she's never included before: a single line labeled "Notes."

The notes aren't about ballistics. "Good session with Spark." "Titan brought coffee." "Knee held up on the stairs."

Small things. Human things. Data points that don't improve her groupings but somehow improve everything else.`
  },
  {
    chapter_num: 42,
    tier: 'legacy',
    title: 'The Rematch',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'spark', min_missions: 18 },
    content: `The weekly shooting contest continued. But something changed. When Spark won — and Spark does win, sometimes, genuinely — she didn't spiral. Didn't add an extra range session. Didn't recalibrate in a panic.

She said: "Good shooting."

Spark nearly dropped their rifle.

"Did you just — was that a compliment?"

"Don't get used to it."

But they both knew the shift. Competition as connection, not compensation. Losing as information, not identity. She's not there yet — not fully. But the direction is clear.`
  },
  {
    chapter_num: 43,
    tier: 'legacy',
    title: 'Ruhpolding, Revisited',
    unlock_type: 'time',
    unlock_value: { min_days: 72 },
    content: `Her mother sent a package. Homemade Lebkuchen, a new pair of gloves, and — buried at the bottom — her bronze medal.

A note in her mother's handwriting: "You left this behind. I think you should have it back. Not because of what it was. Because of who earned it."

She held the medal. Cool metal, familiar weight. The girl who earned this was fierce and bright and unbroken. The woman holding it is scarred and rebuilt and still fierce. They're not the same person. They don't need to be.

She put it on her desk. Didn't hide it. First time in four years.`
  },
  {
    chapter_num: 44,
    tier: 'legacy',
    title: 'Teaching Patience',
    unlock_type: 'rank',
    unlock_value: { min: 7 },
    content: `She trained a new marksman. Expected them to be bad — they were. Expected herself to be impatient — she was. But something else happened too: she taught breathing.

Not the mechanical kind. The real kind. How to slow down inside your own body. How to find stillness between heartbeats. How to trust the process instead of forcing the result.

She heard herself giving advice she'd never taken. "The shot doesn't care how much you want it. It only cares that you're ready."

The recruit hit center. Razor felt something she hadn't felt since the podium: pride in someone else's achievement. It was warmer than her own.`
  },
  {
    chapter_num: 45,
    tier: 'legacy',
    title: 'The Letter, Burned',
    unlock_type: 'missions',
    unlock_value: { min: 80 },
    content: `She burned the letter to Erik. Not in anger — in completion. Unfolded it one last time, read it one last time, then held it over a candle and watched the words curl into ash.

The damage assessment was accurate. Every word true. But carrying it had become a habit, not a necessity. The wound was real. The data was recorded. The document was no longer required.

She swept the ashes into her palm and blew them out an open window. Somewhere in the wind, precise German handwriting dissolved into nothing. She felt lighter. Not healed — you don't heal from a surgical cut. But lighter.`
  },
  {
    chapter_num: 46,
    tier: 'legacy',
    title: 'The Stumble',
    unlock_type: 'missions',
    unlock_value: { min: 84 },
    content: `She tripped on the range. Bad footing, uneven ground, and the right knee buckled. She went down — one knee on the ground, rifle safe, exactly like that day on the ice.

This time she laughed. A short, surprised sound that startled her as much as the fall. The absurdity of it — the same pose, the same knee, the same mundane cause. Ice then, loose gravel now.

She got up. Dusted off. Finished the session with a perfect score.

Some things don't change. The knee is still 87%. The wrong step still haunts her. But the fall doesn't define her anymore. Getting up does.`
  },
  {
    chapter_num: 47,
    tier: 'legacy',
    title: 'The Call',
    unlock_type: 'time',
    unlock_value: { min_days: 85 },
    content: `She called her father. Let him talk about biathlon. Let the names and results wash over her without flinching.

"Papa. I'm good at what I do now. Not the same thing. But good."

Silence. She could hear him recalibrating — the coach in him adjusting to a new paradigm where his daughter's value isn't measured in split times.

"I know, Lena. I've always known. I just — I didn't know how to say it without the other thing."

"You don't have to. Just say it."

"I'm proud of you."

Three words. No qualifier. No reference to what she could have been. Just what she is.`
  },
  {
    chapter_num: 48,
    tier: 'legacy',
    title: 'Enough',
    unlock_type: 'streak',
    unlock_value: { min: 10 },
    content: `She shot a 98 on a qualification drill. Not perfect. Two points off. The old Razor would have spent the evening correcting, recalibrating, punishing the margin.

She cleaned her weapon. Went to the mess hall. Sat with Spark and Titan. Talked about nothing important. Ate slowly.

98 was enough. Not because standards don't matter — they do, they always will. But because Lena Weber is more than a score. She is the hands that hold the rifle and the person those hands belong to. The score measures one thing. It doesn't measure everything.`
  },
  {
    chapter_num: 49,
    tier: 'legacy',
    title: 'The Blank Space',
    unlock_type: 'missions',
    unlock_value: { min: 95 },
    content: `The training log has more blank space now. Not because she cares less — because she trusts more. Trusts the preparation, trusts the process, trusts herself to perform without documenting every variable.

The "Notes" section has grown. Full sentences now. "Laughed at Spark's joke — actually funny." "Helped Blaze with a range problem — chaotic but not hopeless." "Titan brought Lebkuchen. Reminded me of home."

She's building something new in that blank space. Not a career. Not a performance record. Something she doesn't have a word for yet. It looks, if she's honest, a lot like a life.`
  },
  {
    chapter_num: 50,
    tier: 'legacy',
    title: 'The Best',
    unlock_type: 'missions',
    unlock_value: { min: 100 },
    is_achievement: true,
    achievement_name: 'Beyond the Podium',
    achievement_desc: 'Complete Razor\'s full story — from perfection to presence.',
    content: `Morning range session. Cold air, clear sky, the kind of conditions that used to make her think of Ruhpolding. She still thinks of Ruhpolding. But the memory has changed shape — no longer a wound, more like a hometown. A place she comes from, not a place she's trapped.

She fires. The grouping is tight. Not perfect — there's a flyer, two millimeters off. She notes it. Doesn't spiral. Notes it the way you notice a cloud in an otherwise clear sky: present, acknowledged, not threatening.

Spark arrives. "Ready?"

"Always."

They shoot. She wins by one point. Spark demands a rematch. She agrees. The competition is still there — fierce, precise, real. But it no longer carries the weight of her entire identity. It's a thing she does, not the thing she is.

Lena Weber. Callsign Razor. Designated marksman. Former Olympic athlete, former perfectionist, current work in progress. The best at many things. Learning, slowly, that the best thing she can be is present.

She puts the rifle down. Picks up the training log. In the "Notes" section, in precise German handwriting, she writes: "Good day."

Two words. No data. No metrics. No score.

Enough.`
  }
];

// ── Reactions ───────────────────────────────────────────────────────

const reactions = [
  {
    event_type: 'mission_complete',
    text: '"Acceptable performance. Review the after-action report — there are always margins to improve."',
    priority: 1
  },
  {
    event_type: 'mission_complete',
    text: '"Clean execution. That\'s what preparation looks like."',
    priority: 0
  },
  {
    event_type: 'soldier_kia',
    text: 'Razor says nothing. She cleans her weapon with meticulous care, as if precision now could compensate for what was lost.',
    priority: 2
  },
  {
    event_type: 'soldier_kia',
    text: '"They did everything right. Sometimes right isn\'t enough. That\'s not acceptable — but it\'s true."',
    priority: 1
  },
  {
    event_type: 'territory_lost',
    text: '"We lost ground. Analyze why, correct the variables, take it back. Emotion doesn\'t recapture territory — planning does."',
    priority: 1
  },
  {
    event_type: 'territory_defended',
    text: '"Held the line. That\'s the standard. Now we raise it."',
    priority: 0
  },
  {
    event_type: 'streak_milestone',
    text: '"Consistency is the only metric that matters. Anyone can be good once. This is proof of something real."',
    priority: 1
  },
  {
    event_type: 'rank_up',
    text: 'A curt nod. The closest thing to celebration she allows herself. Already reviewing what the next rank requires.',
    priority: 0
  }
];

// ── Relationships ───────────────────────────────────────────────────

const relationships = [
  {
    char_a: 'razor',
    char_b: 'ghost',
    rel_type: 'bond',
    description: 'Razor admires Ghost\'s composure with the intensity of someone staring at a blueprint for the person they want to become. Ghost sees someone trying too hard and respects the effort.'
  },
  {
    char_a: 'razor',
    char_b: 'blaze',
    rel_type: 'tension',
    description: 'Chaos versus precision. His recklessness offends her sense of order. Her rigidity baffles his instinct for spontaneity. They clash like weather systems — loud, inevitable, occasionally clearing the air.'
  },
  {
    char_a: 'razor',
    char_b: 'titan',
    rel_type: 'bond',
    description: 'Titan sees through her armor with disarming simplicity. She fights it, then stops fighting it. The unlikely friendship of a wall and a blade — both strong, both protecting something vulnerable.'
  },
  {
    char_a: 'razor',
    char_b: 'storm',
    rel_type: 'bond',
    description: 'Both operate in controlled silence. Storm gives orders with economy; Razor executes with precision. They have run enough operations together to skip the briefing and go straight to the work. High trust, low noise.'
  }
];

module.exports = { template, chapters, reactions, relationships };
