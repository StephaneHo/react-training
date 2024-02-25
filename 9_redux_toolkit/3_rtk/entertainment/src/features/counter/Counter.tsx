import { useState } from "react"

import { useAppDispatch } from "../../app/hooks"

export const Counter = () => {
  const dispatch = useAppDispatch()

  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label="Decrement value"></button>
        <span aria-label="Count" className={styles.value}></span>
        <button className={styles.button} aria-label="Increment value">
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={e => {
            setIncrementAmount(e.target.value)
          }}
        />
        <button className={styles.button}>Add Amount</button>
      </div>
    </div>
  )
}
