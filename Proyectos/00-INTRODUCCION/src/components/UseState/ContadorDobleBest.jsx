import { useState } from "react"

export const ContadorDoble = () => {

  const initialState = {
    isaias: 0,
    ana: 0,
  };
  const [friends, setFriends] = useState(initialState);
  
  function handlerIncrementFriend(friendName) {
    setFriends({...friends, [friendName]: friends.friendName + 1})
  }

  return (
    <>
      <div>
        <span>Isaias tiene: <strong>{friends.isaias}</strong></span>
        <button onClick={() => handlerIncrementFriend('isaias')}>Aumentar 1 amigo</button>
      </div>
      <div>
        <span>Ana tiene: <strong>{friends.ana}</strong></span>
        <button onClick={() => handlerIncrementFriend('ana')}>Aumentar 1 amigo</button>
      </div>
    </>
  )
}
