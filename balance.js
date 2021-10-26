function Balance(){
    const [show, setShow]      = React.useState(true);
    const [status, setStatus]  = React.useState(' ');

    return(
        <Card 
        bgcolor="info"
        header="Balance"
        status={status}
        body={show ?
            <CreateForm setShow={setShow}/>:
                <CreateMsg setShow={setShow}/>}
    /> 
    )
}

function CreateMsg(props){
    return(<>
    <h5>Your balance has been sent to your email</h5>
    <button type="submit"
    className="btn btn-light"
    onClick={() =>props.setShow(true)}>Back</button>
    </>);
}

function CreateForm(props){
    const [email, setEmail]        = React.useState('');
    const ctx                      = React.useContext(UserContext);

    function handle(){
        console.log(email);
        ctx.users.push({email});
        props.setShow(false);
    }
    return (<>

    Email address<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter email"
    value={email}
    onChange={e => setEmail(e.currentTarget.value)}/><br/>

    
    <button type="submit"
    className="btn btn-light"
    onClick={handle}>Show Balance</button>
    </>);
}
    