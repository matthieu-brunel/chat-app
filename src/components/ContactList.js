import React from 'react';
import Contact from './Contact';
import './chat.css';


const Person1 = {
    name: "Cortex_saeko",
    avatar: "https://avatar-cdn.tracker.gg/api/avatar/2/Cortex_Saeko.png",
    online: true,
}

const Person2 = {
    name: "Ext-_-taZz_",
    avatar: "https://avatar-cdn.tracker.gg/api/avatar/2/ExT-_-TaZz_.png",
    online: false,
}

const Person3 = {
    name: "SmithOrange",
    avatar: "https://avatar-cdn.tracker.gg/api/avatar/2/SmithOrange.png",
    online: true,
}


const Person4 = {
    name: "Valetxav",
    avatar: "https://avatar-cdn.tracker.gg/api/avatar/2/valetxav.png",
    online: false,
}

const Person5 = {
    name: "maraiscarriere4",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlt_gK3oOdSh2UE5iTd5FslHUGqwrgsvhBYRD0v6t5Vr1ydLx-",
    online: true,
}



const joueurs = [Person1, Person2, Person3, Person4, Person5];

const ContactList = () => {
    return (
        <ul>
            {
                joueurs.map(contact => <li><Contact {...contact} /></li>
                )}
        </ul>
    );

}

export default ContactList;