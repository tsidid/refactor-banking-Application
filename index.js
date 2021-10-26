function Spa(){
    return (<HashRouter>
        <div>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'Kokui',email:'kokui@stanford.edu',password:'secret',balance:40000000}]}}>
            <div className="container" style={{padding: "20px"}}>
                <Route path="/" exact component={Home} />
                <Route path="/CreateAccount/" component={CreateAccount} />
                <Route path="/alldata/" component={AllData} />
                <Route path="/deposit/" component={Deposit} />
                <Route path="/withdraw/" component={Withdraw} />
                <Route path="/balance/" component={Balance} />
                <Route path="/login/" component={Login} />
                <Route path="/support/" component={Support} />
            </div>
            </UserContext.Provider>
        </div>
    </HashRouter>
        )
}

ReactDOM.render(<Spa/>,
    document.getElementById('root')
    );