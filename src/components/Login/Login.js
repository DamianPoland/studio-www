import React, { useState, useEffect } from 'react'
import style from './Login.module.css'

//components
import LoginRegisterFirebaseUI from './LoginRegisterFirebaseUI/LoginRegisterFirebaseUI'

//firebase
import { auth, firestore } from '../../shared/fire'

// constans
import { IS_AUTH, USER_ID } from '../../shared/constans'


// array with empty project
const emptyData = [['Nazwa projektu', 'Nie masz żadnych projektów'], ['Nazwa zamawiającego', '-'], ['Data rozpoczęcia', '-'], ['Przewidywany czas zakończenia', '-'], ['Data zakończenia', '-'], ['Cena', '-'], ['Adres URL roboczy', '-'], ['Domena docelowa', '-'], ['Hosting', '-'], ['Krótki opis', '-'], ['Stopień zaawansowania prac', '-'], ['Uwagi', '-'],]


const Login = props => {

    // save emptyData or add data from DB
    const [dataFromDB, setDataFromDB] = useState(emptyData)

    useEffect(() => {

        // scroll to top when component render
        window.scrollTo(0, 0)

        //get data about project if user is logged
        if (localStorage.getItem(IS_AUTH)) {
            firestore.collection('projects').doc(localStorage.getItem(USER_ID)).get() //get data with user id from 'projects'
                .then(resp => {
                    const arrayFromDatabase = Object.keys(resp.data()).map(key => [key, resp.data()[key]]) // convert object with all data to array of arrays
                    setDataFromDB(arrayFromDatabase) //set data in useState
                })
                .catch(err => console.log('Nie masz żadnych projektów')) // this user don't have projects
        }
    }, [])

    // log out button
    const handlerLogOut = () => {
        auth.signOut() // sign out
        props.history.replace('/home') // go to /home
    }

    return (
        JSON.parse(localStorage.getItem(IS_AUTH))

            // user log in
            ? <div className={style.background}>
                <div className={style.projectContainer}>
                    <h1 className={style.projectHeader}>Poniżej znajdziesz wszelkie informację dotyczące Twojego projeku</h1>
                    <div className={style.projectCoontent}>

                        {/* show data from db */}
                        {
                            dataFromDB.map((item, id) => {
                                return (
                                    <div key={id} className={style.projectCoontentItem}>
                                        <p className={style.projectDesc}>{`${item[0]}: `}  </p>
                                        <p className={style.projectText}>{item[1]}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className={style.btn} onClick={handlerLogOut}>Wyloguj</button>
                </div>
            </div>

            // user log out
            : <LoginRegisterFirebaseUI />
    )
}

export default Login
