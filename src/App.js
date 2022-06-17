import React, { useState } from 'react';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
// input categories here
const [categories] = useState([
    {
        name: 'Coding',
        description: 'Curated portfolio of my coding work.'
    },
    {
        name: 'Art',
        description: 'Gallery of completed art, with relevant mirrors'
    },
    {
        name: 'Games',
        description: `Games I've made.`
    }
])

// set up useStates here
const [currentCategory, setCurrentCategory] = useState(categories[0]);

const [contactSelected, setContactSelected] = useState(false);

// create the return JSX here
return (
    <div>
        <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Nav>

        <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        </main>
    </div>

)

}

export default App;