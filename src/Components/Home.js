import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [activePopupIndex, setActivePopupIndex] = useState(null);
  const [popupMessageIndex, setPopupMessageIndex] = useState(0);

  const togglePopup = (index) => {
    setActivePopupIndex(index === activePopupIndex ? null : index);
    setPopupMessageIndex(0);
  };

  const deletePopup = () => {
    setActivePopupIndex(null);
  };

  const cardData = [
    { id: 1, text: 'Animal',subname:"Unlimited Jokes On Animal", popupMessages: [' Chuck Norris once kicked a horse in the chin. Its decendants are known today as Giraffes. ', 'Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.'] },
    { id: 2, text: 'Career',subname:"Unlimited Jokes On Career", popupMessages: ['In the beginning there was nothing...then Chuck Norris Roundhouse kicked that nothing in the face and said "Get a job', 'Chuck Norris first job was as a paperboy.There were no survivors. '] },
    { id: 3, text: 'Celebrity',subname:"Unlimited Jokes On Celebrity", popupMessages: ['When Steven Seagal kills a ninja, he only takes its hide. When Chuck Norris kills a ninja, he uses every part', 'As President Roosevelt said: "We have nothing to fear but fear itself. And Chuck Norris."', 'Each time you rate this, Chuck Norris hits Obama with Charlie Sheen and says, "Whos winning now?!"'] },
    { id: 4, text: 'Dev',subname:"Unlimited Jokes On Dev", popupMessages: ['" Chuck Norris insists on strongly-typed programming languages. "', '" There is no Esc key on Chuck Norris keyboard, because no one escapes Chuck Norris. "'] },
    { id: 5, text: 'Explicit',subname:"Unlimited Jokes On Explicit", popupMessages: ['" When Chuck Norris receives oral sex, the woman always orgasms first. "', '" Not even a fictional Chuck Norris elf would ever sing "Dawn we now our gay apparel, Fa-la-la-la-la-la-la-la-la". "', '" Chuck Norris penis can get as hard as granite! "'] },
    { id: 6, text: 'Fashion',subname:"Unlimited Jokes On Fashion", popupMessages: ['" Chuck Norris does not follow fashion trends, they follow him. But then he turns around and kicks their ass. Nobody follows Chuck Norris. "'] },
    { id: 7, text: 'Food',subname:"Unlimited Jokes On Food", popupMessages: ['" Chuck Norris doesnt believe in ravioli. He stuffs a live turtle with beef and smothers it in pig"s blood. "', '" Chuck Norris drinks food. "', '" A man once taunted Chuck Norris with a bag of Lays potato chips, saying "Betcha cant eat just one!" Chuck Norris proceeded to eat the chips, the bag, and the man in one deft move. "'] },
    { id: 8, text: 'History',subname:"Unlimited Jokes On History", popupMessages: ['" Chuck Norris once shot down a German fighter plane with his finger. By yelling "Bang!" "', '" After returning from World War 2 unscrathed, Bob Dole was congratulated by Chuck Norris with a handshake. The rest is history. "', '" The Great Wall of China was originally created to keep Chuck Norris out. It failed miserably. "'] },
    { id: 9, text: 'Money',subname:"Unlimited Jokes On Money", popupMessages: ['" If you have 5 dollars and Chuck Norris has 5 dollars, he has more money than you do. "', '" If you have five dollars and Chuck Norris is broke, Chuck Norris has more money than you. "', '" Chuck Norris donates all of his money to the M.Y. Wallet foundation, and you better too, or else. "'] },
    { id: 10, text: 'Movie',subname:"Unlimited Jokes On Movie", popupMessages: ['" In the directors cut of "The End of Days," Arnold Schwarzenegger is fighting a losing battle with the Devil until he prays to a stained glass window of Chuck Norris putting on a pair of jeans. They had to use CGI to superimpose a crucified Jesus for the theatrical release. "', '" Arnold Schwarzenegger would never ask Chuck Norris to "DO IT NOW" because he knows Chuck will "', '" Chuck Norris has five children whose names are: - Van Damme - Arnold Schwarzenegger - Clint Eastwood - Steven Seagal - Joe Pesci "'] },
    { id: 11, text: 'Music',subname:"Unlimited Jokes On Music", popupMessages: ['" Chuck Norris shot the sheriff, but he round house kicked the deputy. "', '" Most boots are made for walkin. Chuck Norris boots aint that merciful. "'] },
    { id: 12, text: 'Political',subname:"Unlimited Jokes On Political", popupMessages: ['" The reason why Barack Obama hasnt came out and said he is a muslim is because Chuck Norris is still alive "', '" Chuck Norris knows where Barack Obama was born. "', '" The reason why Barack Obama hasnt came out and said he is a muslim is because Chuck Norris is still alive "'] },
    { id: 13, text: 'Religion',subname:"Unlimited Jokes On Religion", popupMessages: ['" According to the Bible, God created the universe in six days. Before that, Chuck Norris created God by snapping his fingers. "', '" Hitler killed him self because he found out Chuck Norris is jewish. "', '" Its widely believed that Jesus was Chuck Norris stunt double for crucifixion due to the fact that it is impossible for nails to pierce Chuck Norris skin. "'] },
    { id: 14, text: 'Science',subname:"Unlimited Jokes On Science", popupMessages: ['" Chuck Norris eats lightning and shits out thunder. "', '" Newtons Third Law is wrong: Although it states that for each action, there is an equal and opposite reaction, there is no force equal in reaction to a Chuck Norris roundhouse kick. "', '" When Chuck Norris falls in water, Chuck Norris doesnt get wet. Water gets Chuck Norris. "'] },
    { id: 15, text: 'Sport',subname:"Unlimited Jokes On Sport", popupMessages: ['" The US did not boycott the 1980 Summer Olympics in Moscow due to political reasons: Chuck Norris killed the entire US team with a single round-house kick during TaeKwonDo practice. "', '" When Chuck Norris does a pushup, he isnt lifting himself up, hes pushing the Earth down. "', '" Chuck Norris has the greatest Poker-Face of all time. He won the 1983 World Series of Poker, despite holding only a Joker, a Get out of Jail Free Monopoloy card, a 2 of clubs, 7 of spades and a green #4 card from the game UNO. "'] },
    { id: 16, text: 'Travel',subname:"Unlimited Jokes On Travel", popupMessages: ['" Chuck Norris did in fact, build Rome in a day. "', '" As an infant, Chuck Norris parents gave him a toy hammer. He gave the world Stonehenge. "', ] },
    
  
  ];

  const showNextMessage = () => {
    setPopupMessageIndex((prevIndex) => (prevIndex + 1) % cardData[activePopupIndex].popupMessages.length);
  };

  return (
  <>
  <div id='head'>
    <h2>Chuck Norris</h2>
  </div>
    <div className="App">
      <div className="card-grid">
        {cardData.map((card, index) => (
          <div className="card" key={card.id} onClick={() => togglePopup(index)}>
            <h3>{card.text}</h3> <br></br>
            <p style={{marginTop:"-25px",fontSize:"15px"}}>{card.subname}</p>
          </div>
        ))}
      </div>
      {activePopupIndex !== null && (
        <div className="popup">
           <h2>{cardData[activePopupIndex].text}</h2>
          <button id='del' style={{marginLeft:"720px"}} onClick={deletePopup}>X</button>
         <div style={{border:"2px solid black",marginTop:"-15px"}}>
         <h4>{cardData[activePopupIndex].popupMessages[popupMessageIndex]}</h4>
          <button id='next' onClick={showNextMessage}>Next</button>
         </div>
        </div>
      )}
    </div>

  </>
    );
}

export default Home;
