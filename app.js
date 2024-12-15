// Flashcards data
const flashcards = [
    { question: '', answer: 'yes, in one of the houses, a wall hanging started moving and banging against the wall. all the windows were closed. in the same room, I have had trouble falling asleep cuz it felt like someone was pressing my chest down. changed the room and slept fine.' },
    { question: '', answer: 'No all of my experiences are normal' }, 
    { question: '', answer: 'Yes, when I was 4 in the hospital with my mom I kept claiming I could see “shadow people” that nobody else in my family could see. (To clarify there were no people at all besides my mom and I in the room so it was not our shadows shadows of other people)' }, 
    { question: '', answer: 'Yes, I beleive I was abducted by Aliens when I was 8' }, 
    { question: '', answer: 'My house growing up was filled with a family of ghosts. My sisters and I would see the same ghosts and have weird experience like hearing heavy things moving through the walls, rain falling from the ceiling inside, and all our guests having the same nightmare about me with my eyes blacked out. It was freaky' },
    { question: '', answer: 'Yes, only when I was little though. I once heard scratching at my door that would stop everytime I turned on the light and when I ran out of my room to my parents there was nothing there. Another time I fell asleep on the living room couch and woke up in the middle of the night really scared for some reason. I then heard a chair move across the room and I got up and ran to my brothers.' },
    { question: '', answer: 'I did not personally witness the whole thing but after my grandmother passed my uncle inherited a ship in a bottle that belong to like my great great grandfather but it broke while transporting it. The bottle had shattered and multiple people witness it but instead of throwing it out he put in storage and about a year later he went back to it and found it in perfect condition like it had never been broken.' },
    { question: '', answer: 'I think I always was under the impression that I did, but in retrospect, it may have been my older brother. There was this very old crucifix in our attic growing up that was nailed over the window. My mother used to take it down, and in the morning it would be back over the window. It freaked her out pretty bad.' },
    { question: '', answer: 'When I was 9, I went to Rehoboth Beach in Delaware with my brothers, mother, grandmother and some aunts. I was sleeping on the bottom bunk of a couch bunk bed. I clearly felt a hand grab my ankle (but from underneath, like it was coming out of the solid cushion), and it freaked me out enough to sleep with my mother and grandmother. Also, that same trip, I found a dead fish in my bathing suit' },
    { question: '', answer: 'One time when I was about 10 my family was really struggling financially and my mom opened her dresser and found an envelope with 3,000 dollars in it from her grandfather in the back. He had been dead since before I was born and she had used the dresser countless times.' },
    { question: '', answer: 'One time I found a Tarot card in a parking lot, Ace of Pentacles. Considering that I had a reading done where I was represented by the Knight of Pentacles and I am an earth sign, that was pretty spooky.' }, 
    { question: '', answer: 'When my Stepdad passed away his porch light blew out, and a few months later my mom set up string lights with photos of them in her room and they would randomly turn on and flash (with no timer setting)' }, 
    { question: '', answer: 'I saw a man named Fish McGill once. Very spooky.' }, 
    { question: '', answer: 'When I was a kid (in elememtary school sometime) I woke up, turned over and saw a grown man standing at my bed and staring at me. I turned back over and froze, idk how long I stayed like that but I did not hear anything and when I rolled back over nobody was there.' },       
    { question: '', answer: 'Yes, I saw someone in a robe that belonged to my mom in my bedroom when I was younger. It was not my mom.' }, 
    { question: '', answer: 'No, but I feel like experiences with humans can be just as haunting.' }, 
    { question: '', answer: 'Yes, a ghost followed me down my hallway knocking down pictures.' }, 
    { question: '', answer: 'Yes, When I was 6 I looked out the window and saw an enormous flat (like vanta black) black circle slowly roll through the woods. It had the acceleration patterns that matched up with the actual terrain, and it was afternoon so I wasn’t seeing things in the dark. My mom told me I must’ve seen a bear, but I don’t think bears look like perfect vantablack circles….' }, 
    { question: '', answer: 'Yes, I used to see faces in a quilt on my wall as a child' }, 
    { question: '', answer: 'Nope but I was mildly schizophrenic in middles chool and my mom told me it was ghosts' }, 
    { question: '', answer: 'Yeah. I was around I think maybe seven and my mom had gotten a statue from Goodwill that had Sarahs angel written on the bottom of it. She left it in my room and when I went to bed I slept walked for the only time in my life and ended up in my moms room with the statue beside me. ' }, 
    { question: '', answer: 'Yes a few but I don’t believe in ghosts. When I was a small child my dad would circuit the house while holding me to help me sleep. When my dad bought the house the neighbor told him that there was a death in the house and she found the body. She told my dad that their son had shot himself and she found his body in the closet. Every time my dad would pass the closet while holding me I would tell him not to pass it because there was a man with a bloody face there. ' }, 
    { question: '', answer: 'Yes, my friend got cursed by a very angry coyote spirit.' },
    { question: '', answer: 'Yes. I have walked into alternate dimensions a number of times. I miss them now.' },  
    { question: '', answer: 'Yes, got a call from my grandfathers old phone after he died. When answered nothing was said and then the sun came out of the clouds.' }, 
    { question: '', answer: 'When my pitbull Ava passed away she was cremated, I ran crying to the bathroom. When I opened my eyes she was in front of me she jumped up and hugged me. I felt her fur, warmth and even her weight. I held onto her so tight still crying, when I opened my eyes again she was gone. I guess that was her way of saying thank you.' }, 
    { question: '', answer: 'i think i saw my cats ghost once' }, 
    { question: '', answer: 'When I was younger I  heard a woman’s voice whisper “hello?” In my ear. I never told anyone this, and a year later, my crazy uncle tells me “oh, did you know you have a woman living in your closet?”' }, 
    { question: '', answer: 'Saw a ghost when I was a kid :D it was after our house caught on fire and he had a tool box, my mom said he probably wanted to help us fix the house' }, 
    { question: '', answer: 'My closet door opened by itself while I was trying to go back to sleep. It was awesome and terrifying at the same time.' }, 
    { question: '', answer: 'Sometimes I like to pretend I have' }, 
    { question: '', answer: 'Yes, I was in a cult' }, 
    { question: '', answer: 'No all of my experiences are normal' }, 

];

