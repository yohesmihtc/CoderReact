import { getFirestore, collection, getDocs} from 'firebase/firestore'
import { app } from './config'

const db = getFirestore(app)



    const querySnapshot = await getDocs(collection(db, "products"))

    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`)
})


