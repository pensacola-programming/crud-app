
const SignUp = () => {
  return (
    <> 
    <h1>Sign Up!</h1>
        <form action="" method="post">
            <div>
                <label id="label">
                    First Name: 
                    <input type="text" id="firstName"/>
                </label>
            </div>
            <div> 
                <label id="label">
                    Last Name:
                    <input type="text" id="lastName" />
                </label>  
            </div>
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
      
    </>
  )
}

export default SignUp
