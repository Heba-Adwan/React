

import { useState } from "react";

function Colors() {
  const colors = ['red', 'green', 'yellow', 'blue']
  const [color, setColor] = useState(0)

  const handleColors = (col) =>{ 
  setColor(col)
  }

  return <>
    <div className={`color ${color}`}>
      {
      colors.map((e) =>
        <button key={e} onClick={() =>
          handleColors(e)}>
          {e}
        </button>
      )}
    </div>
   
  </>
}

export default Colors;