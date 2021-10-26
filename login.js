function Login(){
    const [show, setShow]      = React.useState(true);
    const [status, setStatus]  = React.useState(' ');

    return(
        <Card 
            bgcolor="secondary"
            header="Login"
            status={status}
            body={show ? 
            <CreateForm setShow={setShow}/>:
            <CreateMsg setShow={setShow}/>}
        
        />
    )
}

function CreateMsg(props){
    return(<>
    <h5>Successfully Logged In</h5>
    <button type="submit"
    className="btn btn-light"
    onClick={() =>props.setShow(true)}>Log Out</button>
    </>);
}

function CreateForm(props){
    const [email, setEmail]        = React.useState('');
    const [password, setPassword]  = React.useState('');
    const ctx                      = React.useContext(UserContext);

    function handle(){
        console.log(email,password);
        ctx.users.push({email,password});
        props.setShow(false);
    }
    return (<>

    Email address<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter email"
    value={email}
    onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password"
    className="form-control"
    placeholder="Enter Password"
    value={password}
    onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit"
    className="btn btn-light"
    onClick={handle}>login</button>
    </>);
}
    
