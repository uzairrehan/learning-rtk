# Redux


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

tuo is ke baad 2 hi method parhne hen useSelector and useDispatch

useSelector =  matlab jab koi value select/mangawani karni he store se  
useDispatch(dispatch means bhejna) =  matlab jab koi value bhejni/update karni he store men .. dispatch reducer ko use karte huwe store  mne changes karta he





onClick(fun(val)) ese use kyun nhi karsakte ?

answer = onClick men sirf reference dana allow he
kyun ke is men hum call kardenge jo immediately call ho jaye ga .. jab ke humen to click par karna he. to isi waja se hum callback function dalen ge uss men is ko call kardenge . to phir woh onclick pr callhojaye ga. just like this onClick(()=> fun(val)). kyun ke humen parameters pass karna he 		



never mutate your state


reducer module ko define karta he