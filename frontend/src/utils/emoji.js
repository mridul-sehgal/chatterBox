const activityEmojis = [
    "⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🥏", "🎱", "🏓",  // Sports
    "🏸", "🥊", "🥋", "⛷️", "🏂", "🏌️‍♂️", "🏇", "🏄‍♀️", "🚣‍♂️", "🏊‍♀️",  // Water sports & outdoor activities
    "🚴‍♂️", "🚵‍♀️", "🤸‍♂️", "🤾‍♀️", "🤽‍♂️", "🤼‍♀️", "🧘‍♂️", "🏋️‍♀️", "⛹️‍♂️", "🤺",  // Fitness & outdoor activities
    "🎤", "🎧", "🎷", "🎸", "🎹", "🥁", "🎻", "🎬", "🎨", "🎭",  // Arts & entertainment
    "🎮", "🎲", "🧩", "♟️", "🎯", "🧗‍♀️", "🧑‍🍳", "👨‍💻", "👩‍🏫", "👨‍🚀"  // Games, hobbies, and professional activities
  ];
  
export const getRandomEmoji=()=>{
    return activityEmojis[Math.floor(Math.random()* activityEmojis.length)];
}
  