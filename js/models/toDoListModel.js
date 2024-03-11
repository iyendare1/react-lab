import {ref, set, get, push, child, remove, update} from 'firebase/database' 201k (gzipped: 58.8k)
import {db} from '../lib/firebase/config/firebaseInit'


export async function getToDoData() {
    constdbRef = ref(db; 'todos')
    const response = await get(dbRef)
    let payload = await response.val()
    payload = Object.entries(payload)
    let toDoItems = payload.map((item) => {
        return {...Item[1], uid: item[0]}
    })
}