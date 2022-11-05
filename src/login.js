import {UseRef,UseState,UseEffect} from 'react';
const login =()=>{
    const userRef = UseRef();
    const errRef = UseRef();
    const [user,setUser] = UseState('');
    const [pwd,setPwd] = UseState('');
    const [errMsg,setErrMsg] = UseState('');
    const [success,setSuccess] = UseState(false);
    UseEffect(()=>{
        userRef.current.focus();
    },[])
    UseEffect(()=>{
        setErrMsg('');
    },[user,pwd])
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(user,pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }
    return (
        <>
        {success?(
            <section>
                <h1>You are logged in!</h1>
                <br/>
                <p>
                    <a href='#'>Go to Home</a>
                </p>
            </section>
        ):(
        <section>
            <p ref={errRef} className={errMsg ? 'errMsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' ref={userRef} autoComplete='off' onChange={(e)=>setUser(e.target.value)} value={user} required/>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' onChange={(e)=>setPwd(e.target.value)} value={pwd} required/>
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br/>
                <span className='line'>
                    {/*put router link*/}
                    <a href='/dashboard'>Sign Up</a>
                </span>
            </p>
        </section>
        )
    }
        </>
    )
}
export default login