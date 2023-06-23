import React from 'react'

export default function Customer() {
  return (
    <div>
       <div>
      <div className={styles['mainblock']}>
        <h1>Registration</h1>
        <form action="/" onSubmit={handleSubmit}>
          <hr />

          <br />
          <label id="icon" htmlFor="name">
            <i className="fas fa-envelope"></i>
          </label>
          <input type="text" value={email} onChange={onChangeEmail} onInput={onChangeEmail} name="email" id="email" placeholder="Email" required />
          <span>{getCheckIcon(emailCheck)}</span> 
          <br />
          <label id="icon" htmlFor="name">
            <i className="fas fa-user"></i>
          </label>
          <input type="text" value={names} onChange={onChangeName} onInput={onChangeName} name="name" id="name" placeholder="Name" required />
          <span>{getCheckIcon(namesCheck)}</span>
          <br />
          <label id="icon" htmlFor="name">
            <i className="fas fa-unlock-alt"></i>
          </label>
          <input type="password" value={password} onChange={onChangePassword}  onInput={onChangePassword} name="password" id="password" placeholder="Password" required />
          <span>{getCheckIcon(passwordCheck)}</span>
          <div className={styles['btn-block']}>

          <button type="submit" disabled={!isFormValid()}>Submit</button>
        </div>
        </form>
        <div className={styles["alertsB"]}>

      <Alert message={message} showAlert={showAlert} />
        </div>
      </div>

      

    </div>
    </div>
  )
}
