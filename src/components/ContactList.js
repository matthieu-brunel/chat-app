import React from 'react';
import Contact from './Contact';
import './chat.css';


const Person1 = {
    Name: "Cortex_saeko",
    Avatar: "https://avatar-cdn.tracker.gg/api/avatar/2/Cortex_Saeko.png",
    Online: true,
}

const Person2 = {
    Name: "Ext-_-taZz_",
    Avatar: "https://avatar-cdn.tracker.gg/api/avatar/2/ExT-_-TaZz_.png",
    Online: false,
}

const Person3 = {
    Name: "SmithOrange",
    Avatar: "https://avatar-cdn.tracker.gg/api/avatar/2/SmithOrange.png",
    Online: true,
}


const Person4 = {
    Name: "Valetxav",
    Avatar: "https://avatar-cdn.tracker.gg/api/avatar/2/valetxav.png",
    Online: true,
}

const Person5 = {
    Name: "maraiscarriere4",
    Avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlt_gK3oOdSh2UE5iTd5FslHUGqwrgsvhBYRD0v6t5Vr1ydLx-",
    Online: false,
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