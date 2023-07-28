import { useState } from "react";
const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({
      ...game,
      player: { ...game.player, name: "Bob" },
    });
  };

  return (
    <div>
      {game.player.name}
      <button onClick={handleClick}>Change name</button>
    </div>
  );
};

export default App;
