let activities = [
  "Go for a run",
  "Read a book",
  "Watch a documentary",
  "Cook a new recipe",
  "Try a new hobby",
  "Visit a museum",
  "Learn a new skill",
];
function add() {
  const newActivity = document.getElementById("newActivity").value.trim();
  if (newActivity != "") activities.push(newActivity);
  document.getElementById("newActivity").value = "";
}
function suggest() {
  const randomIndex = Math.floor(Math.random() * activities.length);
  document.getElementById("activity").innerHTML = activities[randomIndex];
}
