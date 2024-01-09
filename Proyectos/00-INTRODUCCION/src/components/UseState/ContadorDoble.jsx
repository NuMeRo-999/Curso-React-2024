import { useState } from "react"

export const ContadorDoble = () => {

  const initialState = {
    isaias: 0,
    ana: 0,
  };
  const [friends, setFriends] = useState(initialState);
  
  function handlerIncrementIsaias() {
    setFriends({...friends, isaias:friends.isaias + 1})
  }
  // function handlerIncrementIsaias(prevFriend) {
  //   setFriends({...prevFriends, isaias:prevFriends.isaias + 1})
  // }

  function handlerIncrementAna() {
    setFriends({...friends, ana:friends.ana + 1})
  }

  return (
    <>
      <div>
        <span>Isaias tiene: <strong>{friends.isaias}</strong></span>
        <button onClick={handlerIncrementIsaias}>Aumentar 1 amigo</button>
      </div>
      <div>
        <span>Ana tiene: <strong>{friends.ana}</strong></span>
        <button onClick={handlerIncrementAna}>Aumentar 1 amigo</button>
      </div>
    </>
  )
}
