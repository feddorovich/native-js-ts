import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
      alert(e.currentTarget.name)
    }
    const onNameChanged = () => {
        console.log('Name changed')
    }
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('Age changed: ' + e.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log('Focus lost')
    }

  return (
      <div>
          <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Some Name</textarea>
          <br/>
          <input onChange={onAgeChanged} type={'number'}/>

          <button name={'delete'} onClick={deleteUser}>Delete</button>
      </div>
  )
}