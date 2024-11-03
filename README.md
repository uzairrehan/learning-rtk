<!-- # Redux


1. class based react and classic redux is bonus topics nhi parha to bhi chalega



modern redux(redux toolkit) is eventual upgradation of redux



here is the website (https://redux-toolkit.js.org/)



redux is an independent statemanagement library 



around 80.5% of developers use "Redux"



redux ko hum react ke ilawa bhi dusron men use karsakte hen



agar aaap ko react ke sath redux ko use karna he to aap ko "redux" & "react-redux" dono library use karna paregi .. to is se pata chala ke 2 libraraiea install karna padegi



"react-redux" aik "redux" ka implementation hai wiring karne ke liyen



redux toolkit use karne se boht sare kaam asan ho jate hen




to aik library banai facebook ne "Flux" aur is men dataflow itna acha nhi tha tooo iss se inspire ho kar aik libraryy banni redux



redux men bhi kuch masla ho raha tha redux-thunk middlewares



to redux ko setup karna men boht wait karna pata tha




concepts : 

aap ka koi bhi component directly koi bhi aisa function istemal nhi karsakta jo ke store ko update kare 

store = matlab single source of truth 

reducer = matlab aap ko store men kuch bhi change karna he .. konse store men change karna he jese ke auth ka cart ka etc.. matlab ke aik store men bhi mini stores/portions ho sakte hen.  tuo is sab ki functionality wala part reducer ke andar jata he .. reducers woh hote hen jo redux ki state ko update karte hen
tuo reducer basically aik function hota he jis ke andar koi bhi action ataa he to phir reducer pehle us function ko samjhta he ke woh kya karne wala he phir woh apne andar hi store/state ko update kardeta he  

tuo is ke baad 2 hi method parhne hen useSelector and useDispatch

useSelector =  matlab jab koi value select/mangawani karni he store se  
useDispatch(dispatch means bhejna) =  matlab jab koi value bhejni/update karni he store men .. dispatch reducer ko use karte huwe store  mne changes karta he





onClick(fun(val)) ese use kyun nhi karsakte ?

answer = onClick men sirf reference dana allow he
kyun ke is men hum call kardenge jo immediately call ho jaye ga .. jab ke humen to click par karna he. to isi waja se hum callback function dalen ge uss men is ko call kardenge . to phir woh onclick pr callhojaye ga. just like this onClick(()=> fun(val)). kyun ke humen parameters pass karna he 		



never mutate your state


reducer module ko define karta he

 -->



# Redux

1. **Class-based React and Classic Redux**: Ye bonus topics hain; agar ye nahi parha to bhi chalega.

**Modern Redux (Redux Toolkit)** aik eventual upgradation hai Redux ka.

[Redux Toolkit ki Website](https://redux-toolkit.js.org/)

Redux aik independent state management library hai.

80.5% developers "Redux" ka istemal karte hain.

Redux ko hum React ke ilawa bhi dusre frameworks/libraries mein use kar sakte hain.

Agar aap ko React ke sath Redux ko use karna hai, to aap ko "redux" aur "react-redux" dono libraries install karni padengi. Is se pata chala ke 2 libraries install karna zaroori hai.

"React-Redux" aik "Redux" ka implementation hai jo wiring karne ke liye use hota hai.

Redux Toolkit ke istemal se bohot sare kaam asan ho jate hain.

Ek library Facebook ne banai thi, "Flux", lekin is mein data flow itna acha nahi tha. Is se inspire hokar aik aur library bani: Redux.

Redux mein bhi kuch maslay aa rahe the, jese ke "redux-thunk" middleware ki zaroorat.

Redux ko setup karte waqt bohot wait karna padta tha.

### Concepts

Koi bhi component directly aisa function use nahi kar sakta jo store ko update kare.

- **Store**: Matlab, single source of truth.
- **Reducer**: Agar aap ko store mein kuch bhi change karna ho — kis store mein change karna hai, jaise ke auth ka, cart ka, etc. — tou aik store mein bhi mini stores/portions ho sakte hain. In sab ki functionality wala part reducer ke andar jata hai. Reducers woh functions hain jo Redux ki state ko update karte hain. Reducer basically aik function hota hai, jo kisi bhi action ko samajhta hai aur uske hisaab se apne andar hi store/state ko update kar deta hai.

Tou iske baad 2 methods parhne hain: `useSelector` aur `useDispatch`.

- **useSelector**: Jab koi value select/mangwani ho store se.
- **useDispatch**: Jab koi value bhejni/update karni ho store mein. Dispatch reducer ko use karte huwe store mein changes karta hai.

### Why can’t we use `onClick(fun(val))` like this?

Answer: onClick mein sirf reference dena allow hai, kyunki agar hum call karenge tou woh immediately call ho jayega. Humein click par function call karna hai. Isi wajah se hum callback function dalenge aur usmein isko call karenge, just like this: `onClick={() => fun(val)}`. Kyunki humein parameters pass karne hain.

### Never Mutate Your State

Reducer module ko define karta hai.
