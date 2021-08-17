import "./Greeting.css";

export default function Greeting({ user, isUserLoggedIn }) {
  const greetings = [
    "what's cookin'?",
    "what's happening?",
    "what's the plan?",
    "let's get preppin'?",
    "what's on your remind?",
    "got a new idea?",
    "what's lined up?",
  ];

  const number = Math.floor(Math.random() * greetings.length);
  return (
    <h1 className="Greeting">
      Hello <br />
      <span className="txt--highlight">
        {isUserLoggedIn ? user : "Stranger"},
      </span>
      <br />
      {greetings[number]}
    </h1>
  );
}
