// hobbyLog is an array of objects.
// Each object represents one day and a hobby activity.
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// totalTime calculates the total number of minutes
function totalTime(log) {
  // It loops through the array and accumulates a single value.
  // sum starts at 0, and session represents each object in the array.
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// uniqueHobbies returns a list of distinct hobby names
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby);
  return [...new Set(names)];
}

// longSessions filters sessions longer than a given number of minutes
function longSessions(log, minMinutes) {
  // It returns a new array containing only entries
  // where the condition is true
  return log.filter(entry => entry.minutes > minMinutes);
}

// countMood counts how many sessions match a specific mood
function countMood(log, moodType) {
  // filter() returns all entries with the matching mood,
  // and length gives the total count.
  return log.filter(entry => entry.mood === moodType).length;
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));
