import React from 'react';
import Header from "./Header";
import Footer from "./footer";
import Section from "./Section";
import Navbar from "./Navbar";
function App(props) {
    const { notes } = props;
return (
        <div className="App">
            <Navbar/>
            <Header />
            <Section notes={notes}/>
            <Footer />
        </div>
    )
}
export default App;