let currentIndex = 0;
let isFlipped = false; // Keeps track of whether the card is flipped

const card = document.getElementById('flashcard');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');

// Show the current card's question and answer
function showCard(index) {
    const front = card.querySelector('.card-front');
    const back = card.querySelector('.card-back');

    // Set the question and answer text
    front.innerHTML = `<p>${flashcards[index].question}</p>`;
    back.innerHTML = `<p>${flashcards[index].answer}</p>`;
}

// Flip the card when clicked
function flipCard() {
    if (isFlipped) {
        card.style.transform = 'rotateY(0deg)';
    } else {
        card.style.transform = 'rotateY(180deg)';
    }
    isFlipped = !isFlipped;
}

// Reset the card to the front
function resetCard() {
    card.style.transform = 'rotateY(0deg)';
    isFlipped = false;
}

// Move to the next card (looping back to the first card when the last one is reached)
function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length; // Loop back to the first card after the last one
    showCard(currentIndex);
    resetCard(); // Reset to front view when changing card
}

// Shuffle the cards randomly
function shuffleCards() {
    for (let i = flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]]; // Swap elements
    }
    currentIndex = 0; // Reset to the first card after shuffle
    showCard(currentIndex);
    resetCard(); // Reset to front view after shuffle
}

// Event listener to flip card on click
card.addEventListener('click', flipCard);

// Event listeners for Next and Shuffle buttons
nextBtn.addEventListener('click', nextCard);
shuffleBtn.addEventListener('click', shuffleCards);

// Initialize the first card
showCard(currentIndex);
