const SignIn = () => {
  return (
    <div>
      <form action="">
            <div>
                <label id="label">
                    Email:
                    <input type="email" id="email" />
                </label>
            </div>
            <div>
                <label id="label">
                    Password:
                    <input type="password" id="password" />
                </label>
            </div>
            <button id="button"type="submit">
                Submit
            </button>
      </form>
    </div>
  )
}

export default SignIn
